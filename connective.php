<?php

session_start();
$services = getenv("VCAP_SERVICES"); // searches for environment variables needed to fetch the info for data base
$services_json = json_decode($services,true); // decodes the variables that were fetched
$mysql_config = $services_json["cleardb"][0]["credentials"]; //sets up the servcie config

$db = $mysql_config["name"];
$host = $mysql_config["hostname"];
$port = $mysql_config["port"];
$username = $mysql_config["username"];
$password = $mysql_config["password"];



function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['psw'];

    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }
      $con = mysqli_connect($host,$username,$password,$db);
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
