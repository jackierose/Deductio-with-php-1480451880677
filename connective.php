<?php

include("connection_setup.php");
session_start();

function SignIn() {
  if(!empty($_POST['uname'])) {
    $ID = $_POST['uname'];
    $Password = $_POST['psw'];
    //$myQuery = "SELECT * FROM user_table"; //WHERE user_name = '$ID'AND password_id = '$Password'";
    //$qr = mysqli_query($con,$myQuery);
    //$row=mysqli_fetch_array($qr,MYSQLI_ASSOC);

    $result = mysqli_query($con, "SELECT * FROM user_table");

    $return_arr = array();

    while ($row = mysqli_fetch_array($result))
    {
        $return_arr[] = array(
            'name' => $row['uname'],
            'pass' => $row['password_id']
        );
    }

    echo json_encode($return_arr);



    //var_dump($qr);
  //  var_dump($myQuery);

/*
    if(!empty($row['user_name']) AND !empty($row['password_id'])) {
      $_SESSION['user_name'] = $row['password_id'];
      echo "SUCCESSFULLY LOGIN TO USER PROFILE PAGE...";
    } else {
      echo "Wrong password";
    }
*/
  }
}


if(isset($_POST['submit'])) {
	SignIn();
}

 ?>
