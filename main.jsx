// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @typedef HelloProps
 * @property {string} who
 */

/**
 * @param {HelloProps} props
 */
const Hello = ({who}) => <p>Hello {who}</p>;

const App = () => (
  <>
    <Hello who="React Minimal Starter Parcel" />
    <p>Run this with</p>
    <code>npm start</code>
    <p>Build it with</p>
    <code>npm run build</code>
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));
