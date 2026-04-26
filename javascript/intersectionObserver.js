const sections = document.querySelectorAll('#sobreSection, #stackSection, #projetosSection, #proficienciesSection, #experienciasSection');
const navLinks = document.querySelectorAll('.linkMenu');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));

      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.linkMenu[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '-20% 0px -20% 0px'
});

sections.forEach(section => observer.observe(section));