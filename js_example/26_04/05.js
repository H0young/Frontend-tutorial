// prototype

function Animal(type, name, sound) {
    this.type = type
    this.name = name
    this.sound = sound
    // this.say = function () {console.log(this.sound)}
}

Animal.prototype.say = function () {
    console.log(this.sound)
}

const dog = new Animal('개', '댕댕이', '멍멍!')
const cat = new Animal('고양이', '냥냥이', '야옹')

dog.say()
cat.say()

// class

class Animal2 {
    constructor(type, name, sound) {
        this.type = type
        this.name = name
        this.sound = sound
    }
    say() {
        console.log(this.sound)
    }
}

class Dog2 extends Animal2 {
    constructor(name, sound) {
        super('개', name, sound)
    }
}

class Cat2 extends Animal2 {
    constructor(name, sound) {
        super('고양', name, sound)
    }
}

const dog2 = new Animal2('멍뭉', '왈왈')
const cat2 = new Animal2('냥냥', '냥')

dog2.sat()
cat.say()