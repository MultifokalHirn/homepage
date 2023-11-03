// import term from "./term.js";

(() => {
  let emptyFilesystem = {
    "/home": {
      modified: 1686149091094,
      type: "dir",
      size: 4096,
    },
    "/home/user": {
      modified: 1686149091094,
      type: "dir",
      size: 4096,
    },
  };
  fetch("/static/json/filesystem.json")
    .then((response) => response.json())
    .catch((err) => {
      console.log("Error loading filesystem.json, using empty filesystem");
      console.log(err);
      return emptyFilesystem;
    })
    .then((fs) => {
      term(fs);
    });
})();
