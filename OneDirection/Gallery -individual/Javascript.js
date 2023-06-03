//js for bog images
const modalTxt = document.querySelector(".pic-text");
document.querySelectorAll('.imagecontainer img').forEach(Image =>{
Image.onclick = () =>{
  document.querySelector('.pop-up-image').style.display = 'block';
  document.querySelector('.pop-up-image img').src = Image.getAttribute('src');
  modalTxt.innerHTML = Image.alt;
  modalTxt.style.display = 'block';
}
}); 

// js part for big image's short introductions
document.querySelector('.pop-up-image span').onclick = () =>{
document.querySelector('.pop-up-image').style.display = 'none';
modalTxt.style.display = 'none';

} 

// function for image hover part
function big(x) {
x.style.height = "380px";
x.style.width = "330px";
}

function normal(x) {
x.style.height = "350px";
x.style.width = "300px";
}