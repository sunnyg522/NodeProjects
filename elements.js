

function sayHello() {
  var a = document.getElementById("fvalue").value;
  var b = document.getElementById('svalue').value;
  var x = document.getElementById("operations");
  Select_value = x.options[x.selectedIndex].text;
  alert(a);
  alert(b);
  alert(Select_value);
}
