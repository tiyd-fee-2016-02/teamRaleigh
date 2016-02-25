//see if I can't get the 'user' name plugged in to wherever it's needed

$(document).ready( function () {
  "use strict";

  $(".tab").on("click", function () { //every time something with class 'tab' is clicked
    if ($(this).attr("class").includes("activeTab")) {//if the tab clicked is the active tab
      return false;
    } else { // if the tab clicked is NOT the active tab
      $(this).addClass("activeTab"); // add class active to the tab that was clicked
      $(this).siblings().removeClass("activeTab"); //remove class active from other tabs

      $(this).children().filter("div").addClass("activeBorder"); //hide the bottom border with an absolutely positioned div
      $(this).siblings().children().filter("div").removeClass("activeBorder"); // show the bottom border again for non-clicked items


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

  $.getJSON( "https://api.github.com/users/octocat", function( json ) {
    var time = new Date(json.created_at).toLocaleDateString();

     $(".octocatImage").append('<img src="'+json.avatar_url+'" alt="avatar"></img>');//these pull in various json key values for specific elements on the page
     $(".name").html(json.name);
     $(".username").html(json.login);
     $(".org").html(json.company);
    //  $(".city").html(json.location);
     $(".emailAddress").append('<a href="mailto:'+json.email+'">'+json.email+'</a>');
     $(".blog").append('<a href='+json.html_url+'>'+json.html_url+'</a>');
     $(".dateJoined").html(time);
     $(".followers").html(json.followers);
     $(".starred").html(json.starred);
     $(".following").html(json.following);
  });

  var greeting = _.template('<%- p.location %>', { variable: 'p' });
  var renderedHtml = greeting({ location: 'Raleigh, NC' });
  $(".city").html(renderedHtml);

  $.getJSON( "https://api.github.com/users/octocat/repos", function( json ) { //json for the contents under the toggling tabs

    for (var i=0; i<5; i++){
      $(".popRepositoriesList").append('<li class="repoTitle"><span class="octicon octicon-repo"></span>'+json[i].name+'</li><li class="description">'+json[i].description+'</li>');//under the .popRepositoriesList <ul>(s), this appends html directly to the page 5 times.
    }

  });

});
