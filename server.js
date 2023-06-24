const http = require('http');
const https = require('https');

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/clearance') {
    try {console.log("info")
      const options = {
        hostname: 'www.sourceforsports.ca',
        path: '/collections/clearance',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const request = https.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
          res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
          res.end(data);
        });
      });

      request.on('error', (error) => {
        console.error(error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'An error occurred' }));
      });

      request.end();
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'An error occurred' }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
});
