// ==================== 1. JavaScript 对象 ====================
const user = { 
    name: 'zhangsan', 
    age: 18, 
    city: 'beijing' 
}
console.log(user, "JS 对象");
// ==================== 2. JSON.stringify()：把 JS 对象转为 JSON 字符串 ====================
const jsonStr = JSON.stringify(user);
console.log(jsonStr, "JSON字符串");
console.log(typeof jsonStr, "JSON字符串类型");
// ==================== 3. JSON.parse()：把 JSON 字符串转回 JS 对象 ====================
const obj = JSON.parse(jsonStr);
console.log(obj, "转回的对象");
console.log(typeof obj, "转回对象类型");
// 转回后可以继续访问属性
console.log(obj.name, "对象中的name");
console.log(obj.age, "对象中的age");
// ==================== 4. JSON 处理数组 ====================
const arr = ["apple", "banana", "orange"];
const arrJson = JSON.stringify(arr);
console.log(arr, "JS数组");
console.log(arrJson, "JSON数组");
const newArr = JSON.parse(arrJson);
console.log(newArr, "转回数组");
// ==================== 5. JSON 的特点 ====================
// JSON 中的键必须用双引号git pushh p
const json = { "title": "jsjsjsj", "price": 666, "order": "adad" };
console.log(json, "JSON字符串");
console.log(typeof json, "JSON字符串类型");
const obj2 = JSON.parse(JSON.stringify(json));
console.log(obj2, "转回的对象");