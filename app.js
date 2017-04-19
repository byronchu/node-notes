console.log('starting app');

const fs = require('fs');
const _= require('lodash');  // lodash module

const notes= require('./notes')

// argument from command line
var command = process.argv[2]
console.log('command:',command);


if (command === 'add') {
  console.log('adding a note');
} else if (command === 'list') {
    console.log('listing a note');
} else if (command === 'remove') {
    console.log('remove a note');
} else if (command === 'read') {
    console.log('reading a note');
} else {
  console.log('command not recognised');
};
