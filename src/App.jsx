import "./App.css"


export default function App(){
    return(
      <div className='weather-container'>
         <header>
            <h3>Starweather</h3>
            <div className="">
              <select >
               <option value='Tehran'>tehran</option>
               <option value='OtherCity'>otherCity</option>
               <label className='lableBox'>انتخاب شهر</label>
              </select>
            </div>
         </header>
        
      </div>
    )
 }
 
