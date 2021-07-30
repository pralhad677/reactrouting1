import React from 'react'
import { Route, useLocation, useRouteMatch,NavLink,Switch } from 'react-router-dom'
import Cat from '../Nested/Cats'
import Dog from '../Nested/Dogs'
import Mouse from '../Nested/Mouse'


 

interface Props {
  
 
}
let Index: React.FC<Props> = () => {
//   const location = useLocation()
  const match = useRouteMatch()
  console.log('match',match)
  const {url,path,params,isExact} = match
console.log(url,path,isExact,params)

  
  // console.log(location)
          return (
            <div>
              <h1>Blog</h1>
              <ul>
                <li><NavLink to={`${url}/dog`}>Dog</NavLink></li>
                <li><NavLink to={`${url}/cat`}>Cat</NavLink></li>
                <li><NavLink to={`${url}/mouse`}>Mouse</NavLink></li>
              </ul>
              <Switch>
              <Route path={`${path}/dog`}><Dog /></Route>
              <Route path={`${path}/cat`}><Cat /></Route>
              <Route path={`${path}/mouse`}><Mouse /></Route>
              </Switch>
               
            </div>
          )
        
}

export default Index
