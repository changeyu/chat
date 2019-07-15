const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 80
// 跨域设置
const allowCrossDomain = function (req, res, next) {
  //自定义中间件，设置跨域需要的响应头。
  res.header('Access-Control-Allow-Origin', '*')
  next()
}

io.on('connection',(socket)=>{
	// console.log('io connection')
	socket.on('sendmsg',data=>{
		io.emit('recvmsg',data)
	})
})

app.use(allowCrossDomain)

app.use('/', express.static('./build'))

app.get('/talks',(req,res)=>{
	return res.json({
		code:0,
		talks:[
			{id:0,title:'话题1',digest:'摘要1'},
			{id:1,title:'话题2',digest:'摘要2'},
		]
	})
})

server.listen(PORT,function(){
	console.log(`Node app start at port ${PORT}`)
})



