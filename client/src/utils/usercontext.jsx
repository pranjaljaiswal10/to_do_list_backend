import { createContext, useReducer } from "react";

const UserContext=createContext()

const initialState={
    userData:null
};

function reducer(state,action){
    const {type,payload}=action
    switch(type){
       case "LOGIN":
        return  {...state,userData:payload}
       case "LOGOUT":
        return {...state,userData:null}
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