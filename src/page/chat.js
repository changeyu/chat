import React, { Component } from 'react'
import io from 'socket.io-client'
const socket = io('ws://localhost:8090')

export default class extends Component {
	constructor(props){
		super(props)
		this.state={
			text:''
		}
	}
	componentDidMount(){
    socket.on('recvmsg',(data)=>{
			console.log(data)
			this.props.pushList(data)
      // this.setState({list:[
      //   ...this.state.list,data
      // ]})
    })
	}
	onSend=(e)=>{
    socket.emit('sendmsg',{
      text:this.state.text,
			time: new Date().getTime(),
			user:this.props.userInfo
    })
    this.setState({text:''})
  }
  onChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  render(){
		return(
			<div>
				<div>
					<button onClick={this.props.loginOut}>loginOut</button>
				</div>
				<div>
					<h2>聊天室</h2>
				</div>
				<div>
					<ul>
						{
							this.props.list.map(item=>{
								return <li key={item.time}>
									{item.time} - {item.user} - {item.text}
								</li>
							})
						}
					</ul>
				</div>
				<div>
					<input value={this.state.text} onChange={this.onChange} type="text"/>
					<button onClick={this.onSend}>send</button>
				</div>
			</div>
		)
	}
}