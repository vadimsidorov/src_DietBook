const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000
const User = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('./middleware/check-auth')

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-Width, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS, PUT')
  next();
})
app.use(express.json())

app.post('/test', async (req, res) => {
  try{
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password:req.body.password})
    await user.save()
    res.send(user)
  }catch (e) {
    res.status(400).send(e.message)
  }
})
app.post('/login', async(req, res)=>{
  try {
    const user = await User.findOne({email:req.body.email});
    const auth = await bcrypt.compare(req.body.password, user.password)
    console.log(auth)
    if (!auth) {
      return res.status(401)({message: 'Auth failed'})
    }
    const token = jwt.sign({email: req.body.email, password: req.body.password},
      'secret',
      {expiresIn: '1h'})
    res.status(200).json({token})
  } catch (e) {
    res.status(401).send({message: 'Auth failed'})
  }
})

app.listen(port, ()=>{
    console.log('server running on ' + port)
})
