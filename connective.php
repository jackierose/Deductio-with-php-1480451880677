<?php
define('DB_HOST', 'us-cdbr-iron-east-04.cleardb.net');
define('DB_NAME', 'ad_bb2de57421bd8ae');
define('DB_USER','b272612f8dfd45');
define('DB_PASSWORD','2c9bc5a5');
define('DB_DATABASE', 'Deductio-Database');

session_start();

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['pwd'];
    $query = mysql_db_query("SELECT * FROM user_table WHERE user_name = '$ID'
      AND password_id = '$Password'") or die(mysql_error());
    echo $_POST['uname'];
  }
}
if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
