import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'on OctaCoder YouTube',
  'Apply for Jobs 💼'
];

function App() {
  const [step, setStep] = useState(1);

  function buttonHandleP () {
    if(step > 1)setStep(step - 1)
  }

  function buttonHandleN () {
    if(step < 3)setStep(step + 1)
  }

  return (
    <div className='steps'>
      <h2 className='heading'>Steps Component</h2>
      <div className='numbers'>
          <div className={step >= 1 ? 'active' : ''}>1</div>
          <div className={step >= 2 ? 'active' : ''}>2</div>
          <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className='message'>
        Step {step} : {messages[step-1]}
      </p>

      <div className='buttons'>
        <button onClick={buttonHandleP}>Previous</button>
        <button onClick={buttonHandleN}>Next</button>
      </div>

    </div>
  );
}

export default App;
