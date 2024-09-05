document.addEventListener("DOMContentLoaded", function () {
    const horizontalSliderItems = document.querySelectorAll('.slider-horizontal .slider_item');
    horizontalSliderItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        horizontalSliderItems.forEach(i => i.classList.remove('show'));
        item.classList.add('show');
      });
  
      item.addEventListener('mouseout', function () {
        horizontalSliderItems.forEach(i => i.classList.remove('show'));
      });
    });
  
    const verticalSliderItems = document.querySelectorAll('.slider-vertical .slider_item');
    verticalSliderItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        verticalSliderItems.forEach(i => i.classList.remove('show'));
        item.classList.add('show');
      });
  
      item.addEventListener('mouseout', function () {
        verticalSliderItems.forEach(i => i.classList.remove('show'));
      });
    });
  });
  