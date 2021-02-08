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

const createWorkerAsync = (worker) => {
  return async (dispatch, getState) => {
    const workerData = await workerCreateApi(worker);
    dispatch(addAction(workerData));
  }
}

const fetchWorkerAsync = (dispatch, getState) => {
  const workers = await fetchWorkerApi();
  dispatch(readAction(workers));
}

const deleteWorkerAsync = (id) => async (dispatch, getState) => {
  await workerDeleteApi(id);
  dispatch(deleteWorkerAction(id));
}

module.exports = {
  createWorkerAsync,
  fetchWorkerAsync,
  deleteWorkerAsync,
}