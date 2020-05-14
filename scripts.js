
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
    document.getElementById("nav-slide").style.height = "380px";
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
    if (navSizeMobile == "380px") {
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



if (document.documentElement.clientWidth > 940) {
	document.getElementsByClassName("link1")[0].addEventListener("mouseover", function( event ) {  
        document.getElementsByClassName("sub-slot-header")[0].style.marginTop = "60vh";
        // document.getElementsByClassName("sub-hide")[0].style.display = "flex";
        document.getElementsByClassName("sub-hide")[0].style.height = "auto";
        document.getElementsByClassName("sub-hide")[0].style.visibility = "visible";
        document.getElementsByClassName("sub-hide")[0].style.opacity = "1";
        document.getElementsByClassName("sub-slot-header")[0].style.color = "#FDA6FF";
        document.getElementsByClassName("link1")[0].style.width = "30%";
        document.getElementsByClassName("link2")[0].style.width = "24%";
        document.getElementsByClassName("link1")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
        
        // setTimeout(function(){ document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "72vh"; }, 600);
        
    });
    document.getElementsByClassName("link1")[0].addEventListener("mouseout", function( event ) {  
      document.getElementsByClassName("sub-slot-header")[0].style.marginTop = "72vh";
      document.getElementsByClassName("sub-hide")[0].style.height = "0px";
      document.getElementsByClassName("sub-hide")[0].style.visibility = "hidden";
      document.getElementsByClassName("sub-hide")[0].style.opacity = "0";
      document.getElementsByClassName("sub-slot-header")[0].style.color = "white";
      document.getElementsByClassName("link1")[0].style.width = "27%";
      document.getElementsByClassName("link2")[0].style.width = "27%";
      document.getElementsByClassName("link1")[0].style.backgroundColor = "transparent";
      // setTimeout(function(){ document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "72vh"; }, 600);
      
  });
	document.getElementsByClassName("link2")[0].addEventListener("mouseover", function( event ) {  
    // document.getElementsByClassName("sub-slot-2-header")[0].style.marginTop = "12vh";
    // document.getElementsByClassName("sub-hide")[0].style.display = "flex";
    document.getElementsByClassName("sub-hide")[1].style.height = "auto";
    document.getElementsByClassName("sub-hide")[1].style.visibility = "visible";
    document.getElementsByClassName("sub-hide")[1].style.opacity = "1";
    document.getElementsByClassName("sub-slot-2-header")[0].style.color = "#23B2AC";
    document.getElementsByClassName("link2")[0].style.width = "30%";
    document.getElementsByClassName("link1")[0].style.width = "24%";
    document.getElementsByClassName("link2")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
    
    // setTimeout(function(){ document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "72vh"; }, 600);
    
});
document.getElementsByClassName("link2")[0].addEventListener("mouseout", function( event ) {  
  // document.getElementsByClassName("sub-slot-header")[0].style.marginTop = "72vh";
  document.getElementsByClassName("sub-hide")[1].style.height = "0px";
  document.getElementsByClassName("sub-hide")[1].style.visibility = "hidden";
  document.getElementsByClassName("sub-hide")[1].style.opacity = "0";
  document.getElementsByClassName("sub-slot-2-header")[0].style.color = "white";
  document.getElementsByClassName("link1")[0].style.width = "27%";
  document.getElementsByClassName("link2")[0].style.width = "27%";
  document.getElementsByClassName("link2")[0].style.backgroundColor = "transparent";
  // setTimeout(function(){ document.getElementsByClassName("sub-slot-header")[0].style.paddingTop = "72vh"; }, 600);
  
});



  //   document.getElementsByClassName("sub-slot3")[0].addEventListener("mouseover", function( event ) {   
  //       document.getElementsByClassName("sub-slot-3-header")[0].style.paddingTop = "71vh";
  //       setTimeout(function(){ document.getElementsByClassName("sub-slot-3-header")[0].style.paddingTop = "72vh"; }, 600);
        
  //   });
  //   document.getElementsByClassName("sub-slot2")[0].addEventListener("mouseover", function( event ) {   
  //       document.getElementsByClassName("sub-slot-2-header")[0].style.paddingTop = "7vh";
  //       setTimeout(function(){ document.getElementsByClassName("sub-slot-2-header")[0].style.paddingTop = "6vh"; }, 600);
        
  //   });

  //   function bgChange() {
  //       document.getElementsByClassName("r-slot")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
  //     }
  //     function bgChange2() {
  //       document.getElementsByClassName("r-slot")[0].style.backgroundColor = "transparent";
  //     }
    
  //     function bgChange3() {
  //       document.getElementsByClassName("sub-slot2")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
  //     }
    
  //     function bgChange4() {
  //       document.getElementsByClassName("sub-slot2")[0].style.backgroundColor = "transparent";
  //     }
  //     function bgChange5() {
  //       document.getElementsByClassName("sub-slot3")[0].style.backgroundColor = "rgb(8, 17, 51, 0.65)";
  //     }
  //     function bgChange6() {
  //       document.getElementsByClassName("sub-slot3")[0].style.backgroundColor = "transparent";
  //     }
}






