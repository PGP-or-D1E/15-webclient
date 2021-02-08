const defaultState = {
    isDone: false,
    isDelete: false,
    images: "",
    tasks: "",
    allImages: [],
    allTasks: []
}

function add(state, action){
    state = {
        isDone: action.payload.isDone,
        isDelete: action.payload.isDelete,
        images: action.payload.images,
        tasks: action.payload.tasks
    }
    state.allImages.push(action.payload.images)
    state.allTasks.push(action.payload.tasks)
    return state;
}

function deleteTask(state, action){
    
}

module.exports = {
    defaultState,
    add,
    deleteTask
  };