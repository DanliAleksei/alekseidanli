const menuicon = document.querySelector('#menubar');
const dropdown = document.querySelector('.dropdown');
const cross = document.querySelector('#cross');

let i = 0;

menuicon.onclick = function open(){
  dropdown.style.display = 'inline-block'
  menuicon.style.display = 'none'
  cross.style.display = 'inline-block'
}
cross.onclick = function close(){
  dropdown.style.display = 'none'
  menuicon.style.display = 'inline-block'
  cross.style.display = 'none'
}

dropdown.onclick = function close(){
  dropdown.style.display = 'none'
  menuicon.style.display = 'inline-block'
  cross.style.display = 'none'
}
