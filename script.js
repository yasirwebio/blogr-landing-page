window.addEventListener('DOMContentLoaded', function navigation_toggle() {

    const toogle_btn = document.querySelector('.toogle-btn');
    const navigation = document.querySelector('.link-list');

    toogle_btn.addEventListener('click', function (e) {

        const isexpanded = navigation.getAttribute('aria-expanded');
        const icon_open = document.querySelector('i.open');
        const icon_close = document.querySelector('i.close-icon');
        icon_open.setAttribute('style', 'display: none');
        icon_close.setAttribute('style', 'display: block');

        if (isexpanded === "true") {
            navigation.setAttribute('aria-expanded', 'false');
            icon_open.setAttribute('style', 'display: block');
            icon_close.setAttribute('style', 'display: none');

        }
        else if (isexpanded === "false") {
            navigation.setAttribute('aria-expanded', 'true');


        }

    })


})





