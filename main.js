$("#form").fadeIn(2500);
$("#submit").on("click", function () {
  var item = $("#item").val();
  var url = $("#url").val();
  var list = $("#list");
  if (item !== "" && url !== "") {
    list.append("<li><img class='images' src='" + url + "'>" + item + "</li>");
    $("#error").fadeOut(1500);
    $("#error").val("");
    $("#url").val("");
    $("#item").val("");
    $("#form").animate({ marginBottom: "400px", marginLeft: "400px" }, 2500);
    $("#form").animate({ marginBottom: "0px", marginLeft: "0px" }, 2500);
  } else {
    $("#error").fadeIn(2500);
    $("#error").val("Please fill in all the inputs!");
  }
});
$("#submitBG").on("click", function () {
  var color = $("#color").val();
  if (color !== "") {
    $("body").css("background-color", color);
  }
});
