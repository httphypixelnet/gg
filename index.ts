import express from 'express'
import { createServer as createViteServer } from 'vite';
import { createServer } from 'https';
import fs from 'fs';
import config from './vite.config'
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: true, ...config },
  })

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  // When the server restarts (for example after the user modifies
  // vite.config.js), `vite.middlewares` is still going to be the same
  // reference (with a new internal stack of Vite and plugin-injected
  // middlewares). The following is valid even after restarts.
  
  app.post('/api/email', express.json(), (req, res) => {
    if (typeof req.body === 'object' && req.body.email && typeof req.body.email === "string") {
        console.log("user email from request: " + req.body.email)
    }
    res.sendStatus(204)
  })

  app.use(vite.middlewares)
  createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app).listen(443, () => { console.log('listening on port 443')})