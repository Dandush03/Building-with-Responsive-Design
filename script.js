window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("tp-nv").style.display = "none";
    document.getElementById("lg-dv").style.height = "40px";
  } else {

    if(window.innerWidth > 768){
      document.getElementById("tp-nv").style.display = "unset";
    }
    document.getElementById("lg-dv").style.height = "70px";
  }
}