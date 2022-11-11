function requestData(par1,par2,par3,callback){
    var xhr = new XMLHttpRequest();
    //2.配置请求信息
    xhr.open(par1,"http://106.75.16.42:8082/" + par2);
    //配置请求头，告诉后端前端以表格的形式传递过去参数
    xhr.setRequestHeader("content-Type","application/x-www-form-urlencoded")
    //3.发送
    xhr.send(par3);
    //后端收到请求，处理 - 返回对应的数据
    //前端得到想要的内容，怎么拿
    xhr.onreadystatechange = function ()   {
        //4.代表服务器正常
        //200: OK
        if(xhr.readyState == 4 && xhr.status == 200){
            //所有的一切正常，拿到后台数据，在哪里？
            console.log(xhr.response); 
             //将服务器的json数据转换成为 JavaScript 对 象
            var res = JSON.parse(xhr.responseText)
            callback(res)
        }
    }
}