// 클래스 상속 & 확장

// 기본

class Book{
    constructor(type, title){
        this.type = type;
        this.title = title;
    }
    list(){
        document.write(`<p>${this.type} : ${this.title}</p>`)
    }
}

const myBook = new Book('개발서', '프론트엔드');
myBook.list();

// 자식

class Graphic extends Book{
    constructor(type, title, level){
        super(type, title);
        this.level = level;
    }
    list(){
        document.write(`<p>${this.type} : ${this.title} : ${this.level}</p>`)
    }
}

const myGraphic = new Graphic('사진편집','photoshop',1);
myGraphic.list();

class It extends Book{
    constructor(type, title){
        super(type, title);
    }
    action(){
        document.write(
            `${this.type} : ${this.title}
            <br>`
        )
    }
}

const myIt = new It('basic','html')
myIt.list();

