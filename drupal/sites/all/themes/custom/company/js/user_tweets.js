;(function (global) {  
  
  global.addEventListener("load", function () {
    console.log("Dom Loaded");
    getUserTimeline();    
  });    
  
  var updateTemplate = function(userTimeline) {    
    var itemCont = 0;
    var listContainer = '<div class="myTweeterList">';
    listContainer = listContainer + '<ul>';
    for(itemCont; itemCont < userTimeline.data.length; itemCont++) {
      listContainer = listContainer + '<li>';
      listContainer = listContainer + userTimeline.data[itemCont].text;
      listContainer = listContainer + '</li>';
    }
    listContainer = listContainer + '</ul>';
    listContainer = listContainer + '</div>';    
    var htmlTarget = document.getElementById('footer-bottom-dash');
    htmlTarget.innerHTML = listContainer;
  }
  
  var getUserTimeline = function () {
    var self = this, 
      xhr = new XMLHttpRequest();      
    xhr.open("GET", 'news-ajax/twitter/get-timeline');
    xhr.addEventListener("load", function (data) {

      var userTimeline = JSON.parse(data.target.response)
      updateTemplate(userTimeline);      
    });    
    xhr.send();
  }
  
})(this);