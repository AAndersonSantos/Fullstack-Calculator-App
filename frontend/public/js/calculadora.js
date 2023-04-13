function num(val) {
  document.getElementById('calc').value += val;
}

function calculation() {
  let inputName = $('.input-name').val()
  let calc = $('#calc').val()

  if ( inputName == '' ) {
    $('.msg-error').show()
  } else {
    $('.msg-error').hide()
    let result = eval(calc);
    $('#result').val(result);
  }
}

$("#myFormName").submit(function (e) {

  const data = {
    nome: $("input[name=nome]").val(),
    calculo: $("input[name=calculo]").val(),
    resultado: $("input[name=resultado]").val()
  }

  if ($('.input-name').val() != '') {
    $.post('http://localhost:8081/calculadora', data, function () {
      $('#calc').val('')
    });
  }

  e.preventDefault();

})

function clr() {
  document.getElementById('calc').value = '';
  document.getElementById('result').value = '';
}