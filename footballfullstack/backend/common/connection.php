<?php

require("logger.php");
require_once("credentials.php");
logger("loaded connection script!");


class DbConnect{

public $conn;

public function __construct($app_user, $app_pass)

{

      try {
          $this->conn = new PDO("mysql:host=127.0.0.1;db_name=football", $app_user, $app_pass);
          // set the PDO error mode to exception
          $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          logger("Connected successfully");
          //echo "backend says Connected successfully";
          return $this->conn;
          }
      catch(PDOException $e)
          {
          logger("Connection failed: " . $e->getMessage());
          //echo "backend says Connection failed: " . $e->getMessage();
          }
      }

public function kill(){
  $this->conn = null;

}

}
//$myconnection = new DbConnect ("phil", "1234");
