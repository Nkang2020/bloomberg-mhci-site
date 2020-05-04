
/* Set the width of the side navigation to 280px */
function openNav() {
    document.getElementById("nav-slide").style.width = "280px";
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
    if (navSize == "280px") {
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

// background-color: rgb(8, 17, 51, 0.65);



if (document.documentElement.clientWidth > 600) {
	document.getElementsByClassName("sub-slot")[0].addEventListener("mouseover", function( event ) {  
        document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "71vh";
        setTimeout(function(){ document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "72vh"; }, 600);
        
    });
    document.getElementsByClassName("sub-slot3")[0].addEventListener("mouseover", function( event ) {   
        document.getElementsByClassName("sub-slot-3-header")[0].style.paddingTop = "71vh";
        setTimeout(function(){ document.getElementsByClassName("sub-slot-3-header")[0].style.paddingTop = "72vh"; }, 600);
        
    });
    document.getElementsByClassName("sub-slot2")[0].addEventListener("mouseover", function( event ) {   
        document.getElementsByClassName("sub-slot-2-header")[0].style.paddingTop = "7vh";
        setTimeout(function(){ document.getElementsByClassName("sub-slot-2-header")[0].style.paddingTop = "6vh"; }, 600);
        
    });

    function bgChange() {
        document.getElementsByClassName("r-slot")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
      }
      function bgChange2() {
        document.getElementsByClassName("r-slot")[0].style.backgroundColor = "transparent";
      }
    
      function bgChange3() {
        document.getElementsByClassName("sub-slot2")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
      }
    
      function bgChange4() {
        document.getElementsByClassName("sub-slot2")[0].style.backgroundColor = "transparent";
      }
      function bgChange5() {
        document.getElementsByClassName("sub-slot3")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
      }
      function bgChange6() {
        document.getElementsByClassName("sub-slot3")[0].style.backgroundColor = "transparent";
      }
}






