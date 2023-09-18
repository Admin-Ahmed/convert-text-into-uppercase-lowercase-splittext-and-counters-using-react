import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Form(props) {
    const handle = ()=>{
    if (text === '') {
        alert('Please enter input value');
    }
    else {
        alert(text);
        
    }
}
    const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        }
        const clearFields = ()=>{
            // newText = '';
            setText("");
            }
            const testString = ()=>{
                let newText  = text.replace(/(.{4})/g, '$1 ');
                setText(newText);
                }
    const handleOnChange = (event)=> {
    setText(event.target.value);

    // const regex = /^[0-9y]+$/; // Regular expression to allow only alphabets
    //       const { value } = event.target;

    //       if (regex.test(value) || value === "") {
    //         setText(event.target.value);
    //       }
    }
    const [text, setText] = useState('');
return (
<>
<div className='container' style={{color: props.mode==='dark'?'white':'#04111d'}}> 
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control"   placeholder="Enter alphabets only" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#04111d'}} id="Textarea" rows="8"></textarea>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={clearFields}>Clear text</button>
<button disabled={text.length < 5} className="btn btn-primary my-2 mx-2" onClick={testString}>Split text </button>
<button className="btn btn-primary my-2 mx-2" onClick={handle}>Show Alert </button>
{/* <button className="btn btn-primary my-2 mx-2" onClick={handleChange}>Show Alert </button> */}

</div>
</div>
<li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
<div className="container my-2" style={{color: props.mode==='dark'?'white':'#04111d'}}>
<h2>Text summary</h2>
<p>{text.split(" ").filter((element)=>{ return element.length===0}).length} words and {text.length} characters</p>
<p>{0.08 * text.split(" ").filter((element)=>{ return element.length===0}).length} Minutes read</p>
</div>

</>
)
}
