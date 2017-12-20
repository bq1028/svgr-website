const bodyParser = require('body-parser')
const next = require('next')
const express = require('express')
const svgr = require('svgr').default

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.post('/api/svgr', bodyParser.json(), (req, res) => {
    svgr(req.body.code, req.body.options)
      .then(output => {
        res.send({ output })
      })
      .catch(error => {
        res.send({ error: error.message })
      })
  })

  server.get('*', handle)

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
