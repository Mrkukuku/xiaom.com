<?php
    include('./coon.php');
    $username=$_GET['username'];
    $password=$_GET['password'];
    $sql="select * from xiaomi where username='$username'";
    $res=$mysqli->query($sql);
    // $res->num_rows>0
    if($res->num_rows>0){
        echo '{"reslut":true,"messeg":"用户名已存在"}';
    }
    else{
        echo '{"reslut":false,"messeg":"用户名可用"}'; 
       
    }
    
    
    $mysqli->close();

?>