function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_93f2tx9";    
    const templateID = "template_1d47gg6";

    emailjs.send(serviceID, templateID, params).then((res)  => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
    })
}

