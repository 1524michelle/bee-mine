// moves the no button away from mouse on hover
$(function() {
    $("#tricky").on({
        mouseover: function() {
            // Get viewport dimensions
            var viewportWidth = $(window).width();
            var viewportHeight = $(window).height();

            // Calculate maximum left and top positions
            var maxLeft = viewportWidth - $(this).outerWidth();
            var maxTop = viewportHeight - $(this).outerHeight();

            // Calculate random left and top positions within viewport
            var randomLeft = Math.random() * maxLeft;
            var randomTop = Math.random() * maxTop;

            // Apply new position
            $(this).css({
                position: 'absolute',
                left: randomLeft + "px",
                top: randomTop + "px",
            });
        }
    });
});

// custom confetti pops when image is clicked
document.getElementById('bee-img').addEventListener('click', function() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiNumber: 100,
        emojis: ['✨','🐝','🍯','🌼']
    });
});