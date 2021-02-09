// const Busboy = require('busboy');
// const { Writable } = require('stream');
const { client } = require('./client');

// function createWorker(req, res) {
//   return new Promise((resolve, reject) => {
//     const busboy = new Busboy({ headers: req.headers });

//     function abort() {
//       req.unpipe(busboy);
//       if (!req.aborted) {
//         res.statusCode = 413;
//         res.end();
//       }
//     }

//     let data = {};

//     busboy.on('field', (fieldname, val) => {
//       if (
//         ['nama', 'email', 'telepon', 'alamat', 'biografi'].includes(fieldname)
//       ) {
//         data[fieldname] = val;
//       }
//     });

//     busboy.on('finish', () => {
//       resolve(data);
//     });

//     req.on('aborted', abort);
//     busboy.on('error', abort);

//     req.pipe(busboy);
//   });
// }

const PORT = 7000;
async function fetchWorkerApi() {
  return await client.get(`http://localhost:${PORT}/read`);
}

async function workerCreateApi(worker) {
  return await client.post(`http://localhost:${PORT}/create`, worker);
}

async function workerDeleteApi(id) {
  return await client.get(`http://localhost:${PORT}/delete?id=${id}`);
}

module.exports = {
  // createWorker,
  fetchWorkerApi,
  workerCreateApi,
  workerDeleteApi,
};
