(function(){
    function Message(options){
        this.option = {
            wrapper: options.wrapper
        };

        this.messageList = [];
        this.init();
    }

    Message.prototype.init = function(){
        this.option.wrapper.addEventListener('click', this.buttonListener.bind(this.option.wrapper, this));
    }

    Message.prototype.addMessage = function(message){
        message.id = this.messageList.length;
        message.date = new Date();
        this.messageList.push(message);
        this.renderHtmlMessage();
    }

    Message.prototype.remuveMessage = function(messageID){
        let messageIndex = this.messageList.findIndex(function(element){
            return element.id == messageID;
        }, this)
        this.messageList.splice(messageIndex, 1);
        this.renderHtmlMessage();
    }

    Message.prototype.renderHtmlMessage = function(){
        const wrapper = this.option.wrapper;
        wrapper.innerHTML = '';

        this.messageList.forEach(function(message){
            wrapper.insertAdjacentHTML('beforeend', `
                <h2>${message.id +1}. ${message.title}.</h2>
                <img src="${message.img}">
                <p>${message.content}</p>
                <p>${message.date.getDate()}. ${message.date.getMonth() + 1}. ${message.date.getFullYear()} г.</p>
                <button data-id = '${message.id }'>Delete</button>
            `)
        }, this)
        wrapper.insertAdjacentHTML('beforeend', `<h3>Добавить статью.</h3>`)
        const form = document.createElement('form');
        const title = document.createElement('input');
        const img = document.createElement('input');
        const textarea = document.createElement('textarea');
        const buton = document.createElement('input')
        title.setAttribute('name', 'title');
        title.setAttribute('type', 'text');
        title.setAttribute('placeholder', 'Title');
        img.setAttribute('name', 'img');
        img.setAttribute('type', 'text');
        img.setAttribute('placeholder', 'Img');
        textarea.setAttribute('name', 'text');
        textarea.setAttribute('placeholder', 'Text');
        buton.setAttribute('type', 'submit');
        form.append(title)
        form.append(textarea);
        form.append(img);
        form.append(buton);
        wrapper.append(form);

        form.addEventListener('submit', this.formProcessing.bind(form, this));
    }

    Message.prototype.buttonListener = function(externalThis, event){
        let element = event.target;
        if(element.nodeName.toLowerCase() === 'button' ){
            externalThis.remuveMessage(element.dataset.id);
        }
    }
    //
    Message.prototype.formProcessing = function(externalThis, event){
        event.preventDefault()
        let article = {};

        for(let i=0; i<this.length; i++){
            if(this[i].name === 'title'){
                article.title = this[i].value;
            }else if(this[i].name === 'text'){
                article.content = this[i].value;
            }else if(this[i].name === 'img'){
                article.img = this[i].value;
            console.log(this[i])
            }
        }

        externalThis.addMessage(article);

    }
    //особенность стрелочной функции, стрелочные функции не имеют своего this, на обрабочник событий стрелочные функции вешать нельща.

    const message = new Message({
        wrapper: document.getElementById('app')
    })

    const message1 = new Message({
        wrapper: document.getElementById('app1')
    })

    message.addMessage({
        title: 'title 1',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quibusdam suscipit eos! Ex assumenda repudiandae quam facilis et cupiditate, quas consequatur quia commodi ducimus vero voluptatum in corrupti odit ea.',
        img: './img/1.jpeg',
    })

    message.addMessage({
        title: 'title 2',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quibusdam suscipit eos! Ex assumenda repudiandae quam facilis et cupiditate, quas consequatur quia commodi ducimus vero voluptatum in corrupti odit ea.',
        img: './img/1.jpeg',
    })

    message1.addMessage({
        title: 'title 1',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quibusdam suscipit eos! Ex assumenda repudiandae quam facilis et cupiditate, quas consequatur quia commodi ducimus vero voluptatum in corrupti odit ea.',
        img: './img/1.jpeg',
    })

    message1.addMessage({
        title: 'title 2',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quibusdam suscipit eos! Ex assumenda repudiandae quam facilis et cupiditate, quas consequatur quia commodi ducimus vero voluptatum in corrupti odit ea.',
        img: './img/1.jpeg',
    })

    message1.addMessage({
        title: 'title 3',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quibusdam suscipit eos! Ex assumenda repudiandae quam facilis et cupiditate, quas consequatur quia commodi ducimus vero voluptatum in corrupti odit ea.',
        img: './img/1.jpeg',
    })

})()
