

var firstPassy = document.getElementById("firstPass");
var secondPassy = document.getElementById("secondPass");
var signUp = document.getElementById("signup");


 firstPassy.addEventListener("change", function(){
	var contentOfFirstPassword = firstPassy.value ;

	// to confirm if the password contains/includes a space
	var containSpace = contentOfFirstPassword.match(/ /g);
	if (containSpace != null) {
		alert("Password should not contain space")}else{
	// to confirm if the length of the password is upto 12 and not more than 20 characters
	if (20 >= contentOfFirstPassword.length && contentOfFirstPassword.length >= 12) { alert("Length criteria satisfied")
	// tested if it contains a number or digit d \d , global g
	var containNumber = contentOfFirstPassword.match(/\d/g) ;
		// to test if string contains lowercase
	var containLowercase = contentOfFirstPassword.match(/[a-z]/g);

	// test if string contains uppercase
	var containUppercase = contentOfFirstPassword.match(/[A-Z]/g) ;

if (containLowercase == null || containUppercase == null || contentOfFirstPassword == null || containNumber == null )
	{alert("That is not a valid password, please.")} 
else{var supposedLengthOfSymbols = contentOfFirstPassword.length - ( containUppercase.length + containLowercase.length  + containNumber.length);
 			alert ("Contains " + supposedLengthOfSymbols + " special characters");
	
if (20 >= contentOfFirstPassword.length && contentOfFirstPassword.length >= 12 && 
	containUppercase.length >= 1 && containLowercase.length >= 1 && supposedLengthOfSymbols >= 1) {

							if ( containNumber.length >= 1) {alert("I contain a number")};
							if (containUppercase != null) { alert ("Contains " + containUppercase.length + " characters in uppercase ")}; //closes the if of containUppercase 


											alert("That's a valid password")}; //closes the IF of 20>=contentOfFirstPassword

	}; // closes the ELSE of containLowercase ....	
	 } else {alert("Length criteria not satisfied, that is not a valid password")}; // closes the IF of the topmost contentOfFirstPassword
}; //closes the IF of containSpace	
	// if a character is not a SPACE, not an ALPHABET, not a NUMBER then it is a SPECIAL CHARACTER, so the sum of length of (SPACE) , ALPHABET, and number
	//and then symbols should give total length of ContentofPassword


});

 secondPassy.addEventListener('change', function(){
var contentOfFirstPassword = firstPassy.value ;
var contentOfSecondPassword = secondPassy.value;

if (contentOfSecondPassword === contentOfFirstPassword) { alert('Password confirmed');} else{alert("Password doesn't match, try again");};

 });
