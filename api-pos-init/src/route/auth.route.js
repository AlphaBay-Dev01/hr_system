const { getList, create, update, remove } = require("../controller/auth.controller");

module.exports = function(app) {
    app.get("/api/auth", getList);
    app.post("/api/auth", create);
    app.put("/api/auth", update);
    app.delete("/api/auth", remove);
};
