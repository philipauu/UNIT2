function show_users(data) {
  console.log('inside show_users');
  console.log(data);

  data = JSON.parse(data); //turns string of characters into JSON objects

  for (var counter = 0; counter < data.length; counter++) {
    console.log(data[counter].Database);

    var tr = $('<tr>'); // make empty table row
    var td = $('<td>'); // make first td

    td.text(data[counter].User); // add name of db
    tr.append(td); // add td to row

    td = $('<td>'); // make second td to hold delete button

    var btn = $('<button class = "delete" id="' + data[counter].User + '">delete</button>');

    td.append(btn);
    tr.append(td);
    console.log(tr);

    $('.table tbody').append(tr);
  }
  $('.delete').click(delete_user);
}
