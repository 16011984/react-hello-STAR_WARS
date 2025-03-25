document.querySelectorAll(".next").forEach(button => {
    button.addEventListener("click", function() {
      let childIndex = this.getAttribute("data-target");
      let itemToFade = document.querySelector(`.item:nth-child(${childIndex})`);
      
      if (itemToFade) {
        itemToFade.classList.add("fade-out");
      }
    });
  });