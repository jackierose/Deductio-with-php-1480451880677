session_start();
<!DOCTYPE html>
<html>
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


</html>
