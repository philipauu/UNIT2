<?php

session_start();

require_once('../common/connection.php');
require_once('../common/logger.php');

sleep('1');

$db = new DbConnect($app_user, $app_pass);

$user_name = $_GET['user'];
$user_pass = md5($_GET['pass']);
logger($user_name . $user_pass);

//$sql = "SELECT * FROM users WHERE user = '$user_name' && password = '$user_pass'";
//$result = $db -> conn -> query($sql);

$stmt = $db -> conn -> prepare("SELCT * FROM user WHERE user = :user-name && pass = :user_pass");
$stmt -> bindParam(':user_name'), $user_name);
$stmt -> bindParam(':user_pass'), $user_pass);
$stmt -> execute();

if ($result -> rowCount() == 1){
  logger("user is registered");
  $_SESSION["logged_in"] = true;
  logger($_SESSION);
  echo "logged in";
} else {
  header('Location: index.php');
  echo 'Sorry - you must be logged in';
  logger($db -> conn -> error);
}
