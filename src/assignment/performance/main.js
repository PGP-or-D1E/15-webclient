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
const lastUpWc = document.getElementById('last-upd-wc');
const lastUpTc = document.getElementById('last-upd-tc');
const lastUpTd = document.getElementById('last-upd-td');
const lastUpTcan = document.getElementById('last-upd-tcan');


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
  lastUpWc.innerHTML = state.worker.lastUpdateCreate
  taskCreated.innerHTML = state.task.created;
  lastUpTc.innerHTML = state.task.lastUpdateCreate;
  taskDone.innerHTML = state.task.done;
  lastUpTd.innerHTML = state.task.lastUpdateDone;
  taskCancel.innerHTML = state.task.cancel;
  lastUpTcan.innerHTML = state.task.lastUpdateCancel;
}