import React, { useState } from 'react'
import QRCode from 'qrcode.react';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");

    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");

    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!", "success");

    }


    const handleCopy = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");

    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }

    const handleRemoveDigit = () => {
        let newText = text.split(/[0-9]/)
        setText(newText.join(""))
        props.showAlert("Digits removed!", "success");
    }

    const handleRemoveSpecialChar = () => {
        let newText = text.split(/[!@#$%^&*`~()_+\-=[\]{};':"\\|,.<>/?]/)
        setText(newText.join(""))
        props.showAlert("Special Characters removed!", "success");

    }

    const handleSpeakClick = () => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(speech);
        } else {
            console.log('Speech synthesis not supported');
        }
    };



    const handleGenerateQRCode = () => {
        setQRCodeValue(text);
        props.showAlert('QR Code generated!', 'success');
    };


    const handleOnChange = (event) => {
        console.log("on change ")
        setText(event.target.value)
    }

//text sorting alphabetaically 



   











    const [text, setText] = useState('');
    const [qrCodeValue, setQRCodeValue] = useState('');
    


    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(101, 100, 100)', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleClearClick}>Clear Text</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleCopy}>Copy</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleRemoveDigit}>Remove digits</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleRemoveSpecialChar}>Remove special characters</button>
                <button className="btn  mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleSpeakClick}>speak text </button>
                <button className="btn mx-2 my-2" style={{ backgroundColor: props.mode === 'light' ? 'lightblue' : 'white', color: props.mode === 'light' ? 'black' : 'black' }} onClick={handleGenerateQRCode}>Generate QR Code</button>

               
               


            </div>
            <div className="container my-2">

                {qrCodeValue && (
                    <div className="container my-2">
                        <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>QR Code Preview</h3>
                        <QRCode value={qrCodeValue} style={{ padding: "10px" }} />
                    </div>
                )}

                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>your text summery</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} char</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h3 className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>preview</h3>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'} `}>{text}</p>
            </div>

        </>


    )
}
