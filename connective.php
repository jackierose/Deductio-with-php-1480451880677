<?php

include("connection_setup.php");
session_start();

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['pwd'];
    //echo $ID;
    $query = mysqli_query($con,"select * from user_table where user_name = '$ID' and password_id = '$Password'");
    echo "Everything still works";
  }
}


if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
