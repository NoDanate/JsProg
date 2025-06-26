document.addEventListener('DOMContentLoaded', function() {
  const rubberBlock = document.createElement('div');
  rubberBlock.style.position = 'absolute';
  rubberBlock.style.top = '0';
  rubberBlock.style.left = '0';
  rubberBlock.style.backgroundColor = 'rgba(0, 0, 255, 0.3)';
  rubberBlock.style.border = '1px solid blue';
  document.body.appendChild(rubberBlock);
  
  let isMouseDown = false;
  
  document.addEventListener('mousedown', function(event) {
    if (event.button === 0) { // Левая кнопка мыши
      isMouseDown = true;
      updateBlockSize(event);
    }
  });
  
  document.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
      updateBlockSize(event);
    }
  });
  
  document.addEventListener('mouseup', function() {
    isMouseDown = false;
  });
  
  function updateBlockSize(event) {
    rubberBlock.style.width = event.clientX + 'px';
    rubberBlock.style.height = event.clientY + 'px';
  }
});