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
        logfiles: 
            [
                {
                    filename: "nodejs_agent_%N.log",
                    level: "TRACE",
                    max_size: 5242880,
                    max_files: 10,
                    // outputType: "console"
                },
                {
                    filename: "nodejs_agent_%N.protolog",
                    level: "TRACE",
                    max_size: 5242880,
                    channel: "protobuf",
                    max_files: 10
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
