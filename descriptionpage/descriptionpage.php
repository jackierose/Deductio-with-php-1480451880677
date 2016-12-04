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

$con = mysqli_connect($host,$username,$password,$db);
if (mysqli_connect_errno())
	{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

var_dump($_SESSION(user_name));
	//$result = mysqli_query($con, "INSERT INTO user_table VALUES('$_SESSION['work']','xxxxxxxx', 'xxxxxxxx-xxxxxxx')");
?>


<html>
<form method="POST">
<head>
	<title>Description Page</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1 class = "header">$_SESSION['user_name'] </h1>
	<div class = "mainHolder">
		<p class= "description">Using the arrow keys, maneuver from start to end. Use your deduction skills.</p>
		<div class="buttonHolder">
			<button class="start-button" onclick = "location.href='../introlevel/introlevel.php'" type = button>Start</button>
		</div>
	</div>
	<div class = "logodiv">
		<img class = "logo" alt = "logo image" src='../images/brainy.png'>
	</div>
</body>
</form>
</html>
