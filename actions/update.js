const store = require('../store');

module.exports = (req, res) => {
    store.update(req.query.id, {
        name: req.query.name,
        quantity: req.query.quantity
    });
    res.json({ update: "success" });
};