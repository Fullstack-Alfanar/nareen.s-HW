//***QUESTION 1  ******//

var books=[];
var book_one=
{
    book_name: "harry potter",
    book_price: 276,
    book_store: "amazon",
}

var book_two=
{
    book_name: "lord of the rings",
    book_price: 500,
    book_store: "wallmart",
}
var book_three=
{
    book_name: "vampire diaries",
    book_price: 150,
    book_store: "tokybooks",
}
console.log(typeof(book_one));
console.log(typeof(book_two));
console.log(typeof(book_three));


//CREATING ARRAY OF THREE BOOKS OBJECT
books=[book_one,book_two,book_three];




var json_books_arr_to_string=JSON.stringify(books);

console.log(json_books_arr_to_string);
console.log(typeof(json_books_arr_to_string));
///CONVERT ARRAY TO STRING

var json_books_string_to_arr=JSON.parse
(' { "book_name": "harry potter", "book_price": 276,"book_store": "amazon" }' );
   
 
 console.log(json_books_string_to_arr); 
 console.log(typeof(json_books_string_to_arr)) ;   
    //CONVERT STRING TO ARRAY



    console.log(json_books_string_to_arr);//comparing
    console.log(books);



//***QUESTION 2  ******//
  var mycat={
      cat_name: "js" ,
      cat_color:"black",
      cat_age:2,
      sterilized: true,
  }   
console.log(typeof(mycat));
console.log(mycat);

var mycat_obj_to_string=JSON.stringify(mycat);

console.log(typeof(mycat_obj_to_string));
console.log(mycat_obj_to_string);

var yourcat=JSON.parse('{"cat_name": "js", "cat_color":"black","cat_age":2, "sterilized": true}');
console.log(typeof( yourcat));
console.log( yourcat);


