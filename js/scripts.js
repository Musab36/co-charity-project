$(document).ready(function() {
  $("#btn1").click(function() {
    $("#nw1").show(5000);
    $("#all").hide(600);
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("img6").hide();
  });

  $("#btn2").click(function() {
    $("#nw2").show(5000);
    $("#all").hide();
    $("#img1").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("img6").hide();
  });

  $("#btn3").click(function() {
    $("#nw3").show(1000);
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("img6").hide();
  });

  $("#btn4").click(function() {
    $("#nw4").show();
    $("#all").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img1").hide();
    $("#img5").hide();
    $("img6").hide();
  });

  $("#btn5").click(function() {
    $("#nw5").show();
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("img6").hide();
  });

  $("#btn6").click(function() {
    $("#nw6").show();
    $("#all").hide();
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
  });
});
