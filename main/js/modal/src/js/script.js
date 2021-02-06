const defaultOptions = {
    mode: 'alert',
    modeClassList: {
        alert: 'modal_alert',
        promt: 'modal_promt',
        confirm: 'modal_confirm',
    },
    classList: {
        open: 'modal_active',
    },
    isShowNow: false,
};

function addHandler(nameHandler, handler, target) {
    target.addEventListener(nameHandler, handler);
}

function closeModal(e) {
    console.log(e.target, e.currentTarget)
    if (e.target === e.currentTarget || e.target.classList.contains('modal__close') ||
        (this.options.mode === 'alert' && e.target.classList.contains('modal__btn-ok')) ||
        e.target.classList.contains('modal__btn-cansel')) {
        this.hidden();
    }
    //else if (this.options.mode !== 'alert' && e.target.classList.contains('modal__btn-ok')) {
    //     if (this.options.mode === 'promt') {
    //         this.options.promtHandler(this.input.value);
    //         this.hidden();
    //         this.promtInputClean();
    //     }
    //     if (this.options.mode === 'confirm') {
    //         this.options.confirmHandler();
    //         this.hidden();
    //     }
    // }
}

function BeetRootModal(option) {
    this.options = {
        ...defaultOptions,
        ...option,
    };

    this.inite = function () {
        this.beforeOpen = new CustomEvent('before-open', {
            detail: this,
        });

        const option = this.options;
        this.title = option.wrapper.querySelector('.modal__title');
        this.text = option.wrapper.querySelector('.modal__text');
        this.input = option.wrapper.querySelector('.modal__promt');
        this.ok = option.wrapper.querySelector('.modal__btn-ok');
        this.cansel = option.wrapper.querySelector('.modal__btn-cansel');
        this.close = option.wrapper.querySelector('.modal__close');

        this.setClassMode();

        this.setTitle(option.title);
        this.setText(option.text);

        addHandler('click', closeModal.bind(this), this.options.wrapper);

        if (option.isShowNow && this.getMode() === 'alert') {
            console.log(option.wrapper.dispatchEvent(this.beforeOpen))
            if (!option.wrapper.dispatchEvent(this.beforeOpen)) this.show();
        }
    };

    this.setTitle = function (title) {
        this.title.textContent = title;
    };

    this.promtInputClean = function () {
        this.input.value = '';
    }

    this.setText = function (text) {
        this.text.textContent = text;
    };

    this.setClassMode = function () {
        console.log(this.options.modeClassList[this.options.mode]);
        this.options.wrapper.classList.add(
            this.options.modeClassList[this.options.mode]
        );
    };

    this.show = function () {
        this.options.wrapper.classList.add(this.options.classList.open);
    };

    this.hidden = function () {
        this.options.wrapper.classList.remove(this.options.classList.open);
    };

    this.getMode = function () {
        return this.options.mode;
    };

    this.promt = function (inputValue) {
        this.show();
        const self = this;
        return new Promise(function (resolve, reject) {
            self.ok.addEventListener('click', function () {
                resolve(self.input.value);
                self.hidden();
                self.promtInputClean();
            });
        });
    };

    this.confirm = function (isConfirm) {
        return new Promise(function (resolve, reject) {

        });
    }

    this.setMode = function (mode) {
        this.options.mode = mode;
        console.log()
        this.setClassMode();
    };

    this.inite();
}

const div = document.querySelector('.modal');

div.addEventListener('before-open', function (e) {
    e.preventDefault();
    e.detail.setTitle('55555555555555');

    setTimeout(function () {
        e.detail.show();
    }, 2000);
});

const win = new BeetRootModal({
    wrapper: div,
    mode: 'alert',
    title: 'My first modal window',
    text: 'Modal window text',
    isShowNow: true,
    promtHandler: function (input) {
        document.body.append(input);
    },
    confirmHandler: function () {
        console.log('sdfadf')
    },
});

console.log(win);
// win.setTitle('sdfdfdasfdasf');
// win.setText('sdfdfdasfdasf');

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const data = {
//             name: "Viktor",
//             status: true
//         }
//         //resolve(data);
//         reject('Error');
//     }, 1000);
// });
// p.then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     //console.error(err);
// });


// const pr = win.promt();

// pr.then(function (data) {
//     console.log(data);
// });

try {

    data.tete.sdfg = 'df'
} catch (e) {
    console.log(e)
}


