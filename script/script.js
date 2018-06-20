form_container = document.getElementById("form_container");
data_container = document.getElementById("data_container");
var existing_array = JSON.parse(localStorage.getItem('stored_array'));
var obj_array = existing_array || [];

function f_submit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    var obj = {
        fname: fname,
        lname: lname,
        country: country,
        email: email,
        psw: psw
    }
    obj_array.push(obj);
    localStorage.setItem('stored_array', JSON.stringify(obj_array));
}

function f_retrieve() {
    var data = JSON.parse(localStorage.getItem('stored_array'));
    var tbody = document.getElementById("data_table");
    data.forEach(element => {
        var td = [];
        var tr;
        var key = Object.keys(element);
        tr = document.createElement("tr");
        key.forEach(prop => {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(element[prop]));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}
