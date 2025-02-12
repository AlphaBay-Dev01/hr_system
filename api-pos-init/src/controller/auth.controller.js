exports.getList = function(req, res) {
    res.json({
        list: [1]
    });
};

exports.create = function(req, res) {
    res.json({
        data: [2]
    });
};

exports.update = function(req, res) {
    res.json({
        data: [3]
    });
};

exports.remove = function(req, res) {
    res.json({
        data: [4]
    });
};
