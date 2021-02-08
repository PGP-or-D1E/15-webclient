const {
  getLogWorkerCreatedAction,
  getLogTaskCreatedAction,
  getLogTaskDoneAction,
  getLogTaskCancelAction,
} = require('./store');


const getLogWorkerCreatedAsync = (dispatch, getState) => {
  setTimeout(()=> {
    const workerCreated = { 'workerCreated': 1024 };
    dispatch(getLogWorkerCreatedAction(workerCreated));
  }, 1000);
}

const getLogTaskCreatedAsync = (dispatch, getState) => {
  setTimeout(()=> {
    const taskCreated = { 'taskCreated': 2048 };
    dispatch(getLogTaskCreatedAction(taskCreated));
  }, 1000);
}

const getLogTaskDoneAsync = (dispatch, getState) => {
  setTimeout(()=> {
    const taskDone = { 'taskDone': 256 };
    dispatch(getLogTaskDoneAction(taskDone));
  }, 1000);
}

const getLogTaskCancelAsync = (dispatch, getState) => {
  setTimeout(()=> {
    const taskCancel = { 'taskCancel': 123 };
    dispatch(getLogTaskCancelAction(taskCancel));
  }, 1000);
}

module.exports = {
  getLogWorkerCreatedAsync,
  getLogTaskCreatedAsync,
  getLogTaskDoneAsync,
  getLogTaskCancelAsync,
}