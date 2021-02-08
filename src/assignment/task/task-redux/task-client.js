const { dispatch } = require('rxjs/internal/observable/pairs');
const {
  taskCreateApi,
  fetchTasksApi,
  taskCancelApi,
  taskDoneApi,
} = require('../api/task-service');
const {
  addAction,
  readAction,
  cancelAction,
  doneAction,
} = require('./store');

const createTaskAsync = (job) => async (dispatch, getState) => {
  const taskData = await taskCreateApi(job)
  dispatch(addAction(taskData));
}

const fetchTasksAsync = async (dispatch, getState) => {
  const tasksData = await fetchTasksApi();
  dispatch(readAction(tasksData)); 
}

const doneTaskAsync = (id) => {
    return async (dispatch, getState) => {
    await taskDoneApi(id) ;
    dispatch(doneAction(id));
  }
}

const cancelTaskAsync = (id) => {
    return async (dispatch, getState) => {
    await taskCancelApi(id) ;
    dispatch(cancelAction(id));
  }
}

module.exports = {
  createTaskAsync,
  fetchTasksAsync,
  doneTaskAsync,
  cancelTaskAsync,
}