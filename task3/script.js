const trafficLight = document.querySelectorAll('.trafficLight');
let activeLight = 1;


document.querySelector('.trafficLight').addEventListener('click', (e) => {
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
