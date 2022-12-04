function myCreateFunction() {
    var table = document.getElementById("myTable")
    var row = table.insertRow(0)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var vardas = document.getElementById("vardas")
    var pavarde = document.getElementById("pavarde")
    var amzius = document.getElementById("amzius")
    if(vardas.value){
        cell1.innerHTML = vardas.value.toUpperCase()
    } else {
        alert("Įveskite duomenys")
    }
    if(pavarde.value){
        cell2.innerHTML = pavarde.value.toUpperCase()
    } else {
        alert("Įveskite duomenys")
    }
    if(amzius.value >=0){
        cell3.innerHTML = amzius.value
    } else {
        alert("Įveskite duomenys")}
     }
  

  

  
  function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0)
  }
  function myDeleteFunction1() {
    document.getElementById("myTable").deleteRow(-1)
  }
 
  
  
  

