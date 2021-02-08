const defaultState = []

function add(state, action){
    state.push({ id: action.payload.id, job: action.payload.job, done: false, cancel: false });
    return state;
}

function read(state, action) {
    state = action.payload;
    return state;
}

function done(state, action) {
    const task = state.find((t) => t.id === action.payload);
    task.done = true;
    return state;
}

function cancel(state, action) {
    const task = state.find((t) => t.id === action.payload);
    task.cancel = true;
    return state;
}

module.exports = {
    defaultState,
    add,
    read,
    done,
    cancel,
};
