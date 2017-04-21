// var obj = {
//   name: 'Byron'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name": "Byron Chu", "age": 33}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: ' some body'
};


var orignialNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', orignialNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
console.log(note.body)
