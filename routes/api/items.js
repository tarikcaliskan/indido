const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private

router.post('/', auth, (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});
	newItem.save().then((item) => res.json(item));
});

// @route   POST api/items/:id
// @desc    Toggle An Item
// @access  Private

router.post('/:id', auth, (req, res) => {
	console.info(req.params.id);
	Item.findById(req.params.id, function(err, item) {
		if (!item) res.send("Document couldn't get.");
		else {
			// Update completed boolean, response it with its id
			item.isCompleted = !item.isCompleted;
			const response = {
				id: req.params.id,
				isCompleted: item.isCompleted
			};

			item.save(function(err) {
				if (err) res.send('error');
				else res.send(response);
			});
		}
	});
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Private

router.delete('/:id', auth, (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
