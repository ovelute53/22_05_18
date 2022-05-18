const fruit = {
    name : 'red',
    type : 'apple',
    list : function(){
        console.log(`${this.name} : ${this.type}`)
    }
}

fruit.list();
// 매서드를 단축으로 만들기
// list(){
//     실행문;
// }

const fruit2 = {
    name: 'yellow',
    type: 'banana',
    list(){
        console.log(`${this.name} : ${this.type}`)
    }
}
fruit2.list();