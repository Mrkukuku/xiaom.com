(function() {
    var ajax = {
        get: function(url, data, callback) {
            var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
            var str = "?time=" + Date.now() + "&";
            if (typeof data === 'object') {
                for (var i in data) {
                    str += i + "=" + data[i] + "&";
                }
                str = str.slice(0, -1);
            }
            url += str;
            xhr.open("get", url, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (typeof data === 'function') {
                        data(xhr.responseText);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            }
        },
        post: function(url, data, callback) {
            var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
            xhr.open("post", url, true);
            xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
            if (typeof data === 'object') {
                data = JSON.stringify(data); //将对象转成JSON字符串
                xhr.send(data); //发送
            } else {
                xhr.send(); //发送
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (typeof data === 'function') { //判断第二个参数是否是函数
                        data(xhr.responseText); //调用函数并传入响应内容
                    } else {
                        callback(xhr.responseText); // 调用第三个参数 传入响应内容
                    }
                }
            }
        }
    };

    window.ajax = ajax;
})();