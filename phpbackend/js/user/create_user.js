function create_user() {
  console.log('inside create_user');
  var user = $('#user_name').val();
  var pass = $('#user_pass').val();
  var data = {
    user_name: user,
    user_pass: pass
  };

  $.get('backend/manage_users/create_users.php', data).done(created_user).fail(blow_up);
  $('#create_user').removeClass('btn-primary').addClass('btn-warning').text('Creating...');
}

function created_user(data) {
  console.log('inside created_user');
  $('#create_user').removeClass('btn-warning').addClass('btn-success').text('Created new user!');
  do_setup();
}
