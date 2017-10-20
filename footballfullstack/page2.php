<?php
session_start();

if (!$_SESSION['logged_in']) {
  header("Location:index.php")
}
?>



<?php include('partials/head.php'); ?>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
  <?php include('partials/nav.php'); ?>

  <div class="jumbotron">
    <h1>PHP SESSIONS</h1>
    <p>YOU ARE LOGGED IN</p>
  </div>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nam et rem, aspernatur accusantium fugit dolorum itaque adipisci dolore vero, eos facere ullam, expedita totam fuga ad ea aperiam harum.</p>
