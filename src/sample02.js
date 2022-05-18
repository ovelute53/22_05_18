// 생성자 함수의 이름 대문자로 시작
// class -> 대문자
function Book(type,title){
    this.type = type;
    this.title = title;
    // this.action = function(){}
}

Book.prototype.action = function(){
    console.log(
        `
        ${this.type}:${this.title}
        `
    )
}

// 인스턴스 생성
// const photoshop = new Book('graphic','photo');
// const script = new Book('it','javascript');
// const html = new Book('it','html5');

// photoshop.action();
// script.action();
// html.action();

// 생략버전
const it = [
    new Book('graphic','photo'),
    new Book('it','javascript'),
    new Book('it','html5')
]

// it[0].action();
// it[1].action();
// it[2].action();


// for 문(일반)
// let num = it.length;
// console.log(num);
// for(let i = 0; i <= num-1; i++){
//     it[i].action();
// }
// for 문(in)
for(const index in it){
    it[index].action();
}
// for 문(of)
for(const item of it){
    item.action();
}