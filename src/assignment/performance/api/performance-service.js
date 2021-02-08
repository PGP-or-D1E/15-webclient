const { client } = require('./client');

async function fetchWorkerCreatedApi() {
  return await client.get('http://localhost:3232/worker/created');
}

async function fetchTaskCreatedApi() {
  return await client.get('http://localhost:3232/task/created');
}

async function fetchTaskDoneApi() {
  return await client.get('http://localhost:3232/task/created');
}

async function fetchTaskCancelApi() {
  return await client.get('http://localhost:3232/task/created');
}

module.exports = {
  fetchWorkerCreatedApi,
  fetchTaskCreatedApi,
  fetchTaskDoneApi,
  fetchTaskCancelApi
}