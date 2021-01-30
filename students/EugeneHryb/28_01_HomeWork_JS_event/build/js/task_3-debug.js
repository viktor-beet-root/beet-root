"use strict";

(function () {
  var resizingDiv = document.querySelector('.resizing-block');
  resizingDiv.addEventListener('mousedown', resizingBlockHandler);

  function resizingBlockHandler(event) {
    var resizingElement = event.currentTarget;
    var clickX = event.clientX - resizingElement.offsetLeft;
    var clickY = event.clientY - resizingElement.offsetTop;
    var elementWidh = resizingElement.clientWidth;
    var elementHeight = resizingElement.clientHeight;

    if (elementWidh - clickX < 20 && elementHeight - clickY < 20) {
      var resize = function resize(event) {
        dx = event.x - x;
        dy = event.y - y;
        x = event.x;
        y = event.y;
        elementWidh = elementWidh + dx;
        elementHeight = elementHeight + dy;
        resizingElement.style.height = elementHeight + 'px';
        resizingElement.style.width = elementWidh + 'px';
      };

      var closeResize = function closeResize(event) {
        resizingElement.removeEventListener('mousemove', resize);
        resizingElement.style.position = '';
        resizingElement.style.top = '';
        resizingElement.style.left = '';
        resizingElement.style.userSelect = '';
      };

      resizingElement.style.userSelect = 'none';
      resizingElement.style.top = resizingElement.offsetTop + 'px';
      resizingElement.style.left = resizingElement.offsetLeft + 'px';
      resizingElement.style.position = 'fixed';
      resizingElement.addEventListener('mousemove', resize);
      var x = event.clientX;
      var y = event.clientY;
      var dx = 0;
      var dy = 0;
      resizingElement.addEventListener('mouseup', closeResize);
    }
  }
})();