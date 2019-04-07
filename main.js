const $customerSection = document.getElementById('customer-section').getBoundingClientRect();
const $firstContentSection = document.getElementById('firstContent').getBoundingClientRect();
const $secondContentSection = document.getElementById('secondContent').getBoundingClientRect();
const $thirdContentSection = document.getElementById('thirdContent').getBoundingClientRect();

window.addEventListener('scroll', function(e) {
    // console.log(pageYOffset, $firstContentSection, $secondContentSection, $thirdContentSection);
    if(pageYOffset > $customerSection.y) {
        document.getElementById('firstContentImage').classList.add('right-translate-animation');
    }
    if(pageYOffset > $firstContentSection.y) {
        document.getElementById('secondContentImage').classList.add('left-translate-animation');
    }
    if(pageYOffset > $secondContentSection.y) {
        document.getElementById('thirdContentImage').classList.add('right-translate-animation');
    }
})