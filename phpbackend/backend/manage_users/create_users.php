<?php

require_once("../common/connection.php");

sleep('1'); // mimics a 'real' server

$user = new DbConnect($admin, $pass);

$user_name = $_GET['user_name'];
$user_pass = $_GET['user_pass'];

$sql = "CREATE USERS $user_name";

$result = $user->conn->query($sql);

if($result){
  logger("created user");
  echo "created user $user_name";
  echo "created user $user_pass";
  // do true stuff
}
  else{
    logger($user->conn->error);
    // do false stuff
  }
