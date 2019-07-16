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
app.use('/media', express.static('./view'))

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


const jks = [
	{ url: "http://www.85105052.com/admin.php?url=", title: "综合线路⑨" },
	{ url: "https://yun.odflv.com/?url=", title: "综合线路⑪(不太稳定)" },
	{ url: "http://www.82190555.com/video.php?url=", title: "综合线路⑫" },
	{ url: "http://jx.598110.com/zuida.php?url=", title: "综合线路③" },
	{ url: "http://jx.598110.com/duo/index.php?url=", title: "综合线路②" },
	{ url: "http://jx.598110.com/index.php?url=", title: "综合线路①" },
	{ url: "http://jx.zzit.cc/tv.php?url=", title: "全网二 稳定性未知" },
	{ url: "http://jx.598110.com/index.php?url=", title: "腾讯 别的不能用时用" },
	{ url: "http://le.206dy.com/vip.php?url=", title: "优酷 稳定" },
	{ url: "http://api.hlglwl.com/jx.php?url=", title: "腾讯 ☆ 爱奇艺 √ 优酷" },
	{ url: "http://www.1717yun.com/jx/ty.php?url=", title: "通用vip接口3" },
	{ url: "https://jx.128sp.com/jxjx/?url=", title: "玩的嗨——42-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://py.ha12.xyz/sos/index.php?url=", title: "玩的嗨——41-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://jx.hezeshi.net/ce/jlexi.php?url=", title: "玩的嗨—40-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://beaacc.com/api.php?url=", title: "玩的嗨——39-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://cdn.yangju.vip/k/?url=", title: "玩的嗨——38-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://www.myxin.top/jx/api/?url=", title: "玩的嗨——37-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.cesms.cn/?url=", title: "玩的嗨——36-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.ovov.cc/?url=", title: "玩的嗨——35-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.618ge.com/?url=", title: "玩的嗨——34-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.598110.com/?url=", title: "玩的嗨——33-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://api.azzc.cn/?url=", title: "玩的嗨——32-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.hanximeng.com/api.php?url=", title: "玩的嗨——31-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://vip.jlsprh.com/v/4.php?url=", title: "玩的嗨——30-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.aeidu.cn/index.php?url=", title: "玩的嗨——29-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://z1.m1907.cn/?jx=", title: "玩的嗨——28-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://jqaaa.com/jx.php?url=", title: "玩的嗨——25-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://www.1717yun.com/jx/ty.php?url=", title: "玩的嗨——24-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://player.baodai.org/ipsign/player.php?v=", title: "玩的嗨——23-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://ejiafarm.com/jx.php?url=", title: "玩的嗨——22-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://000o.cc/jx/ty.php?url=", title: "玩的嗨——21-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://api.xiguaimg.com/odflv105/index.php?url=", title: "玩的嗨——20-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://030e.com/0302/?url=", title: "玩的嗨——19-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://app.baiyug.cn:2019/vip/?url=", title: "玩的嗨——18-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.pucms.com/jx/api/?url=", title: "玩的嗨——17-若接口失效可反馈！QQ群:340569308 " },
	{ url: "http://api.smq1.com/?url=", title: "玩的嗨——15-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://17kyun.com/api.php?url=", title: "玩的嗨——16-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://www.luckyblank.cn/wuxinjx/?url=", title: "玩的嗨——14-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://jx.618g.com/?url=", title: "玩的嗨——13-若接口失效可反馈！QQ群:340569308" },
	{ url: "https://jiexi.071811.cc/jx.php?url=", title: "玩的嗨——12-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://jx.api.163ren.com/vod.php?url=", title: "玩的嗨——11-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.wlzhan.com/sudu/?url=", title: "玩的嗨——10-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.nepian.com/ckparse/?url=", title: "玩的嗨——9-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://beaacc.com/api.php?url=", title: "玩的嗨——8-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.bbbbbb.me/jx/?url=", title: "玩的嗨——7-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.51ckm.com/jx.php?url=", title: "玩的嗨——6-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://wwwhe44.92fz.cn/4.php?pass=1&url=", title: "玩的嗨——5-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://www.3aym.cn/?url=", title: "玩的嗨——4-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://2gty.com/apiurl/yun.php?url=", title: "玩的嗨——3-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://api.sigujx.com/?url=", title: "玩的嗨——2-若接口失效可反馈！QQ群:340569308" },
	{ url: "http://vip.wandhi.com/?v=", title: "玩的嗨——1-若接口失效可反馈！QQ群:340569308" },
];


