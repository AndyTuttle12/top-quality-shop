export default function(state = [], action){
	// console.log(action.type);
	// console.log(action.payload);
	switch(action.type){
		case "LOGIN":
			// console.log("Register Reducer fired and called REGISTER");
			return action.payload;
		default:
			return state;
	}
}