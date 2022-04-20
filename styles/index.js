let errors = [];
let name1 = document.getElementById("color_name").value;

function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push('Поле ' + input.placeholder + ' не заполненно');
  }

  if (validity.tooShort) {
    errors.push('Слишким короткий ввод пароля');
  }
}

function checkEmail() {
  let email = document.getElementById("color_email");
  let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (email.value === "") {
    return true;
  }
  if (email.value.match(emailFormat)) {
    return true;
  } else {
    errors.push('Адрес почты введен неверно!');
    return false;
  }

}

function checkTel() {
  let tel = document.getElementById("color_tel");
  let telFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
  if (tel.value === "") {
    return true;
  }
  if (tel.value.match(telFormat)) {
    return true;
  } else {
    errors.push('Телефон некорректен!');
    return false;
  }

}

function checkAll() {
  let name = document.getElementById("color_name").value;
  errors = [];
  let inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    checkValidity(input);
  }
  checkEmail();
  checkTel();
  document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
  if (document.getElementById('errorsInfo').innerHTML === '')
    alert(`Добро пожаловать, ${name}!`);

}

const colorInput = document.getElementsByClassName("form-control");

for (i = 0; i < colorInput.length; i++) {
  colorInput[i].onmouseover = function () {
    this.style.background = "beige";
  };
}
for (i = 0; i < colorInput.length; i++) {
  colorInput[i].onmouseout = function () {
    this.style.background = "white";
  };
}