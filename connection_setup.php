<?php

$database = 'ad_bb2de57421bd8ae';
$user = 'b272612f8dfd45';
$password = '2c9bc5a5';
$hostname = 'us-cdbr-iron-east-04.cleardb.net';
$port = 3306;

$db = new mysqli($hostname,$user,$password,$database) or die("Unable to connect");

echo "Good Job!";


/*
if (!$con)
  {
  echo "no";
} else {
  echo "yes";
}*/

 ?>
