// 클래스 기본형

class Book{
    constructor(type,title){
        this.type = type;
        this.title = title;
    }
list(){
    document.write(`<p>${this.type} : ${this.title}</p>`)
  }
}

// const photo = new Book('graphic','photoshop');
// const vector = new Book('graphic','illustrator');
// const code = new Book('it','html');

// photo.list();
// vector.list();
// code.list();

const my = [
    new Book('graphic','photoshop'),
    new Book('graphic','illustrator'),
    new Book('it','html')
]

my[0].list();
my[1].list();
my[2].list();