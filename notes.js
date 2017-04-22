console.log('starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title , body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

// check no duplicate Titles
  var duplicateNotes = notes.filter((note) => note.title === title);
    if ( duplicateNotes.length === 0 ) {
      notes.push(note);
      saveNotes(notes);
      return note;
    }
  };

var getAll = () => {
  console.log('getting all notes');

  //  console.log(notes[i].body);
  }
 };


var getNote = (title) => {
  console.log('getting note:', title)
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

var removeNote = (title ) => {
  console.log('Remove note', title)

  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title != title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length
};
// console.log(module)

var logNote = (note) => {
  console.log('--------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);

}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
