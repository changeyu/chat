import React, { Component } from 'react';

export default function(props){
  const smile = '😠,😩,😲,😞,😵,😰,😒,😍,😤,😜,😝,😋,😘,😚,😷,😳,😃,😅,😆,😁,😂,😊,😄,😢,😭,😨,😣,😡,😌,😖,😔,😱,😪,😏,😓,😥,😫,😉,😺,😸,😹,😽,😻,😿,😾,😼,🙀,🙅,🙆,🙇,🙈,🙊,🙉,🙋,🙌,🙍,🙎,🙏'
  const smilearr = smile.split(',')
  const onEmoji=(e)=>{
    props.onEmoji(e.target.innerText)
  }
  if(!props.visibility){
    return null
  }
  return(
		<div className="talk-smile">
			<ul>
				{
					smilearr.map((item,index)=>{
						return <li
              onClick={onEmoji}
							key={index}
							>{item}
						</li>
					})
				}
			</ul>
		</div>
	)
}