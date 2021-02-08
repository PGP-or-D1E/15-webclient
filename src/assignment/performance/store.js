const {
  createAction,
  createReducer,
  configureStore
} = require('@reduxjs/toolkit');
const { 
  initialState,
  getLogTaskCancel,
  getLogTaskCreated,
  getLogTaskDone,
  getLogWorkerCreated,
  reload,
} = require('./reducer');
const thunkMiddleware = require('redux-thunk')

const getLogWorkerCreatedAction = createAction('getLogWorkerCreated');
const getLogTaskCreatedAction = createAction('getLogTaskCreated');
const getLogTaskDoneAction = createAction('getLogTaskDone');
const getLogTaskCancelAction = createAction('getLogTaskCancel');
const reloadAction = createAction('reload');

const performanceReducer = createReducer(initialState, {
  [getLogWorkerCreatedAction]: getLogWorkerCreated, 
  [getLogTaskCreatedAction]: getLogTaskCreated, 
  [getLogTaskDoneAction]: getLogTaskDone, 
  [getLogTaskCancelAction]: getLogTaskCancel, 
  [reloadAction]: reload, 
});

const store$ = configureStore({
  reducer: performanceReducer,
  middleware: [thunkMiddleware.default],
});

module.exports = {
  store$,
  getLogWorkerCreatedAction,
  getLogTaskCreatedAction,
  getLogTaskDoneAction,
  getLogTaskCancelAction,
  reloadAction,
}