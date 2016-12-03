<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" href="style.css" />
</head>

<body>
	<table>
        <h1 id = "deductioTitle">DEDUCTIO</h1>

      <form method = "POST" action="connective.php">
      <div class="loginContainer">
        <p>
          <label id = "user"><b>username</b></label>
          <p>
          <input type="text" placeholder="Enter Username"
          name="uname" required>
        </p>
        </p>
        <p>
          <label id = "pass"><b>password</b></label>
          <p>
          <input type="password" placeholder="Enter Password"
          name="psw" required>
        </p>
        </p>
        <p>
        <div class="buttonHolder">
        <input id="button" type="submit" name="submit" value="Log-In" >
				<input id="button" type="submit" name="register" value="Register" >
  			</div>
      </p>
        </div>
      </form>
		</td>
		</tr>
	</table>
<script type="text/javascript" src="index.js"></script>
</body>
</html>
