$(document).ready(function(){
    $(".item1").click(function(){
        $("#id04").fadeToggle("slow");
      });
      $(".item2").click(function(){
        $("#id05").fadeToggle("slow");
      });
      $(".item3").click(function(){
        $("#id06").fadeToggle("slow");
      });
      $(".item4").click(function(){
        $("#id07").fadeToggle("slow");
      });
      $(".item5").click(function(){
        $("#id08").fadeToggle("slow");
      });
// -------------*****************--------------------///
//                Home-page   slider
///--------------*****************-------------------///

$('.slider1').owlCarousel({
  loop: true,
  margin: 0,
  //autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1500,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

//---slider--2
$('.slider2').owlCarousel({
  loop: true,
  margin: 0,
  //autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1500,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
});

});



// ----increement---add--item---//
var i = 0;
function increment() {
  i++;
  var demo = (document.getElementById("counter").innerHTML = i);
}
function  decrement() {
  i--;
  var demo = (document.getElementById("counter").innerHTML = i);
}



// -------nav---part----//
function openNav() {
  var sidebar =  document.querySelectorAll("#sidebar");
  // var c2 = document.querySelectorAll(".CampL2");
  var sift  =    document.getElementById("Sift1");
    sidebar[0].style = "width:250px !important";
   // debugger
  //   c2.style.padding="2rem 0 0 1rem";
    sift.style ="margin-left :250px";
    
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  var sift  =  document.getElementById("Sift1");
  //    sift.style ="padding-top : 0rem !important";
     sift.style = "margin-left : 13px"
  }