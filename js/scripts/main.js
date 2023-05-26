var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints:{
        320:{
            direction: 'horizontal',
        },
        992:{
            direction: 'vertical',
        }
    }
});


const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 5000,
        disableOnInteration: false
    },
    on:{
        init: function(){
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function(){
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function(){
            progressSlide.classList.add('animate');
        }
    }
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games')

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        allFilters.forEach(item =>{
            item.classList.remove('active')
        })

        tabPane.forEach(item =>{
            item.classList.remove('active')
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active')
    })
})

const btnOpenModal = document.querySelector('.js-open-modal')
const btnCloseModal = document.querySelectorAll('.js-close-modal')

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.add('show-modal')
})


btnCloseModal.forEach((close, index) => {
    close.addEventListener('click', (event) => {
        event.preventDefault();
        document.documentElement.classList.remove('show-modal')
    })
})


const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        if(btn.classList.contains("active")){
            btn.classList.remove('active');
            menuSite[index].classList.remove('active');
        } else{
            menuSite.forEach(itemMenu =>{
                itemMenu.classList.remove('active')
                itemMenu.addEventListener('mouseleave', () => {
                    itemMenu.classList.remove('active')
                    btnMenu.forEach(itemBtn =>{
                        itemBtn.classList.remove('active')
                    })
                })
            })
    
            btnMenu.forEach(itemMenu =>{
                itemMenu.classList.remove('active')
            })

            btn.classList.add('active');
            menuSite[index].classList.add('active');
        }
    })
})


const btnMenuMobile = document.querySelector('.js-menu-mobile');
const navSite = document.querySelector('.js-nav');

btnMenuMobile.addEventListener('click', (event) => {
    event.preventDefault();
    if(!navSite.classList.contains('active-mobile')){
        navSite.classList.add('active-mobile')
    } else{
        navSite.classList.remove('active-mobile')
    }
})