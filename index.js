var state = false;

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
    const images = $(".photos");
    // console.log(images.length);
    for (let i = 0; i<images.length; i++) {
        images[i].onclick = () => {
            $(".light-box .image-box img").attr("src", images[i].src);
            $(".back").css("visibility", "visible");
        }
    }
}

function closeL() {
    $(".back").css("visibility", "hidden");
    $(".light-box .image-box img").attr("src", "");

}


lightBox();
$(".back").bind("click", closeL);


var x = window.matchMedia("(min-width: 768px)");
mediaQuery(x);
x.addListener(mediaQuery);







buttonClicked();