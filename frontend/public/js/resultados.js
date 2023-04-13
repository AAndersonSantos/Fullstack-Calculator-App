let myArray = []

$.ajax({
    method: 'GET',
    url: 'http://localhost:8081/resultados/data',
    success:function(response){
      myArray = response
      renderTable(myArray)
    }
})

function renderTable(data){
  let table = document.getElementById('tbody')
  let dataLen = data.length;

  for (i = 0; i < dataLen; i++) {
    var row = `<tr> 
                  <td>${data[i].nome}</td>
                  <td>${data[i].calculo}</td> 
                  <td>${data[i].resultado}</td> 
                  <td>${data[i].data}</td>
              </tr>`
    table.innerHTML += row
  }

}