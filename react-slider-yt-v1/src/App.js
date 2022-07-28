import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
//import { Slider_Data } from './components/script';

function App() {
  async function sendApiRequest(){
    alert("ghjgdudgiuahgd")
    let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7"
    let response = await fetch(`https://api.homedepot.com/SearchNav/v2/pages/search?navparam=5yc1vZc2b0&storeid=121&key=ZDpG4SI7RdBmvgS76DdIfXNBsXQle7f2&show=dimensions`);
    console.log("middle njdvsjdv")
    console.log(response)
    // let data= await response.json()
    // console.log(data)
    
    alert("g567hgd")
  }
  return (
    
    <div className="Main">
      <script src="/script.js" defer></script>
      <h1>Nasa Mars Rovr</h1>
          <div className="header">
            <form>
            <label>
                 <h4>Enter your date : </h4>
            <input type="date" className= "ipdate"id="ipDate"></input>
              </label>
              <button id="search" onClick={sendApiRequest} > Search </button>
              <br>
              </br>
              <label> Total photos from Mars rover on this date are ...</label>
            </form>
          </div>
          <ImageSlider slides={SliderData} />
        </div>
        
  )
  
}

export default App;
