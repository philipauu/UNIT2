<?php

require_once("../common/connection.php");

$db = new DbConnect($admin, $pass);

$db_name = $_GET['db_name'];

function safety ($db_name){
  $restricted_names = ['information_schema', 'mysql', 'performance_schema', 'sys', 'wdi'];
  if (in_array($db_name, $restricted_names)){
    logger('if statement is true');
    echo "$db_name can't be deleted!";

  } else {

    logger('if statemnet is false');
    global $db;
    $sql = "DROP DATABASE $db_name";
    $result = $db->conn->query($sql);

    if($result){
      logger("dropped database");
      echo "dropped database $db_name";
      // do true stuff
    }
      else{
        logger($db->conn->error);
        // do false stuff
    }
  }
}

safety($db_name);
