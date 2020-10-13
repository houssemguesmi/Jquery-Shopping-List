$("#form").fadeIn(2500);
$('#title').fadeIn(2500)
$("#submit").on("click", function (e) {
  e.preventDefault();
  var item = $("#item").val();
  var url = $("#url").val();
  var list = $("#list");
  if (item !== "" && url !== "") {
    list.append("<li class='listitems' style='display:none'><img class='images' src='" + url + "'><span class='item'>" + item + "</span></li><br>");
    $('.listitems').fadeIn(1500)
    $("#error").fadeOut(1500);
    $("#error").val("");
    $("#url").val("");
    $("#item").val("");
    $("#form").animate({ marginBottom: "150px"}, 2500);
    $("#form").animate({ marginBottom: "0px"}, 2500);
  } else {
    $("#error").fadeIn(2500);
    $("#error").val("Please fill in all the inputs!");
  }
});
$("#submitBG").on("click", function (e) {
  e.preventDefault();
  var color = $("#color").val();
  if (color !== "") {
    $("body").css("background-color", color);
  }
});