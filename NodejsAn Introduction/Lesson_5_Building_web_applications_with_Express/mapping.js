'use strict';
var data = {
    g:'http://www.google.com'
};
var mapping = {
    get:function(url,callback){
        var redirectUrl = url.substring(1);
        if(!data[redirectUrl]){
            return  callback(new Error('URL not found'));
        }

        return callback(null,data[redirectUrl]);
    }
};
module.exports = mapping;