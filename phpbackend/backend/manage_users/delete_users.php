<?php

require_once("../common/connection.php");

$user = new DbConnect($admin, $pass);

$user_name = $_GET['user_name'];

$sql = "DROP USERS $user_name";

$result = $user->conn->query($sql);

if($result){
  logger("dropped user");
  echo "dropped user $user_name";
  // do true stuff
}
  else{
    logger($user->conn->error);
    // do false stuff
  }
