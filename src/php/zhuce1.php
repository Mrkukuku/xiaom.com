<?php
  include('./coon.php');
  $username=$_GET['username'];
  $password=$_GET['password'];
  // $sql="select * from chenr where chenname='$username'";
  // $result=$mysqli->query($sql);
  // if($result->num_rows>0){
  //   die('用户名已存在');
  //  }
   $insetsql="insert into xiaomi(username,password)values('$username','$password')";
   $res=$mysqli->query($insetsql);

   if($res){
    echo'<script>alert("注册成功，点击跳转");location.href="../html/小米登录.html"</script>';
   }else{
     echo '错误';
   }

   $mysqli->close();


?>