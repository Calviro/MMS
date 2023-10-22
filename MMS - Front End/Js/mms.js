function mmsTest() {
    fetch("/api/mms/Home", { // fetch to the api route that is provided in backend, with get if you need
        referer: 'about:client',
        credentials: 'same-origin',
        headers: new Headers({ 'content-type': 'application/ json' }),
    })
        .then(function (response) {
            if (response.status == 200) {
                response.json()
                    .then(data => {
                        window.alert(data)
                    })
            } else {
                window.alert("failed!!")
            }

        }
        ).catch(function (err) {

        })
};

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

/*
function login(event) {
    event.preventDefault();
     var email = document.getElementById ("login-email")
     var password = document.getElementById("login-password")
 
     const data = JSON.stringify({
         'id': parseInt(0),
 
         "email": email.value,
         "group": email.value,
 
         "password": password.value,
     })
     fetch("/api/User/login", {
         method: 'POST',
         referer: 'about:client',
         credentials: 'same-origin',
         headers: new Headers({ 'content-type': 'application/ json' }),
         body: data,
     })
         .then(function (response) {
             if (response.status == 202) {
                 response.json()
                     .then(data => {
                        
                     })
             } else {
                
             }
 
         }
         ).catch(function (err) {
 
         })
 };*/
 // this is just a example function with post method

 // better to use [ModuleName]+function as function name to prevent duplicate name with other module functions.