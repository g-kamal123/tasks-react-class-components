import React from 'react'

//Using Class

class Hello extends React.Component{
    render(){
  return (
    <div style={{margin:'50px'}}>Hello World!</div>
  )
    }
}


//using arraow function

// const Hello = ()=>{
//   return (
//     <div>Hello World!</div>
//   )
    
// }

export default Hello //export as default
// export {Hello}    //named export