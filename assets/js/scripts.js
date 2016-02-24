$(document).ready( function () {
  "use strict";

  $(".tab").on("click", function () { //every time something with class 'tab' is clicked
    if ($(this).attr("class").includes("activeTab")) {//if the tab clicked is the active tab
      return false;
    } else { // if the tab clicked is NOT the active tab
      $(this).addClass("activeTab"); // add class active to the tab that was clicked
      $(this).siblings().removeClass("activeTab"); //remove class active from other tabs
      for (var i=0; i < $(".tabContainer").length; i++){
        var iElement = $(".tabContainer")[i];
        if ($(iElement).attr("class").includes("hidden")) {
          $(iElement).removeClass("hidden");
        } else {
          $(iElement).addClass("hidden");
        }
      }
    }

  });

});
