console.log('starting app');

const fs = require('fs');
const _= require('lodash');  // lodash module

const notes= require('./notes')



// trying out lodash
// console.log(_.isString(true));
// console.log(_.isString('Byron'))

var filteredArray= _.uniq(['byron',1,2,3,'byron',4,3]);
console.log(filteredArray);

// using required function from notes.js file
// var res = notes.addNote();
// console.log(res);
//
// var  added = notes.add( 9, -2)
// console.log(added);



// var user = os.userInfo();
// console.log(user)
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! `, function(err){
//   if (err) {
//     console.log('unable to write to file');
//   }
// });
