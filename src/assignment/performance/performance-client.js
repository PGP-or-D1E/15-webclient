const {
  getLogWorkerCreatedAction,
  getLogTaskCreatedAction,
  getLogTaskDoneAction,
  getLogTaskCancelAction,
} = require('./store');
const {
  fetchTaskCancelApi,
  fetchTaskCreatedApi,
  fetchTaskDoneApi,
  fetchWorkerCreatedApi,
} = require('./api/performance-service');


const getLogWorkerCreatedAsync = async (dispatch, getState) => {
    const workerCreated = await fetchWorkerCreatedApi();
    dispatch(getLogWorkerCreatedAction(workerCreated));
}

const getLogTaskCreatedAsync = async (dispatch, getState) => {
    const taskCreated = await fetchTaskCreatedApi();
    dispatch(getLogTaskCreatedAction(taskCreated));
}

const getLogTaskDoneAsync = async (dispatch, getState) => {
    const taskDone = await fetchTaskDoneApi();
    dispatch(getLogTaskDoneAction(taskDone));
}

const getLogTaskCancelAsync = async (dispatch, getState) => {
    const taskCancel = await fetchTaskCancelApi();
    dispatch(getLogTaskCancelAction(taskCancel));
}

module.exports = {
  getLogWorkerCreatedAsync,
  getLogTaskCreatedAsync,
  getLogTaskDoneAsync,
  getLogTaskCancelAsync,
}