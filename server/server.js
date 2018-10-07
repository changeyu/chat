const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',(socket)=>{
	console.log('io connection')
	socket.on('sendmsg',data=>{
		io.emit('recvmsg',data)
	})
})

app.use('/', express.static('./build'))

app.get('/talks',(req,res)=>{
	return res.json({
		code:0,
		talks:[
			{id:0,title:'话题1',digest:'摘要1'},
			{id:1,title:'话题2',digest:'摘要2'},
			{id:2,title:'话题3',digest:'摘要3'},
			{id:3,title:'话题4',digest:'摘要4'},
		]
	})
})

server.listen(80,function(){
	console.log('Node app start at port 80')
})



