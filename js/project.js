$(document).ready(function() {
  $("#btn1").click(function() {
    $("#btn1").hide();
    $("#nw1").show(3000);
    $("#bton1").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton1").click(function() {
    $("#bton1").hide();
    $("#nw1").hide(3000);
    $("#btn1").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn2").click(function() {
    $("#btn2").hide();
    $("#nw2").show(3000);
    $("#bton2").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton2").click(function() {
    $("#bton2").hide();
    $("#nw2").hide(3000);
    $("#btn2").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn3").click(function() {
    $("#btn3").hide();
    $("#nw3").show(3000);
    $("#bton3").show();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#bton3").click(function() {
    $("#bton3").hide();
    $("#nw3").hide(3000);
    $("#btn3").show();
    $("#img4").show();
    $("#img5").show();
    $("#img6").show();
  });

  $("#btn4").click(function() {
    $("#btn4").hide();
    $("#nw4").show(3000);
    $("#bton4").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

$("#bton4").click(function() {
  $("#bton4").hide();
  $("#nw4").hide(3000);
  $("#btn4").show();
  $("#img1").show();
  $("#img2").show();
  $("#img3").show();
});

  $("#btn5").click(function() {
    $("#btn5").hide();
    $("#nw5").show(3000);
    $("#bton5").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

  $("#bton5").click(function() {
    $("#bton5").hide();
    $("#nw5").hide(3000);
    $("#btn5").show();
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
  });

  $("#btn6").click(function() {
    $("#btn6").hide();
    $("#nw6").show(3000);
    $("#bton6").show();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
  });

  $("#bton6").click(function() {
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
  $(".bt").click(function() {
    $("#don").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#stocon").hide();
  });

  $("#onet").click(function() {
    $("#amn").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#next1").show();
    $("#options").hide();
  });

  $("#next1").click(function() {
    $("#meth").show();
    $("#onet").hide();
    $("#amn").hide();
    $("#page").hide();
    $("#cnt").hide();
    $("#options").hide();
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

  $("#next2").click(function() {
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
    $("#ydts").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#next4").click(function() {
    $("#ydts").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#donate").click(function() {
    $("#sucdon").show(3000);
    $("#don").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#options").click(function() {
    $("#select").show();
    $("#amn").show();
    $("#page").hide();
    $("#cnt").hide();
    $("#next1").show();
  });

  $("#stories").click(function() {
    $("#stocon").fadeIn();
    $("#page").hide();
    $("#cont").hide();
    $("#don").hide();
    $("#bottomdiv").hide();
  });

  $("#support1").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#support2").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });
  $("#support3").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#support4").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#support5").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#support6").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });

  $("#support7").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#page").hide();
    $("#cnt").hide();
  });
});
