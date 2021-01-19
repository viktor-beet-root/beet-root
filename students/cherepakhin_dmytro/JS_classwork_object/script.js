const men = {
    firstName: 'John',
    lastName: 'Rid',
    age: 100,
    skillList: [],
    hobbyList: [],

    setFirstName: setFirstName,
    setLastName: setLastName,
    getFullName: getFullName,
    setAge: setAge,
    getAge: getAge,

    addSkills: function (skill) {
        this.skillList.push(skill);
    },

    deleteSkills: function (skill) {
        let indexOfDeletedSkill = this.skillList.indexOf(skill);
        if (indexOfDeletedSkill === -1) return console.log('This skill doesn\'t exist');
        return this.skillList.splice(indexOfDeletedSkill, 1);
    },

    getSkills: function () {
        return 'I can work with: ' + this.skillList.join(', ') + '.';
    },

    addHobby: function (hobby) {
        this.hobbyList.push(hobby)
    },

    deleteHobby: function (hobby) {
        let indexOfDeletedHobby = this.hobbyList.indexOf(hobby);
        if (indexOfDeletedHobby === -1) return console.log('This hobby doesn\'t exist');
        return this.hobbyList.splice(indexOfDeletedHobby, 1);
    },

    getHobbies: function () {
        return 'I like: ' + this.hobbyList.join(', ') + '.';
    },

    makeNewKey: function (key, value) {
        this[key] = value;
    },

    getAnketa: function () {
        return this.getFullName() + '\n' + this.getAge() + '\n' + this.getSkills() + '\n' + this.getHobbies();
    },
};

function setFirstName(nameFirst) {
    this.firstName = nameFirst;
};

function setLastName(nameLast) {
    this.lastName = nameLast;
};

function getFullName() {
    return 'My name is: ' + this.firstName + ' ' + this.lastName;
}

function setAge(newAge) {
    this.age = newAge;
};

function getAge() {
    return 'I am ' + this.age;
}

men.setFirstName('Dmytro');
men.setLastName('Cherepakhin');
men.setAge(47);

men.addSkills('HTML');
men.addSkills('CSS');
men.addSkills('GIT');
men.addSkills('PhotoShop');
men.addSkills('ECMAScript 6');
men.addSkills('C#');

men.deleteSkills('C#');
men.deleteSkills('C++');

men.addHobby('Swimming');
men.addHobby('Running');
men.addHobby('Reading');
men.addHobby('Playing footboll');

men.deleteHobby('Playing footboll');
men.deleteHobby('Playing golf');

men.makeNewKey('addres', 'Kharkiv');
console.log(men.addres);

console.log(men.getFullName());
console.log(men.getAge());
console.log(men.getSkills());
console.log(men.getHobbies());

console.log(men.getAnketa());
