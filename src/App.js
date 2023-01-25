import * as React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Form from './components/Form';
function App() {
    const [mode,setMode]=React.useState('light');
    const [sa,Upsa]=React.useState('white');
    const [inText,Uptext]=React.useState("black");
    const toggleMode=()=>{
        if(mode==='light'){
          
            setMode("dark");
            document.body.style.backgroundColor='#212529';
            
                Upsa("#212529");
                Uptext("white");
            
            
               
            
            
            
        }
        else{
            setMode("light");
            document.body.style.backgroundColor='white';
            Upsa("white")
            Uptext("black");
        }
    }
return(
<div>
<Navbar text="TextWriter" mode={mode} toggleMode={toggleMode}/>
<Form sa={sa} inText={inText} mode={mode}/>
</div>
);

}

export default App;

