(function(){

    // Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

    const trafficLights = document.querySelector('.traffic-lights');
    const trafficLightsButtom = document.querySelector('.traffic-lights__buttom');
    let lightsActiv;

    trafficLightsButtom.addEventListener('click', trafficLightsTogle);

    function trafficLightsTogle(){
        const lights = trafficLights.children;

        switch (lightsActiv){
            case 0 :
                lights[0].style.backgroundColor = '';
                lights[1].style.backgroundColor = 'orange';
                lightsActiv++
                break
            case 1:
                lights[1].style.backgroundColor = '';
                lights[2].style.backgroundColor = 'red';
                lightsActiv++
                break
            case 2:
                lights[2].style.backgroundColor = '';
                lights[0].style.backgroundColor = 'green';
                lightsActiv = 0
                break
            default :
                lights[0].style.backgroundColor = 'green';
                lightsActiv = 0
        }

    }

})()
