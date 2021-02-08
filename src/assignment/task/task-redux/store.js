const {
    createAction,
    createReducer,
    configureStore
} = require("@reduxjs/toolkit");
const thunkMiddleware = require('redux-thunk')
const {
    defaultState,
    add,
    read,
    done,
    cancel,
} = require("./reducer");

const addAction = createAction("add");
const readAction = createAction("read");
const doneAction = createAction("done");
const cancelAction = createAction("cancel");

const taskReducer = createReducer(defaultState, {
    [addAction]: add,
    [readAction]: read,
    [doneAction]: done,
    [cancelAction]: cancel,
})

const store$ = configureStore({
    reducer: taskReducer,
    middleware: [thunkMiddleware.default],
});

module.exports = {
    addAction,
    readAction,
    doneAction,
    cancelAction,
    store$,
}