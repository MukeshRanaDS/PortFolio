function scrollLeft() {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.scrollLeft -= 300; // Adjust the scroll distance as needed
}

function scrollRight() {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.scrollLeft += 300; // Adjust the scroll distance as needed
}

function revealFourthTile() {
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 300; // Adjust the scroll distance as needed
}
