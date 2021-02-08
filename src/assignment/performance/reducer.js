const { getTime } = require('./utils');

const initialState = {
  worker: {
    created: 0,
    lastUpdateCreate: '',
  },
  task: {
    created: 0,
    lastUpdateCreate: '',
    done: 0,
    lastUpdateDone: '',
    cancel: 0,
    lastUpdateCancel: '',
  }
};

function getLogTaskCreated(state, action) {
  state.task.created = action.payload.taskCreated;
  state.task.lastUpdateCreate = getTime();
  return state;
}

function getLogTaskDone(state, action) {
  state.task.done = action.payload.taskDone;
  state.task.lastUpdateDone = getTime();
  return state;
}

function getLogTaskCancel(state, action) {
  state.task.cancel = action.payload.taskCancel;
  state.task.lastUpdateCancel = getTime();
  return state;
}

function getLogWorkerCreated(state, action) {
  state.worker.created = action.payload.workerCreated;
  state.worker.lastUpdateCreate = getTime();
  return state;
}

function reload(state, action) {
  return state
}

module.exports = {
  getLogTaskCancel,
  getLogTaskDone,
  getLogTaskCreated,
  getLogWorkerCreated,
  initialState,
  reload,
}