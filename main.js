
// Swiper Js (Testemonial)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

//read more about

const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content')
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
})

// show/hide skills items

const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

// add box shadow on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
})

// dark mode

function darkMode() {

    // BODY
    let body = document.body
    body.classList.toggle("black-mode");
    body.classList.toggle("h1")
    body.classList.toggle("h2")
    body.classList.toggle("h3")
    body.classList.toggle("h4")
    body.classList.toggle("h5")
    body.classList.toggle("h6")

    // NAV
    let nav = document.querySelector("nav");
    nav.classList.toggle("black-mode");

    let lista = document.querySelector("nav");
    lista.classList.toggle("ul");
    lista.classList.toggle("efeito")

    //LANDING
    let circle = document.querySelector("section.landing .profile-area .outer-circle span:nth-child(1)");
    circle.classList.toggle("circle")

    let circle1 = document.querySelector("section.landing .profile-area .outer-circle span:nth-child(2)");
    circle1.classList.toggle("circle")

    let circle2 = document.querySelector("section.landing .profile-area .outer-circle span:nth-child(3)");
    circle2.classList.toggle("circle")

    let circle4 = document.querySelector("section.landing .profile-area .outer-circle span:nth-child(4)");
    circle4.classList.toggle("circle")

    //SOCIAL MEDIA

    let media = document.querySelector("section.landing .socials a:nth-child(1)");
    media.classList.toggle("media-social")

    let media2 = document.querySelector("section.landing .socials a:nth-child(2)");
    media2.classList.toggle("media-social")

    let media3 = document.querySelector("section.landing .socials a:nth-child(3)");
    media3.classList.toggle("media-social")

    // ABOUT
    let about = document.querySelector("section.about");
    about.classList.toggle("black-mode");

    let skill = document.querySelector("section.skills .skill .item");
    skill.classList.toggle("black-mode");

    let service = document.querySelector("section.services");
    service.classList.toggle("black-mode");

    // CARDS
    let card = document.querySelector("section.services .container .service")
    card.classList.toggle("black-mode")

    let card1 = document.querySelector("section.services .container .service:nth-child(2)")
    card1.classList.toggle("black-mode")

    let card2 = document.querySelector("section.services .container .service:nth-child(3)")
    card2.classList.toggle("black-mode")

    // TESTEMONIAL
    let testemonial = document.querySelector("section.testimonials");
    testemonial.classList.toggle("black-mode");

    let box = document.querySelector("section.testimonials .testimonial");
    box.classList.toggle("black-mode");

    let box1 = document.querySelector("section.testimonials .testimonial:nth-child(2)");
    box1.classList.toggle("black-mode");

    let box2 = document.querySelector("section.testimonials .testimonial:nth-child(3)");
    box2.classList.toggle("black-mode");

    let box3 = document.querySelector("section.testimonials .testimonial:nth-child(4)");
    box3.classList.toggle("black-mode");

    //FOOTER
    let footer = document.querySelector("footer");
    footer.classList.toggle("footer")
    footer.classList.toggle("efeito")

    //FOOTER SOCIAL
    let footersocial1 = document.querySelector("footer .container .socials a:nth-child(1)");
    footersocial1.classList.toggle("media-social")

    let footersocial2 = document.querySelector("footer .container .socials a:nth-child(2)");
    footersocial2.classList.toggle("media-social")

    let footersocial3 = document.querySelector("footer .container .socials a:nth-child(3)");
    footersocial3.classList.toggle("media-social")

}
