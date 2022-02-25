const router = require("express").Router();
const { createNewNote, validateNote } = require('../../lib/notes')
const notes = require('../../db/db.json')
const createId = require("create-id");

// Retrieving notes 
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
    console.log(notes);
});

// creating a new note
router.post('/notes', (req, res) => {
    req.body.id = createId(null, null, 10);
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
    console.log('posted');
    // store data to json file using fs.writeFile('.db/db.json', ()=>{})
})

// deleting a route 
router.delete('/notes', (req,res) => {
    
})

module.exports = router; 