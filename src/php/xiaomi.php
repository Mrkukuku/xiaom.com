<?php
    include("./coon.php");
    $type='phone';
    $sql="select * from product where type='$type'";
    $res=$mysqli->query($sql);
    $arr=array();
    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json = json_encode($arr);

    echo $json;
    $mysqli->close();

?>