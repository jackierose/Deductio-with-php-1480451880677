<?php

include("connection_setup.php");
session_start();
$con = mysqli_connect($host,$username,$password,$db);

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['psw'];

    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }

      $result = mysqli_query($con, "SELECT * FROM user_table");

      $return_arr = array();

      while ($row = mysqli_fetch_array($result))
      {
          $return_arr[] = array(
              'name' => $row['user_name'],
              'pass' => $row['password_id']
          );
      }

      echo json_encode($return_arr);
  }
}


if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
