import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
        props.showAlert("Text has been changed!","success");
    }

    const speakText = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        // utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
        props.showAlert("Text is being spoken!","success");
    }

    const handleSpeak = () => {
    speakText(text);
};



    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
          <div className="m-5   ">
            <label for="exampleFormControlTextarea1" className="form-label">{props.title}</label>
            <textarea className="form-control" value={text}  onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-4" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-4" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary m-4" onClick={() => setText("")}>Clear Text</button>
            <button className="btn btn-primary m-4" onClick={handleSpeak}>Speak</button>
            </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} chars</p>      
            <p>{0.008 * text.split(" ").length} Minutes required to read</p> 
            <h2>Preview</h2>
            <p>{text}</p> 



                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger"onClick={()=>{
                    document.body.style.backgroundColor = "red";
                    props.showAlert("Background color changed to red!","success");
                    document.title='TextUtils-Red'
                }}>Red</button>
                <button type="button" class="btn btn-warning" onClick={()=>{
                    document.body.style.backgroundColor = "yellow";
                    props.showAlert("Background color changed to yellow!","success");
                    document.title='TextUtils-Yellow'
                }}>Yellow</button>
                <button type="button" class="btn btn-success" onClick={()=>{
                    document.body.style.backgroundColor = "green";
                    props.showAlert("Background color changed to green!","success");
                    document.title='TextUtils-Green'
                }}>Green</button>
                <button type="button" class="btn btn-secondary" onClick={()=>{
                    document.body.style.backgroundColor = "grey";
                    props.showAlert("Background color changed to white!","success");
                    document.title='TextUtils-White'
                }}>White</button>
                </div>



            </div>

            


        </>
    )
}