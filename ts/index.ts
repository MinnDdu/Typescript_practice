let myName :string = 'kim';
let names :string[] = ['kim', 'lee','park'];

// object에서 ?를 사용하면 이 속성은 있어도 되고 없어도 되는 옵션이라는 것을 가리킴
let obj : {name? : string} = {name: 'kim'}
// '|' 기호를 사용해서 union type 선언 가능
let bi : string|number = 1;

// type을 변수에 담아서 사용할 수도 있음 - 보통 대문자 시작하도록 하는 관습 (convention)
type MyType = string[]|number
let bi2 : MyType = ['what', 'the', 'heck'];

// 함수도 가능 (파라미터 타입설정 / 리턴타입 설정)
function func(x:string, y:number) : number {
    return y * 2
}

// array에 사용할 수 있는 tuple 타입
type Member = [number, boolean];
let john : Member = [25, false];

// object에서 속성이 너무 많아져서 일일이 관리하기 어려울 경우
type Member2 = {
    [key : string] : string, // string인 모든 key들의 value들은 string 이어야함!
}
let foo : Member2 = {
    'name' : 'minsoo',
    'age' : '24',
}

// class 또한 타입지정 가능
class User {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}