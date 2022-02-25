const router = require('express').Router();
const myNotesRoutes = require('../apiRoutes/myNoteRoutes');

router.use(myNotesRoutes);


module.exports = router; 