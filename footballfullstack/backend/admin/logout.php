<?php

session_start();

require_once('../common/logger.php');

sleep('1');

$_SESSION('logged_in') = false; //uses the $_SESSION global array
echo 'logged out...'; //sends message to js front-end
