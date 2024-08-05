$(window).on("load", function () {
  $("#loading").remove();
});

$(function(){

  $("#signin").click(function(e){
    $(".siginUpdiv").toggleClass("active");
    $(".sigindowndiv").toggleClass("active");
    $(".cont").toggleClass("d-none");

    e.preventDefault();
  });
  $(".siginUpdiv").click(function(){
    $(".siginUpdiv").toggleClass("active");
    $(".sigindowndiv").toggleClass("active");
    $(".cont").toggleClass("d-none");
  });
  $(".sigindowndiv").click(function(){
    $(".siginUpdiv").toggleClass("active");
    $(".sigindowndiv").toggleClass("active");
    $(".cont").toggleClass("d-none");
  });
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});
  
});
