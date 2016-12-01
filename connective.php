<?php

include("connection_setup.php");
session_start();

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['pwd'];
    echo $ID; 
  }
}

if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
