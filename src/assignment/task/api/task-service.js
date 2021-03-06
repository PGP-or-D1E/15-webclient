const { client } = require('./client');

async function fetchTasksApi() {
  return await client.get('http://localhost:8989/read');
}

async function taskCreateApi(job) {
  return await client.post('http://localhost:8989/create', { job });
}

async function taskDoneApi(id) {
  return await client.post('http://localhost:8989/done', { id });
}

async function taskCancelApi(id) {
  return await client.post('http://localhost:8989/cancel', { id });
}

module.exports = {
  fetchTasksApi,
  taskCreateApi,
  taskDoneApi,
  taskCancelApi,
}