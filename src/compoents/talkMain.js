import React, { Component } from 'react';
import Smile from './smile';

export default class extends Component {
  constructor(props){
    super(props)
    this.state={
      text:'',
      smileShow:false
    }
    this.scrollEle = null
  }
  componentDidUpdate(){
    // console.log(this.scrollEle)
    if(this.scrollEle){
      this.scrollEle.scrollTop = 999999
    }
  }
  onChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  onSend=()=>{
    if(this.props.userInfo.name == ''){
      let name = prompt('设置一个花名','阿尔法') || ''
      console.log(name)
      if(name.trim()!=''){
        this.props.setUser({name})
      }else{
        // alert('kong')
      }
      return
    }
    if(this.state.text.trim() == ''){
      alert('输入不能为空')
      return
    }
    this.props.send(this.state.text)
    this.setState({
      text:''
    })
  }
  onKeyDown=(e)=>{
    if(e.keyCode==13){
      this.onSend() 
    }
  }
  onSetUser=()=>{
    let name = prompt('设置一个花名',this.props.userInfo.name) || ''
    if(name.trim()!=''){
      this.props.setUser({name})
    }else{
      // alert('kong')
    }
  }
  onSmile=()=>{
    this.setState({
      smileShow:true
    })
  }
  onEmoji=(text)=>{
    this.setState({
      text:this.state.text+text,
      smileShow:false
    })
  }
  onClear=()=>{
    if(window.confirm('确定此操作，清空后不可恢复!')){
      this.props.clear()
    }
  }
  render(){
    if(this.props.talks.length==0){
      return null
    }
    return(
      <div className="talk-main">
        <div className="talk-top">
          <div className="title">
            {this.props.talks.length>0?this.props.talks[this.props.selectTalkIndex].title:''}
            -
            {this.props.talks.length>0?this.props.talks[this.props.selectTalkIndex].digest:''}
          </div>
          {
            this.props.talkList.length>0?
            <div className="clear" onClick={this.onClear}>清空所有记录</div>
            :null
          }
          <div className="user">
            {this.props.userInfo.name}
            {
              this.props.userInfo.name?
              <button className="edit" onClick={this.onSetUser}>修改</button>
              :null
            }
          </div>
        </div>
        <div className="talk-message" ref={el=>this.scrollEle=el}>
          <ul className="talk-scroll-box">
            {
              this.props.talkList.map(item=>{
                if(item.id != this.props.selectTalkIndex){
                  return null
                }
                const className = this.props.userInfo.name == item.name ? 'me' : ''
                return <li className={className} key={item.time}>
                  <div className="infor">
                    <div className="box">
                      <div className="top">
                        <div className="name">{item.name}</div>
                        <div className="time">{item.time}</div>
                      </div>
                      <div className="message-text">{item.text}</div>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        </div>
        <div className="talk-input">
          <div className="input-box">
            <input className="input" type="text" value={this.state.text} onChange={this.onChange} onKeyDown={this.onKeyDown} />
            <button className="smile" onClick={this.onSmile}>😜</button>
          </div>
          <button className="send" onClick={this.onSend}>发送</button>
          <Smile visibility={this.state.smileShow} onEmoji={this.onEmoji} />
        </div>
      </div>
    )
  }
}

