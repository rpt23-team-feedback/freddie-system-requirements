import React, { useState, useEffect } from 'react';
import '../App.css';
import SystemList from './SystemList';
const axios = require('axios');

const System = () => {
  const [systemMinimum, setSystemMinimum] = useState([]);
  const [systemRecommended, setSystemRecommended] = useState([]);
  const [bundle, setBundle] = useState(0);

  useEffect(() => {
    const bundleId = window.location.pathname.replace(/\//g, '');
    setBundle(bundleId);

    axios.get(`http://localhost:3201/system-requirements/${bundle}`)
    .then((results) => {
      setSystemMinimum(results.data.minimum);
      setSystemRecommended(results.data.recommended);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [bundle]);

  return (
    <div className='App'>
      <h1>SYSTEM REQUIREMENTS</h1>
      <div>
        <h2>Minimum:</h2>
        <SystemList systems={systemMinimum}/>
      </div>
      <div>
        <h2>Recommended:</h2>
        <SystemList systems={systemRecommended}/>
      </div>
    </div>
  )
};

export default System;
