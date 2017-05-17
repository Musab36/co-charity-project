$(document).ready(function() {
  $("#btn1").click(function() {
    $("#nw1").toggle(3000);
    $("#all").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#btn2").click(function() {
    $("#nw2").toggle(3000);
    $("#all").hide();
    $("#img1").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#btn3").click(function() {
    $("#nw3").toggle(3000);
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#btn4").click(function() {
    $("#nw4").toggle(3000);
    $("#all").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img1").hide();
    $("#img5").hide();
    $("#img6").hide();
  });

  $("#btn5").click(function() {
    $("#nw5").toggle(3000);
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img6").hide();
  });

  $("#btn6").click(function() {
    $("#nw6").toggle(3000);
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
  });
  $("#hom").click(function() {
    $("#all").show();
    $("#cnt").show();
    $("#don").hide();
    $("#sucdon").hide();
    $("#stocon").hide();
    $("#bottomdiv").show();
  });
  $(".bt").click(function() {
    $("#don").show();
    $("#all").hide();
    $("#cnt").hide();
    $("#stocon").hide();
  });

  $("#onet").click(function() {
    $("#amn").show();
    $("#all").hide();
    $("#cnt").hide();
    $("#next1").show();
    $("#options").hide();
  });

  $("#next1").click(function() {
    $("#meth").show();
    $("#onet").hide();
    $("#amn").hide();
    $("#all").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#card").click(function() {
    $("#cardmeth").show();
    $("#card").hide();
    $("#onet").hide();
    $("#amn").hide();
    $("#all").hide();
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
    $("#all").hide();
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
    $("#all").hide();
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
    $("#all").hide();
    $("#cnt").hide();
    $("#cardmeth").hide();
    $("#meth").hide();
    $("#options").hide();
  });

  $("#next3").click(function() {
    $("#ydts").show();
    $("#all").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#next4").click(function() {
    $("#ydts").show();
    $("#all").hide();
    $("#cnt").hide();
    $("#options").hide();
  });

  $("#donate").click(function() {
    $("#sucdon").show(3000);
    $("#don").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#options").click(function() {
    $("#select").show();
    $("#amn").show();
    $("#all").hide();
    $("#cnt").hide();
    $("#next1").show();
  });

  $("#stories").click(function() {
    $("#stocon").fadeIn();
    $("#all").hide();
    $("#cont").hide();
    $("#don").hide();
    $("#bottomdiv").hide();
  });

  $("#support").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#support2").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });
  $("#support3").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#support4").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#support5").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#support6").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });

  $("#support7").click(function() {
    $("#don").fadeIn();
    $("#stocon").hide();
    $("#all").hide();
    $("#cnt").hide();
  });
});
