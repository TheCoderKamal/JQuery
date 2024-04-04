$(document).ready(function () {

    // HIDE
    $(".main-search").hide();
    $(".main-btn-menu").hide();
    $(".main-s").hide();
    $(".image-sec-txt-1").hide();
    $(".image-sec-txt-2").hide();

    $(".fa-magnifying-glass").click(function () {
        $(".main-search").slideToggle(100);
        $(".main-btn-menu").addClass("addCss");
    })

    $(".main-close").click(function () {
        $(".main-search").hide();
        // $(".main-btn-menu").hide();
        $(".main-btn-menu").removeClass("addCss");
    })

    $(".main-btn").find("button").click(function () {
        $(".main-btn-menu").slideToggle();
    })

    $(".ser-card").mouseenter(function () {
        $(this).find("p").show(300);
    })

    $(".ser-card").mouseleave(function () {
        $(this).find("p").hide(300);
    })

    $(".image-sec-11").mouseenter(function () {
        $(this).find(".image-sec-txt-1").show(300); 
        $(this).addClass("add-11")
    })
    $(".image-sec-11").mouseleave(function () {
        $(this).find(".image-sec-txt-1").hide(300);
        $(this).removeClass("add-11")
    })

    $(".image-sec-12").mouseenter(function () {
        $(this).find(".image-sec-txt-1").show(300);
        $(this).addClass("add-12")
    })
        $(".image-sec-12").mouseleave(function () {
        $(this).find(".image-sec-txt-1").hide(300);
        $(this).removeClass("add-12")
    })
    
    $(".image-sec-21").mouseenter(function () {
        $(this).find(".image-sec-txt-2").show(300);
        $(this).addClass("add-21")
    })
        $(".image-sec-21").mouseleave(function () {
        $(this).find(".image-sec-txt-2").hide(300);
        $(this).removeClass("add-21")
    })
    
    $(".image-sec-22").mouseenter(function () {
        $(this).find(".image-sec-txt-2").show(300);
        $(this).addClass("add-22")
    })
        $(".image-sec-22").mouseleave(function () {
        $(this).find(".image-sec-txt-2").hide(300);
        $(this).removeClass("add-22")
    })
    
    $(".image-sec-23").mouseenter(function () {
        $(this).find(".image-sec-txt-2").show(300);
        $(this).addClass("add-23")
    })
        $(".image-sec-23").mouseleave(function () {
        $(this).find(".image-sec-txt-2").hide(300);
        $(this).removeClass("add-23")
    })




    // COUNTER
    var counters = $(".c");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
        }, 5);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }



    const track = document.querySelector(".carousel__track"); //ul
const slides = Array.from(track.children); //li items
const nextButton = document.querySelector(".carousel__button--right ");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});


})