function commentList() {

	//username value and create text from value
	var username = document.getElementById("username").value + ":"
	var userText = document.createTextNode(username)

	//written comment value and create text from value
	var comment = document.getElementById("commentBox").value
	var typeText = document.createTextNode(comment)

	//new div with user and comment
	var div = document.createElement("div")
	var newDiv = document.createElement("div")

	//create Li elements for user, comment, and space
	var divLi = document.createElement("li")//user li
	var backLi = document.createElement("li")

	//timestamp
	var dt = new Date();
	var timeText = document.createTextNode(dt)
	

	//create p elements
	var user = document.createElement("p")//username
	var textComment = document.createElement("p") //typeText
	var time = document.createElement("p")
	

	if (comment == "" || document.getElementById("username").value == "") {
		return false
	}

	else{

	//insert user and comment in div
	div.appendChild(user)
	div.appendChild(textComment)
	div.appendChild(time)


	//insert h1 and h2 inside of li
	divLi.appendChild(div)
	backLi.appendChild(newDiv)
	

	//insert respective texts in h1 and h2 and p
	user.appendChild(userText)
	textComment.appendChild(typeText)
	time.appendChild(timeText)
	
	//inserts li to bump down other li's
	var commentli = document.getElementById("commentList")
	commentli.insertBefore(divLi, commentli.childNodes[0])

	//nameclasses
	div.className = "bubble animated bounceInRight"
	user.className = "user"
	textComment.className = "textComment"
	time.className = "time"
	
	//resets comment box after button is clicked
	document.getElementById("commentBox").value = "";

	}

}




// document.getElementById("comment").onkeydown = function(e){
// 	if(e.keyCode == 13) {
// 		//prevent refresh when enter key is pressed
// 		e.preventDefault();
// 	}
// };











