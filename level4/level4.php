<!DOCTYPE html>
<html>
<head>
	<title>Level 4</title>
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
		<button class="start-button" id = "nextButton" style="visibility:hidden;" onclick = "location.href='../level5/level5.php'" type = button>Next Level</button>
	</div>

    <script type="text/javascript" src="level4.js"></script>
</body>
</html>
