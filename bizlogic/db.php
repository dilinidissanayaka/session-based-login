<?php
$host = "localhost:3306";
$db="structure";
$user="root";
$pwd="";

$conn= new mysqli($host,$user,$pwd,$db);

if($conn->connect_errno){
    http_response_code(400);
    header('Content_type:text/plain');
    echo $conn->connect_error;
    exit();

}

