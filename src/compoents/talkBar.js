import React, { Component } from 'react';

export default function(props){
  return(
		<div className="talk-bar">
			<ul>
				{
					props.talks.map((item,index)=>{
						let className = index == props.selectTalkIndex ? 'select' : ''
						return <li
							className={className}
							key={item.id}
							onClick={()=>{props.select(index)}}
							>{item.title}
						</li>
					})
				}
			</ul>
		</div>
	)
}