/* Feature Request: */
// 2
let commentCount = 5;
commentCount=8; // No error ,because const type variable can be updated or modified
console.log(commentCount);
console.log(typeof commentCount);
const editComment = false;
editComment = true; // throws an error , because const type variable can't be updated or modified
console.log(editComment); 
console.log(typeof editComment);