var form_container = document.getElementById("form_container");  
var data_container = document.getElementById("data_container");
var existing_array = JSON.parse(localStorage.getItem('stored_array'));  //gets the existing array from local storage 
var obj_array = existing_array || [];   //current data , obj_array is set to existing array if its there or initialized with empty array

//onsubmit function
function f_submit() { 
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    //input fileds values are stored in object
    var obj = {
        fname: fname,
        lname: lname,
        country: country,
        email: email,
        psw: psw
    }

    //obj is pushed to the current array
    obj_array.push(obj);

    //stringified array is stored in local storage with same key to replace existing array with additions
    localStorage.setItem('stored_array', JSON.stringify(obj_array));
}

//f_retrieve is invoked when table page is finished loading
function f_retrieve() {
    var data = JSON.parse(localStorage.getItem('stored_array'));
    var tbody = document.getElementById("data_table");

    //data is an array full of objects, with each object containing the form data
    data.forEach(element => {
        var td = [];
        var tr;
        var keys = Object.keys(element);     //keys gets an array of all the keys in the object
        tr = document.createElement("tr");
        keys.forEach(key => {
            td = document.createElement("td");      //node of type td is created
            td.appendChild(document.createTextNode(element[key]));   //td has a textnode with its contents created and appended to it as child
            tr.appendChild(td); //td is appended to tr as child
        });
        tbody.appendChild(tr);  //row tr is appended to tbody of data table
    });
}
