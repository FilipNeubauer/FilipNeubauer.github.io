var state = false;

var currentPhoto = null;

const images = $(".photos");


function buttonClicked() {
    $(".menu-icon").click(function() {
        if ($("ul").hasClass("clicked-ul")) {
            $("ul").removeClass("clicked-ul");
        } else {
            $("ul").addClass("clicked-ul");
        }
        // $("ul").toggleClass("clicked-ul");
        if (state) {
            state = false;
        } else {
            state = true;
        }
        console.log("clicked");
    })
}

function mediaQuery(x) {
    if (x.matches && state) { // If media query matches
        $("ul").removeClass("clicked-ul");
    } else if (!x.matches && state) {
        $("ul").addClass("clicked-ul");
    }
  }



function lightBox() {
    // const images = $(".photos");
    // console.log(images.length);
    for (let i = 0; i<images.length; i++) {
        images[i].onclick = () => {
            $(".light-box .image-box img").attr("src", images[i].src);
            $(".back").css("visibility", "visible");
            $(".light-box").css("visibility", "visible");
            currentPhoto = i;
            console.log(currentPhoto);
            
        }
    }
}

function closeL() {
    $(".back").css("visibility", "hidden");
    $(".light-box .image-box img").attr("src", "");
    $(".light-box").css("visibility", "hidden");

}


function pushLeft() {
    if (currentPhoto > 0) {
        $(".light-box .image-box img").attr("src", images[currentPhoto - 1].src);
        currentPhoto--;
        console.log(currentPhoto);
    }
}

function pushRight() {
    if (currentPhoto < images.length - 1) {
        $(".light-box .image-box img").attr("src", images[currentPhoto + 1].src);
        currentPhoto++;
        console.log(currentPhoto);
    }
}

lightBox();
$(".back").bind("click", closeL);
$(".push-left").bind("click", pushLeft);
$(".push-right").bind("click", pushRight);


var x = window.matchMedia("(min-width: 768px)");
mediaQuery(x);
x.addListener(mediaQuery);







buttonClicked();