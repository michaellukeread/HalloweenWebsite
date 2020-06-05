const rotateScene = function ( event ) {
 
  ry += event.originalEvent.movementX/6;

  if ( ry < 30 && ry > -30 ) {
    $scene.css( '--ry', ry+'deg' );
    //$houseFront.css( '--ry', -ry+'deg' );
    $pumpkin1.css( '--ry', -ry+'deg' );
    $pumpkin2.css( '--ry', -ry+'deg' );
    $pumpkin3.css( '--ry', -ry+'deg' );
    $tree1.css( '--ry', -ry+'deg' );
    $tree2.css( '--ry', -ry+'deg' );
    $tree3.css( '--ry', -ry+'deg' );
    $bat1.css( '--ry', -ry+'deg' );
    $bat2.css( '--ry', -ry+'deg' );
    $bat3.css( '--ry', -ry+'deg' );
    $moon.css( '--ry', -ry+'deg' );
    $tombstone1.css( '--ry', -ry+'deg' );
    $tombstone2.css( '--ry', -ry+'deg' );
    $tombstone3.css( '--ry', -ry+'deg' );
    $witch.css( '--ry', -ry+'deg' );
    //$fence.css( '--ry', -ry+'deg' );
  }                                                             //limited rotation between 200 and 0 degrees
  else if ( ry > 30 ) { ry = 29.75; }                           // resets ry variable to maximum to fix bug
  else if ( ry < -30 ) { ry = -29.75; }                         // resets ry variable to minimum to fix bug
  
}

let $body = $( 'body' );
let $scene = $( '.scene' );
let $houseFront = $(  '.house .front' );
let $pumpkin1 = $( '.pumpkin01 .front' );
let $pumpkin2 = $( '.pumpkin02 .front' );
let $pumpkin3 = $( '.pumpkin03 .front' );
let $tree1 = $( '.tree1 .front' );
let $tree2 = $( '.tree2 .front' );
let $tree3 = $( '.tree3 .front' );
let $bat1 = $( '.bat01 .front' );
let $bat2 = $( '.bat02 .front' );
let $bat3 = $( '.bat03 .front' );
let $moon = $( '.moon .front' );
let $tombstone1 = $( '.tombstone01 .front' );
let $tombstone2 = $( '.tombstone02 .front' );
let $tombstone3 = $( '.tombstone03 .front' );
let $fence = $( '.fence .front' );
let $witch = $( '.witch .front' );

let rx = -17;
let ry = 20;

$body.on( 'mousedown', function () { $body.on( 'mousemove', rotateScene ) } );
$body.on( 'mouseup', function () { $body.off( 'mousemove', rotateScene ) } );

$( 'img' ).prop( 'draggable', false );