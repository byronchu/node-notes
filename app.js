console.log('starting app');

const fs = require('fs');
const _= require('lodash');  // lodash module
const yargs = require('yargs');  //yargs module

const notes= require('./notes')


const argv = yargs.argv
// argument from command line
var command = argv._[0]
console.log('command:',command);
console.log('process',process.argv);
console.log('Yargs', argv);


if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
  console.log('command not recognised');
};
