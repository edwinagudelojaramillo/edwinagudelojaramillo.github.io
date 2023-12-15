(() => { const  // mobile nav setup
    navbar = document.querySelector('header#main>nav'),
    nav_btn = document.querySelector('.menu_btn');

  let navbar_active = false;
  nav_btn.onclick = ev => {
    if (navbar_active) {
      navbar.style.opacity = '';
      setTimeout(() => {
        navbar.children[0].style.visibility = '';
      }, 2e2)
    }else {
      navbar.style.opacity = 1;
      setTimeout(() => {
        navbar.children[0].style.visibility = 'visible';
      }, 2e2)
    };
    navbar_active = !navbar_active;
  };
  
})();