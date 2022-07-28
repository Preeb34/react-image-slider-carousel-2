let searchButton = document.querySelector("#search")



//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  console.log(document.querySelector("#ipDate"))
  const input_date= document.querySelector("#ipDate").value
  if(input_date){
    sendApiRequest(input_date)
  }
  
})

//An asynchronous function to fetch data from the API.
async function sendApiRequest(input_date){
  let API_KEY = "bOUolWlWfgeKcEulISPn0g4WagO1DnU3NVJCCEy7"
  let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${input_date}`);
  console.log(response)
  let data= await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
 function useApiData(data){
  
  if(data.photos.length>0){
    document.querySelector("#content").innerHTML = ""
  }
    console.log(data.photos.length)
    
    for (let i = 0; i < data.photos.length; i++) {
      //const Slider_Data = document.querySelector("#content").innerHTML;
      document.querySelector("#content").innerHTML += `<img src="${data.photos[i].img_src}">`;
        
    }
    
}
