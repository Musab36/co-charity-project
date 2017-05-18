$(document).ready(function() {
  //JOIN BUTTON
  $(".move").click(function(){
    $(".all").hide();
     $(".welcome").show(3000);
  });
  
  //NEWS
  $("#btn1").click(function() {
    event.preventDefault();
    $("#btn1").hide();
    $("#nw1").show(3000);
    $("#bton1").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton1").click(function() {
    event.preventDefault();
    $("#bton1").hide();
    $("#nw1").hide(3000);
    $("#btn1").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn2").click(function() {
    event.preventDefault();
    $("#btn2").hide();
    $("#nw2").show(3000);
    $("#bton2").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton2").click(function() {
    event.preventDefault();
    $("#bton2").hide();
    $("#nw2").hide(3000);
    $("#btn2").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn3").click(function() {
    event.preventDefault();
    $("#btn3").hide();
    $("#nw3").show(3000);
    $("#bton3").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton3").click(function() {
    event.preventDefault();
    $("#bton3").hide();
    $("#nw3").hide(3000);
    $("#btn3").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn4").click(function() {
    event.preventDefault();
    $("#btn4").hide();
    $("#nw4").show(3000);
    $("#bton4").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

  $("#bton4").click(function() {
    event.preventDefault();
    $("#bton4").hide();
    $("#nw4").hide(3000);
    $("#btn4").show();
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
  });

  $("#btn5").click(function() {
    event.preventDefault();
    $("#btn5").hide();
    $("#nw5").show(3000);
    $("#bton5").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

  $("#bton5").click(function() {
    event.preventDefault();
    $("#bton5").hide();
    $("#nw5").hide(3000);
    $("#btn5").show();
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
  });

  $("#btn6").click(function() {
    event.preventDefault();
    $("#btn6").hide();
    $("#nw6").show(3000);
    $("#bton6").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

  $("#bton6").click(function() {
    event.preventDefault();
    $("#bton6").hide();
    $("#nw6").hide(3000);
    $("#btn6").show();
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
  });

  $("#hom").click(function() {
    $("#page").show();
    $("#cnt").show();
    $("#don").hide();
    $("#sucdon").hide();
    $("#stocon").hide();
    $("#bottomdiv").show();
  });

  //DONATION
  $("#onet").click(function() {
    event.preventDefault();
    $("#amn").show();
  });

  $("#options").click(function() {
    event.preventDefault();
    $("#select").show();
    $("#amn").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#next1").show();
  });

  $("#next1").click(function() {
    event.preventDefault();
    $("#amn").hide();
    $("#meth").show();
    $("#cardmeth").hide();
    $("#paypmeth").hide();
    $("#mpemeth").hide();
    $("#next3").hide();
  });

  $("#card").click(function() {
    $("#cardmeth").show();
    $("#card").hide();
    $("#onet").hide();
    $("#amn").hide();
    $("#page").hide();
    $("#cnt").hide();
    $("#next2").show();
    $("#paypal").hide();
    $("#mpesa").hide();
    $("#onet").hide();
    $("#next1").hide();
    $("#amn").hide();
    $("#select").hide();
    $("#options").hide();
  });

  $("#paypal").click(function() {
    $("#paypmeth").show();
    $("#paypal").hide();
    $("#onet").hide();
    $("#amn").hide();
    $("#page").hide();
    $("#cnt").hide();
    $("#next2").show();
    $("#card").hide();
    $("#mpesa").hide();
    $("#onet").hide();
    $("#next1").hide();
    $("#amn").hide();
    $("#select").hide();
    $("#options").hide();
  });

  $("#mpesa").click(function() {
    $("#mpemeth").show();
    $("#mpesa").hide();
    $("#onet").hide();
    $("#amn").hide();
    $("#page").hide();
    $("#cnt").hide();
    $("#next2").show();
    $("#card").hide();
    $("#paypal").hide();
    $("#onet").hide();
    $("#next1").hide();
    $("#amn").hide();
    $("#select").hide();
    $("#options").hide();
  });

  //Pasted directly; controls Next buttons
  $("#next2").click(function() {
    event.preventDefault();
    $("#ydts").show();
    $("#onet").hide();
    $("#amn").hide();
    $("#card").hide();
    $("#paypal").hide();
    $("#mpesa").hide();
    $("#page").hide();
    $("#cnt").hide();
    $("#cardmeth").hide();
    $("#meth").hide();
    $("#options").hide();
  });

  $("#next3").click(function() {
    event.preventDefault();
    $("#ydts").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#next4").click(function() {
    event.preventDefault();
    $("#ydts").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#donate").click(function() {
    event.preventDefault();
    $("#sucdon").show(3000);
    $("#don").hide();
    $("#page").hide();
    $("#cnt").hide();
  });
  $(document).ready(function() {
    //ABOUT US
    var count = 0;
    var images = ["img/home.jpg", "img/co.jpg"];
    var image = $("#us");

    image.css("background-image", "url(" + images[count] + ")");
    setInterval(function() {
      image.fadeOut(300, function() {
        image.css("background-image", "url(" + images[count++] + ")");
        image.fadeIn(300);
      });
      if (count === images.length) {
        count = 0;
      }
    }, 10000);

  });

  $(document).ready(function() {
    //HOMEPAGE
    var count = 0;
    var images = ["img/home.jpg", "img/ca3.jpg", "img/ca4.jpg", "img/children.jpg"];
    var image = $(".intro");

    image.css("background-image", "url(" + images[count] + ")");
    setInterval(function() {
      image.fadeOut(300, function() {
        image.css("background-image", "url(" + images[count++] + ")");
        image.fadeIn(300);
      });
      if (count === images.length) {
        count = 0;
      }
    }, 10000);

  });

});
