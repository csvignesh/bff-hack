const store = require('../store');

module.exports = (req, res) => {
    if (!req.query.id || !req.query.name) {
        res.json({ update: "failed" }); 
    } else {
        store.update(req.query.id, {
            name: req.query.name,
            quantity: req.query.quantity
        });
        res.json({ update: "success" });
    }
};