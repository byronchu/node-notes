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
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? ' note removed' : ' note not found';
    console.log(message);

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('note found');
      notes.logNote(note)
    } else {
      console.log('note not found')
    }


    notes.getNote(argv.title);
} else {
  console.log('command not recognised');
};
