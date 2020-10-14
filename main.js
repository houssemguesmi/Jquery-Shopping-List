var clicked = false
$('#toggle-button').on("click",function(){
  if(!clicked) {
    $('.sidebar').animate({width:"100%"},1500)
  } else {
    $('.sidebar').animate({width:"10%"},1500)
  }
  clicked = !clicked
})
$("#form").fadeIn(2500);
$("#title").fadeIn(2500);
$("#submit").on("click", function (e) {
  e.preventDefault();
  var itemVal = $("#item").val();
  var urlVal = $("#url").val();
  var list = $("#list");
  var item = $("<li class='listitems' style='display:none'></li>");
  var image = $("<img class='images' src='" + urlVal + "'>");
  var span = $("<span class='item'>" + itemVal + "</span>");
  if (itemVal !== "" && urlVal !== "") {
    item.append(image);
    item.append(span);
    list.append(item);
    list.append("<br>");
    $(".listitems").fadeIn(1500);
    $("#error").fadeOut(1500);
    $("#error").val("");
    $("#url").val("");
    $("#item").val("");
    $("#form").animate({ marginBottom: "150px" }, 2500);
    $("#form").animate({ marginBottom: "0px" }, 2500);
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
