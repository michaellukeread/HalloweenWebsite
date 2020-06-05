$( '.house .front' ).on( 'click', function(event) {
    music.play();
} )

var music = new Audio( "../media/audio/music.wav" );