import React, { useState } from "react";



export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase  " ,"success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase  " ,"success")
  };
  const handleReClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.trim();
    setText(newText);
    props.showAlert(" String has been trimmed " ,"success")


  };
  const handleCleClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared" ,"success")


  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    props.showAlert("Text copied ! " ,"success")

    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed   " ,"success")

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("On change")
 
  };

  const [text, setText] = useState("");
  //   setText("hello")
  return (
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
      <div className="container my-3"  >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#2525':'white' , color:props.mode==='dark'?'lightgreen':'#252525'}}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success mx-2 my-3" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-warning mx-2 my-3" onClick={handleReClick}>
            Trim line
          </button>
          <button
            className="btn btn-warning mx-2 my-3"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-danger mx-2 my-3" onClick={handleCleClick}>
            Clear
          </button>
        </div>
      </div>
      <div className={`container my-2  text-${props.mode==='dark'?'light':'dark'}`} >
        <h2>Your text Summery </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p className="">{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </div>
  );
}
