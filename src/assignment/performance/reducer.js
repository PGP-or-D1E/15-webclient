const initialState = {
  worker: {
    created: 100,
  },
  task: {
    created: 20,
    done: 30,
    cancel: 50,
  }
};

function getLogTaskCreated(state, action) {
  state.task.created = action.payload.taskCreated;
  return state;
}

function getLogTaskDone(state, action) {
  state.task.done = action.payload.taskDone;
  return state;
}

function getLogTaskCancel(state, action) {
  state.task.cancel = action.payload.taskCancel;
  return state;
}

function getLogWorkerCreated(state, action) {
  state.worker.created = action.payload.workerCreated;
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