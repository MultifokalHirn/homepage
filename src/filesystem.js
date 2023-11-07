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
  "/home/user": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/user/welcome.txt": {
    modified: Date.now(),
    type: "file",
    content:
      "------------------------------------------------------------------------------\n       Lennard Wolf - Software Engineer\n------------------------------------------------------------------------------\n\n[Status: under Construction]\n\n➤ About Lennard:\n------------------------------------------------------------------------------\nMy name is Lennard Wolf and I am a Tech Lead at Signatrix GmbH.\n\n➤ Skills:\n------------------------------------------------------------------------------\n🚀 Main Programming Languages: Python, Javascript\n🔐 CI & Dev Ops: docker, ansible, github actions, etc \n💻 Software Architect: Building scalable and efficient systems\n🌐 Web Development: HTML, CSS, JavaScript \n\n➤ Achievements:\n------------------------------------------------------------------------------\nAt Signatrix I am working on a wide range of different topics across a wide range of tools and technologies:\n🏆 tba\n🚀 tba\n\n\n➤ About me:\n------------------------------------------------------------------------------\n I am passionate about X, Y, and especially Z!.\n\n------------------------------------------------------------------------------\n\n[End of Document]\n",
    size: 151,
  },
  "/home/user/cv.txt": {
    modified: Date.now(),
    type: "file",
    content: "[Status: under Construction]\nEducation: Lorem \nExperience: Ipsum",
    size: 843,
  },
  "/home/user/contact.txt": {
    modified: Date.now(),
    type: "file",
    content:
      "------------------------------------------------------------------------------\n\n Contact \n------------------------------------------------------------------------------\n[Status: under Construction]\nFeel free to reach out!\n\n📧 Email: tba\n📞 Phone: tba\n🌐 LinkedIn: linkedin.com/in/lennardwolf\n🌐 GitHub: github.com/MultifokalHirn\n\n------------------------------------------------------------------------------\n\n",
    size: 426,
  },
  // "/home/user/links.txt": {
  //   modified: Date.now(),
  //   type: "file",
  //   content: "\ngithub.com/Multifokalhirn\n",
  //   size: 426,
  // },
  "/home/user/blog": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  "/home/user/blog/TODO.txt": {
    modified: Date.now(),
    type: "file",
    content: "\n- do everything well and with ease.",
    size: 314,
  },
};

module.exports = fileSystem;
