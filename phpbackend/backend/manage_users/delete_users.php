<?php

require_once("../common/connection.php");

$user = new DbConnect($admin, $pass);

$user_name = $_GET['user_name'];

function safety ($user_name){
  $restricted_names = ['mysql.session', 'mysql.sys', 'root'];
  if (in_array($user_name, $restricted_names)){
    logger('if statement is true');
    echo "$user_name can't be deleted!";

  } else {

    logger('if statemnet is false');
    global $user;
    $sql = "DROP USER $user_name";
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
  }
}

safety($user_name);
