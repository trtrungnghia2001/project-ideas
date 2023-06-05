import React, { useContext, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children})=>{

    const [toggle, setToggle] = useState(true)

    return(
        <AppContext.Provider value={{toggle, setToggle}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = ()=>useContext(AppContext)


export {AppContext, useAppContext, AppProvider}