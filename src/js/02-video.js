const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event
});

// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', _.throttle(updatePosition, 1000));
 
// Invoke `renewToken` when the click event is fired, 
// but not more than once every 5 minutes.
let throttled = _.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);
 
// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);