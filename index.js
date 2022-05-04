// Add your code here
const submitData= function(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            "name":userName,
            "email":userEmail
        })
    })
    .then(response=> response.json())
    .then(function(object) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = object.id;
        document.body.appendChild(newDiv);
    })
    .catch((error)=> {
        const errorDiv=document.createElement("div")
        errorDiv.innerHTML=error.message;
        document.body.append(errorDiv);
})
}