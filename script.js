let w = window.innerWidth;
let winScroll = window.scrollY;
const navBar = document.getElementById("navbar");
const navWrapper = document.getElementById("nav");

function updateImages() {
    if (w < 1000) {
        document.getElementById("img").src = "Images/black-panther.jpg";
    } else if ( w > 1000) {
        document.getElementById("img").src = "Images/Chadwick Boseman Banner.png";
    }
}

// Navbar Top Edge Hover
navWrapper.addEventListener("mouseenter", (event) => {
    let winScroll = window.scrollY;
    if (winScroll == 0) {
        navBar.style.top = "0";
        // console.log("nav shown");
    }

    navWrapper.addEventListener("mouseleave", (event) => {
        let winScroll = window.scrollY;
        if (winScroll == 0) {
            navBar.style.top = "-50px"
            // console.log("nav hidden");
        }
    })
})

function showScrollBar() {   
    let winScroll = window.scrollY;

    if (winScroll > 0) {
        navBar.style.top = "0";
    } else if (winScroll == 0) {
        navBar.style.top = "-50px";
    }
}



addEventListener("resize", (event) => {
    updateImages();
});

addEventListener("load", (event) => {
    updateImages();
    showScrollBar();
});

addEventListener("scroll", (event) => {
    showScrollBar();
});