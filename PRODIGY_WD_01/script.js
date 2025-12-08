window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#4C1D95';
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        nav.style.padding = '10px 25px';
    } else {
        nav.style.backgroundColor = '#6D28D9';
        nav.style.boxShadow = 'none';
        nav.style.padding = '15px 25px';
    }
});
