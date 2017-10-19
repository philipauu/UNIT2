console.log('loaded');

$(document).ready(setup);

function setup(){
    console.log('Inside setup');
    show_clubs();
}

function show_clubs(){
  console.log('inside show_clubs');
  $.get('backend/clubs/show_clubs.php').done(display_clubs).fail(blow_up);
  }

function display_clubs(data){
  console.log('inside display_clubs');
  console.log(data); // hopefully shows a list of clubs
  }

function blow_up(data){
  console.log('inside blow_up');
  console.log(data);
  }
