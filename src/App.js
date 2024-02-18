import { useState } from 'react';
import Accordion from './accordion/Accordion';
import TipCalculator from './tip-calculator/TipCalculator';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
      </StepMessage>
      {/* ==========OTHERS ASIDE===== */}
      <div>
        <TipCalculator />
        {/* accordion */}
        <Accordion data={faqs} />
      </div>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test, setTest] = useState({ name: 'Bolaji' });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1); // using a call back value when we want to update state based on the current state.
      // setStep((s) => s + 1);
    }

    //bad practice
    // test.name = 'Fred';
    // setTest({ name: 'Fred' });
  }

  return (
    <div>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          {/* message  */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className='buttons'>
              <Button
                bgColor='#e7e7e7'
                textColor='#333'
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          {/* button */}
          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              Previous
            </Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

///Message
function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}

// PROP BTN
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}
