<?php

$database = 'ad_bb2de57421bd8ae';
$user = 'b272612f8dfd45';
$password = '2c9bc5a5';
$hostname = 'us-cdbr-iron-east-04.cleardb.net';
$port = 3306;

$services = getenv("VCAP_SERVICES"); // searches for environment variables needed to fetch the info for data base
$services_json = json_decode($services,true); // decodes the variables that were fetched
$mysql_config = $services_json["mysql-5.5"][0]["credentials"]; //sets up the servcie config
echo $services;
/*
// sets up data base stuff
$db = $mysql_config["ad_bb2de57421bd8ae"];
$host = $mysql_config["us-cdbr-iron-east-04.cleardb.net"];
$port = $mysql_config["3306"];
$username = $mysql_config["b272612f8dfd45"];
$password = $mysql_config["2c9bc5a5"];

//tries to connect
$conn = mysql_connect($host, $username, $password);

if (!$con)
  {
  echo "no";
} else {
  echo "yes";
}*/

 ?>
