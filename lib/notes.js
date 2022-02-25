const fs = require('fs');
const path = require('path');


// validate new not entry
function validateNote(note) {
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    return true;
}

// create new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray , null, 2)
    );
    return note;
}


module.exports = {
    createNewNote,
    validateNote
};