function showMoreLess(dts,mor,linkTx) {
  var dots = document.getElementById(dts);
  var moreText = document.getElementById(mor);
  var linkText = document.getElementById(linkTx);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    linkText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    linkText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}