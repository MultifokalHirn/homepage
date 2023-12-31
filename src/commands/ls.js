const sprintf = require("sprintf-js").sprintf;
const parseCommandArgs = require("../utils/parseCommandArgs");

const LS_COMMAND_FLAGS = Object.freeze({
  SHOW_HIDDEN_FILES: "a",
  SHOW_ENTRY_PER_ROW: "1",
  USE_LONG_FORMAT: "l",
});
const FILE_TYPE_DIR = "dir";

function ls(env, commandOptions) {
  // Ignore command name
  commandOptions.shift();

  const [flags, args] = parseCommandArgs(commandOptions);

  if (args.length === 0) {
    args.push(".");
  }

  const showHiddenFiles = flags.includes(LS_COMMAND_FLAGS.SHOW_HIDDEN_FILES);
  let showEntryPerRow = flags.includes(LS_COMMAND_FLAGS.SHOW_ENTRY_PER_ROW);
  let useLongFormat = true; //flags.includes(LS_COMMAND_FLAGS.USE_LONG_FORMAT)

  // if both flags are enabled then choose the last one
  if (showEntryPerRow && useLongFormat) {
    useLongFormat =
      flags.lastIndexOf(LS_COMMAND_FLAGS.USE_LONG_FORMAT) > flags.lastIndexOf(LS_COMMAND_FLAGS.SHOW_ENTRY_PER_ROW);
    showEntryPerRow = !useLongFormat;
  }

  function formatListing(basePath, listing) {
    const listingStats = listing.map((filePath) => env.system.stat(`${basePath}/${filePath}`));

    const applyAddonsForStatsName = ({ type, name }) => {
      const lsColor = env.system.state.addons.ls_colors[type];
      return lsColor ? lsColor(name) : name;
    };

    const statsLongFormat = (stats) => {
      const buildStatsName = (stats) => {
        const statsName = applyAddonsForStatsName(stats);
        return stats.type === FILE_TYPE_DIR ? statsName + "/" : statsName;
      };

      const extractTimestamp = (date) => {
        const dateString = date.toString();
        const day = dateString.match(/(\w+\s\d+)/)[1];
        const hour = dateString.match(/(\d+:\d+)/)[1];
        return `${day} ${hour}`;
      };

      const getChmod = (fileType) => (fileType === FILE_TYPE_DIR ? "drwxrwxr-x" : "-rw-rw-r--");

      const chmod = getChmod(stats.type);
      const formattedSize = sprintf("%5s", stats.size);
      const date = new Date(stats.modified);
      const timestamp = extractTimestamp(date);
      const statsName = buildStatsName(stats);
      return `${chmod} ${env.system.state.user} ${env.system.state.group} ${formattedSize} ${timestamp}  ${statsName}`;
    };

    const sortFileStatsEntries = (a, b) => {
      const isFirstDir = a.type === FILE_TYPE_DIR;
      const isSecondDir = b.type === FILE_TYPE_DIR;
      if (isFirstDir && !isSecondDir) return -1;
      if (!isFirstDir && isSecondDir) return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    };

    const formatFileStatsEntries = (stats) => (useLongFormat ? statsLongFormat(stats) : applyAddonsForStatsName(stats));

    const joinFileStatsEntriesLines = (lines) => {
      if (useLongFormat) {
        return `total ${lines.length}\n${lines.join("\n")}`;
      } else if (showEntryPerRow) {
        return lines.join("\n");
      }
      return lines.join(" ");
    };

    return Promise.all(listingStats)
      .then((filesStats) => filesStats.sort(sortFileStatsEntries).map(formatFileStatsEntries))
      .then(joinFileStatsEntriesLines);
  }

  const rejectHiddenListings = (listing) => (showHiddenFiles ? listing : listing.filter((l) => !l.startsWith(".")));
  const formattedListings = args.sort().map((path) =>
    env.system
      .readDir(path)
      .then(rejectHiddenListings)
      .then((listing) => formatListing(path, listing))
      .then((listing) => (args.length === 1 ? listing : `${path}:\n${listing}`))
  );

  Promise.all(formattedListings)
    .then((listings) => listings.join("\n\n"))
    .then(
      (result) => {
        env.output(result);
        env.exit();
      },
      (err) => {
        env.output("ls: " + err);
        env.exit(2);
      }
    );
}

module.exports = ls;
