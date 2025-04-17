const div1 = document.getElementById('div1');
  let isDrag = false;
  let offsetX = 0;
  let offsetY = 0;

  div1.onmousedown = function (e) {
    isDrag = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    div1.style.cursor = 'grabbing';
  };

  document.onmouseup = function () {
    isDrag = false;
    div1.style.cursor = 'grab';
  };

  document.onpointermove = function (e) {
    if (isDrag) {
      let borderLeft = e.pageX - offsetX;
      let borderHeight = e.pageY - offsetY;

      const maxLeft = window.innerWidth - div1.offsetWidth;
      const maxTop = window.innerHeight - div1.offsetHeight;

      borderLeft = Math.max(0, Math.min(maxLeft, borderLeft));
      borderHeight = Math.max(0, Math.min(maxTop, borderHeight));

      div1.style.top = borderHeight + 'px';
      div1.style.left = borderLeft + 'px';
    }


  };
      /*div1.style.left = (e.pageX - offsetX) + 'px';
      div1.style.top = (e.pageY - offsetY) + 'px';*/