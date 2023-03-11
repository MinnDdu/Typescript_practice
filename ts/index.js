var myName = 'kim';
var names = ['kim', 'lee', 'park'];
// object에서 ?를 사용하면 이 속성은 있어도 되고 없어도 되는 옵션이라는 것을 가리킴
var obj = { name: 'kim' };
// '|' 기호를 사용해서 union type 선언 가능
var bi = 1;
var bi2 = ['what', 'the', 'heck'];
// 함수도 가능 (파라미터 타입설정 / 리턴타입 설정)
function func(x, y) {
    return y * 2;
}
var john = [25, false];
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
