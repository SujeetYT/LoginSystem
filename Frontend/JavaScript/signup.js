const form = document.querySelector("#form");
const overlay = document.querySelector(".overlay");
const img = document.querySelector(".overlay .messageBox img");
const message = document.querySelector(".overlay .messageBox h2");
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    const result = await fetch('https://loginsystem-v431.onrender.com/signup', {
        method : 'post',
        body : payload
    });
    const response = await result.json();
    console.log(response);
    if(response){
        // console.log(overlay);
        if(response.status == 201){
            img.style.display = "block";
            message.innerHTML = response.message;
            overlay.style.display = "flex";
            setTimeout(()=>{
                location.replace("../../index.html")
            }, 1000);
        }else{
            message.innerHTML = response.message;
            overlay.style.display = "flex";
            setTimeout(()=>{
                overlay.style.display = "none";
            }, 2000);

        }
    }
});

