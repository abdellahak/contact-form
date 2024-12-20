const form = document.querySelector("form");
const statusTxt = document.querySelector(".status-text");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#88888";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "./message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("Email and message field is required") != -1 ||
        response.indexOf("Enter a valid email address!") ||
        response.indexOf("Sorry, failed to send you message")
      ) {
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000)
      }
      statusTxt.innerHTML = response;
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
