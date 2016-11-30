<?php
define('DB_HOST', 'us-cdbr-iron-east-04.cleardb.net');
define('DB_NAME', 'ad_bb2de57421bd8ae');
define('DB_USER','b272612f8dfd45');
define('DB_PASSWORD','2c9bc5a5');
define('DB_DATABASE', 'Deductio-Database');

session_start();

function SignIn() {
    echo "$_POST['uname']";
}
if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
