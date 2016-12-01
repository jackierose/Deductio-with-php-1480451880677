<?php

$database = 'ad_bb2de57421bd8ae';
$user = 'b272612f8dfd45';
$password = '2c9bc5a5';
$hostname = 'us-cdbr-iron-east-04.cleardb.net';
$port = 3306;

$conn_string = "DRIVER={IBM DB2 ODBC DRIVER};DATABASE=$database;" .
  "HOSTNAME=$hostname;PORT=$port;PROTOCOL=TCPIP;UID=$user;PWD=$password;";
$conn = db2_connect($conn_string, '', '');

if ($conn) {
    echo "Connection succeeded.";
    db2_close($conn);
}
else {
    echo "Connection failed.";
}

 ?>
