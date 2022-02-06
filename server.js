const express = require('express')
const next = require('next');
const ApiRoutes = require('./apis/api');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// code from next js github -> https://github.com/vercel/next.js/blob/canary/examples/custom-server-express/server.js
app.prepare().then(() => {
  const server = express();
  
  server.use(ApiRoutes);

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
});