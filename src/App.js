import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="expedia" >
        <img src="https://www.expediagroup.com/wp-content/uploads/2018/03/Expedia-Group-Logo_E-Horizontal-Logo-Sticky.png" width="10%"></img>
        
      </div>
      <div class="dark">
      
        <div class="special-font">Kidnap Me !</div>
        <div >
        <p class="date_inp"><b>Start</b></p>
          <div><input type="date" name="date" id="date"></input></div>
          
          <div class="traveller"><p class="date_inp"><b>From</b></p><input type="date" name="date" id="date"></input></div>
        <div class="traveller2"><input type="number" name="quantity" min="1" placeholder="Number Of Travellers"></input></div>
        {/* <div><p class="date_inp"><b>Budget</b></p></div> */}
       <div>
        <select class="budget">
        
  <option value="volvo">Budget Below 8K</option>
  <option value="saab"> Budget 8K - 15K</option>
  <option value="opel">Budget 15K - 20K</option>
  <option value="audi">Budget More than 20K</option>
</select>
</div>
<div>
{/* <p class="date_inp"><b>Budget</b></p> */}
<select class="budget">
        
        <option value="volvo">Travelling From Delhi</option>
        <option value="saab">Travelling From Mumbai</option>
        <option value="opel">Travelling From Bangalore</option>
        <option value="audi">Travelling From Hyderabad</option>
      </select>
      <input class="catchme" type="submit" value="Catch Me If You Can !"></input>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
