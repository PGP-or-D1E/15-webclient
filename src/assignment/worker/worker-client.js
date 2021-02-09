const { dispatch } = require('rxjs/internal/observable/pairs');
const {
  fetchWorkerApi,
  workerCreateApi,
  workerDeleteApi
} = require('./api/worker-service');
const {
  addAction,
  readAction,
  deleteWorkerAction,
} = require('./store');

const addWorkerAsync = (worker) => {
  return async (dispatch, getState) => {
    const workerData = await workerCreateApi(worker);
    dispatch(addAction(workerData));
  }
}

const fetchWorkerAsync = async (dispatch, getState) => {
  const workers = await fetchWorkerApi();
  dispatch(readAction(workers));
}

const deleteWorkerAsync = (id) => async (dispatch, getState) => {
  await workerDeleteApi(id);
  dispatch(deleteWorkerAction(id));
}

module.exports = {
  addWorkerAsync,
  fetchWorkerAsync,
  deleteWorkerAsync,
}