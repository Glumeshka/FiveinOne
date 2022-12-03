const trafficLight = document.querySelectorAll('.trafficLight');
let activeLight = 1;


document.querySelector('#one').addEventListener('click', (e) => {
    changeLight()
})

document.querySelector('#two').addEventListener('click', (e) => {
    changeLight()
})

document.querySelector('#tree').addEventListener('click', (e) => {
    changeLight()
})

function changeLight() {
    trafficLight[activeLight].className = 'trafficLight';
    activeLight++;

    if( activeLight > 2) {
        activeLight = 0;
    }
    const currentLight = trafficLight[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'))
}
