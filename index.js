const accordionEl = document.querySelectorAll(".accordion-el");

accordionEl.forEach(function(el) {
  const btn = el.querySelector(".accordion-btn");

  btn.addEventListener("click", function() {

    accordionEl.forEach(function(item) {
      if (item !== el) {
        item.classList.remove("show");
      }
    })


    el.classList.toggle("show");
  })
})