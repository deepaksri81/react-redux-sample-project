
function onRouteChanged(route) {
    if (route.location && route.location.pathname && route.location.pathname.indexOf("/project/") !== -1) {
        scrollToTop();
    }
}

function hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            let id = hash.replace('#/', '#').replace('/', '_');
            let element = id === "#" ? $("#page-top") : $(id);
            if (element && element.offset()) {
                smoothScrollTo(element.offset().top - 50);
            }
        }, 0);
    }
}

function scrollToTop() {
    smoothScrollTo(0);
}

function smoothScrollTo(top) {
    $('html, body').stop().animate({
        scrollTop: (top)
    }, 1250, 'easeInOutExpo');
}

function setupReveal(target) {
    if (typeof window.sr === 'undefined') 
        window.sr = ScrollReveal(); 

    sr.reveal(target, {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
}