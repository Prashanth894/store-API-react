import React,{useState,useEffect} from 'react'
import StoreDiv from './StoreDiv';
import axios from 'axios'

const App = () => {
  const [Input,setInput] = useState('');
  const [Content,setContent] = useState([]);
  

  var url=`https://fakestoreapi.com/products/category/${Input}`
  

  useEffect(()=>{
    submitHandler();
  },[])
   const submitHandler=async e=>{
    e.preventDefault();
    var result=await axios.get(url)
    console.log(result.data)
    setContent(result.data)
   }
  
  
  
  return (
    <div>
      
      <center>
        <h1 className='bg-black p-3 ' width="100%">Shopping</h1> <br/>
        
       <form onSubmit={submitHandler}>
         <input type="text" value={Input} width="100%" onChange={(e) =>
             setInput(e.target.value)}/>
          <button className='btn btn-primary mt-6'>submit</button> <br/> <br/>   
        
        
        </form>
        {Content.length>=1 ? <StoreDiv   data={Content}/>:null}
      </center>
    </div>
  )
}

export default App