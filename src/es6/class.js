class Animal {
    constructor() {
        this.type = "animal";
    }

    says(say) {
        say = say || 'hello';
        document.write(`${this.type} says ${say} <br/>`);
    }
}

class Cat extends Animal {
    constructor() {
        super(); //访问父类的属于属性与方法
        this.type = "cat";
    }
}

export default function() {
    let animal = new Animal();
    animal.says();

    let cat = new Cat();
    cat.says('hi');
}