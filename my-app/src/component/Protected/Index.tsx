import React from 'react'
import {Route,useLocation,useHistory,Redirect} from 'react-router-dom'
 

interface Props {
  path: string,
  auth:boolean
 
}
let Index: React.FC<Props> = ({ path, ...rest }) => {
  const location = useLocation()
  const history =  useHistory()
  console.log('location',location)
  console.log('rest',rest)
  return (
    <Route path={path} render={({ location }) =>
    rest.auth ? (
      <h1>authenticated</h1>
    ) : (
      <Redirect
        to={{
          pathname: `/about`,
          state: { from: location }
        }}
      />
    )
  }>
      
      
          
        
     
   </Route>
  )
}

export default Index
