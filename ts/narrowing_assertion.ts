// Narrowing 스킬을 사용해서 코드 짜기
function narrow(x:number|string) {
    // 1. typeof 를 사용하면 그 타입의 string값이 남음! -> string으로 비교해줘야함!
    if (typeof x === 'string') { 
        return x + '1';
    } else {
        return x + 1;
    }
}

// 다른 Narrowing 방법들
// 2. 속성명 'in' object
// 3. instance 'instanceof' 부모
// 말고도 그냥 지금 변수의 타입이 뭔지 특정해줄 수 있는 것들

// Assertion 문법 (type 덮어쓰기) - 편리하지만 용도에 맞게 잘 써야함 - 그냥 if문 많이 쓰자..
function assert(x:number|string) {
    let array : number[] = [];
    // x 를 number로 특정해서 넣기
    array[0] = x as number;
}
// Assertion 문법 쓸 때
// 1. Narrowing 필요할 때 (여러개담긴 union type -> specific type 특정)
// 2. 무슨 타입이 올지 100% 확실할때
assert('123') // 원래 string이 들어갔으므로 버그 일어나야하는데 assertion 때문에 버그 캐치 안해줌
// 즉, 주로 남이 쓴 코드 실행해 볼때나 디버깅 할때 비상용으로 쓰자