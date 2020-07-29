// ! Dont forget to wait for DOM content to be available
function init () {

  //? PULL IN THE API and define it to a variable
  //? 

  //? Variables/Elements

  const url = 'https://api.tfl.gov.uk/line/mode/tube/status'

  const tubeStatus = document.querySelector('#tube-status')


  let tubeData = []
  



  //? Functions
const timerId = setInterval(() => {
  

const getTubeData = async () => {
  tubeStatus.innerHTML = 'Please Wait - Loading'
  try{
  const response = await window.fetch(url)
  tubeData = await response.json()
  tubeStatus.innerHTML = 'Tube Status'
  displayTubeData()
  console.log(tubeData);
  } catch {
    tubeStatus.innerHTML = 'UH OH we had an error, please refresh the page'
  }

}

 

function displayTubeData(){
    const bakerlooArray = tubeData.map(line => {
      return `<p class='tube-ds'>${line.name}<br/> ${line.lineStatuses[0].statusSeverityDescription} </p>`
    })
    tubeStatus.innerHTML = bakerlooArray.join('')
    console.log(bakerlooArray);
}



getTubeData()

}, 3000);

  //? Event Listener 



























}

window.addEventListener('DOMContentLoaded', init)