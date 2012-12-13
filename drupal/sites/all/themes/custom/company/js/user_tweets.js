;(function (global) {  
  global.config = {
    interval: '5000',
    targetPluginId: 'footer-bottom-dash'
  }
  global.addEventListener("load", function () {   
    setInterval(getUserTimeline, global.config.interval);    
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
    var htmlTarget = document.getElementById(global.config.targetPluginId);
    doc
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
    xhr.addEventListener("error", function () {
      throw new Error("Could not load widget template file.");
    });
    xhr.send();
  }  
})(this);