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

var x = window.matchMedia("(min-width: 768px)");
mediaQuery(x);
x.addListener(mediaQuery);

buttonClicked();