const form = document.querySelector("#form");
const overlay = document.querySelector(".overlay");
const message = document.querySelector(".overlay .messageBox h2");


form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    const result = await fetch('http://localhost:3000/login', {
        method : 'post',
        body : payload
    });
    const response = await result.json();
    console.log(response);
    if(response.status == 201){
        message.innerHTML = response.message;
        overlay.style.display = "flex";
        setTimeout(()=>{
            overlay.style.display = "none";
            alert("Welcome "+ response.name)
        }, 500);
    }else{
        message.innerHTML = response.message;
        overlay.style.display = "flex";
        setTimeout(()=>{
            overlay.style.display = "none";
        }, 2000);
    }
});