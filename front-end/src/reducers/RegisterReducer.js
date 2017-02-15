export default function(state = [], action){
	console.log(action.type);
	switch(action.type){
		case "REGISTER":
			console.log("Register Reducer fired and called REGISTER");
			return action.payload;
			break;
		default:
			return state;
	}
}