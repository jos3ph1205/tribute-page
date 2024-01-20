let w = window.innerWidth;
let winScroll = window.scrollY;
const navBar = document.getElementById("navbar");
const navWrapper = document.getElementById("nav");



// FUNCTIONS
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

function toggleClass(className, elementID) {
    document.getElementById(elementID).classList.toggle(className);
}

function showScrollBar() {   
    let winScroll = window.scrollY;
    const infoToggled = document.getElementById("infolink").classList.contains("toggled");

    if (winScroll > 0) {
        navBar.style.top = "0";
    } else if (winScroll == 0 & infoToggled == false) {
        navBar.style.top = "-50px";
    }
}



// NAVBAR TOP EDGE HOVER TRIGGER
navWrapper.addEventListener("mouseover", (event) => {
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



// TOGGLES & CLICK FUNCTIONS
const yrSbToggleBtns = document.querySelectorAll('[data-yr-sb-toggle]').forEach(btn => {
    btn.addEventListener("click", () => {
        toggleClass('hide-yr-sidebar','yr-sidebar');
    })
})

const infoDropdownOptionClearToggleWin = document.querySelectorAll('[data-info-dd-option]').forEach(btn => {
    btn.addEventListener("click", () => {
        toggleClass('info-dropdown-toggled', 'infoWin');
        toggleClass('toggled', 'infolink');
    })
})

const infoDropdownToggle = document.querySelector('[data-info-dd-toggle]').addEventListener("click", () => {
    toggleClass('info-dropdown-toggled', 'infoWin');
    toggleClass('toggled', 'infolink');
})

const timelineEvent = document.querySelectorAll('[data-yr-btn]').forEach(anchor => {
    let href = anchor.getAttribute('data-yr-btn');
    anchor.addEventListener("click", () => {
        scrollToTargetAdjusted(href);
    })
})






// WINDOW TRIGGER EVENTS
addEventListener("load", () => {
    showScrollBar();
});

addEventListener("scroll", () => {
    showScrollBar();
});
