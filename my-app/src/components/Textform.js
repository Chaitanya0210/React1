import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
            <textarea className="form-control" value={text}  onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </>
    )
}