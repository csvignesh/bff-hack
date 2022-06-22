const { get } = require("express/lib/response");

const store = {};

module.exports = {
    update(id, { name, quantity = 0 } = {}) {
        if (!id) return;

        const timestamp = Date.now();
        const currentData = store[id] || { secondary: [] };
        const secondaryDataIndex = currentData.secondary.findIndex(e => e.name === name);

        if (secondaryDataIndex > -1) {
            currentData.secondary[secondaryDataIndex].quantity = quantity;
            currentData.secondary[secondaryDataIndex].timestamp = timestamp;
        } else {
            currentData.secondary.push({
                name,
                quantity,
                timestamp
            });
        }

        store[id] = currentData;
    },

    get(id) {
        return store[id];
    }
};