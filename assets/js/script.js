/* Main script */

/* Wait until DOM is ready */
document.addEventListener('DOMContentLoaded', () => {

    /* Decl. Variable select by id mu DOM element */
    const scrollDownBtn = document.getElementById('scroll-down-button')

    /* Detect scroll position of the window element */
    window.addEventListener('scroll', () => {

        /* Si scrolled > 30 px, make : */
        if(window.scrollY > 30){
            /* Add a CSS class */
            scrollDownBtn.classList.add('scrolled')
        }

        /* Sinon faire : */
        else {
            /* Remove CSS class */
            scrollDownBtn.classList.remove('scrolled')
        }
    })
})