
//********QUESTION1******//


function click_save_question_1() {
    let email_question_1 = document.getElementById("email_question_1");

    if (email_question_1.value == "") {
        alert("your first question input is empty");
        return;
    }
    else {
        console.log(email_question_1.value);

        localStorage.setItem("email_adress", email_question_1.value);
        email_question_1.value = "";

    }
}

function click_load_question_1() {
    let saved_email = localStorage.getItem("email_adress", email_question_1.value);
    alert(saved_email + " " + "last email was saved");
}


//********QUESTION2******//
function click_save_question_2() {

    let phone_number_question_2 = document.getElementById("phone_number_question_2");
    if (phone_number_question_2.value == "") {
        alert("your socend question input  is empty");
        return;
    }
    else {
        localStorage.setItem("phone_number_question_2", phone_number_question_2.value);
        phone_number_question_2.value = "";
    }
}

function click_load_question_2() {
    let saved_phone_number_question_2 = localStorage.getItem("phone_number_question_2", phone_number_question_2.value);
    alert(saved_phone_number_question_2 + " " + "last phone namber was saved");
}
//********QUESTION3******//

function click_save_question_3() {

    let full_name_question_3 = document.getElementById("full_name_question_3");
    let phone_number_question_3 = document.getElementById("phone_number_question_3");
    let email_adress_question_3 = document.getElementById("email_adress_question_3");
    
    
    console.log(full_name_question_3.value);
    console.log(typeof(full_name_question_3.value));
    console.log(typeof(full_name_question_3.value.length));
    
    if (full_name_question_3.value == "" || phone_number_question_3 == "" || email_adress_question_3.value == "") {
        alert("at least one of third question input is empty");
        return;
    }
    else if ( full_name_question_3.value.length < 2  || phone_number_question_3.value.length < 2 ||email_adress_question_3.value.length < 2 )
    {
        alert("one of third question input is connot be less than 2 digits");

    }
    else if (  20 < full_name_question_3.value.length   || 20 < phone_number_question_3.value.length  || 20 < email_adress_question_3.value.length  )
{
    alert("one of third question input is connot be more than 20 digits");
}

else{
    addEventListener("click",function(){
        localStorage.setItem("full name",full_name_question_3.value );
        
        localStorage.setItem("phone number",phone_number_question_3 );

        localStorage.setItem("email address",email_adress_question_3.value );
        return;
    }
    )
}


}