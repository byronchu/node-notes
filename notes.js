console.log('starting notes.js')
var addNote = (title , body) => {
  console.log('Adding note', title , body)
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
