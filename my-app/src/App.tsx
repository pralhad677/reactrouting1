import React from 'react'
import './App.css'
import { Switch, Route, useRouteMatch,Link,NavLink } from 'react-router-dom'
import ProtectedRoute from './component/Protected/Index'
import About from './component/About/Index'
// import Contact from './component/Contact/Index'
import Contact from './component/Contact/Index'
import Blog from './component/Blog/Index'
import {AuthContext,Context,A} from './Context'

interface Props{

}
let useAuthBool = () => {
  const authMode = React.useContext(Context)
  // if (!authMode.auth) throw new Error('context is not provided')
  return authMode
}

let App: React.FC<Props> = () => { 
  let x = useAuthBool()
  console.log('x',x)
  const data = React.useContext(Context)
  let {auth,setAuth} = data
  let {auth:a,setAuth:b} = x
console.log('data',data)

  // console.log('auth',auth)
  // console.log('setAuth',setAuth)
  
  return (
    <>  
    <nav>
      <ul>
      {/* <li><NavLink to="/">Home</NavLink></li> */}
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/admin">Admin</NavLink></li>
          {/* <h1>{ auth}</h1> */}
      </ul>
    </nav> 
      <Switch>
        <Route exact path='/'>
            <h1>Home</h1>
        </Route>
        <Route exact path="/about" >
         <About />
        </Route>  
        <ProtectedRoute path="/admin" auth={auth} />
         <Route path="/contact"><Contact /></Route>
         <Route path="/blog"><Blog /></Route>
 
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      <button onClick={()=>setAuth(false)}>login</button>
      <button onClick={()=>b(true)}>login1</button>
    </>
  ) 
}

export default App
