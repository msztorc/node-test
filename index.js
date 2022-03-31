'use strict';

const appd = require('appdynamics');
appd.profile({
  controllerHostName: '',
  controllerPort: 443,
  controllerSslEnabled: true,
  accountName: '',
  accountAccessKey: '',
  applicationName: 'test-app',
  tierName: 'test-tier',
  nodeName: 'test-node',
  logging: {
    'logfiles': [
      {
        'root_directory': '/tmp/appd-test',
        'filename': 'echo_%N.log',
        'level': 'TRACE',
        'max_size': 5242880,
        'max_files': 10,
        //'outputType': 'console'
      }
    ]
  }
});

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

// app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
