export default (state = [], action)=>{
	// console.log(action.type);
	switch(action.type){
		case "GET_HOME":
			return action.payload;
		default: 
			return state;
	}
}