function create_db() {
  console.log('insde create_db');
  var db = $('#db_name').val();
  var data = {
    db_name: db
  };

  $.get('backend/manage_db/create_database.php', data).done(created_db).fail(blow_up);
  $('#create_db').removeClass('btn-primary').addClass('btn-warning').text('Creating...');
}

function created_db(data) {
  console.log('inside created_db');
  $('#create_db').removeClass('btn-warning').addClass('btn-success').text('Created DB!');
  do_setup();
}
