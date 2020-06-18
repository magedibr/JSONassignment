





$(document).ready(function() {
    console.log("in doc ready");

    var name;
    var student;
    var login;
    var country;
    var city;
    var list = new Array();
    var cats;
    var flowerList;

    class FlowerInfo{
        constructor (category,price,instruction,photo,name,productID) {

            this.category=category;
            this.price=price;
            this.instruction = instruction;
            this.photo=photo;
            this.name=name;
            this.productID = productID;

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
        city = data.personal.myCurrentCityAddress;

        JSON.stringify(name);


        //  console.log(student); THIS ONE


          localStorage.setItem("name", name);
          localStorage.setItem("student", student);
          localStorage.setItem("login", login);
          localStorage.setItem("country", country);
          localStorage.setItem("city", city);


        //   const i = data.categories.category;

        var j = data.categories;
        //  console.log(j);

        Cats = new Array();
        for (i of j) {
            Cats.push(i.category);
        }
        localStorage.setItem("CatArray",JSON.stringify(Cats));

        console.log(Cats);


        var iter = data.flowerlist;

     //   var flowers = new Array();


        flowerList = new Array();
        for ( p of iter){

        flowerList.push(new FlowerInfo(p["category"],p["price"],p["instruction"],p["photo"],p["name"]));

            }
        localStorage.setItem("FlowerInfo",JSON.stringify(flowerList));

console.log(flowerList);


















    }


})