let myName : string = 'kim';
let names : string[] = ['kim', 'lee','park'];
let someval : null = null; // 텅 빈 자료
let und : undefined = undefined; // 정의가 안됨

// TS가 explicit 하게 타입 지정 안해줘도 자동으로 지정해줌 (Dynamic) Ex) Python
let aaa = 'string' 

// object에서 ?를 사용하면 이 속성은 있어도 되고 없어도 되는 옵션이라는 것을 가리킴
let obj : {name? : string} = {name: 'kim'}

// '|' 기호를 사용해서 union type 선언 가능 - 타입을 미리 정하기 애매할때 사용하면 좋음
let bi : string | number = 1; // string and number 올 수 있음
bi = 'str'

let arr : (number | string)[] = [1, 2, '3', 4];
let objA : {}

// any 타입 - 근데 사용 시 TS 쓰는 의미가 없음
let anyType : any;
anyType = 12;
anyType = 'hello';

// unknown 타입 - 조금 더 안전한 any 타입
let unknownType : unknown;
unknownType = 'hello2';
let var1 : boolean = anyType; // anyType(현재 string)은 var1이 string으로 설정되어 있어도 그냥 뚫고 할당 가능
// let var2 : boolean = unknownType; // unknownType(현재 string)은 var2 (string)에 할당 불가 -> 조금 더 안전

// ** 중요 ** - TypeScript의 타입 엄격함에 대해
// JS 에서 'kim' + 1 은 'kim1'이 됨 | 2 + 1은 3이 됨
// 그럼 union (string | number) 한테 당연히 + 연산기호가 가능하겠지? -> 안됨
// union type은 합쳐진 '새로운 타입'인 것임
// Narrowing | Assertion 등을 하면서 엄격하게 코딩 할 것임
let test : string | number;
// let hi = test + 10; // -> 에러

let a1 : unknown = 1;
// let b1 = a1 - 1; // -> 에러

let a2 : string | number = 'kim'; // 바로 지정시 a 는 string
let b2 = a2 + 1;



// type을 변수에 담아서 사용할 수도 있음 - 보통 대문자 시작하도록 하는 관습 (convention)
type MyType = string[] | number
let bi2 : MyType = ['what', 'the', 'heck'];

// 함수도 가능 (파라미터 타입설정 / 리턴타입 설정)
function func(x:string, y:number) : number {
    return y * 2
}

// array에 사용할 수 있는 tuple 타입
type Member = [number, boolean];
let john : Member = [25, false];

// object
let members : {
    member1 : string,
    memebr2 : string
} = {
    member1 : 'Minsoo',
    memebr2 : 'John Doe'
}

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

let favorites : {singer : string, song : string} = {
    singer : 'Yoon-ha',
    song : 'Event Horizon'
}

let project : {
    member : string[],
    days : number,
    started : boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}