const submitBtn = document.querySelector(".btn");

let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");

let cssStyleWrong = "border: 3px solid red;";
let cssStyleMatch = "border: 3px solid #05d9e8";

pass2.onkeyup = function() {
    
    if (pass1.value !== pass2.value) {
        pass2.setCustomValidity("Password not matching!");
        pass2.reportValidity();
        pass2.setCustomValidity("");
        pass1.style.cssText = cssStyleWrong;
        pass2.style.cssText = cssStyleWrong;
        submitBtn.setAttribute("disabled", "");

    } else if ([pass2.value === pass1.value]) {
        pass2.setCustomValidity("Password match!");
        pass2.reportValidity();
        pass2.setCustomValidity("");
        pass1.style.cssText = cssStyleMatch;
        pass2.style.cssText = cssStyleMatch;
        submitBtn.removeAttribute("disabled", "");

    };

};