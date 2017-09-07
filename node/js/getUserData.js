/**
 * Created by CL on 2017/6/26.
 */
var login={

};
login.getUserData=function (connection,sql,param,res) {
    connection.query(sql,param, function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
        if (rows[0] == undefined) {
            rows = "账号不存在或密码错误"
            res.end(rows)
        } else {
            var json = JSON.stringify({
                rows
            });
            res.end(json)
        }
    });
};

module.exports=login;