const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex > 2 ? ++colorIndex : 0;
