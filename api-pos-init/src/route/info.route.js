const { getList, create, update, remove } = require("../controller/info.controller");

module.exports = function(app) {
    app.get("/api/info", getList);
    app.post("/api/info", create);
    app.put("/api/info", update);
    app.delete("/api/info", remove);
};
