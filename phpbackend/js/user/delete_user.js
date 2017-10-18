function delete_user() {
  console.log('insde delete_user');
  var user_to_be_deleted = $(this).attr('id');
  console.log(user_to_be_deleted);

  var data = {
    user_name: user_to_be_deleted
  };

  $.get('backend/manage_users/delete_users.php', data).done(deleted_user).fail(blow_up);
}

function deleted_user(data) {
  console.log('inside deleted_user');
  console.log(data);
  do_setup();
}
