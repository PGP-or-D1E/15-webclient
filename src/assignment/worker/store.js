const {
  createAction,
  createReducer,
  configureStore,
} = require('@reduxjs/toolkit');
const {
  initialState,
  add,
  read,
  deleteWorker,
} = require('./reducer');
const thunkMiddleware = require('redux-thunk');

const addAction = createAction('add');
const readAction = createAction('read');
const deleteWorkerAction = createAction('deleteWorker');

const workerReducer = createReducer(initialState, {
  [addAction]: add,
  [readAction]: read,
  [deleteWorkerAction]: deleteWorker,
});

const store$ = configureStore({
  reducer: workerReducer,
  middleware: [thunkMiddleware.default],
});

module.exports = {
  addAction,
  readAction,
  deleteWorkerAction,
  store$,
}