const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
player.on('timeupdate', function(getData) { 
    localStorage.setItem("videoplayer-current-time", getData.seconds);//get currenttime  
    });

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));


// Second variant 

    
// player.on('timeupdate', function(getData) { 
//     localStorage.setItem("videoplayer-current-time", getData.seconds);//get currenttime
// });
//  player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
    
// player.on('timeupdate', function(getData) { 
//     localStorage.setItem("videoplayer-current-time", getData.seconds);//get currenttime
// });
//  player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
