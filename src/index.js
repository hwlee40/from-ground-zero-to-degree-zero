//SCROLL INDICATOR

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// SCROLL TO SECTION CONTENTS
$("#essay1").click(function() {
    $('html, body').animate({
        scrollTop: $("#tag1").offset().top
    }, 500);
});
$("#essay2").click(function() {
    $('html, body').animate({
        scrollTop: $("#tag2").offset().top
    }, 500);
});
$("#essay3").click(function() {
    $('html, body').animate({
        scrollTop: $("#tag3").offset().top
    }, 500);
});
$("#essay4").click(function() {
    $('html, body').animate({
        scrollTop: $("#tag4").offset().top
    }, 500);
});
$("#essay5").click(function() {
    $('html, body').animate({
        scrollTop: $("#tag5").offset().top
    }, 500);
});

// RESIZING AND SHIFTING
function resizeText1() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#resize1').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 20) {
        $("#resize1").css("font-size", "230px");
    } else if (distance <= 20) {
        $("#resize1").css("font-size", "50px");
    };
}
function resizeText2() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#resize2').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 20) {
        $("#resize2").css("font-size", "230px");
    } else if (distance <= 20) {
        $("#resize2").css("font-size", "50px");
    };
}
function resizeText3() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#resize3').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 20) {
        $("#resize3").css("font-size", "230px");
    } else if (distance <= 20) {
        $("#resize3").css("font-size", "50px");
    };
}
function resizeText4() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#resize4').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 20) {
        $("#resize4").css("font-size", "230px");
    } else if (distance <= 20) {
        $("#resize4").css("font-size", "50px");
    };
}
function resizeText5() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#resize5').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 20) {
        $("#resize5").css("font-size", "230px");
    } else if (distance <= 20) {
        $("#resize5").css("font-size", "50px");
    };
}

function shiftImage1() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift1').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift1").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift1").addClass("image_basic_container_translate");
    };
}
function shiftImage2() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift2').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift2").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift2").addClass("image_basic_container_translate");
    };
}
function shiftImage3() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift3').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift3").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift3").addClass("image_basic_container_translate");
    };
}
function shiftImage4() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift4').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift4").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift4").addClass("image_basic_container_translate");
    };
}
function shiftImage5() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift5').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift5").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift5").addClass("image_basic_container_translate");
    };
}
function shiftImage6() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift6').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift6").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift6").addClass("image_basic_container_translate");
    };
}
function shiftImage7() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift7').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift7").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift7").addClass("image_basic_container_translate");
    };
}
function shiftImage8() {
    let scrollTop = $(window).scrollTop();
    let elementOffset = $('#shift8').offset().top;
    let distance = (elementOffset - scrollTop);
    if (distance > 400) {
        $("#shift8").removeClass("image_basic_container_translate");
    } else if (distance <= 400) {
        $("#shift8").addClass("image_basic_container_translate");
    };
}

function compile(){
    resizeText1();
    resizeText2();
    resizeText3();
    resizeText4();
    resizeText5();
}

function compileFaster(){
    shiftImage1();
    shiftImage2();
    shiftImage3();
    shiftImage4();
    shiftImage5();
    shiftImage6();
    shiftImage7();
    shiftImage8();
}

setInterval(function(){compile()}, 300);
setInterval(function(){compileFaster()}, 50);