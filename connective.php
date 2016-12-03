<?php

session_start();

function SignIn() {
  $services = getenv("VCAP_SERVICES"); // searches for environment variables needed to fetch the info for data base
  $services_json = json_decode($services,true); // decodes the variables that were fetched
  $mysql_config = $services_json["cleardb"][0]["credentials"]; //sets up the servcie config

  $db = $mysql_config["name"];
  $host = $mysql_config["hostname"];
  $port = $mysql_config["port"];
  $username = $mysql_config["username"];
  $password = $mysql_config["password"];

  $con = mysqli_connect($host,$username,$password,$db);
  if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['psw'];

      $result = mysqli_query($con, "SELECT * FROM user_table");

echo "okay";
    /*  $row = mysqli_fetch_array($result)

      if(!empty($row['user_name']) AND !empty($row['password_id'])) {
        $_SESSION['userName'] = $row['pass'];
        echo "SUCCESSFULLY LOGIN TO USER PROFILE PAGE...";
      } */

  }
}


if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
