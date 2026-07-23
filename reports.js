document.addEventListener("DOMContentLoaded", function(){


    /* =====================================
       NOTIFICATION DROPDOWN
    ===================================== */
    
    
    const notificationBtn = document.getElementById("notificationBtn");
    const notificationDropdown = document.getElementById("notificationDropdown");
    
    
    
    if(notificationBtn && notificationDropdown){
    
    
    notificationBtn.addEventListener("click", function(e){
    
    
    e.stopPropagation();
    
    
    notificationDropdown.classList.toggle("show");
    
    
    
    const profileDropdown = document.querySelector(".profile-dropdown");
    
    
    if(profileDropdown){
    
    profileDropdown.classList.remove("show");
    
    }
    
    
    });
    
    
    }
    
    
    
    
    
    /* =====================================
       PROFILE DROPDOWN
    ===================================== */
    
    
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
    
    
    
    
    
    /* =====================================
       CLOSE DROPDOWNS OUTSIDE CLICK
    ===================================== */
    
    
    document.addEventListener("click", function(){
    
    
    
    if(notificationDropdown){
    
    notificationDropdown.classList.remove("show");
    
    }
    
    
    
    if(profileDropdown){
    
    profileDropdown.classList.remove("show");
    
    }
    
    
    
    });
    
    
    
    
    
    
    
    
    /* =====================================
       REPORT SEARCH
    ===================================== */
    
    
    const reportSearch = document.getElementById("reportSearch");
    const reportTable = document.getElementById("reportTable");
    
    
    
    if(reportSearch && reportTable){
    
    
    reportSearch.addEventListener("keyup", function(){
    
    
    
    let searchValue = this.value.toLowerCase();
    
    
    
    let rows = reportTable.querySelectorAll("tr");
    
    
    
    rows.forEach(function(row){
    
    
    
    let rowText = row.innerText.toLowerCase();
    
    
    
    if(rowText.includes(searchValue)){
    
    
    row.style.display="";
    
    
    }
    
    else{
    
    
    row.style.display="none";
    
    
    }
    
    
    
    });
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    
    /* =====================================
       REPORT FILTER
    ===================================== */
    
    
    const reportFilter = document.getElementById("reportFilter");
    
    
    
    if(reportFilter && reportTable){
    
    
    
    reportFilter.addEventListener("change", function(){
    
    
    
    let filterValue = this.value;
    
    
    
    let rows = reportTable.querySelectorAll("tr");
    
    
    
    rows.forEach(function(row){
    
    
    
    let category = row.children[2]?.innerText;
    
    
    
    if(filterValue === "all" || category === filterValue){
    
    
    row.style.display="";
    
    
    }
    
    else{
    
    
    row.style.display="none";
    
    
    }
    
    
    
    });
    
    
    });
    
    
    }
    /* =====================================
   VIEW REPORT MODAL
===================================== */


const reportPreviewModal = document.getElementById("reportPreviewModal");
const previewReportTitle = document.getElementById("previewReportTitle");



function showReportPreview(reportName){



if(reportPreviewModal && previewReportTitle){



previewReportTitle.innerText = reportName;



const modal = new bootstrap.Modal(reportPreviewModal);


modal.show();



}



}







/* =====================================
   REPORT TABLE ACTIONS
===================================== */


if(reportTable){



reportTable.addEventListener("click", function(e){



/* ===== VIEW BUTTON ===== */


const viewButton = e.target.closest(".report-view-btn");



if(viewButton){



const row = viewButton.closest("tr");



const reportName = row.children[1].innerText;



showReportPreview(reportName);



}







/* ===== DELETE BUTTON ===== */


const deleteButton = e.target.closest(".report-delete-btn");



if(deleteButton){



const row = deleteButton.closest("tr");



let confirmDelete = confirm(
"Are you sure you want to delete this report?"
);



if(confirmDelete){



row.remove();



updateReportCount();



alert(
"Report deleted successfully"
);



}



}








/* ===== DOWNLOAD BUTTON ===== */


const downloadButton = e.target.closest(".report-download-btn");



if(downloadButton){



alert(
"Report download started..."
);



}



});


}







/* =====================================
   UPDATE REPORT COUNT
===================================== */


function updateReportCount(){



const totalReports = document.getElementById("totalReports");

const rows = document.querySelectorAll("#reportTable tr");



if(totalReports){


totalReports.innerText = rows.length;


}



}
/* =====================================
   OPEN GENERATE REPORT MODAL
===================================== */


const generateReportBtn = document.getElementById("generateReport");


const generateReportModal = document.getElementById("generateReportModal");



if(generateReportBtn && generateReportModal){


const createModal = new bootstrap.Modal(generateReportModal);



generateReportBtn.addEventListener("click",function(){


createModal.show();


});



}








/* =====================================
   CREATE NEW REPORT
===================================== */


const createReportBtn = document.getElementById("createReportBtn");



if(createReportBtn){



createReportBtn.addEventListener("click",function(){



const reportName = document.getElementById("newReportName").value;

const category = document.getElementById("newReportCategory").value;

const date = document.getElementById("newReportDate").value;

const status = document.getElementById("newReportStatus").value;



if(reportName === ""){


alert("Please enter report name");

return;


}





const table = document.getElementById("reportTable");



const rowNumber = table.rows.length + 1;



let statusClass = "";



if(status === "Completed"){

statusClass = "status-complete";

}

else{

statusClass = "status-pending";

}





const newRow = `

<tr>

<td>${rowNumber}</td>

<td>${reportName}</td>

<td>${category}</td>

<td>${date}</td>

<td>

<span class="${statusClass}">

${status}

</span>

</td>


<td class="report-actions">


<button class="report-view-btn">

<i class="fa-solid fa-eye"></i>

</button>



<button class="report-download-btn">

<i class="fa-solid fa-download"></i>

</button>



<button class="report-delete-btn">

<i class="fa-solid fa-trash"></i>

</button>


</td>


</tr>

`;



table.insertAdjacentHTML(
"beforeend",
newRow
);



updateReportCount();





document.getElementById("newReportName").value="";

document.getElementById("newReportDate").value="";



const modal = bootstrap.Modal.getInstance(generateReportModal);


if(modal){

modal.hide();

}



alert(
"Report created successfully"
);



});



}








/* =====================================
   LOGOUT BUTTON
===================================== */


const logoutBtn = document.querySelector(
".profile-dropdown a:last-child"
);



if(logoutBtn){



logoutBtn.addEventListener("click",function(e){



e.preventDefault();



alert(
"Logged out successfully"
);



});



}






});