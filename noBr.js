window.addEventListener("resize", function() {
    var width = window.innerWidth;
    var paragraphs = document.querySelectorAll("deleteBr p");
    if (width <= 768) {
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.whiteSpace = "nowrap";
      }
    } else {
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.whiteSpace = "normal";
      }
    }
  });
  