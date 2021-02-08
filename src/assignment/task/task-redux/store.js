const {
    createAction,
    createReducer,
    configureStore
} = require("@reduxjs/toolkit");

const {
    defaultState,
    add,
} = require("./reducer");

const addAction = createAction("add");

const calculatorReducer = createReducer(defaultState, {
    [addAction]: add,
})

const store$ = configureStore({
    reducer: tasks,
});

module.exports = {
    addAction,
    store$,
}