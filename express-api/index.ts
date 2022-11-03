import express from "express"
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.json({
    ok:true,
    msg:'Todo ok'
})
})

app.listen(port, () => {
  console.log(`Running app listening on port ${port}`)
})