var instance = new vidbg('.video', {
  mp4: 'source/video/world.mp4', // URL or relative path to MP4 video
  webm: 'source/video/world.webpm', // URL or relative path to webm video
  poster: 'source/video/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
}, {
  // Attributes
})

var rellax = new Rellax('.rocket');

if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();
