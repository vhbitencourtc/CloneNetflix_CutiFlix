$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 1,
  nav: false,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
})

onmouseover = "Tip('Mensagem')";
onmouseout = "UnTip()";
