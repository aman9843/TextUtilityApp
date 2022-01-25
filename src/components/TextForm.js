import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnClick = ()=> {
        console.log("UpperCase was Clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=> {
        console.log("lowerCase was Clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = ()=> {
        console.log("You Have Clear The Text!" + text);
        // let newText = text.reset;
        // text=''
        const newText = ''
        
        setText(newText);
    }
    
    const handleOnChange = (event)=> {
        console.log("On Change");
      
        setText(event.target.value);
    } 
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

        <h1>{props.heading}</h1>


<div className="mb-3" style={{color:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}>
<label htmlFor="myBox" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn-btn-primary mx-2 my-2 " onClick={handleOnClick}>Convert To UpperCase</button>
<button className="btn-btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn-btn-primary mx-2 my-2" onClick={handleClClick}>Clear Text</button>
    
</div>
<div className="container my-3">
    <h2>Your Text Summary!</h2>
    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} Characters.</p>
    <p>{0.008* text.split("  ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here."}</p>
</div>
</>


)
}
