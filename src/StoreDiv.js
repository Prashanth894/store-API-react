import React from 'react'
import './App.css'
const StoreDiv = ({data}) => {
    return (
        // <div className='container'>
        //     <div className="row">
        //       {data.map(data => 
        //         <div className="col-4 p-3"width="100%">
                    
        //             {/* <div className="card" style={{"width": "18rem"}}> */}
        //             <img className="card-img-top" src={data.image} style={{"width": "18rem","height":"14rem"}} alt="Card image cap" />
        //             <div className="card-body bg-black ">
        //             <center>
        //             <h3 className="card-title">{data.category}</h3>
                   
        //                 <h5 className="card-title">{`Id :${data.id}`}</h5>
                        
        //                 <h5 className="card-title">{`price :${data.price}`}</h5>
        //                 <h5 className="card-title">{`Rate :${data.rating.rate}`}/-</h5>
        //                 <h5 className="card-title">{`Count :${data.rating.count}`}</h5>
        //                 <a href="#" className="btn btn-danger">order now</a>
        //                 </center>
        //             </div>
        //             </div>
        //         // </div>
        //       )}
        //     </div>
        // </div> 

<div>
<div className="row">
  {data.map(data => 
    <div className="col-md-4 p-2">
        {/* <div className="card" style={{"width": "20rem"}}> */}
        <img className="card-img-top" src={data.image} style={{"width": "18rem","height":"14rem"}}  alt="Card image cap" />
        <div className="card-body bg-black text-white">
        <center>
        <h3 className="card-title">{data.category}</h3>
            <h5 className="card-title">{data.price}</h5>
            <h5 className="card-title">{`Rate :${data.rating.rate}`}/-</h5>
            <h5 className="card-title">{`Count :${data.rating.count}`}</h5>
            {/* <p className="card-text">Calories : {data.recipe.calories}</p> */}
            <a href="#" className="btn btn-danger">order now</a>
        </center>
        </div>
        </div>
    // </div>
  )}
</div>
</div>
    )
}

export default StoreDiv

