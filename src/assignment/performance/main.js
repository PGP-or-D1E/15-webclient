const { store$, reloadAction } = require('./store');
const {
  getLogWorkerCreatedAsync,
  getLogTaskCancelAsync,
  getLogTaskCreatedAsync,
  getLogTaskDoneAsync,
} = require('./performance-client');
require('./main.css');

const btnWorker = document.getElementById('btn-worker');
const btnTaskCreated = document.getElementById('btn-tcreated');
const btnTaskDone = document.getElementById('btn-tdone');
const btnTaskCancel = document.getElementById('btn-tcancel');
const workerCreated = document.getElementById('worker-created');
const taskCreated = document.getElementById('task-created');
const taskDone = document.getElementById('task-done');
const taskCancel = document.getElementById('task-cancel');

store$.subscribe(() => {
  const state = store$.getState();
  render(state);
});

btnWorker.onclick = function() {
  store$.dispatch(getLogWorkerCreatedAsync);
}

btnTaskCreated.onclick = function() {
  store$.dispatch(getLogTaskCreatedAsync);
}

btnTaskDone.onclick = function() {
  store$.dispatch(getLogTaskDoneAsync);
}

btnTaskCancel.onclick = function() {
  store$.dispatch(getLogTaskCancelAsync);
}

function render(state) {
  workerCreated.innerHTML = state.worker.created;
  taskCreated.innerHTML = state.task.created;
  taskDone.innerHTML = state.task.done;
  taskCancel.innerHTML = state.task.cancel;
}