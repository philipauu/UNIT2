console.log('loaded');

$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  show_clubs();
}

function show_clubs() {
  console.log('inside show_clubs');
  $.get('backend/clubs/show_clubs.php').done(display_clubs).fail(blow_up);
}

function display_clubs(data) {
  console.log('inside display_clubs');
  data = JSON.parse(data);
  console.log(data);
  // hopefully shows a list of clubs
  $('#list_clubs').append(data);

  for (var counter = 0; counter < data.length; counter++) {

    var tr = $('<tr>');

    var nationality = data[counter].nationality_id;
    var td = $('<td>');
    td.text(nationality);
    tr.append(td);

    var clubs = data[counter].clubs_id;
    var td = $('<td>');
    td.text(clubs);
    tr.append(td);

    //add data here...

    //edit button

    var td = $('<td>');
    var button = $('<button>');
    button.addClass('btn btn-success edit');
    button.text('edit');
    td.append(button);
    tr.append(td);


    //delete button
    var td = $('<td>');
    var button = $('<button>');
    button.addClass('btn btn-danger delete');
    button.text('delete');
    td.append(button);
    tr.append(td);

    $('#list_clubs tbody').append(tr);
  }

}

function blow_up(data) {
  console.log('inside blow_up');
  console.log(data);
}
