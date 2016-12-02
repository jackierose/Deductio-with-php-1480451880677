<?php

$services = getenv("VCAP_SERVICES"); // searches for environment variables needed to fetch the info for data base
$services_json = json_decode($services,true); // decodes the variables that were fetched
$mysql_config = $services_json["cleardb"][0]["credentials"]; //sets up the servcie config
//^^ like a dictionary, array in array....

// sets up data base stuff
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

  $result = mysqli_query($con, "SELECT * FROM user_table");

  $return_arr = array();

  while ($row = mysqli_fetch_array($result))
  {
      $return_arr[] = array(
          'name' => $row['uname'],
          'pass' => $row['password_id']
      );
  }

  echo json_encode($return_arr);




 ?>
