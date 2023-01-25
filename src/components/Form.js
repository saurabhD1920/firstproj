import React from 'react';

function Form(props){
    const[initialStat,finalState]=React.useState("");
    const Uppercase=()=>{
         let textt=initialStat.toUpperCase();
         finalState(textt);
    }
    const Lowercase=()=>{
        let textt=initialStat.toLowerCase();
        finalState(textt);
   }
    const handleg=(event)=>{
      
      finalState(event.target.value)
      console.log(initialStat.split(" "))
    }

  
    return(
      

   
      <>
      <div className="my-3">
        <label htmlFor="myBox" className="form-label" style={{color:props.inText}}>Textarea</label>
        <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`}  style={{backgroundColor:props.sa}} id="myBox" rows="8" value={initialStat} onChange={handleg}></textarea>
        <button className="btn btn-primary my-2"onClick={Uppercase}>uppercase</button >
        <button className="btn btn-primary mx-2"onClick={Lowercase}>lowercase</button>
        
      </div>
        <div className="container">
            
            <p style={{color:props.inText}}>{initialStat.split(" ").filter(value=>value!="").length} words and {initialStat.trim().length} letters</p>
            <h1 style={{color:props.inText}}>preview</h1>
            <p style={{color:props.inText}}>{initialStat}</p>
        </div>
        </>
    );
}

export default Form