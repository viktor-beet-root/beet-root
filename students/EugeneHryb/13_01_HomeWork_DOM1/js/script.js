(function () {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const htmlHour = document.querySelector('.hour');
    const htmlMinutes = document.querySelector('.minute');
    const htmlSeconds = document.querySelector('.second');
    const separator = document.querySelectorAll('.separator')

    function nextHour() {
        if (hours !== 23) {
            hours++;
        } else {
            hours = 0;
        }
    }

    function nextMinute() {
        if (minutes !== 59) {
            minutes++;
        } else {
            minutes = 0;
            nextHour();
        }
    }

    function nextSecond() {
        if (seconds !== 59) {
            seconds++;
        } else {
            seconds = 0;
            nextMinute();
        }
    }

    function addZero(value) {
        if (value < 10) {
            return '0' + value;
        } else {
            return value;
        }

    }

    function setClock() {
        htmlHour.textContent = hours;
        htmlMinutes.textContent = addZero(minutes);
        htmlSeconds.textContent = addZero(seconds);
    }

    function blinkSeparator() {
        separator.forEach(function (element) {
            if (seconds % 2) {
                element.style.opacity = '0';
            } else {
                if (seconds % 4) {
                    element.style.color = '#a85f23';
                } else {
                    element.style.color = '#692b99';
                }

                element.style.opacity = '1';
            }
        })
    }

    setInterval(function () {
        nextSecond();
        setClock();
        blinkSeparator();
    }, 1000)

})()
