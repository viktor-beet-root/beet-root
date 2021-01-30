(function () {
    const textEditor = document.querySelector('.text-editor');

    window.addEventListener('keydown', textEditorHendler);

    function textEditorHendler(event) {
        const editorBox = textEditor.querySelector('.text-editor__text');
        let text = '';

        if (event.code === 'KeyE' && event.ctrlKey && editorBox.nodeName === "DIV") {

            event.preventDefault();
            text = editorBox.innerText;
            const textArea = document.createElement('textarea');
            textArea.classList.add('text-editor__text');
            textArea.defaultValue = text;
            textArea.style.width = '100%'
            textEditor.innerHTML = '';
            textEditor.append(textArea);

        } else if (event.code === 'ControlLeft' && editorBox.nodeName === "TEXTAREA") {

            event.preventDefault();
            text = editorBox.value;
            const div = document.createElement('div');
            div.classList.add('text-editor__text');
            div.append(text);
            textEditor.innerHTML = '';
            textEditor.append(div);

        }
    }
})()
