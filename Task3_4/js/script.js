function validate() {
  var user = document.getElementById('uName')
  var validexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (!validexp.test(user.value)) {
    alert('Invalid email address!')
    document.myform.uname.focus()
  }
  var vPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!#$%^&*()])(?!.*\s).{8,50}$/
  var pass = document.getElementById('uPass')
  if (!vPass.test(pass.value)) {
    alert('Invalid password!')
    document.myform.pass.focus()
  }
  if (pass.value == 'SmartServTest@123') {
    window.location.href = 'dash.html'
  } else {
    alert('Invalid Password')
  }
}
function mail() {
  window.location.href =
    'mailto:support@smartserv.io?subject=Reset-Password&body=Please Reset my Password'
}
