import throttle from 'lodash.throttle';

const player = new Vimeo.Player(document.querySelector('iframe')); 
const onPlay = (e) => localStorage
  .setItem("videoplayer-current-time", e.seconds);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage
    .getItem("videoplayer-current-time"));
 