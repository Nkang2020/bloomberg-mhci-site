
// Can also be used with $(document).ready()
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      slideshow: false,
      itemWidth: 260,
    });
  });
/* Set the width of the side navigation to 280px */
function openNav() {
    document.getElementById("nav-slide").style.width = "370px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("nav-slide").style.width = "0";
  }

  function rotateArrow() {
    document.getElementById("arrow").style.transform = "rotate(0deg)";
  }
  
  function rotateBack() {
    document.getElementById("arrow").style.transform = "rotate(180deg)";
  }

  function toggleNav(){
    navSize = document.getElementById("nav-slide").style.width;
    if (navSize == "370px") {
        return closeNav();
    }
    return openNav();
}

function toggleRot(){
    rotSize = document.getElementById("arrow").style.transform;
    if (rotSize == "rotate(0deg)") {
        return rotateBack();
    }
    return rotateArrow();
}

function combine(){
    toggleNav();
    toggleRot();
}

// mobile nav
/* Set the width of the side navigation to 280px */
function openNavMobile() {
    document.getElementById("nav-slide").style.height = "310px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNavMobile() {
    document.getElementById("nav-slide").style.height = "0";
  }

  function rotateArrowMobile() {
    document.getElementById("arrowup").style.transform = "rotate(0deg)";
  }
  
  function rotateBackMobile() {
    document.getElementById("arrowup").style.transform = "rotate(180deg)";
  }

  function toggleNavMobile(){
    navSizeMobile = document.getElementById("nav-slide").style.height;
    if (navSizeMobile == "310px") {
        return closeNavMobile();
    }
    return openNavMobile();
}

function toggleRotMobile(){
    rotSize = document.getElementById("arrowup").style.transform;
    if (rotSize == "rotate(0deg)") {
        return rotateBackMobile();
    }
    return rotateArrowMobile();
}

function combineMobile(){
    toggleNavMobile();
    toggleRotMobile();
}

console.log(document.getElementById("domain"));
for (var i=0; i< document.getElementsByClassName("clicker").length; i++) {
  document.getElementsByClassName("clicker")[i].addEventListener("click", function(){
    closeNav();
  })
}


  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }




function openCity(evt,cityName) {
    var i;
    var x = document.getElementsByClassName("tabby");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "flex";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}