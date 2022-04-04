setInterval(() => {
    let element = document.getElementById("existence");
    if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
}, 750);