$(document).mousemove(getMousePosition);

window.setInterval(function() {
    let mousePosition = $('#mouse-position').last();
    x = mousePosition.attr("data-x")
    y = mousePosition.attr("data-y")
    
    let sprite = $('#pointer-sprite-image').last();
    sprite.animate({
        top: y,
        left: x
    }, {
        duration: 75
    })
}, 75);

function getMousePosition(event) {
  // Get sprite and mouse locations
  let mousePosition = $('#mouse-position').last();
  
  mousePosition.attr("data-x", event.pageX);
  mousePosition.attr("data-y", event.pageY);
}

$('.pointer-sprite-image').css('z-index', '0');