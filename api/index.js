const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res
  .status(200)
  .send({ mensagem: 'Boas vindas à API' }))

app.listen(port, () => console.log(`Server running at port ${port}`))

module.exports = app