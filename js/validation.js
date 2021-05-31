function validation(){

    let name = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["emailid"];
    let subject = document.forms["RegForm"]["subject"];
    let message = document.forms["RegForm"]["message"];


    if(name.value == ""){
        name.focus();
        return false;
    }
    else if(email.value == ""){
        alert("Please Enter Your Email Address");
        email.focus();
        return false;
    }
    else if(subject.value == ""){
        alert("Please Enter Your Subject");
        subject.focus();
        return false;
    }
    else if(message.value == ""){
        alert("Please Enter Your Message");
        message.focus();
        return false;
    }
    else{
        alert("Information submitted successfully..!")
        document.querySelector('input, textarea').forEach(input => input.value = "")
        return false;
    }
}



