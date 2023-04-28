window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav')

    if(window.pageYOffset > 250){
        nav.classList.add('cambia-nav')
    }else{
        nav.classList.remove('cambia-nav')
    }
  });
