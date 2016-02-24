$(document).ready( function () {
  "use strict";

  $(".tab").on("click", function () { //every time something with class 'tab' is clicked
    if ($(this).attr("class").includes("activeTab")) {//if the tab clicked is the active tab
      return false;
    } else { // if the tab clicked is NOT the active tab
      $(this).addClass("activeTab"); // add class active to the tab that was clicked
      $(this).siblings().removeClass("activeTab"); //remove class active from other tabs

      var contributions = $(".contributionsTab")[1];//set variables for all three sections to show/hide
      var publicActivity = $(".publicActivityTab")[1];
      var repositories = $(".repositoriesTab")[1];

      if ($(this).attr("class").includes("contributionsTab")) { // if the contributions Tab is clicked
        $(contributions).removeClass("hidden");//show the appropriate div
        $(publicActivity).addClass("hidden");//hide the
        $(repositories).addClass("hidden");//other two divs
      } else if ($(this).attr("class").includes("repositoriesTab")) { // if the repositories tab is clicked
        $(repositories).removeClass("hidden");// et
        $(contributions).addClass("hidden");// cetera
        $(publicActivity).addClass("hidden");
      } else { // if the publicActivityTab is clicked
        $(publicActivity).removeClass("hidden");//et
        $(contributions).addClass("hidden");//cetera
        $(repositories).addClass("hidden");
      }

    }

  });

});
