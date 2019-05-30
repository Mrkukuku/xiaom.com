<?php
    include('./coon.php');
    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    $sql="select * from xiaomi where username='$username' and password='$password'";
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        echo "<script src='../js/cookie.js'></script>";
        echo "<script>cookie.set('login','true',2);cookie.set('username','$username',2);</script>";
        echo "<script>alert('登录成功');
        location.href='../html/小米商城首页.html';</script>";
    }else{
        echo "<script>alert('登录失败');
        location.href='../html/index.html';</script>";
    }
    $mysqli->close();
    // cookie. remove('shop');cookie. remove('shop1')
?>