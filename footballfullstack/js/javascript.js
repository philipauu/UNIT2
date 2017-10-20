console.log('loaded');

$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  show_clubs();
  $('#inside').hide();

  $('#login').click(do_login);
  $('#logout').click(do_logout);
}

function blow_up(data) {
  console.log('inside blow_up');
  console.log(data);
}

function showResult(str) {
  if (str.length==0) {
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("livesearch").innerHTML=this.responseText;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","livesearch.php?q="+str,true);
  xmlhttp.send();
}

function do_login(){
  console.log('trying to login');

  var user = $('#username').val();
  var pass = $('#password').val();

  var signin_creds = {
    user: user,
    pass: pass
  };

$.get('backend/admin/login.php', signin_creds).done(logged_in).fail(blow_up);

  }

function logged_in(data){
  console.log(data);

if(data == 'logged in'){
  console.log('showing logged in');

  $('#outside').slideUp(1000);
  $('#inside').slideDown(1000);
}
else {
  $('#message').text('Sorry - You must be logged in');
}
}

function do_logout(){
$.get('backend/admin/logout.php').done(logged_out).fail(blow_up);
  }

function logged_out(data){
  console.log(data);
  window.location = 'index.php';
  }
