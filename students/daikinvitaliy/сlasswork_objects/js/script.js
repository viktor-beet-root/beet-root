const questionnaireSheet = {
    firstName: "",
    lastName: "",
    patronymic: "",
    age: 0,
    adres: "",
    telephone: "",
    skillsList: ["strong", "agile", "fast"],
    hobby: ["football", "cooking"],
    setFirstName: function (name) {
        if (name === undefined) return;
        this.firstName = name;
    },

    setLastName: function (surname) {
        if (surname === undefined) return;
        this.lastName = surname;
    },

    setPatronymic: function (pat) {
        if (pat === undefined) return;
        this.patronymic = pat;
    },

    changeAge: function (age) {
        this.age = this.age + age;
    },

    addSkillsList: function (skill) {
        if (skill === undefined) return;

        this.skillsList.push(skill);
    },
    getFirstName: getFirstName,
    getLastName: getLastName,
    getPatronymic: getPatronymic,
    getAge: getAge,
    getAdres: getAdres,
    getTelephone: getTelephone,
    getHobby: getHobby,
    getQuestionnaire: getQuestionnaire,
    getskillsList: function () {
        return "A little bit about yourself: " + this.skillsList.join(" , ");
    },
};
questionnaireSheet.setFirstName("Vitaly");
questionnaireSheet.setLastName("Dyakin");
questionnaireSheet.setPatronymic("Vladimirovich");
questionnaireSheet.changeAge(39);
questionnaireSheet.addSkillsList("lazy person");

questionnaireSheet.setAdres = function (ads) {
    this.adres = ads;
};
questionnaireSheet.setAdres("Kiev");

questionnaireSheet.setTelephone = function (tel) {
    this.telephone = tel;
};
questionnaireSheet.setTelephone("0672985673");

questionnaireSheet.setHobby = function (hobby) {
    this.hobby.push(hobby);
};
questionnaireSheet.setHobby("nature");

function getFirstName() {
    return "My name is " + this.firstName;
}
function getLastName() {
    return "My last name " + this.lastName;
}
function getPatronymic() {
    return "My middle name " + this.patronymic;
}
function getAge() {
    return "To me " + this.age + " years";
}
function getAdres() {
    return "I live in: " + this.adres;
}
function getTelephone() {
    return "In the extreme, call: " + this.telephone;
}
function getHobby() {
    return "My hobbies: " + this.hobby.join(" , ");
}
function getQuestionnaire() {
    return (
        questionnaireSheet.getLastName() +
        ";\n" +
        questionnaireSheet.getFirstName() +
        ";\n" +
        questionnaireSheet.getPatronymic() +
        ";\n" +
        questionnaireSheet.getAge() +
        ";\n" +
        questionnaireSheet.getAdres() +
        ";\n" +
        questionnaireSheet.getTelephone() +
        ";\n" +
        questionnaireSheet.getskillsList() +
        ";\n" +
        questionnaireSheet.getHobby() +
        "."
    );
}
console.log(questionnaireSheet.getQuestionnaire());
