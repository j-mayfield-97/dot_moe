const express = require('express');
const router = express.Router();

//item model
const item_model = require('../../models/items_model');

//route to Get api/items
//Gets all items in json form
//access public
router.get('/', (req, res) => {
    item_model.find()
    .sort({date : -1}) //sort by date in descending order
    .then(items => res.json(items))
});

// post items
router.post('/', (req, res) => {
    const newItem = new item_model({
        name : req.body.name
    });

    newItem.save()
    .then(item => res.json(item));
});

//mongo makes an id automatically
//dlete item by id
router.delete('/:id', (req, res) => {
    item_model.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({success : true})))

    .catch(err => res.status(404).json({success : false}));
});


//export so it is uable outside this file
module.exports = router;