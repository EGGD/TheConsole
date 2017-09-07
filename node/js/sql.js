var nodejsSqlStatement={

}
nodejsSqlStatement.url=function (req,res) {
    var url_info = require('url').parse(req.url, true);
    var userName = url_info.query.user;
    var userPassword = url_info.query.password;
    var userId = url_info.query.id;
    var value = url_info.query.value;
    var param = [userName, userPassword,value];
    var haveUserData = [userName];
    var insertUserData = [userName, userPassword];
    return {
        url_info,
        userName,
        userPassword,
        userId,
        param,
        haveUserData,
        insertUserData,
        value
    }
}
//查询语句
nodejsSqlStatement.selectUserSQL=function (a,b) {
    return 'SELECT * FROM usertable WHERE user=(?) and password=(?)';
};
//查询是否存在当前账号
nodejsSqlStatement.haveUserSQL=function (a,b) {
    return  'SELECT * FROM usertable WHERE user=(?)';
};
//添加不存在的用户
nodejsSqlStatement.insertUserSQL=function (a,b) {
    return 'INSERT INTO usertable (USER,PASSWORD) VALUE(?,?)';
};
//判断当前id的用户是否存在
nodejsSqlStatement.haveUserIdSQL=function (a,b) {
    return  'SELECT * FROM usertable WHERE id=(?)';
};
//删除id为**的账号
nodejsSqlStatement.deleteUserIdSQL=function (a,b) {
    return   'DELETE  FROM usertable WHERE id=(?)';
};

module.exports=nodejsSqlStatement;