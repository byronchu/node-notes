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
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    console.log('---------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? ' note removed' : ' note not found';
    console.log(message);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
  console.log('command not recognised');
};
