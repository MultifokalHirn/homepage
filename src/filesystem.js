var fileSystem = {
  "/home": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/lw": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  // "/home/lw/.": {
  //   modified: Date.now(),
  //   type: "file",
  //   content: "Not allowed.",
  //   size: 151,
  // },
  "/home/user": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/user/README.txt": {
    modified: Date.now(),
    type: "file",
    content: "Welcome to my homepage!\nIt is still under construction.",
    size: 151,
  },
  "/home/user/cv.txt": {
    modified: Date.now(),
    type: "file",
    content: "Education: Lorem \nExperience: Ipsum",
    size: 843,
  },
  "/home/user/contact.txt": {
    modified: Date.now(),
    type: "file",
    content: "TODO",
    size: 426,
  },
  "/home/user/links.txt": {
    modified: Date.now(),
    type: "file",
    content: "github.com/Multifokalhirn\n",
    size: 426,
  },
  "/home/user/blog": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/user/blog/TODO.txt": {
    modified: Date.now(),
    type: "file",
    content: "- do everything well and with ease.",
    size: 314,
  },
};

module.exports = fileSystem;
