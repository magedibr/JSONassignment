





$(document).ready(function() {
    console.log("in doc ready");

    var name;
    var student;
    var login;
    var country;
    var city;
    var list = new Array();


  /*  class category{
        constructor(name,student,login,country,city) {
            this.name = name;
            this.student = student;
            this.login = login;
            this.country = country;
            this.city = city;
        }
    }
->
*/


    class categorys{
        constructor(category,name) {
            this.name = name;
            this.category = category;
        }
    }





    $.ajax({
        type: "GET",
        url: "data/A2-JSONFile.json",
        dataType: "json",
        success:loadJSON,
        error: function (e) {alert(`${e.status} - ${e.statusText}`);}
    });


    function loadJSON(data) {


        name = data.personal.myFullname;
        student= data.personal.myStudentNumber;
        login = data.personal.myLoginName;
        country = data.personal.myHomeCountry;
        city = data.personal.myHomeCountry;

        localStorage.setItem("name",name);
        localStorage.setItem("student",student);
        localStorage.setItem("login",login);
        localStorage.setItem("country",country);
        localStorage.setItem("city",city);


        const j = data.categories;

       // const i = JSON.stringify(j);


        console.log(j);

















    }
























})