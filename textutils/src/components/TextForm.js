import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("click you" + text)
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLoClick = () => {
        // console.log("On Change")
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearClick = () => {
        // console.log("On Change")
        let newText = ("");
        SetText(newText)
        props.showAlert("Text is Cleared", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        SetText(event.target.value)
    }


    const [text, SetText] = useState('')
    //SetText("ahoo");
    return (
        <>
            <div className='container'  style={{color: props.mode==='dark'?'white':'#0b043a'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox"
                     style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#0b043a'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-danger" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#0b043a'}}>
                <h1>your text summary</h1>
                <p> {text.split(" ").length} words and {text.length} character</p>
                <p> {0.08 * text.split(" ").length} Minutes Read </p>
                <h2>Preview</h2>
                {text.length>0? text:'Enter Your Text to Preview here'}

            </div>

        </>
    )
}
