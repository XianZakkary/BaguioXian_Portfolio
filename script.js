emailjs.init("frI1Otkt1VZeMOPw-");

function sendMail() {
    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };


    emailjs.send("service_pm0vvlx", "template_hxpjqzd", params)
        .then(function(response) {
            console.log("Message sent!", response.status, response.text);

     
            const autoReplyParams = {
                to_name: params.from_name,
                to_email: params.from_email,
                reply_message: `Hi it's me XianBot, my master will get back to you shortly!\n\nIf you have any further questions you may email him at "31200709@usc.edu.ph".`
            };

       
            emailjs.send("service_pm0vvlx", "template_auto_reply", autoReplyParams)
                .then(function(res) {
                    alert("Message sent! Auto-reply sent to your email.");
                    document.getElementById("contactForm").reset();
                }, function(err) {
                    console.error("Auto-reply failed:", err);
                    alert("Message sent but auto-reply failed.");
                });

        }, function(error) {
            console.error("Message failed:", error);
            alert("Failed to send message. Please try again.");
        });
}
