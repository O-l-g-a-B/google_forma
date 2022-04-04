function check() 
{
 
  let name = document.getElementById("color_name").value;
  
  let name1 = document.getElementById("color_name");
  let email = document.getElementById("color_email");
  let password = document.getElementById("color_password");
  let tel = document.getElementById("color_tel");
  let country = document.getElementById("exampleDataList");
  

  document.getElementById('errorMessage').innerHTML = "";

  if (name1.value == '') {
    document.getElementById('errorMessage').innerHTML+= "Ваше имя не заполнено<br>";
}

 if (email.value == '') {
  document.getElementById('errorMessage').innerHTML+= "Ваш емейл не заполнен<br>";
}

 if (password.value.length<=8) {
  document.getElementById('errorMessage').innerHTML+= "Ваш пароль не заполнен или слишком короткий<br>";
}

 if (tel.value == '') {
  document.getElementById('errorMessage').innerHTML+= "Ваш телефон не заполнен<br>";
}

 if (country.value == '') {
  document.getElementById('errorMessage').innerHTML+= "Ваша страна не заполнена<br>";
}
else {
  alert(`Добро пожаловать, ${name}!`);
}
}



function colorMe()
{
  document.getElementById('color_name')
  .style.backgroundColor = 'beige';
}
  
function colorMeBack()
{
  document.getElementById('color_name')
  .style.backgroundColor ='white';
}

function colorMe1()
{
  document.getElementById('color_email')
  .style.backgroundColor = 'beige';
}

function colorMeBack1()
{
  document.getElementById('color_email')
  .style.backgroundColor ='white';
}

function colorMe2()
{
  document.getElementById('color_password')
  .style.backgroundColor = 'beige';
}

function colorMeBack2()
{
  document.getElementById('color_password')
  .style.backgroundColor ='white';
}

function colorMe3()
{
  document.getElementById('color_tel')
  .style.backgroundColor='beige';
}

function colorMeBack3()
{
  document.getElementById('color_tel')
  .style.backgroundColor='white';
}

function colorMe4()
{
  document.getElementById('exampleDataList')
  .style.backgroundColor='beige';
}

function colorMeBack4()
{
  document.getElementById('exampleDataList')
  .style.backgroundColor='white';
}