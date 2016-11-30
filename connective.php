<?php

include("connection_setup.php");
session_start();

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['pwd'];
    $sql = "select * from user_table where user_name = '$ID' and password_id = '$Password'";
    //echo $_POST['uname'];
  }
}

if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
