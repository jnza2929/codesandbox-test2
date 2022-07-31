/**
 * const, let等の変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能
// vall = "var変数を上書き";
// console.log(vall);

// // var変数は再現宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "lwet変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "letは変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// const val3 = "const変数";
// console.log(val3);

// // const変数は再宣言、上書き可能
// // val3 = "const変数を上書き";

// // 定数をオブジェクトとして宣言する。
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// console.log(val4);

// // constで定義してもオブジェクトの場合は、プロパティを変更できる。
// val4.name = "jak";
// console.log(val4);

// 配列を宣言
// const val5 = ["dog", "cat"];
// // constで宣言した配列はプロパティの変更が可能
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// 「私の名前はじゃけぇです。年齢は28歳です。」

// 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// テンプレート文字列を用いた方法
// テンプレート3字列は、逆引用符（shift+@）で囲むこと。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// {}で囲う場合には、returnを記述する必要がある。
// const func2 = (str) => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 変数myProfileに配列型の値を代入
// const myProfile = [`じゃけぇ`, 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// //sayHello("じゃけぇ");
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // スプレッド構文
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// // スプレッド構文の方が短い、順番に処理を実行させるときは便利
// sumFunc(...arr1);

// まとめる
// 配列をまとめる時にもスプレッド構文が使える。
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // 配列のコピー
// const arr6 = [...arr4];
// console.log(arr6);

// // 配列の結合
// // 結合元の配列には影響が出ない。
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// // コピー元の配列であるarr4もarrr8の変更値で
// // 上書きされるので注意が必要である。
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
// 配列に格納された要素分、ループ処理を回して配列内の要素を表示する。
// for (let index = 0; index < nameArr.length; index++) {
//   //console.log(nameArr[index]);
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

// filter：ある条件に合致した情報だけを取り出すことができる。
// const numArr = [1, 2, 3, 4, 5];
// const newNameArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNameArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時：条件がfalseのとき
// const vall = 1 > 0 ? "trueです" : "falseです";
// console.log(vall);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);
// console.log("formattedNum");

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
// };
// console.log(checkSum(99, 0));
// console.log(checkSum(100, 0));
// console.log(checkSum(101, 0));

/**
 * 論理演算子の本当の意味を知ろう
 * && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2は、trueになります。");
// }
// if (flag1 && flag2) {
//   console.log("1も2も、trueになります。");
// }

// || は左側がfalseなら右側を返す。
// const num = null;
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// && は左側がtrueなら右側を返す。
//const num2 = 100;
const num2 = null;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
