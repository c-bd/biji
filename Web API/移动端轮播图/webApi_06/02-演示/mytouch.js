function tapEvent(ele,callback){
  var startTime,startX,startY;
  ele.addEventListener('touchstart',function(e){
    if(e.touches.length > 1){
      return;
    }
    startTime = Date.now();
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  ele.addEventListener('touchend',function(e){
    if(e.changedTouches.length > 1){
      return;
    }
    var endTime = Date.now();
    if(endTime - startTime >= 300){
      return;
    }
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    if(Math.abs(endX - startX) >= 10 || Math.abs(endY - startY) >= 10){
      return;
    }
    callback();
  })  
}

function swipeEvent(ele,callback){
  var startX,startY;
  ele.addEventListener('touchstart',function(e){
    if(e.touches.length > 1){
      return;
    }
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  })
  ele.addEventListener('touchend',function(e){
    if(e.changedTouches.length > 1){
      return;
    }
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    if(Math.abs(endX - startX) <= 50){
      return;
    }
    if(Math.abs(endY - startY) >= 50){
      return;
    }
    var direction = endX > startX ? 'right' : 'left';
    callback(e,direction);
  })
}