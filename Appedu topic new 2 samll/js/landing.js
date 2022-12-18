; (function () {
    let headerStickyEvent = function () {
        document.addEventListener('scroll', function (e) {
            checkHeaderSticky()
        })
    }

    let checkHeaderSticky = function () {
        let scrollY = window.scrollY
        let header = document.querySelector('#header')
        if (scrollY > 80) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    }

    headerStickyEvent()
    checkHeaderSticky()
})()