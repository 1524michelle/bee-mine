// moves the no button away from mouse on hover
$(function() {
    $("#tricky").on({
        mouseover: function() {
            $(this).css('position', 'relative');
            $(this).css({
                left: (Math.random() * (200 - 30) + 50) + "px",
                top: (Math.random() * (200 - 30) + 50) + "px",
            });
        }
    });
});

// custom confetti pops when image is clicked
document.getElementById('bee-img').addEventListener('click', function() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiNumber: 100,
        emojis: ['✨','🐝','🍯','🌼'],
        emojiSize: 40
    });
});