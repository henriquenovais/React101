import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is topzera!'
  },
  {
    title: 'Is React good?',
    content: 'Yes, React is a very good framework'
  },
  {
    title: 'How good is React?',
    content: 'Amazing, software engineers love it'
  }
];

export default () => {
  return (
    <div>
	    <h1>react hooks practice</h1>
      <Accordion items={items}/>
    </div>
  );
}

