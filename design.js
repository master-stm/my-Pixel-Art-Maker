
var rowCounts = document.getElementById('row');
var colCounts = document.getElementById('col');
var submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function makeGrid(){
    var rowCountNum = parseInt(rowCounts.value);
    var colCountNum = parseInt(colCounts.value);
    if(document.querySelector('table')){document.querySelector('table').remove()}
    var userTable = document.createElement("table");
    
    for (var i = 0; i < rowCountNum; ++i){
        var userRow = document.createElement("tr");
        userTable.appendChild(userRow);
        for (var j = 0; j < colCountNum; ++j){
            var userCol = document.createElement("td");
            userRow.appendChild(userCol);
        }
    }
    document.body.appendChild(userTable);
    userTable.addEventListener('click', function colorMe(e){
        e.target.style.backgroundColor = document.getElementById('myColor').value;
    })
})

