import './App.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

//import component
import TableOfContent from './component/table';

//API
const API = 'https://api.currencyfreaks.com/latest?apikey=b22699839b30400eaeb952f543c77747'

function App() {
  const [rates, setRates] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(API)
      console.log('response', response)
      setRates(response.data.rates)
    }catch (error) {
      //silent e
      console.log('error', error)
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  

  console.log('rate', rates)
  
  return (
    <div className="App">
      <TableOfContent currency ={rates}/>
      <div>
        Rates are based from 1 USD.
      </div>
      <div>
        This application uses API from https://currencyfreaks.com
      </div>
    </div>
  );
}

export default App;
