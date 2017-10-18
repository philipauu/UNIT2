function delete_db() {
  console.log('insde delete_db');
  var db_to_be_deleted = $(this).attr('id');
  console.log(db_to_be_deleted);

  var data = {
    db_name: db_to_be_deleted
  };

  $.get('backend/manage_db/delete_database.php', data).done(deleted_db).fail(blow_up);
}

function deleted_db(data) {
  console.log('inside deleted_db');
  console.log(data);
  do_setup();
}
