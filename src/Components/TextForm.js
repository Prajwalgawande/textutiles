
import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = '';
        setText(newtext);
    }
    const handleReverseStrClick =()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.split("").reverse("").join("");
        setText(newtext);
    }

    const handleOnChange =(event)=>{
        console.log("On  change");
        setText(event.target.value)
    }
    const handleCopy =()=>{
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const [text,setText] = useState('');
    return(
     <>
     <div className='container'style={ { color: props.mode=== 'dark'?'white':'black'}}>   
     <h1>{props.heading} </h1>
<div className="mb-3">
    <textarea className="form-control"  value ={text} placeholder='Please enter a text here' onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
    <button disabled={text.length===0} className="bnt btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="bnt btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="bnt btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>
    <button disabled={text.length===0} className="bnt btn-primary my-3 mx-2" onClick={handleReverseStrClick}>Reverse the text</button>
    <button disabled={text.length===0} className="bnt btn-primary my-3 mx-2" onClick={handleCopy}>Copy text</button>
    
    </div>
</div>
<div className="container my-2" style={ { color: props.mode=== 'dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
</div>
    </>
    )
}
