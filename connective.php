<?php
define('DB_HOST', 'us-cdbr-iron-east-04.cleardb.net');
define('DB_NAME', 'ad_bb2de57421bd8ae');
define('DB_USER','b272612f8dfd45');
define('DB_PASSWORD','2c9bc5a5');

//$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " . mysql_error());
//$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error());
session_start();

function SignIn() {
  session_start(); // this will start session for user profile page
  if(!empty($_POST['uname'])) { //is there a user name in the box??
    echo "THE USER NAME WAS NOT EMPTY!";
    /*$ID = $_POST['uname']];
    $Password = $_POST['pwd'];
    $query = mysql_db_query("SELECT * FROM user_table WHERE user_name = '$ID' AND password_id = '$Password'") or die(mysql_error());
    $row = mysql_fetch_array($query) or die(mysql_error());

    if(!empty($row['user_name']) AND !empty($row['password_id'])) {
      $_SESSION['user_name'] = $row['password_id'];
      echo "SUCCESS WITH LOGIN";
    } else {
      echo "ENTERED INCORRECT USERNAME OR PASSWORD";
    }*/
  //}
//}
if(isset($_POST['submit'])) {
	SignIn();
}
 ?>
