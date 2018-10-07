
const getUserInfo=()=>{
	let userInfo = localStorage.getItem('userInfo')
	if(userInfo){
		return JSON.parse(userInfo)
	}else{
		return null
	}
}
const setUserInfo=({name})=>{
	let info = {name}
	localStorage.setItem('userInfo',JSON.stringify(info))
}
const delUserInfo=({name})=>{
	localStorage.removeItem('userInfo')
}
const setHistory=(data)=>{
	localStorage.setItem('charHistory',JSON.stringify(data))
}
const getHistory=(data)=>{
	let strCharHistory = localStorage.getItem('charHistory')
	if(strCharHistory){
		return JSON.parse(strCharHistory)
	}else{
		return null
	}
}

export {
	getUserInfo,
	setUserInfo,
	delUserInfo,
	getHistory,
	setHistory,
}