//script js
function SendMail() {
    var params ={
        from_name: document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value

    }

    emailjs.send("service_awxzcll","template_ctk50q1",params).then(function(res){
        alert("success!" + res.status);
    })
}