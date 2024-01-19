let w = window.innerWidth;
let winScroll = window.scrollY;
const navBar = document.getElementById("navbar");
const navWrapper = document.getElementById("nav");

function scrollToTargetAdjusted(href){
    // console.log(href);

    var element = document.getElementById(href);
    var headerOffset = 70;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

const timelineEvent = document.querySelectorAll('[data-yr-btn]').forEach(anchor => {
    let href = anchor.getAttribute('data-yr-btn');
    anchor.addEventListener("click", () => {
        scrollToTargetAdjusted(href);
    })
})

function toggleClass(className, elementID) {
    document.getElementById(elementID).classList.toggle(className);
}

console.log(event);


// Navbar Top Edge Hover
navWrapper.addEventListener("mouseenter", (event) => {
    const infoToggled = document.getElementById("infolink").classList.contains("toggled");
    let winScroll = window.scrollY;
    if (winScroll == 0 & infoToggled == false) {
        navBar.style.top = "0";
        // console.log("nav shown");
    }

    navWrapper.addEventListener("mouseleave", (event) => {
        const infoToggled = document.getElementById("infolink").classList.contains("toggled");
        let winScroll = window.scrollY;
        if (winScroll == 0 & infoToggled == false) {
            navBar.style.top = "-50px"
            // console.log("nav hidden");
        }
    })
})

function showScrollBar() {   
    let winScroll = window.scrollY;
    const infoToggled = document.getElementById("infolink").classList.contains("toggled");

    if (winScroll > 0) {
        navBar.style.top = "0";
    } else if (winScroll == 0 & infoToggled == false) {
        navBar.style.top = "-50px";
    }
}


// addEventListener("resize", () => {
//     
// });

addEventListener("load", () => {
    showScrollBar();
});

addEventListener("scroll", () => {
    showScrollBar();
});
