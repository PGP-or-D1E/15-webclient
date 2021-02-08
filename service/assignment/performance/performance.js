const { read, save, drop } = require('../lib/kv');
const ERROR_KEY_NOT_FOUND = 'key tidak ditemukan';

async function taskLog(data) {
  let taskLogs = await read(data);
  if (!taskLogs) {
    taskLogs = 0;
  }

  const newTaskLogs = taskLogs + 1;
  await save(data, newTaskLogs);
  return newTaskLogs;
}

async function listTask() {
  let tasks = await read('task.created');
  if (!tasks) {
    tasks = 0;
  }

  const result = { taskCreated: tasks };
  return result;
}

async function listTaskDone() {
  let tasks = await read('task.done');
  if (!tasks) {
    tasks = 0;
  }

  const result = { taskDone: tasks };
  return result;
}

async function listTaskCancel() {
  let tasks = await read('task.cancel');
  if (!tasks) {
    tasks = 0;
  }

  const result = { taskCancel: tasks };
  return result;
}

async function listWorkerCreated() {
  let workers = await read('worker.created');
  if (!workers) {
    workers = 0;
  }

  const result = { workerCreated: workers };
  return result;
}

async function dropList(key) {
  let list = await read(key);
  if (!list) {
    throw ERROR_KEY_NOT_FOUND;
  }

  const result = await drop(key);
  return result;
}

async function workerLog(data) {
  let workerLogs = await read(data);
  if (!workerLogs) {
    workerLogs = 0;
  }

  const newWorkerLogs = workerLogs + 1;
  await save(data, newWorkerLogs);
  return newWorkerLogs;
}

module.exports = {
  taskLog,
  listTask,
  listTaskDone,
  listTaskCancel,
  dropList,
  ERROR_KEY_NOT_FOUND,
  workerLog,
  listWorkerCreated,
};
