import React, { useState, useEffect } from 'react';
import '../App.css';
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
      console.log(results);
      setSystemMinimum(results.data.minimum);
      setSystemRecommended(results.data.recommended);
    })
    .catch((err) => {
      console.error(err);
    })
  }, [bundle]);

  return (
    <div>
      {console.log('systemMinimum', systemMinimum)}
      {console.log('systemRecommended', systemRecommended)}
      <h1>Hello Systems</h1>
    </div>
  )
};

export default System;
