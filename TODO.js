const add = document.querySelectorAll('.add');
const ulist = document.querySelectorAll('.todos');

add[0].addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = event.target.add.value.trim();
  const newHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>${newTodo}</span>
                      <i class="far fa-trash-alt delete"></i>
                  </li>`;

  if (newTodo.length) {
    ulist[0].innerHTML += newHTML;
    add[0].reset();
  }
});
