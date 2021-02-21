(function () {
    const $person = document.getElementById('person');

    $person.addEventListener('submit', formValidation);

    markRequiredFields($person);

    function formValidation(event) {
        event.preventDefault();

        let submit = true;

        for (let i = 0; i < this.length; i++) {

            if (this[i].dataset.required) {

                if (submit && inputIsValid(this[i])) {
                    submit = false;
                }

                markElement(this[i]);
            }
        }

        if (submit) {
            this.submit();
        }
    }

    function markElement(element) {
        const parents = element.closest('div');
        let spanError = '';

        if (parents.querySelector('.error-mesage') === null && inputIsValid(element)) {
            parents.classList.add('error');
            spanError = `<br> <span class = "error-mesage"> ${element.dataset.errorMesage} </span>`;
            parents.insertAdjacentHTML('beforeend', spanError);
        } else if (!inputIsValid(element) && parents.querySelector('.error-mesage') !== null) {
            parents.classList.remove('error');
            spanError = parents.querySelector('.error-mesage');
            spanError.parentNode.removeChild(spanError);
        }
    }

    function inputIsValid(input) {
        if (input.type === 'radio') {
            let name = input.name;

            if (input.closest('div').querySelectorAll('input[name=' + name + ']:checked').length > 0) {
                return false;
            } else {
                return true;
            }

        } else if (input.type === 'checkbox') {
            return !input.checked;
        } else {
            return input.value === "";
        }
    }

    function markRequiredFields(formSection) {
        let parents;

        for (let i = 0; i < formSection.length; i++) {

            if (formSection[i].dataset.required) {
                parents = formSection[i].closest('div');
                parents.classList.add('required');
            }
        }
    }
})()
