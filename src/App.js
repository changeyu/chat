import React, { Component } from 'react';
import TalkBar from './compoents/talkBar'
import TalkMain from './compoents/talkMain'
import {
  getUserInfo,
  setUserInfo,
  getHistory,
  setHistory,
} from './model'

import io from 'socket.io-client'
// 开发使用
// const socket = io('ws://localhost:3001')
const socket = io('ws://')


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // 所有对话消息
      talkList:[],
      userInfo:{
        name:'',
        avatar:'',
      },
      // tab列表
      talks:[],
      selectTalkIndex:0,
    }
    this.talkBarEvent = {
      select : this.talkBarEvent.select.bind(this),
    }
    this.talkMainEvent = {
      send:this.talkMainEvent.send.bind(this),
      clear:this.talkMainEvent.clear.bind(this),
    }
    this.userEvent = {
      setUser:this.userEvent.setUser.bind(this),
    }
  }
  userEvent={
    setUser({name}){
      this.setState({userInfo:{
        ...this.state.userInfo,name
      }},()=>{
        setUserInfo(this.state.userInfo)
      })
    },
    
  }
  talkBarEvent={
    select(index){
      this.setState({selectTalkIndex:index})
    }
  }
  talkMainEvent={
    send(text){
      socket.emit('sendmsg',{
        id:this.state.selectTalkIndex,
        text:text,
        time: new Date().getTime(),
        name:this.state.userInfo.name,
      })
    },
    clear(){
      localStorage.removeItem('charHistory')
      this.setState({
        ...this.state,
        talkList:[]
      })
    },
  }

  componentDidMount(){
    let talkList = getHistory()
    let userInfo = getUserInfo()
    if(talkList){
      this.setState({talkList})
    }
    if(userInfo){
      this.setState({userInfo})
    }
    // fetch('http://localhost:3001/talks')
    fetch('/talks')
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        this.setState({
          talks:res.talks
        })
      })

    socket.on('recvmsg',(data)=>{
      this.setState({talkList:[
        ...this.state.talkList,data
      ]},()=>{
        setHistory(this.state.talkList)
      })
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <TalkBar {...this.state} {...this.talkBarEvent} />
        <TalkMain {...this.state} {...this.talkMainEvent} {...this.userEvent} />
      </React.Fragment>
    )
  }
}

export default App;
