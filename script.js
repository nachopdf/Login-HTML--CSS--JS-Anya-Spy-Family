const pass_field = document.querySelector(".pass-key");
const showbtn = document.querySelector(".show");


showbtn.addEventListener("click", function(){
 if (pass_field.type === "password") {
    pass_field.type = "text";
    showbtn.textContent="Hide";
    showbtn.style.color="#3498db";
 }else{
    pass_field.type="password";
    showbtn.textcontent="Show";
    showbtn.style.color="#222";
 }
});