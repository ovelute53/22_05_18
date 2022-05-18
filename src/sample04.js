class Fruit{
    constructor(title,color,price){
        this.title = title;
        this.color = color;
        this.price = price;
    }
    list(){
        document.write(`<p>${this.title} : ${this.color} : ${this.price}</p>`)
    }
}

// const apple = new Fruit('apple','red','1000원');
// const banana = new Fruit('banana','yellow','2000원');
// const grape = new Fruit('grape','violet','3000원');

// apple.list();
// banana.list();
// grape.list();

const my = [
    new Fruit('apple','red','1000원'),
    new Fruit('banana','yellow','2000원'),
    new Fruit('grape','violet','3000원')
]
// my[0].list();
// my[1].list();
// my[2].list();


for(const item of my){
    item.list();
}