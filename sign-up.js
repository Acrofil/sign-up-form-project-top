const submitBtn = document.querySelector(".btn");
const form = document.querySelector("form");

let pass1 = document.querySelector(".pass1");
let pass2 = document.querySelector(".pass2");

let cssStyleWrong = "border: 3px solid red;";
let cssStyleMatch = "border: 3px solid #05d9e8";

let passwordsMatch = false;

pass2.onkeyup = function() {
    
    if (pass1.value !== pass2.value) {
        pass2.setCustomValidity("Passwords not matching!");
        pass2.reportValidity();
        pass2.setCustomValidity("");
        pass1.style.cssText = cssStyleWrong;
        pass2.style.cssText = cssStyleWrong;
        passwordsMatch = false;

    } else if ([pass2.value === pass1.value]) {
        pass2.setCustomValidity("Passwords match!");
        pass2.reportValidity();
        pass2.setCustomValidity("");
        pass1.style.cssText = cssStyleMatch;
        pass2.style.cssText = cssStyleMatch;
        passwordsMatch = true;
    };
};

submitBtn.addEventListener("click", (e) => {

    if (!passwordsMatch && pass1.value != 0) {
        submitBtn.setCustomValidity("Check passwords!");
        submitBtn.reportValidity();
        e.preventDefault();
        
    } else if (passwordsMatch){
        form.submit();
        
    }
});