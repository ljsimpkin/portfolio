console.log("Welcome to my site!");

// search for shuffle variable
function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

var temp = document.getElementsByTagName("template")[0];
var clon = temp.content.cloneNode(true);

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var i;
var shuff = [];
for (i = 0; i < projects.length; i++){
  shuff[i] = i;
}

// toggle shuffle on or off by adding &shuffle=off to url

if (getQueryVariable("shuffle") != "off") {
  shuff = shuffle(shuff);
}

for (i = 0; i < projects.length; i++) {
  // if (projects[shuff[i]]['group'] == 'project'){
    clon.getElementById("title").innerHTML = projects[shuff[i]]['title'];
    clon.getElementById("description").innerHTML = projects[shuff[i]]['description'];
    clon.getElementById("url").href = projects[shuff[i]]['url']
    clon.getElementById("src").src = projects[shuff[i]]['src']
    clon.getElementById("colour").classList.add(projects[shuff[i]]['group']);
    // clon.getElementsByClassName("colour").id = "blue"
    document.getElementById("add_after_me").appendChild(clon);
    clon = temp.content.cloneNode(true);
  // }
}

//toggle buttons for grouping projects, adventure, and learning
$(document).ready(function(){
  $(".project-button").click(function(){
    $(".project").toggleClass("hide");
    $(".project-button").toggleClass("button-grey");
  });
});
$(document).ready(function(){
  $(".adventure-button").click(function(){
    $(".adventure").toggleClass("hide");
    $(".adventure-button").toggleClass("button-grey");
  });
});
$(document).ready(function(){
  $(".learning-button").click(function(){
    $(".learning").toggleClass("hide");
    $(".learning-button").toggleClass("button-grey");
  });
});