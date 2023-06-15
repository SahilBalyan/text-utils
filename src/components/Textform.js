import React, {useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleCount = () => {
        let co = 0;
        var c = prompt("Enter character to count");
        for (let i = 0; i < text.length; i++) {
            if((text.charAt(i).toLowerCase() === c || text.charAt(i).toUpperCase() === c)){
                co++;
            }
        }
        props.showAlert("Count of " + c + " is " + co, "success");
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard!", "success");
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleRemoveSpaces = () => {
        for (let i = 1; i < text.length; i++) {
            setText(text.replace(/\s+/g," ").trim());
        }
        props.showAlert("Removed extra spaces!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <>
    <div className="container">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-2`} onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCount}>Count Characters</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.split(/\S/g).length-1} characters
        <br/>Time to Read - {0.35 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} seconds</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
