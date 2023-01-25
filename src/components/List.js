import * as React from 'react';

const list=[{
name:'saurabh',
rolln0:'21bee109'

},{
  name:'gaurav',
  rollno:'21bcs098'
},{
  name:'rohit',
  rollno:'21bch061' 
}]
function List(){
  return(
<div>
{list.map(function(item){
  return <li>{item.name}</li>
})}
</div>
  );
}
export default List