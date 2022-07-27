import React from 'react';
// import Volume from './Volume';
import {Link } from "react-router-dom";
import '../../index.css';

const Source = () => {

  return (
    <div>
      <h1>List of Sources here</h1>
      <Link to='/volume'>Volume</Link>
    </div>
  )
}

export default Source;