/* =====================================
   VEXORIUM PROFILE PAGE JS - PART 1
===================================== */



/* ==========================
   NOTIFICATION DROPDOWN
========================== */


const notificationBtn = document.getElementById("notificationBtn");

const notificationDropdown = document.getElementById("notificationDropdown");



if(notificationBtn && notificationDropdown){


    notificationBtn.addEventListener("click", function(e){


        e.stopPropagation();


        notificationDropdown.classList.toggle("show");



        if(profileDropdown){

            profileDropdown.classList.remove("show");

        }


    });


}







/* ==========================
   PROFILE DROPDOWN
========================== */


const profile = document.querySelector(".profile");

const profileDropdown = document.querySelector(".profile-dropdown");



if(profile && profileDropdown){


    profile.addEventListener("click", function(e){


        e.stopPropagation();


        profileDropdown.classList.toggle("show");



        if(notificationDropdown){

            notificationDropdown.classList.remove("show");

        }



    });


}







/* ==========================
   CLOSE DROPDOWNS
========================== */


document.addEventListener("click",function(){



if(notificationDropdown){

notificationDropdown.classList.remove("show");

}



if(profileDropdown){

profileDropdown.classList.remove("show");

}



});







/* ==========================
   LOGOUT BUTTON
========================== */


const logoutBtn = document.querySelector(
".profile-dropdown a:last-child"
);



if(logoutBtn){


logoutBtn.addEventListener("click",function(e){


e.preventDefault();



let confirmLogout = confirm(
"Are you sure you want to logout?"
);



if(confirmLogout){


alert(
"Logged out successfully!"
);



window.location.href="index.html";


}



});


}
/* =====================================
   EDIT PROFILE FUNCTIONALITY
===================================== */


const editProfileBtn = document.getElementById("editProfileBtn");



if(editProfileBtn){



editProfileBtn.addEventListener("click",function(){



let name = prompt(
"Enter your name:",
document.getElementById("profileName").innerText
);



let role = prompt(
"Enter your role:",
document.getElementById("profileRole").innerText
);



let email = prompt(
"Enter your email:",
document.getElementById("profileEmail").innerText
);



let phone = prompt(
"Enter your phone:",
document.getElementById("profilePhone").innerText
);



let location = prompt(
"Enter your location:",
document.getElementById("profileLocation").innerText
);







if(name){

document.getElementById("profileName").innerText = name;

}



if(role){

document.getElementById("profileRole").innerText = role;

}



if(email){

document.getElementById("profileEmail").innerText = email;

}



if(phone){

document.getElementById("profilePhone").innerText = phone;

}



if(location){

document.getElementById("profileLocation").innerText = location;

}




alert(
"Profile updated successfully!"
);



});


}