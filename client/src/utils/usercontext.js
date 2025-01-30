import { createContext, useReducer } from "react";

const UserContext=createContext()

const initialState={
    user:null
};

function reducer(state,action){
    const {type,payload}=action
    switch(type){
       case "LOGIN":
        return  {...state,user:payload}
       case "LOGOUT":
        return state.user=null
    }    
}

const UserProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <UserContext.Provider value={{state,dispatch}}>
         {children}   
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}