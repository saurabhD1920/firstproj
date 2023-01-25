import { computeHeadingLevel } from '@testing-library/react';
import * as React from 'react';

const Search = () =>{
   const[initial,final]=React.useState('');
   const handler=(event)=>{
    final(event.target.value)
    console.log(initial.split('').length);
   }
    return(
    <div>
        <input type="text" onChange={handler}/>
        <h1>hello there {initial.split("").length}</h1>
    </div>
    );
}
export default Search