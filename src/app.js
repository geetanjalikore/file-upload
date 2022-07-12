const { createRouter, notFoundHandler } = require('server');
const { logReq } = require('./handlers/logReq.js');
const { receiveBodyParams } = require('./handlers/receiveBodyParams.js');
const { parseBodyParams } = require('./handlers/parseBodyParams.js');
const { injectCookies } = require('./handlers/injectCookies.js');
const { injectSession } = require('./handlers/injectSession.js');
const { serveStatic } = require('./handlers/serveStatic.js');
const { uploadHandler } = require('./handlers/uploadHandler.js');
const { parseParams } = require('./handlers/parseParams.js');

const sessions = {};

const app = (path, uploadPath) => createRouter(
  logReq,
  receiveBodyParams,
  injectCookies,
  injectSession(sessions),
  uploadHandler(uploadPath),
  serveStatic(path),
  notFoundHandler
);

module.exports = { app };
