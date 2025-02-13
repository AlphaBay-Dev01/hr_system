// Call function db from file helper.js
const { db, isArray, isEmpty, logError } = require('../util/helper'); 
exports.getList = async (req, res) => {
   try {
    const [list] = await db.query('SELECT * FROM employeeprofile');
    res.json({
        list:list,
    })
   }catch (error) {
    logError("employeeprofile.getList", error, res)
   }
};

exports.create = async (req, res) => {
    try {
        var sql = "INSERT INTO  tabletesting (name,gender) VALUES (:name,:gender)"; 
        const [list] = await db.query(sql,{
            name: req.body.name,
            gender: req.body.gender
        });
        res.json({
            data: list,
        })
    }catch (error) {
        logError("tabletesting.create", error, res)
       }
};

exports.update = async (req, res) => {
    try {
        const [list] = await db.query("UPDATE tabletesting SET name = 'John' WHERE id = 1");
        res.json({
            data: list,
        });
    } catch (error) {
        logError("tabletesting.update", error, res);
    }
}; 
exports.remove = async (req, res) => {
    try {
        const [list] = await db.query("DELETE FROM tabletesting WHERE id = 1");
        res.json({
            data: list,
        });
    } catch (error) {
        logError("tabletesting.remove", error, res);
    }
};

