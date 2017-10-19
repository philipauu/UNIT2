<!DOCTYPE html>
<html>

<?php include('partials/head.php'); ?>

<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
  <?php include('partials/nav.php'); ?>

  <div class="jumbotron">
    <h1>Under 23 Players</h1>
    <p>This site will show players under age 23</p>
  </div>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nam et rem, aspernatur accusantium fugit dolorum itaque adipisci dolore vero, eos facere ullam, expedita totam fuga ad ea aperiam harum.</p>

<input type="text" size="30" onkeyup="showResult(this.value)" placeholder="Search...">
<div id="livesearch"></div>

<table id="list_clubs" class="table">

  <thead>

    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Age</th>
      <th>Foot</th>
      <th>Nationality</th>
      <th>Club</th>
      <th>Country</th>

    </tr>

  </thead>
<tbody>
</tbody>

</table>

<?php include('partials/footer.php'); ?>
</body>

</html>
