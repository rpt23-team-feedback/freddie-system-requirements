import React, { useState, useEffect } from 'react';
import '../App.css';
import SystemList from './SystemList';
const axios = require('axios');

const System = () => {
  const [systemMinimum, setSystemMinimum] = useState([
    {
      "name" : "Windows",
      "os" : "Windows 58494",
      "processor" : "Kunze Inc 29842",
      "memory" : "38839 GB RAM",
      "storage" : "42465 GB",
      "graphics" : "BMW 915"
    },
    {
      "name" : "Linux",
      "os" : "Linux 37074",
      "processor" : "Goldner - Monahan 18383",
      "memory" : "81459 GB RAM",
      "storage" : "68646 GB",
      "graphics" : "Land Rover 39750"
    },
    {
      "name" : "Mac",
      "os" : "Mac 6414",
      "processor" : "Larson - Boehm 50305",
      "memory" : "78414 GB RAM",
      "storage" : "92783 GB",
      "graphics" : "Mercedes Benz 9289"
    },
    {
      "name" : "Steam",
      "os" : "Steam 33891",
      "processor" : "Erdman - Lang 99995",
      "memory" : "33793 GB RAM",
      "storage" : "70032 GB",
      "graphics" : "Bentley 60883"
    }
  ]);
  const [systemRecommended, setSystemRecommended] = useState([
    {
			"name" : "Windows",
			"os" : "Windows 85585",
			"processor" : "Hyatt - Daugherty 13446",
			"memory" : "28528 GB RAM",
			"storage" : "19828 GB",
			"graphics" : "BMW 21171"
		},
		{
			"name" : "Linux",
			"os" : "Linux 16347",
			"processor" : "Schiller - Rippin 75803",
			"memory" : "35379 GB RAM",
			"storage" : "79177 GB",
			"graphics" : "Nissan 15181"
		},
		{
			"name" : "Mac",
			"os" : "Mac 28386",
			"processor" : "Heller - Schoen 54803",
			"memory" : "77997 GB RAM",
			"storage" : "14598 GB",
			"graphics" : "Bentley 20017"
		},
		{
			"name" : "Steam",
			"os" : "Steam 89341",
			"processor" : "Leannon Inc 88537",
			"memory" : "67836 GB RAM",
			"storage" : "8769 GB",
			"graphics" : "Nissan 74890"
    }
  ]);
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
  }, []);

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
