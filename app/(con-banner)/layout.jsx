import React from 'react'
import Counter from './posts/Counter'


// En los layout se puede hacer persistir el estado en las rutas anidadas

const layout = ({children}) => {
   return (
      <div style={{ marginTop: '10px' }}>
         <marquee style={{ background: 'white', color: 'purple', }}>Baner agrupado - antes Layout de los POSTS</marquee>
         {/* <Counter/> */}
         {children}
      </div>
   )
}

export default layout