"use client"

import { createContext, useContext } from "react"

interface SessionContextType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session : any
}

const SessionContext = createContext<SessionContextType | null>(null) ;

export function SessionProvider({children,session}:{
    children : React.ReactNode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    session : any
}) {

    return (
        <SessionContext.Provider value={{session}}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession(){

    const context = useContext(SessionContext) ;

    if(!context){
        throw new Error('useSession must be used inside SessionProvider') ;  
          
    }
    return context ;

}