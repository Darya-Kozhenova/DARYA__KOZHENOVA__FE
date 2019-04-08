var field = document.getElementById('placeD');
var donut = document.getElementById('donut');
field.onclick = function moveDonut(event) {
    var fieldCoord = this.getBoundingClientRect();
    var fieldInnerCoord = {
        top: fieldCoord.top + field.clientTop,
        left: fieldCoord.left + field.clientLeft
    };
    var donutCoord = {
        top: event.clientY - fieldInnerCoord.top - donut.clientHeight,
        left: event.clientX - fieldInnerCoord.left - donut.clientWidth 
      };
      if (donutCoord.top < 0) donutCoord.top = 0;

      if (donutCoord.left < 0) donutCoord.left = 0;

      if (donutCoord.left + donut.clientWidth > field.clientWidth) {
        donutCoord.left = field.clientWidth - donut.clientWidth;
      }

      if (donutCoord.top + donut.clientHeight > field.clientHeight) {
        donutCoord.top = field.clientHeight - donut.clientHeight;
      }

      donut.style.left = donutCoord.left + 'px';
      donut.style.top = donutCoord.top + 'px';
}