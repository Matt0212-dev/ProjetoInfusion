;(function(){
    let body = document.querySelector('body')
    body.classList.remove('no-js')
    body.classList.add('js')   
    
    // let btnMenu = document.querySelector('.header__btnMenu')
    // btnMenu.removeAttribute('style')

    let menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1025
    })

    let carouselImgs = new Carousel({
        container: '.slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    let carouselQuotes = new Carousel({
        container: '.quote-container .quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()