console.log('starting notes.js')

const fs = require('fs');

var addNote = (title , body) => {
//  console.log('Adding note', title , body)
  var notes =[];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  };

// check no duplicate Titles
 var duplicateNotes = notes.filter((note) => note.title === title);


  if ( duplicateNotes.length === 0 ) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }



  };

var getAll = () => {
  console.log('getting all notes');
}

var getNote = (title) => {
  console.log('getting note:', title)
}

var removeNote = (title ) => {
  console.log('Remove note', title)
};
// console.log(module)

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
