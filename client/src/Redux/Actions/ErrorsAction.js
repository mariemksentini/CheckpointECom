import { CLEARERROR, HANDLEERROR } from "../ActionTypes/ErrorsTypes"

export const handleError =(msg)=>(dispatch)=>{
    try {
        const id = Math.random()
        dispatch({
            type : HANDLEERROR,
            payload : {msg, id}
        })

        setTimeout(() => {
            dispatch({
                type : CLEARERROR,
                payload : id
            })
        }, 3000);
    } catch (error) {
        console.log(error)
    }
}