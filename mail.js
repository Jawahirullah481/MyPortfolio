var formErrorMessage, popup, sendButton;

window.addEventListener("load", function () {
    formErrorMessage = document.getElementById("form-error-message");
    popup = document.getElementById("popup");
    sendButton = document.getElementById("send-mail-btn");
});

function sendEmail() {

    sendButton.disabled = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log("Result of validation : ", validateForm(name, email, message));
    if (validateForm(name, email, message)) {

        console.log("Form validated")
        setPopupContent("loading");
        document.getElementById("popup").style.visibility = "visible";

        var params = {
            from_name: name,
            email_id: email,
            message: message,
        };

        emailjs.send("service_vhm177f", "template_zffrvcq", params)
            .then(res => {
                console.log("mail sent...")
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                formErrorMessage.innerText = "";

                setPopupContent("success");
                setTimeout(() => {
                    popup.style.visibility = "hidden";
                }, 3000);
                sendButton.disabled = false;
            })
            .catch(err => {
                setPopupContent("failed");
                setTimeout(() => {
                    popup.style.visibility = "hidden";
                }, 3000);
                console.log(err);
                sendButton.disabled = false;
            });
    } else {
        sendButton.disabled = false;
    }

}

function validateForm(name, email, message) {
    console.log("Form come for validation")
    if (name == "" || email == "" || message == "") {
        formErrorMessage.innerText = "Form fields cannot be empty!";
        return false;
    }
    else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        formErrorMessage.innerText = "Enter valid email address";
        return false;
    }
    return true;
}

function setPopupContent(type) {
    switch (type) {
        case "loading": {
            popup.style.borderLeftColor = "#11b7ee";
            document.getElementById("popup-icon-holder").innerHTML = `<i class="fa-solid fa-hourglass-start fa-2xl" style="color: #11b7ee;"></i>`;
            document.getElementById("popup-content-holder").innerHTML = `<p>Please wait. Mail Sending</p>`;
        } break;
        case "success": {
            popup.style.borderLeftColor = "#14a44d";
            document.getElementById("popup-icon-holder").innerHTML = `<i class="fa-regular fa-circle-check fa-2xl" style="color: #14a44d;"></i>`;
            document.getElementById("popup-content-holder").innerHTML = `<p>Mail sent succesfully</p>`;
        } break;
        case "failed": {
            popup.style.borderLeftColor = "red";
            document.getElementById("popup-icon-holder").innerHTML = `<i class="fa-regular fa-circle-xmark fa-2xl" style="color: #ff0000;"></i>`;
            document.getElementById("popup-content-holder").innerHTML = `<p>Error while sending Email</p>`;
        } break;
    }
}