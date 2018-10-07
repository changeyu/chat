import React, { Component } from 'react';

export default class extends Component {
	constructor(props){
		super(props)
		this.state={
			text:''
		}
	}
	onChange=(e)=>{
		this.setState({text:e.target.value})
	}
	onClick=()=>{
		this.props.login(this.state.text)
	}
  render(){
		return(
			<div>
				输入昵称
				<input
					value={this.state.text}
					type="text" 
					onChange={this.onChange}
				/>
				<button onClick={this.onClick}>确定</button>
			</div>
		)
	}
}