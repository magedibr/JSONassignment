





$(document).ready(function() {
    console.log("in doc ready");

    var name;
    var student;
    var login;
    var country;
    var city;
    var list = new Array();
    var cats;


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

    class CATE{
        constructor (cate) {

            this.category = cate;
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


        name = data.personal["myFullname"];
        student = data.personal.myStudentNumber;
        login = data.personal.myLoginName;
        country = data.personal.myHomeCountry;
        city = data.personal.myHomeCountry;

        JSON.stringify(name);


        //  console.log(student); THIS ONE


        /*  localStorage.setItem("name", name);
          localStorage.setItem("student", student);
          localStorage.setItem("login", login);
          localStorage.setItem("country", country);
          localStorage.setItem("city", city);*/


        //   const i = data.categories.category;

        var j = data.categories;
        //  console.log(j);



        Cats = new Array();

        for (i of j) {
                Cats.push(i.category);
        }

        console.log(Cats);
    }


})