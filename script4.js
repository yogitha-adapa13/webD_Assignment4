function loadfunc(){
    document.getElementById("subbtn").disabled=true;

}
var form = document.getElementById("form1");
form.addEventListener("submit", submitted);
titlecheck = false;
namecheck = false;
lnamecheck = false;
emailcheck = false;
phonecheck = false;
street1check = false;
citycheck = false;
statecheck = false;
zipcodecheck = false;
sourcecheck = false;
drinkscheck = false;
checkboxtext = false;
commentscheck = false;
function validateName(str,err,idval){
    var firstName = document.getElementById(idval).value; 
    var re = /^[a-zA-Z0-9]+$/;
    if(firstName !== ''){
        if(firstName.length<3 || firstName.length>20){
            alert("Length should be between 3 and 20 characters");
            return false;
        }
        if(!re.test(firstName)){
            alert("Special characters are not allowed");
            return false;
        }
        
        if (idval == 'firstName')
            namecheck = true;
        if (idval == 'lastName')
            lnamecheck = true;
         if (idval == 'streetaddress1')
            street1check = true;
         if (idval == 'city')
            citycheck = true;
         if (idval == 'state')
            statecheck = true;
        
        document.getElementById(err).classList.remove("errorClass");
        document.getElementById(err).classList.add("noerrorClass");
        checksubmit();
    }
    else{
         if (idval == 'firstName')
            namecheck = false;
        if (idval == 'lastName')
            lnamecheck = false;
         if (idval == 'streetaddress1')
            street1check = false;
         if (idval == 'city')
            citycheck = false;
         if (idval == 'state')
            statecheck = false;
        document.getElementById(err).classList.add("errorClass");
        document.getElementById(err).classList.remove("noerrorClass");
        checksubmit();
        return false;
    }
}

function validateCheckbox(err , idval){
    var x = document.getElementById("checktext"+idval).value;
    var re = /^[a-zA-Z0-9]+$/;
    if(x !== ''){
        if(x.length<3 || x.length>20){
            alert("Length should be between 3 and 20 characters");
            return false;
        }
        if(!re.test(x)){
            alert("Speacial characters are not allowed");
            return false;
        }
        checkboxtext = true;
        document.getElementById(err).classList.remove("errorClass");
        document.getElementById(err).classList.add("noerrorClass");
        checksubmit();
    }
    else{
        checkboxtext = false;
        document.getElementById(err).classList.add("errorClass");
        document.getElementById(err).classList.remove("noerrorClass");
        checksubmit();
        return false;
    }
}


function validateEmail(str){
    var emailId = document.getElementById('emailId').value;
    var re=/^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    if (emailId  == '')
    {
        emailcheck = false;
        document.getElementById("emailError").classList.add("errorClass");
        document.getElementById("emailError").innerHTML = 'Email Id is required';
        document.getElementById("emailError").classList.remove("noerrorClass");
        checksubmit();
        return false;
    }
    else
    {

        if(re.test(emailId)){
            emailcheck = true;
            document.getElementById("emailError").classList.remove("errorClass");
            document.getElementById("emailError").classList.add("noerrorClass");
            checksubmit();
        }
        else{
            emailcheck = false;
            document.getElementById("emailError").classList.add("errorClass");
            document.getElementById("emailError").innerHTML = 'Domain is not valid';
            document.getElementById("emailError").classList.remove("noerrorClass");
            checksubmit();
            return false;
        }
    }

}

function validatePhone(str){
    var phone = document.getElementById('phoneNumber').value;
    var re=/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(re.test(phone)){
        phonecheck = true;
        document.getElementById("phoneError").classList.remove("errorClass");
        document.getElementById("phoneError").classList.add("noerrorClass");
        checksubmit();
    }
    else{
        phonecheck = false;
         document.getElementById("phoneError").classList.add("errorClass");
        document.getElementById("phoneError").classList.remove("noerrorClass");
        checksubmit();
        return false;
    }
}

function validateZipcode(str){
    var zipcode = document.getElementById('zipcode').value;
    var re=/(^\d{5}$)/;
    if(re.test(zipcode)){
        zipcodecheck = true;
        document.getElementById("zipcodeError").classList.remove("errorClass");
        document.getElementById("zipcodeError").classList.add("noerrorClass");
        checksubmit();
    }
    else{
       zipcodecheck = false;
        
        document.getElementById("zipcodeError").classList.add("errorClass");
        document.getElementById("zipcodeError").classList.remove("noerrorClass");
        checksubmit();
        return false;
    }
}



function showcheck()
{
    document.getElementById("drinksError").classList.remove("errorClass");
    document.getElementById("drinksError").classList.add("noerrorClass");
    document.getElementById('checktextid1').style.display = "none";
    document.getElementById('checktextid2').style.display = "none";
    document.getElementById('checktextid3').style.display = "none";
    document.getElementById('checktext1').value = "";
     document.getElementById('checktext2').value = "";
      document.getElementById('checktext3').value = "";
     document.getElementById('teacheck').style.display = "none";
     document.getElementById('cofcheck').style.display = "none";
     document.getElementById('chococheck').style.display = "none";
     document.getElementById('cokecheck').style.display = "none";
     document.getElementById('mocktailscheck').style.display = "none";
     document.getElementById('largetea').checked=false;
     document.getElementById('midtea').checked=false;
     document.getElementById('regulartea').checked=false;
     document.getElementById('largecof').checked=false;
     document.getElementById('midcof').checked=false;
     document.getElementById('largechoco').checked=false;
     document.getElementById('midchoco').checked=false;
     document.getElementById('regularcoke').checked=false;
     document.getElementById('largemocktails').checked=false;
     document.getElementById('largechoco').checked=false;

    if (document.getElementById('sellist').value == 'Tea')
    {
        document.getElementById('teacheck').style.display = "block";
        drinkscheck = true;
        checksubmit();
    }
    else if (document.getElementById('sellist').value == 'Coffee')
    {
        document.getElementById('cofcheck').style.display = "block";
        drinkscheck = true;
            checksubmit();
    }
    else if (document.getElementById('sellist').value == 'Hot Chocolate')
    {
        document.getElementById('chococheck').style.display = "block";
        drinkscheck = true;
            checksubmit();
    }
    else if (document.getElementById('sellist').value == 'Coke')
    {
        document.getElementById('cokecheck').style.display = "block";
        drinkscheck = true;
            checksubmit();
    }
    else if (document.getElementById('sellist').value == 'Mocktails')
    {
        document.getElementById('mocktailscheck').style.display = "block";
        drinkscheck = true;
            checksubmit();
    }
    else
    {
        drinkscheck = false;
        document.getElementById("drinksError").classList.add("errorClass");
        document.getElementById("drinksError").classList.remove("noerrorClass");
        checksubmit();
    }

    

}

function callcheck(var1,n)
{
    if (document.getElementById(var1).checked)
    {
        document.getElementById('checktextid'+n).style.display = "block";
    }
    else{
        document.getElementById('checktext'+n).value = "";
        document.getElementById('checktextid'+n).style.display = "none";
    }
}

function checktitle()
{
    document.getElementById("titleError").classList.add("errorClass");
    document.getElementById("titleError").classList.remove("noerrorClass");
    var titles = document.getElementsByName('title');
    titlecheck = false;
    for (var title of titles)
    {
        if (title.checked) {
            document.getElementById("titleError").classList.remove("errorClass");
            document.getElementById("titleError").classList.add("noerrorClass");
            titlecheck = true;
            checksubmit();

        }
    }
    
}
function checksubmit()
{
    if (titlecheck == true && namecheck == true && lnamecheck == true && emailcheck == true && phonecheck == true && street1check == true && citycheck == true && statecheck == true && zipcodecheck == true && sourcecheck == true && drinkscheck == true  && commentscheck == true && checkboxtext == true)
    {
        document.getElementById("subbtn").disabled=false;
    }
    else
        document.getElementById("subbtn").disabled=true;
}

function checksource()
{
    if (document.getElementById("Facebook").checked == true || document.getElementById("Google").checked == true || document.getElementById("Yelp").checked == true)
    {
        sourcecheck = true;
        document.getElementById("sourceError").classList.add("noerrorClass");
        document.getElementById("sourceError").classList.remove("errorClass"); 
        checksubmit();       
    }
    else
    {
        sourcecheck = false;
       
        document.getElementById("sourceError").classList.add("errorClass");
        document.getElementById("sourceError").classList.remove("noerrorClass");
        checksubmit();
    }
}

function checkcomments()
{
    if (document.getElementById("comments").value == '')
    {
         commentscheck = false;
        
        document.getElementById("commentsError").classList.remove("noerrorClass");
        document.getElementById("commentsError").classList.add("errorClass"); 
        checksubmit();       
    }
    else
    {
         commentscheck = true;
        document.getElementById("commentsError").classList.remove("errorClass");
        document.getElementById("commentsError").classList.add("noerrorClass");
        checksubmit();
    }
}
function submitted(e){
            e.preventDefault();
        }
document.getElementById("form1").onsubmit = function(event) 
{
            event.preventDefault();

            var title =  document.querySelector('input[name="title"]:checked') 
            var firstName = document.getElementById("firstName").value;
            var lastName= document.getElementById("lastName").value;  
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("emailId").value;
            var city = document.getElementById("city").value;
            var state = document.getElementById("state").value;
            var zipcode = document.getElementById("zipcode").value;
            var selectedOption = document.getElementById("sellist").value;
            if (document.getElementById('checktext1').value != "")
                var textdata = document.getElementById('checktext1').value;
            if (document.getElementById('checktext2').value != "" && textdata != '')
                var textdata = textdata + "<br>"+document.getElementById('checktext2').value;
            else
                var textdata = document.getElementById('checktext2').value;
            if (document.getElementById('checktext3').value != "" && textdata != '')
                var textdata = textdata + "<br>"+document.getElementById('checktext3').value;
            else
                var textdata = document.getElementById('checktext3').value;
        
            var seldrink = '';
            if (document.getElementById('sellist').value == 'Tea')
            {
                if (document.getElementById("largetea").checked)
                    seldrink = 'Large Tea';
                if (document.getElementById("midtea").checked)
                    seldrink += '<br>Medium Tea';
                if (document.getElementById("regulartea").checked )
                    seldrink += '<br>Regular Tea';
            }
            else if (document.getElementById('sellist').value == 'Coffee')
            {
                if (document.getElementById("largecof").checked)
                    seldrink = 'Large Coffee';
                if (document.getElementById("midcof").checked)
                    seldrink += '<br>Medium Coffee ';
                
            }
            else if (document.getElementById('sellist').value == 'Hot Chocolate')
            {
                if (document.getElementById("largechoco").checked)
                    seldrink = ' Large Hot chocolate';
                if (document.getElementById("midchoco").checked)
                    seldrink += '<br>Medium Hot Chocolate  ';
                
            }
            else if (document.getElementById('sellist').value == 'Coke')
            {
                if (document.getElementById("regularcoke").checked)
                    seldrink = ' Regular Coke';
                
            }
            else if (document.getElementById('sellist').value == 'Mocktails')
            {
                if (document.getElementById("largemocktails").checked)
                    seldrink = ' Large Mocktail';
                if (document.getElementById("midmocktails").checked)
                    seldrink += '<br> Medium Mocktail';
                
            }
            


            var streetaddress1 = document.getElementById("streetaddress1").value;
            var streetaddress2 = document.getElementById("streetaddress2").value;
            if (document.getElementById("Facebook").checked == true)
                var source = 'Facebook';
            else if (document.getElementById("Google").checked == true)
                var source = 'Google';
            else if (document.getElementById("Yelp").checked == true)
                var source = 'Yelp';
            var comments = document.getElementById("comments").value;

        var tablerow = document.getElementById("myTable");
        var row = tablerow.insertRow(-1);
        row.insertCell(0).innerHTML = title.value+" "+firstName+" "+lastName;
        row.insertCell(1).innerHTML = email;
        row.insertCell(2).innerHTML = phoneNumber;
        row.insertCell(3).innerHTML = streetaddress1;
        row.insertCell(4).innerHTML = streetaddress2;
        row.insertCell(5).innerHTML = city;
        row.insertCell(6).innerHTML = state;
        row.insertCell(7).innerHTML = zipcode;
        row.insertCell(8).innerHTML = source;
        row.insertCell(9).innerHTML = selectedOption;
        row.insertCell(10).innerHTML = comments;
        row.insertCell(11).innerHTML = seldrink;
        row.insertCell(12).innerHTML = textdata;
        tablerow.style.display = "inline-block";
        alert("Data entered successfully!")
            
         form.reset();
         document.getElementById("titleError").classList.add("errorClass");
        document.getElementById("titleError").classList.remove("noerrorClass");
        document.getElementById("emailError").classList.add("errorClass");
        document.getElementById("emailError").innerHTML = 'Email Id is required';
        document.getElementById("emailError").classList.remove("noerrorClass");
        document.getElementById("phoneError").classList.add("errorClass");
        document.getElementById("phoneError").classList.remove("noerrorClass");
        document.getElementById("zipcodeError").classList.add("errorClass");
        document.getElementById("zipcodeError").classList.remove("noerrorClass");
        document.getElementById("drinksError").classList.add("errorClass");
        document.getElementById("drinksError").classList.remove("noerrorClass");
        document.getElementById("nameError1").classList.add("errorClass");
        document.getElementById("nameError1").classList.remove("noerrorClass");
        document.getElementById("nameError2").classList.add("errorClass");
        document.getElementById("nameError2").classList.remove("noerrorClass");
        document.getElementById("streetError").classList.add("errorClass");
        document.getElementById("streetError").classList.remove("noerrorClass");
        document.getElementById("cityError").classList.add("errorClass");
        document.getElementById("cityError").classList.remove("noerrorClass");
        document.getElementById("stateError").classList.add("errorClass");
        document.getElementById("stateError").classList.remove("noerrorClass");

        document.getElementById('checktextid1').style.display = "none";
        document.getElementById('checktextid2').style.display = "none";
        document.getElementById('checktextid3').style.display = "none";
        document.getElementById('checktext1').value = "";
         document.getElementById('checktext2').value = "";
          document.getElementById('checktext3').value = "";
          document.getElementById('checkboxError1').classList.add("errorClass");
        document.getElementById('checkboxError1').classList.remove("noerrorClass");
          document.getElementById('checkboxError2').classList.add("errorClass");
        document.getElementById('checkboxError2').classList.remove("noerrorClass");
          document.getElementById('checkboxError3').classList.add("errorClass");
        document.getElementById('checkboxError3').classList.remove("noerrorClass");

         document.getElementById('teacheck').style.display = "none";
         document.getElementById('cofcheck').style.display = "none";
         document.getElementById('chococheck').style.display = "none";
         document.getElementById('cokecheck').style.display = "none";
         document.getElementById('mocktailscheck').style.display = "none";
         document.getElementById('largetea').checked=false;
         document.getElementById('midtea').checked=false;
         document.getElementById('regulartea').checked=false;
         document.getElementById('largecof').checked=false;
         document.getElementById('midcof').checked=false;
         document.getElementById('largechoco').checked=false;
         document.getElementById('midchoco').checked=false;
         document.getElementById('regularcoke').checked=false;
         document.getElementById('largemocktails').checked=false;
         document.getElementById('largechoco').checked=false;
     document.getElementById("sourceError").classList.add("errorClass");
        document.getElementById("sourceError").classList.remove("noerrorClass");
        document.getElementById("commentsError").classList.remove("noerrorClass");
        document.getElementById("commentsError").classList.add("errorClass"); 
        titlecheck = false;
namecheck = false;
lnamecheck = false;
emailcheck = false;
phonecheck = false;
street1check = false;
citycheck = false;
statecheck = false;
zipcodecheck = false;
sourcecheck = false;
drinkscheck = false;
checkboxtext = false;
commentscheck = false;

}






 
