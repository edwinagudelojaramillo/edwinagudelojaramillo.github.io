(() => { const // mobile rotated view setup
    set = () => { if (window.innerWidth >= window.innerHeight) {
      const
        select = element => document.querySelector(element),
        sections = ['left', 'center', 'right'];

      document.body.style.overflow = 'visible';
      
      select('header#main').style.marginBottom = 0;

      select('#body').style = `
        padding: 0 15px;
        height: 60%;
      `;
      sections.map(section_name => {
        const section = select(`#body>.${section_name}`);
        section.style.width = 'auto';
      });
      select('#body>.right>.description').style.marginTop = '10px';
      select('.message').style.visibility = 'hidden';
  
      select('.card').style = `
        height: 84vh;
        font-size: .8em;
      `;
      select('.copyright').style.marginTop = '10px';
    } else { const
        select = element => document.querySelector(element),
        sections = ['left', 'center', 'right'];

      document.body.style.overflow = '';
      select('#body').style = '';
      sections.map(section_name => {
        const section = select(`#body>.${section_name}`);
        section.style.width = '';
      });
      select('#body>.right>.description').style.marginTop = '';
      select('.message').style.visibility = '';

      select('.card').style = '';
      select('.copyright').style.marginTop = '';

    }};
   set();
  window.onresize = set;
})();