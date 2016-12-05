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

$ID = $_SESSION['user_name'];
	$result = mysqli_query($con, "UPDATE user_table SET level = '../level3/level3.php' WHERE user_name = '$ID'");
?>



<!DOCTYPE html>
<html>
<head>
	<title>Level 6</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1 class = "header">Deductio </h1>
	<canvas class="canvas" id="myCanvas" width="460" height="460"></canvas>
	<div class="buttonHolder">
		<button class="start-button"><a href = "../descriptionpage/descriptionpage.php">Exit</a></button>
	</div>
	<div class="buttonHolder">
		<button class="start-button" onclick = "restart();" type = button>Restart</button>
	</div>
	<div class="buttonHolder">
		<button class="start-button" id = "nextButton" style="visibility:hidden;" onclick = "location.href='../level4/level4.php'" type = button>Next Level</button>
	</div>

    <script type="text/javascript" src="level3.js"></script>
</body>
</html>
