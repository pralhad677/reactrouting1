import React from 'react'
import { Route, useLocation, useRouteMatch } from 'react-router-dom'

 

interface Props {
  
 
}
let Index: React.FC<Props> = () => {
  const match = useRouteMatch()
  console.log('match in dog',match)
  const {url,path,params,isExact} = match
console.log(url,path,isExact,params)

          return (
            <div>
              <h1>Dog</h1>
          
             
          
            </div>
          )
        
}

export default Index
