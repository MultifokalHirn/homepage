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
  // "/home/user/welcome.txt": {
  //   modified: Date.now(),
  //   type: "file",
  //   content:
  //     "Welcome to the homepage of Lennard Wolf!\n\nFeel free to have a look around, which is done similar to using a bash shell.\n[Site Status: Under Construction]\n",
  //   size: 151,
  // },
  "/home/user/about.txt": {
    modified: Date.now(),
    type: "file",
    content: "My name is Lennard Wolf and I am a programmer working and living in Berlin, Germany.\n\nI am Tech Lead at Signatrix, where I contribute to the development of a suite of computer vision applications and the infrastructure around them.\n\n\nProfessionally, my focus is classic software engineering, as well as creating (infra-)structures to ensure robust processes and/or environments (see cv.txt for more details).\n\nIRL I prefer spending time with my wife and dog, doing gardening/renovation work, or finding an outlet for my creativity in music, visual art, or audiobook adjacent formats.\n",
    size: 843,
  },
  "/home/user/cv.txt": {
    modified: Date.now(),
    type: "file",
    content: "Lennard Wolf\n\ngithub.com/MultifokalHirn linkedin.com/in/lennardwolf multifokalhirn.github.io\n\n\nExperience\n\nTech Lead Jul 2020 – Present Signatrix GmbH Berlin, Germany\nInnovation Driver – Executed an extensive revamp of codebases to enhance scalability and resilience, as well as to align them with the evolving product strategy. \nProduct Strategy – Collaborated with leadership in expanding the product suite, shaping the technical roadmap, and managing technical debt. \nTeam Leadership – Directed team operations, led recruitment initiatives, and facilitated the company's expansion.\n\n\n\nSoftware Engineer Jan 2019 – Jul 2020 Signatrix GmbH Berlin, Germany\n\nPioneering Team Member – First full-time software engineering hire, worked closely with technical co-founders Felix Müller and Christoph Schwerdtfeger building the company's lineup of computer vision products and integrating them with various third-party hardware and software components. \nDevOps & Toolchain Development – Implemented the company's DevOps infrastructure for managing the fleet of edge devices as well as the in-house toolchain for collecting, storing, versioning, annotating, displaying, and selectively exporting data for training deep learning models. \nQuality Assurance – Standardized development practices, including internal and customer documentation, automated QA, and Continuous Integration (CI) processes.\n\nEducation\n\nHumboldt University Oct 2016 - Dec 2018 B.A. Philosophy – dropped out during 5th semester to join AI startup Signatrix Berlin, Germany\n\n\nHPI School of Design Thinking Oct 2015 - Apr 2016 Design Thinking Basic Track Potsdam, Germany\n\nHasso Plattner Institute Oct 2013 - Sep 2016 B.Sc. IT Systems Engineering – Final Grade: 1.7 Potsdam, Germany\n\nFilmgymnasium Babelsberg 2013 Abitur – Final Grade: 1.0 Potsdam, Germany\n\nScholarships\n\nDeutschlandstipendium 2018 Fellowship at Cluster of Excellence »Image Knowledge Gestaltung« (German Research Foundation) – Issued by Schering Stiftung & Humboldt Universität\n\nSkills\n\nTechnical Skills\n\nLanguages – Python, Javascript, Ruby, Go, Smalltalk, Bash, SQL, HTML, CSS, LaTeX Frameworks – Flask, Django, SQLAlchemy, Celery, pytest, React.js, and others Tools – Ansible, Docker, Git, GitHub Actions, Sentry, Linux Admin., Jira Admin., and others\n\nProfessional Skills\n\nTeam Leadership – Proficient in leading teams (up to 5 members), conducting technical interviews, and fostering team development. Project Management – Skilled in project roadmapping, planning, prioritization, coordination, and tracking. Process Design – Expertise in streamlining, optimizing, and automating operational processes within and across teams. Collaboration – Approachable and eager to talk about or help with any technical or non-technical topic. Versatility – Quick at picking up and adopting new technologies, as well as understanding and navigating new and unfamiliar environments.",
    size: 843,
  },
  // "/home/user/contact.txt": {
  //   modified: Date.now(),
  //   type: "file",
  //   content:
  //     "github.com/MultifokalHirn linkedin.com/in/lennardwolf multifokalhirn.github.io\n\nExperience\n",
  //   size: 426,
  // },
  // "/home/user/links.txt": {
  //   modified: Date.now(),
  //   type: "file",
  //   content: "\ngithub.com/Multifokalhirn\n",
  //   size: 426,
  // },
  "/home/user/posts": {
    modified: Date.now(),
    type: "dir",
    size: 4096,
  },
  // "/home/user/posts/TODO.txt": {
  //   modified: Date.now(),
  //   type: "file",
  //   content: "\n- do everything well and with ease.",
  //   size: 314,
  // },
};

module.exports = fileSystem;
