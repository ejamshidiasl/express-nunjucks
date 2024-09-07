const express = require('express')
const nunjucks = require('nunjucks')

const port = 3000
const app = express()
app.use(express.static('njk_public'))

nunjucks.configure('njk_views', {
  autoescape: true,
  express: app
})

// -------------------- ROUTES --------------------
app.get('/', (req, res) => {
  res.render('index.html', { name: 'Esmail' })
})
// ---------------- END OF ROUTES -----------------

app.listen(port, (err) => {
  console.log(err)
})