const { createServer } = require('http');
const { stdout } = require('process');
const url = require('url');
const { createSvc, updateSvc, doneSvc, cancelSvc, readSvc } = require('./task.service');

let server;

function run() {
  server = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    function respond(statusCode, message) {
      res.statusCode = statusCode || 200;
      res.write(message || '');
      res.end();
      return;
    }

    const uri = url.parse(req.url, true);
    switch (uri.pathname) {
      case '/create':
        if (req.method === 'POST') {
          return createSvc(req, res);
        } else {
          respond(404);
        }
        break;
      case '/update':
        if (req.method === 'POST') {
          return updateSvc(req, res);
        } else {
          respond(404);
        }
        break;
      case '/done':
        if (req.method === 'POST') {
          return doneSvc(req, res);
        } else {
          respond(404);
        }
        break;
      case '/cancel':
        if (req.method === 'POST') {
          return cancelSvc(req, res);
        } else {
          respond(404);
        }
        break;
      case '/read':
        if (req.method === 'GET') {
          return readSvc(req, res);
        } else {
          respond(404);
        }
        break;

      default:
        break;
    }
  });

  const PORT = 8989;
  server.listen(PORT, () => {
    stdout.write(`🚀 server listening on port ${PORT}\n`);
  });
}

module.exports = {
  run,
};
