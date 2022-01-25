
import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {

  const [data, setData] = useState({})

  useEffect(() =>{
    retrieveData()
  }, [])

  const retrieveData = async () => {
    try {
      const {data} = await axios.get('https://api.currencyfreaks.com/latest?apikey=0143d16ec3f04324a6d68c3fa0a975f2&symbols=CAD,EUR,IDR,JPY,CHF,GBP')
      setData(data)
        // console.log(data)
    }catch (error) {
      console.log(error)
    }
  }

  // const sel = Number(data.rates.CAD * 0.05) + Number(data.rates.CAD)

  // function financial(x) {
  //   return Number.parseFloat(x).toFixed(4);
  // }

 
  
  return (
    <div className="App">  
        {Object.keys(data).length > 0 ?      
          (<header className="App-header">
          {/* {Object.keys(data.rates).length} */}
            {/* table */}
            <Table className='table' >
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>We Buy</th>
                  <th>Exchane Rate</th>
                  <th>We Sell</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >CAD</td>
                  <td>-</td>
                  <td>{data.rates.CAD}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>EUR</td>
                  <td>-</td>
                  <td>{data.rates.EUR}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td >IDR</td>
                  <td>-</td>
                  <td>{data.rates.IDR}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>JPY</td>
                  <td>-</td>
                  <td>{data.rates.JPY}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td >CHF</td>
                  <td>-</td>
                  <td>{data.rates.CHF}</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>GBP</td>
                  <td>-</td>
                  <td>{data.rates.GBP}</td>
                  <td>-</td>
                </tr>
              </tbody>
            </Table>    
            </header>)
             : (<div className='App-header'><h3>Sedang memproses data...</h3></div>)
              
             
             
            
            }
    </div>
  );
}

export default App;
