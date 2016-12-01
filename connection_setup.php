<?php
include('functions.php');
/*
$database = 'ad_bb2de57421bd8ae';
$user = 'b272612f8dfd45';
$password = '2c9bc5a5';
$hostname = 'us-cdbr-iron-east-04.cleardb.net';
$port = 3306;
*/

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

$conn_string = "DRIVER={IBM DB2 ODBC DRIVER};";
$conn_string .= "DATABASE=" . $sqldb_config["name"] . ";";
$conn_string .= "HOSTNAME=" . $sqldb_config["hostname"] . ";";
$conn_string .= "PORT=" . $sqldb_config["port"] . ";";
$conn_string .= "PROTOCOL=TCPIP;";
$conn_string .= "UID=" . $sqldb_config["username"] . ";";
$conn_string .= "PWD=" . $sqldb_config["password"] . ";";

$con = db2_connect($conn_string, '', '');
if($con) {
  echo "YEAAA!" ;
} else {
  echo "no";
}

//tries to connect
/*$con = mysqli_connect($host . ':' . $port, $username, $password, $db);

if (!$con)
  {
  echo "no";
} else {
  echo "yes";
}*/

/*
define('DB_HOST', 'us-cdbr-iron-east-04.cleardb.net');
define('DB_NAME', 'ad_bb2de57421bd8ae');
define('DB_USER','b272612f8dfd45');
define('DB_PASSWORD','2c9bc5a5');
define('DB_DATABASE', 'Deductio-Database');

$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
or die("Failed to connect to MySQL: " . mysql_error());
if (!$con)
  {
  echo "no";
} else {
  echo "yes";
}
*/




 ?>
