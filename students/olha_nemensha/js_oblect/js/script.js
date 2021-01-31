console.log("Class work");

const people = {
    userName: '',
    userSurname: '',
    userDateBirth: '',
    userAge: '',
    userSkill: [],
    hobby: '',
    city: '',
    setUserName: function (name) {
        this.userName = name;
    },
    setUserSurname: function (surname) {
        this.userSurname = surname;
    },
    setUserDateBirth: function (day, month, year) {
        this.userDateBirth = day + "." + month + "." + year;
    },
    setUserAge: function (age) {
        this.userAge = age;
    },
    addUserSkill: function (skill) {
        this.userSkill.push(skill);
    },
    setHobby: function (myhobby) {
        this.hobby = myhobby;
    },
    setCity: setCity,
    getFullName: getFullName,
    getUserAge: function () {
        return "My age is " + this.userAge + " years";
    },
    getUserDateBirth: function () {
        return "Me date of birth is " + this.userDateBirth;
    },
    getUserSkill: getUserSkill,
    getHobby: getHobby,
    getCity: getCity,
    deleteKey: deleteKey,
    addKey: addKey
}

function setCity(city) {
    this.city = city;
}

function getFullName() {
    return "Full name is " + this.userName + " " + this.userSurname;
}

function getUserSkill() {
    return "My skills are: " + this.userSkill.join();
}

function getHobby() {
    return "My hobby is: " + this.hobby;
}

function getCity() {
    return "I live in " + this.city;
}

function deleteKey(name) {
    delete this[name];
}

function addKey(key, value) {
    this[key] = value;
}

people.setUserName("Olga");
people.setUserSurname("Nemensha");
people.setUserDateBirth(10, 10, 1989);
people.setUserAge("31");
people.addUserSkill("JS");
people.addUserSkill("Css");
people.setHobby("music");
people.setCity("Ternopil");
console.log(people.getFullName());
console.log(people.getUserAge());
console.log(people.getUserDateBirth());
console.log(people.getUserSkill());
console.log(people.getHobby());
console.log(people.getCity());
people.deleteKey("userAge");
people.addKey('pets', 'cats');
console.log(people);

function getAnteQuestionary() {
    for (let key in people) {
        if (typeof people[key] !== "function") {
            console.log("----------\n " + key + " -- " + people[key]);
        }
    }
}

console.log(getAnteQuestionary());
