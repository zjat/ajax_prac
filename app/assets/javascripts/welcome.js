// server info:
//  base server endpoint: http://devpoint-ajax-example-server.herokuapp.com/api/v1
//  server api:
//    GET /users - lists all users
//    GET /users/id - lists a single user
//    POST /users
//    POST DATA:
//      user[first_name] - required
//      user[last_name] - required
//      user[phone_number] - optional 
$(document).ready(function(){
  var baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';

  if (location.pathname === '/'){
    $.ajax({
      url: baseUrl,
      type: 'GET',
      dataType: 'JSON',
      success: function(data){
        var tbody = $('#users');
        data.users.forEach (function(user){
        var phone = user.phone_number ? user.phone_number : 'none';
        var row = '<tr><td>' + user.first_name + '</td>';
            row += '<td>' + user.last_name + '</td>';
            row += '<td>' + phone + '</td></tr>';
            tbody.append(row);
        })
      },
      error: function(error){
        console.log("You've hit an error! " + error)
      },
    });  


  };









});