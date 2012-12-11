;(function (global) {
  
  
  
  global.addEventListener("load", function () {
    console.log("Dom Loaded");
    getUserTimeline();    
  });
  
  
  var getUserTimeline = function () {
    var self = this, 
      xhr = new XMLHttpRequest();
      
    xhr.open("GET", 'news-ajax/twitter/get-timeline' ,true);
    xhr.addEventListener("load", function (data) {
      var userTimeline = JSON.parse(data.target.response)
      console.log(data);
      console.log(data.target.response);
      console.log(userTimeline);
    });    
    xhr.send();
  }
})(this);