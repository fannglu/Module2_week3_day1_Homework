$(document).ready(function () {
  $("td").click(function () {
    var act = $(this).text();
    if (act != "Not Available") {
      $(this).toggleClass("tdHighlight");
    }

    if ($(this).hasClass("tdHighlight")) {
      // $("#displaySelected").css("visibility", "visible"); //remove this for modal
      $("#displaySelected").css("margin top", "2em");
      $("#result").append("<p>" + act + "</p>");
      $("#myModal").modal("show"); //added this for modal
    } else {
      $("#result p:contains(" + act + ")").remove();
      $("#myModal").modal("show");   //added this for modal 

      if ($("#result").has("p").length == false) {
        // $("#displaySelected").css("visbility", "hiden"); //remove this for modal
        $("#displaySelected").css("margin-top", "0");
      }
    }
  });
});
