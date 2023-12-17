
 clearError=(errorId)=> {
        document.getElementById(errorId).innerHTML = "";
    }


const validation=()=>{
   
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let dob=document.getElementById("dob").value;
    let gender = document.getElementsByName("gender");
    let selectedGender = null;

    let qualif=document.getElementById("qualif").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
  
//  fname
    if(fname==""){
         document.getElementById("spanfname").innerHTML=" *** Please fill the first name"
         return false;
    }
    if(!isNaN(fname)){
        document.getElementById("spanfname").innerHTML="*** Only characters are allowed"
        return false;
   }
    if(fname.length<=2){
         document.getElementById("spanfname").innerHTML=" *** It is to short"
         return false;
    }
    if(fname.length>=20){
         document.getElementById("spanfname").innerHTML=" *** It is to long"
         return false;
    }

    // lname
    if(lname==""){
        document.getElementById("spanlname").innerHTML=" *** Please fill the last name"
        return false;
   }
   if(!isNaN(lname)){
       document.getElementById("spanlname").innerHTML="*** Only characters are allowed"
       return false;
  }
   if(lname.length<=2){
        document.getElementById("spanlname").innerHTML=" *** It is to short"
        return false;
   }
   if(lname.length>=20){
        document.getElementById("spanlname").innerHTML=" *** It is to long"
        return false;
   }

//    dob
if(dob==""){
    document.getElementById("spandob").innerHTML=" *** Please select date"
    return false;
}
for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
        selectedGender = gender[i].value;
        break;
    }
}

if (!selectedGender) {
    document.getElementById("spangender").innerHTML = " *** Please select gender";
    return false;
}

// qualif
if (qualif === "Select Qualification") {
    document.getElementById("spanqualif").innerHTML = " *** Please select the  qualification";
    return false;
}

// phone
if(phone==""){
    document.getElementById("spanphone").innerHTML=" *** Please fill the phone number"
    return false;
}
if(phone.length!=10){
    document.getElementById('spanphone').innerHTML="***Enter 10 digits only";
    return false;

}
 if(isNaN(phone)){
    document.getElementById('spanphone').innerHTML="***only digits are allowed";
    return false;

}
if (!/^[789]\d{9}$/.test(phone)) {
    document.getElementById("spanphone").innerHTML = " *** The first digit should start as 7 or 8 or 9 only";
    return false;
}


// email
if(email==""){
    document.getElementById('spanemail').innerHTML="*** Please enter the email";
    return false;

}

if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.')){
    document.getElementById('spanemail').innerHTML="*** . Invalid postion";
    return false;
    
}
if (email.indexOf('@') < 0) {
    document.getElementById('spanemail').innerHTML = "*** Invalid email format";
    return false;
}

// password

 if(password==""){
         document.getElementById("spanpassword").innerHTML=" *** Please fill the password"
         return false;
    }
 if(password.length<=5){
         document.getElementById("spanpassword").innerHTML=" *** Make the password strong"
         return false;
    }



    // confirm password
    
        
 if(cpassword==""){
         document.getElementById("spancpassword").innerHTML=" ***Please fill the con password"
         return false;
    }
    
 if(password!=cpassword){
         document.getElementById("spancpassword").innerHTML=" ***Passwords are not matching"
         return false;
    }
    return true;

}