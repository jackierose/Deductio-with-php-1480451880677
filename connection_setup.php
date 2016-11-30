<?php
/*define('DB_HOST', 'us-cdbr-iron-east-04.cleardb.net');
define('DB_NAME', 'ad_bb2de57421bd8ae');
define('DB_USER','b272612f8dfd45');
define('DB_PASSWORD','2c9bc5a5');
define('DB_DATABASE', 'Deductio-Database');

$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
or die("Failed to connect to MySQL: " . mysql_error());*/
$services_json = json_decode($json,true);
$sqldb = $services_json["us-cdbr-iron-east-04.cleardb.net"];//sqldb
if (empty($sqldb)) {
    echo "No sqldb service instance bound. Please bind a sqldb service instance before";
    return;
}

$sqldb_config = $services_json["sqldb"][0]["credentials"];

// create DB connect string
$conn_string = "DRIVER={IBM DB2 ODBC DRIVER};";
$conn_string .= "DATABASE=" . $sqldb_config["Deductio-Database"] . ";";
$conn_string .= "HOSTNAME=" . $sqldb_config["us-cdbr-iron-east-04.cleardb.net"] . ";";
$conn_string .= "PROTOCOL=TCPIP;";
$conn_string .= "UID=" . $sqldb_config["b272612f8dfd45"] . ";";
$conn_string .= "PWD=" . $sqldb_config["2c9bc5a5"] . ";";

// connect to database
$conn = db2_connect($conn_string, '', '');


 ?>
