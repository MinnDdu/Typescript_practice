var myName = 'kim';
var names = ['kim', 'lee', 'park'];
var someval = null; // 텅 빈 자료
var und = undefined; // 정의가 안됨
// TS가 explicit 하게 타입 지정 안해줘도 자동으로 지정해줌 (Dynamic) Ex) Python
var aaa = 'string';
// object에서 ?를 사용하면 이 속성은 있어도 되고 없어도 되는 옵션이라는 것을 가리킴
var obj = { name: 'kim' };
// '|' 기호를 사용해서 union type 선언 가능 - 타입을 미리 정하기 애매할때 사용하면 좋음
var bi = 1; // string and number 올 수 있음
bi = 'str';
var arr = [1, 2, '3', 4];
var objA;
// any 타입 - 근데 사용 시 TS 쓰는 의미가 없음
var anyType;
anyType = 12;
anyType = 'hello';
// unknown 타입 - 조금 더 안전한 any 타입
var unknownType;
unknownType = 'hello2';
var var1 = anyType; // anyType(현재 string)은 var1이 string으로 설정되어 있어도 그냥 뚫고 할당 가능
// let var2 : boolean = unknownType; // unknownType(현재 string)은 var2 (string)에 할당 불가 -> 조금 더 안전
// ** 중요 ** - TypeScript의 타입 엄격함에 대해
// JS 에서 'kim' + 1 은 'kim1'이 됨 | 2 + 1은 3이 됨
// 그럼 union (string | number) 한테 당연히 + 연산기호가 가능하겠지? -> 안됨
// union type은 합쳐진 '새로운 타입'인 것임
// Narrowing | Assertion 등을 하면서 엄격하게 코딩 할 것임
var test;
// let hi = test + 10; // -> 에러
var a1 = 1;
// let b1 = a1 - 1; // -> 에러
var a2 = 'kim'; // 바로 지정시 a 는 string
var b2 = a2 + 1;
var bi2 = ['what', 'the', 'heck'];
// 함수도 가능 (파라미터 타입설정 / 리턴타입 설정) - 함수 리텀타입에는 void 사용 가능
function func(x, y) {
    return y * 2;
}
// 옵션 파라미터 (안 사용해도 되는)는 '?'를 적어주면 됨
// ** 중요 ** - '?'의 원리 -> y : number 를 y : number | undifined 으로 만들어주는 것!
function func2(x, y) {
    console.log(x);
}
var john = [25, false];
// object
var members = {
    member1: 'Minsoo',
    memebr2: 'John Doe'
};
var foo = {
    'name': 'minsoo',
    'age': '24',
};
// class 또한 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var favorites = {
    singer: 'Yoon-ha',
    song: 'Event Horizon'
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
function testFunc(name) {
    if (name) {
        return 'My name is ' + name;
    }
    else {
        return 'My name is John Doe';
    }
}
function testFunc2(n) {
    return n.toString.length;
}
function testFunc3(income, realEstate, charm) {
    var score = income;
    if (realEstate) {
        score += 500;
    }
    if (charm === 'high') {
        score += 100;
    }
    if (score > 600) {
        return 'you can marry!';
    }
    else {
        return 'so sorry';
    }
}
console.log(testFunc3(100, true, 'high'));
