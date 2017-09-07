/**
 * Created by CL on 2017/6/26.
 */
var addUser={

};
addUser.addUserData=function (connection,nodejsSqlStatement,inIt,res) {
    connection.query(nodejsSqlStatement.haveUserSQL(), inIt.haveUserData, function (err, rows, fields) {
        console.log(rows)
        var json;
        if (rows[0] != undefined) {
            console.log('Have data');
            json=addUser.arrayToJson("该用户已存在")
            res.end(json)
        } else {
            connection.query(nodejsSqlStatement.insertUserSQL(), inIt.insertUserData, function (err, rows, fields) {
                if (err) throw err;
                console.log('Add data');
                json=addUser.arrayToJson("添加成功");
                res.end(json)
            });
        }
    });
};
addUser.arrayToJson=function (rows) {
    return JSON.stringify({
        r:rows
    });
};

module.exports=addUser;