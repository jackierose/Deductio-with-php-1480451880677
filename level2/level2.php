<!DOCTYPE html>
<html>
<head>
	<title>Level 2</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<h1 class = "header">Deductio </h1>
	<canvas class="canvas" id="myCanvas" width="460" height="460"></canvas>
	<div class="buttonHolder">
		<button class="start-button" onclick = "location.href='../descriptionpage/descriptionpage.php'" type = button>Exit</button>
	</div>
	<div class="buttonHolder">
		<button class="start-button" onclick = "restart();" type = button>Restart</button>
	</div>
	<div class="buttonHolder">
		<button class="start-button" id = "nextButton" style="visibility:hidden;" onclick = "location.href='../level3/level3.php'" type = button>Next Level</button>
	</div>

    <script type="text/javascript" src="level2.js"></script>
</body>
</html>
