import axios from 'axios'
import { CURRENT, FAIL, LOGIN, REGISTER } from '../ActionTypes/AuthTypes'
import { handleError } from './ErrorsAction'
export const register =(newUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/signUp', newUser)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate('/Profil')
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
        console.log(error)
    }
}

export const logIn =(coordUser, navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/signIn', coordUser)
        dispatch({
            type : LOGIN,
            payload : res.data
        })
        navigate('/Profil')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data.errors
        })
    }
}

export const current=()=>async(dispatch)=>{
    try {
        const config = {
            headers : {
                autho : localStorage.getItem('token')
            }
        }

        const res = await axios.get('/api/auth/getCurrentUser', config)

        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data.errors
        })
    }
}