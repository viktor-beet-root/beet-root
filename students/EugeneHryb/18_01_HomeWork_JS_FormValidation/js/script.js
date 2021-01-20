(function () {
    const $person = document.getElementById('person');

    $person.addEventListener('submit', formValidation);

    markRequiredFields($person);

    function formValidation(event) {
        event.preventDefault();

        let submit = true;
        let parents;
        let spanError = '';

        for (let i = 0; i < this.length; i++) {

            if (this[i].dataset.required) {
                parents = this[i].closest('div');

                if (submit && inputIsValid(this[i])) {
                    submit = false;
                }

                if (parents.querySelector('.error-mesage') === null && inputIsValid(this[i])) {
                    parents.classList.add('error')
                    spanError = `<br> <span class = "error-mesage"> ${this[i].dataset.errorMesage} </span>`
                    parents.insertAdjacentHTML('beforeend', spanError);
                } else if (!inputIsValid(this[i]) && parents.querySelector('.error-mesage') !== null) {
                    parents.classList.remove('error')
                    spanError = parents.querySelector('.error-mesage');
                    spanError.parentNode.removeChild(spanError);
                }
            }
        }

        if (submit) {
            this.submit()
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
                parents.classList.add('required')
            }
        }
    }
})()
