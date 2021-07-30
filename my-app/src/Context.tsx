import React, { Children } from 'react'

interface Props {

}


export interface A {
  auth: boolean,
  //setAuth lao hover grda j type aayo tei deko
  setAuth:React.Dispatch<React.SetStateAction<boolean>>
}
interface B {
  auth:true|false,
  setAuth:React.Dispatch<React.SetStateAction<true|false>>
}
// export const Context = React.createContext<A>({auth:false,setAuth:()=>{}})
// export const Context = React.createContext<A>({auth:false,setAuth:()=>{}})
export const Context = React.createContext<B>({auth:false,setAuth:()=>{}} as B)

export let AuthContext: React.FC<Props> = ({ children }) => {
  
  const [state, setState] = React.useState<boolean>(true)
  console.log('auth in Context', state)
  
  let pp = React.useMemo(() => {
    console.log('bckajs')
    return {
      auth:state,
      setAuth:setState
    }
  }, [state,setState])
  console.log('pp',pp)
  
  return (
    <Context.Provider value={pp }>
        {children}
    </Context.Provider>
  )
}