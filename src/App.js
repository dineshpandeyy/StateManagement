import React, { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  function handlePrevious() {
    if(step > 1) {
      setStep((s) => s - 1)
    }
  }

  function handleNext() {
    if(step < messages.length) {
      setStep((s) => s + 1)
    }
  }

  function renderValue() {
    // if (isOpen) {
    //   setIsOpen(false)
    // } else {
    //   setIsOpen(true)
    // }
    setIsOpen((is) => !is)
  }

  return (
    <>
      <button className='close' onClick={renderValue}>&times;</button>
    { isOpen ? (
    <div className="steps">
      <div className="numbers">
        <div className={step >=1 ? "active" : ""}>1</div>
        <div className={step >=2 ? "active" : ""}>2</div>
        <div className={step >=3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>
        {messages[step-1]} 
        <Button textColor={"#e7e6e7"} backgroundColor={"#333"} onClickHandle={() => alert(`Learn more about it`)}> Learn how </Button>
      </StepMessage>

      <div className="buttons">
        {/* <button style={{background: "#7950f2", color: "#fff"}} onClick={handlePrevious} >Previous</button>
        <button style={{background: "#7950f2", color: "#fff"}} onClick={handleNext} >Next</button> */}
        <Button textColor={"#fff"} backgroundColor={"#7950f2"} onClickHandle={handlePrevious}>
          <span>👈</span>Previous
        </Button>
        <Button textColor={"#fff"} backgroundColor={"#7950f2"} onClickHandle={handleNext}>
          Next<span>👉</span>
        </Button>
      </div>
    </div> 
    ) : null
    }
    </>
  );
}

function StepMessage({step, children}) {
  return (
    <p className="message"> Step {step}: {children}</p>
  )
}

function Button ({textColor, backgroundColor, onClickHandle, children}) {
  return (
    <button style={{background: backgroundColor, color: textColor}} onClick={onClickHandle}>{children}</button>
  )
}
