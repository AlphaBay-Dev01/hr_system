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
        const [list] = await db.query("INSERT INTO employeeprofile")
        res.json({
            data: list,
        })
    }catch (error) {
        logError("employeeprofile.create", error, res)
       }
};

exports.update = async (req, res) => {
    try {
        const [list] = await db.query("UPDATE employeeprofile SET name = 'John' WHERE id = 1");
        res.json({
            data: list,
        });
    } catch (error) {
        logError("employeeprofile.update", error, res);
    }
}; 
exports.remove = async (req, res) => {
    try {
        const [list] = await db.query("DELETE FROM emp_info WHERE id = 1");
        res.json({
            data: list,
        });
    } catch (error) {
        logError("emp_info.remove", error, res);
    }
};

