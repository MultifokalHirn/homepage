var fileSystem = {
  "/home": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/visitor": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/visitor/README.txt": {
    modified: Date.now(),
    type: "file",
    content: "Welcome to my homepage!",
    size: 151,
  },
  "/home/visitor/about": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/visitor/about/cv.txt": {
    modified: Date.now(),
    type: "file",
    content: "Education: Lorem \n Experience: Ipsum",
    size: 843,
  },
  "/home/visitor/about/contact.txt": {
    modified: Date.now(),
    type: "file",
    content: "TODO",
    size: 426,
  },
  "/home/visitor/about/links.txt": {
    modified: Date.now(),
    type: "file",
    content: "github.com/Multifokalhirn",
    size: 426,
  },
  "/home/visitor/projects": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/visitor/projects/TODO.txt": {
    modified: Date.now(),
    type: "file",
    content: "- do everything well and with ease.",
    size: 314,
  },
};

module.exports = fileSystem;
