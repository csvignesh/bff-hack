const store = require('../store');
const noData = {};

module.exports = (req, res) => {
    const data = store.get(req.query.id);

    res.json(data || noData);
};