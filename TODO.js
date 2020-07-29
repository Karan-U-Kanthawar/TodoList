const add = document.querySelectorAll('.add');

add.addEventListener('submit', (event) => {
  event.preventDefualt();
  console.log(event.value);
});
