
class BudgetVisionUser{

    //constructor with parameters first name and last name.
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //method to return the name of the first name and last name seperated by a comma.
    userName(){
        return "Name is " + this.firstName + ", " + this.lastName;
    }

    //setter method to set the name.
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;        
    }

} //end of class BudgetVisionUser.

const user = new BudgetVisionUser(); // user object

//function to send the email.
function sendEmail(){
    
    var firstName = document.getElementById("first name").value.trim(); //using HTML DOM getElementById(id) method to access the first name text area.
    var lastName = document.getElementById("last name").value.trim();  //using HTML DOM getElementById(id) method to access the last name text area.
    user.setName(firstName,lastName);
    var emailSubject = document.getElementById("email subject").value.trim(); //using the HTML DOM getElementById(id) method to access the email subject text area.
    var emailContent = document.getElementById("email content").value.trim(); //using the HTML DOM getElementById(id) method to access the email contact text area.

    if(firstName !== "" && lastName !== "" && emailSubject !== "" && emailContent !== ""){
        emailContent += ". From, " +  (document.getElementById("first name").value + "\n" + document.getElementById("last name").value)+ "."; //concatenate first name and last name from the user in the email body.
        
        window.open('mailto:budgetvisionrobot@gmail.com?subject=' + emailSubject + '&body=' + emailContent);
    }
    else{
        alert("one or more fields of the email content are empty.\nPlease complete all fields to construct the email.");
    }
    
 };


 console.log(user); //console log for user.