import React, { useState } from 'react'


export default function About() {

    let [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'rgb(101, 100, 100)'
        })

    const [btnText, setBtnText] = useState("Enable light Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("enable dark mode")
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'rgb(102, 100, 100)'
            })
            setBtnText("enable light mode")
        }
    }

    return (
    <div classNameName="container" >
    <h1 classNameName='p-3 pt-2 pb-4' >About us</h1>
            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Texttutils gives you a way to analyze your text quickly and efficiently.be it word cound,characters count or remove extra spaces or remove digits.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils i a free character  counter tool that provides instant character count & word count  statistics for a given text. Textutils reports the number of words and characters.Thus it is suitable for writing text with word/characters limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            THis word  counter  software  works in  ,y web browsers such as chrome,firefox,internet explore,safari and opera.it suits to count  characters in facbook,blog,books,excel documents,pdf,etc
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <button onClick={toggleStyle} type="button" className='btn btn-dark my-3 ' >{btnText}</button>
            </div>
        </div>

    )
}
