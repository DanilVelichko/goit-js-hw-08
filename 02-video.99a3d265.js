!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",e.seconds)})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"))}();
//# sourceMappingURL=02-video.99a3d265.js.map
