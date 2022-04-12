// DOM Document Object Model
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})

/*Testimonials slider*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
          slidesPerView: 2,
          setWrapperSize: true
        }
    }
})

/*Scroll Reveal*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .text,
#home .image,
#about .image,
#about .text,
#services .text,
#services .t1,
#services .t2,
#services .t3,
#testimonials .title,
#testimonials .swiper-container,
#contact .text,
#contact .contatos,
footer .text,
footer ul
`, {
    interval: 100
})