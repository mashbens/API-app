
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

  return (
    <div className="App">  
        {Object.keys(data).length > 0 
          ?      
          (<header className="App-header">

            <Table>
              
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>We Buy</th>
                  <th>Exchange Rate</th>
                  <th>We Sell</th>
                </tr>
              </thead>
              
            {Object.keys(data.rates).map((el)=>{
              const exchange = data.rates[el]
              const weBuy = Number(exchange * 0.05) + Number(exchange)
              const weSell =  Number(exchange) - Number(exchange * 0.05) 
              return (         
                <tbody key={el}>
                    <tr>
                      <td>{el}</td>
                      <td>{weBuy.toFixed(4)}</td>   
                      <td>{exchange}</td>
                      <td>{weSell.toFixed(4)}</td>
                    </tr>
                </tbody>
              )
            })} 

             <tfoot>
               <tr>
                 <th colSpan={4}>
                  <p>Rates are based from 1 USD. <br /> This application uses API from <a rel='noreferrer' href='https://currencyfreaks.com/' target='_blank'>https://currencyfreaks.com.</a> 
                  </p> 
                 </th>
               </tr>
             </tfoot>
            </Table>
          </header>)
            : 
            (<div className='App-header'>
               {/* <h3>Sedang memproses data...</h3> */}
            </div>)         
        }
    </div>
  );
}

export default App;
