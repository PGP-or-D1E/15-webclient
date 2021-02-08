const { store$ } = require('./store');
const {
  createTaskAsync,
  fetchTasksAsync,
  doneTaskAsync,
  cancelTaskAsync,
} = require('./task-client');

const form = document.getElementById('addTask-form');
const input = document.getElementById('task');
const list = document.getElementById('task-list');

form.onsubmit = (event) => {
  event.preventDefault();
  const task = input.value;
  if (!task?.length) {
    return;
  }

  console.log(task);
  store$.dispatch(createTaskAsync(task))
  input.value = '';
}

store$.dispatch(fetchTasksAsync);
store$.subscribe(() => {
  const state = store$.getState();
  render(state);
});

function render(state) {
  list.innerHTML = '';
  for(let i = 0; i < state.length; i++) {
    const task = state[i];
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    td1.innerText = task.id;
    td2.innerText = task.job;
    td3.innerText = task.done;
    td3.onclick = function () {
      store$.dispatch(doneTaskAsync(task.id))
    }
    td4.innerText = task.cancel;
    td4.onclick = function () {
      store$.dispatch(cancelTaskAsync(task.id))
    }
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    list.append(tr);
  }
}