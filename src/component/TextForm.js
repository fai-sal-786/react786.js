import React, { useState } from "react" 



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlerts("converted to upper case", "sucess");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlerts("converted to lower case", "sucess");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = ''
        setText(newText)
        // props.showAlerts("converted to clear case", "sucess");
    }

    const handlecopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0.9999);
        navigator.clipboard.writeText(text.value);
        // props.showAlerts("copy to clip board", "sucess");
    }

    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');
    return (
      <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>    
          <h1>{props.heading} </h1>  
       <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>  
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white':'#042743' }}
                        id="myBox" rows="8"></textarea>
              </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
               
            </div>
            <div className="container my-3"style={{color: props.mode === 'dark'?'white':'#042743' }}> 
                <h2>your text summary</h2>
                 {/* <p> {text.split('').length} words and {text.length} characters</p> */}
                {/* <P>{0.008 * text.split('').length} Minutes read</P> */}
                <h2>preview</h2>
                <p>{text.length>0?text:"Enter something  in the text box above to preview it here"}</p>                 
            </div>
            </>
  )
}
