(function(){
    const resizingDiv = document.querySelector('.resizing-block');

    resizingDiv.addEventListener('mousedown', resizingBlockHandler);

    function resizingBlockHandler(event){
        const resizingElement = event.currentTarget;

        let clickX = event.clientX - resizingElement.offsetLeft;
        let clickY = event.clientY - resizingElement.offsetTop;

        let elementWidh = resizingElement.clientWidth;
        let elementHeight = resizingElement.clientHeight;

        if((elementWidh - clickX) < 20 && (elementHeight - clickY < 20)){

            resizingElement.style.userSelect = 'none';
            resizingElement.style.top = resizingElement.offsetTop + 'px';
            resizingElement.style.left = resizingElement.offsetLeft + 'px';
            resizingElement.style.position = 'fixed';

            resizingElement.addEventListener('mousemove', resize)

            let x = event.clientX;
            let y = event.clientY;
            let dx = 0;
            let dy = 0;


            function resize(event){
                dx = event.x - x;
                dy = event.y - y;

                x = event.x;
                y = event.y;

                elementWidh = elementWidh + dx;
                elementHeight = elementHeight + dy;

                resizingElement.style.height = elementHeight + 'px';
                resizingElement.style.width = elementWidh + 'px';
            }

            resizingElement.addEventListener('mouseup', closeResize)

            function closeResize(event){
                resizingElement.removeEventListener('mousemove', resize);
                resizingElement.style.position = '';
                resizingElement.style.top = '';
                resizingElement.style.left = '';
                resizingElement.style.userSelect = '';

            }
        }


    }
})()
