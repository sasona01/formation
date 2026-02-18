class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript Basics", "Elie", 300);
video1.watch();

const video2 = new Video("React Tutorial", "Sarah", 600);
video2.watch();

const videosData = [
  { title: "HTML Crash Course", uploader: "Mike", time: 400 },
  { title: "CSS Flexbox", uploader: "Anna", time: 350 },
  { title: "Node.js Intro", uploader: "Tom", time: 500 },
  { title: "MongoDB Guide", uploader: "Lisa", time: 450 },
  { title: "TypeScript Basics", uploader: "David", time: 380 }
];

const videoInstances = [];

videosData.forEach(video => {
  const newVideo = new Video(video.title, video.uploader, video.time);
  videoInstances.push(newVideo);
});

videoInstances.forEach(video => video.watch());
