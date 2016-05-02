// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.

function runChallenges() {

  // Ex 1. Read the content of the email input
  var email = document.getElementById('email').value;  // TODO: replace null, keep the email variable.


  // Ex 2. Fill the content of the email input with your email
  document.getElementById('email').value = "pe.petiterwan@gmail.com"


  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag
  var email_hint = document.getElementById('email-hint')
  email_hint.innerHTML = "This is my email now"
  email_hint.style.fontWeight = "bold"


  var new_email_hint = document.createElement('strong');
  new_email_hint.innerHTML = email_hint.innerHTML;

  email_hint.parentNode.insertBefore(new_email_hint, email_hint);
  email_hint.parentNode.removeChild(email_hint);

  // Ex 4. Add the .blue CSS class to the table header cells (th elements)
  
  var ths = document.getElementsByTagName("th");

  for(var i = 0; i < ths.length; i++) {
    ths[i].classList.add("blue");
  }

  // Ex 5. Count the number of table body rows there are (team count!)
  var table = document.getElementsByTagName('tbody')[0];
  var teams = table.getElementsByTagName('tr');  // TODO: replace 0, keep the team_count variable.
  var team_count = teams.length;


  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.
  var newrow = table.insertRow(team_count);
  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);

  cell1.innerHTML = team_count+1;
  cell2.innerHTML = "The 15th team"
  cell3.innerHTML = "0"

  // Ex 7. Write some code to sum all points given to all teams
  var sum = 0;  // TODO: replace 0 with your sum result, keep the sum variable.

  var tr = table.getElementsByTagName("tr");

  for(var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName('td');
    sum = sum + parseInt(td[2].innerHTML);
  }


  // Ex 8. Change the background color of all table header cells to #DDF4FF
  for(var i = 0; i < ths.length; i++) {
        ths[i].style.backgroundColor = "#DDF4FF";
  }


  // Ex 9. Translate the #results list 20px downward (animation would be great ^_^)



  // Ex 10. Remove the "Email:" label from the DOM





  // Checking exercise answers. DO NOT MODIFY BELOW
  assert_equal(email, "dleuliette@gmail.com");
  assert_not_equal(document.getElementById("email").value, "dleuliette@gmail.com");
  assert_equal($('strong', document.getElementById("email-hint")).html(), "This is my email now");
  assert_equal($('th:eq(0)').css('color'), 'rgb(0, 0, 255)');
  assert_equal(team_count, 14);
  assert_equal($('tbody > tr').length, 15);
  assert_equal(sum, 859)
  assert_equal($('th:eq(0)').css('background-color'), 'rgb(221, 244, 255)');
  setTimeout(function() {
    assert_equal($('ul:eq(0)').position().top, 20);
    assert_equal(document.getElementsByTagName('label').length, 0);
  }, 1000);
}
