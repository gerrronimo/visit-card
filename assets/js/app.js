//custom pointer

let cursor = $(".cursor"),
    follower = $(".cursor-follower");

let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".portfolio-item img").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".portfolio-item img").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


// scroll только для якорей

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

//scroll bar

let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + "%"
}







