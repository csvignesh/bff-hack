const store = require('../store');
let lastChecked = Date.now();

module.exports = (req, res) => {
    const data = store.get(req.query.id) || { secondary: [] };
    const newData = data.secondary.filter(e => e.timestamp > lastChecked);

    lastChecked = Date.now();

    res.json(newData.length > 0 ? newData : {});
};