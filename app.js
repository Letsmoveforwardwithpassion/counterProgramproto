// const foo = () => {
//     return new Promise((resolve,reject) => {
//         const condition = true;
//         if (condition){
//             resolve("成功");
//         }else{
//             reject("エラー");
//         }
//     });
// };

// for (let i = 1; i <101; i++){
//     console.log(i);
// }

// const findMax = (arr) => {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] > max ){
//             max = arr[i];
//         }
//     }

//     console.log(max);

// }

// findMax([12,6,25,8,17])

// class User {
//     constructor(obj) {
//         this.userName = obj.userName;
//         this.avatar = obj.avatar;
//         this.birthDay = obj.birthDay;
//         this.followers = obj.followers;

//         this.congratsBirthday();
//     }
//     follow(){}
//     post(){}
//     like(){}
//     repost(){}
//     congratsBirthday(){
//         if (this.birthDay === new Date()){
//             return alert("お誕生日おめでとう")
//         }
//     }
// }

// const user = new User({
//     userName: "Taro Tanaka",
//     avatar:"https//example.com",
//     birthDay:new Date(1990, 1, 1),
//     followers:100
// });


// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         console.log(`Hi, I'm ${this.name},and i'm ${this.age} years old,`);
//     }
// }

// const person = new Person("john",30);
// person.sayHi();

// const $counter = document.getElementById("js-counter");

// document.getElementById("js-button").addEventListener("click",() =>
// {
//     let currentCount = parseInt($counter.textContent);
//     $counter.textContent = currentCount + 1;
// });

(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        //e.currentTarget="addEventListenerを登録した対象".js-button
        let currentCount = parseInt($counter.textContent);
        // $counter.textContentはid="js-counter"の数値なので0。
        //  ただしtextContentは文字列を使うため、parseIntで数値に直す
        if($targetButton.textContent === "+"){
            currentCount ++ ;
        //$targetButton.textContentつまりjs-buttonの中の値が+だった場合currentCountに+1
        }else {
            currentCount -- ;
        }

        $counter.textContent = currentCount;

        if(currentCount % 10 === 0 && currentCount !== 0){
            $counter.style.color = "red"
        }else{
            $counter.style.color ="black"
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++){
        document.getElementsByClassName("js-button")[index].addEventListener("click",clickHandler)
    }
})();
// for文によりdocument.getElementsByClassName("js-button")[index]つまり
// クラスのjs-buttonの-と+がクリックされたときにclickHandler関数が実施する処理を登録
// forループ：
//   1回目 → js-button[0] に clickHandler を登録
//   2回目 → js-button[1] に clickHandler を登録
//   → 終了（以降、for文は動かない）

// ↓ ユーザーがクリック
//   → clickHandler 実行（登録されているから）
//   → またクリック
//   → また clickHandler 実行
//   → 何度でも