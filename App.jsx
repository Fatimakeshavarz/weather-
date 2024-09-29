import './App.css'


const App=()=>{
    return(
      <div className='weather-container'>
         <header>
            <h3>Starweather</h3>
            <div className="city-selector">
              <select >
               <option value={Tehran}>tehran</option>
               <option value={OtherCity}>otherCity</option>
               <label className='lableBox'>انتخاب شهر</label>
              </select>
            </div>
         </header>
        
      </div>
    )
 }
 
 export default App