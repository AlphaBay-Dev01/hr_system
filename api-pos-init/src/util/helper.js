const connection = require("./connection");
const {logError} = require("./logErrors");
exports.db = connection;
exports.logError = logError;



exports.toInt = () =>{
    return true;
}

exports.isArray  = () =>{
    return true;
}

exports.isEmpty  = () =>{
    return true;
}

exports.isEmail  = () =>{
    return true;
}




