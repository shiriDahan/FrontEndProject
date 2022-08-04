
export default function reducer(state = {member:false, movie:false}  ,action) {
    switch(action.type){
        case "EDIT-MOVIE":
            return {...state ,movie: action.payload}
        case "EDIT-MEMBER":
            return {...state ,member: action.payload}  
        default:
            return state
    }
}