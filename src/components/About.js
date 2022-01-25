import React, {useState} from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor : 'black'

  })
  const[btnText, setBtnText] = useState("Enable dark Mode")

  const toggleStyle = ()=>{
    if(myStyle.color == 'black'){
      setMyStyle({
        color :'green',
        backgroundColor : 'black',
        Border : '1px solid white'
      })
      setBtnText("Enable Light Mode");
    }

      else {
        setMyStyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode");
      }
    }

  
 
  
  
    return (
      
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={myStyle} aria-controls="collapseOne">
        About This App!
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is My First App </strong><strong>It's All about text utilities, Where you can adjust your lettercase and clear it.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Me!
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Hello! this is Aman an Aspiring Web Developer trying to build new projects based on React!</strong> 
      </div>
    </div>
  </div>
  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div> */}
</div>

<div className="container my-3">
<button onClick={toggleStyle} type="button"  className="btn-btn-primary">{btnText}  </button>
</div>

        </div>
    )
}
