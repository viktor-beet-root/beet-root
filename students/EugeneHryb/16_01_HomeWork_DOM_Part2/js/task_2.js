(function(){
    // Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

    const btnOpen = document.querySelector('.win__open');
    const btnClosed = document.querySelector('.win__close');
    const win = document.querySelector('.win__wrap');

    btnOpen.addEventListener('click', openWindow );
    btnClosed.addEventListener('click', closeWindow);

    function openWindow(){
        win.classList.add('activ');
    }

    function closeWindow(){
        win.classList.remove('activ');
    }
})()
