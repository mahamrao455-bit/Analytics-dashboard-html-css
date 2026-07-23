/* =====================================
   VEXORIUM REVENUE JS
===================================== */


let revenueData = [

    {
        id:1,
        client:"Ali Khan",
        category:"Website Development",
        date:"2026-07-10",
        amount:1200,
        status:"Completed"
    },
    
    {
        id:2,
        client:"Sarah Ahmed",
        category:"Mobile App",
        date:"2026-07-12",
        amount:2500,
        status:"Pending"
    },
    
    {
        id:3,
        client:"John Smith",
        category:"SEO Services",
        date:"2026-07-15",
        amount:1800,
        status:"Completed"
    }
    
    ];
    
    
    
    
    document.addEventListener("DOMContentLoaded", function(){
    
    
    
   // ===============================
// BELL DROPDOWN
// ===============================


const notificationBtn = document.getElementById("notificationBtn");
const notificationDropdown = document.getElementById("notificationDropdown");


if(notificationBtn){

notificationBtn.onclick = function(e){

e.stopPropagation();

notificationDropdown.style.display =
notificationDropdown.style.display === "block"
? "none"
: "block";

}

}





// ===============================
// PROFILE DROPDOWN
// ===============================


const profile = document.querySelector(".profile");
const profileDropdown = document.querySelector(".profile-dropdown");


if(profile){

profile.onclick = function(e){

e.stopPropagation();

profileDropdown.style.display =
profileDropdown.style.display === "block"
? "none"
: "block";

}

}




// CLOSE OUTSIDE CLICK

document.addEventListener("click",function(){

if(notificationDropdown){

notificationDropdown.style.display="none";

}


if(profileDropdown){

profileDropdown.style.display="none";

}


});
    
    
    
    
    
    /* =====================================
       CLOSE DROPDOWNS
    ===================================== */
    
    
    document.addEventListener("click",function(){
    
    
        if(notificationDropdown){
    
            notificationDropdown.classList.remove("show");
    
        }
    
    
        if(profileDropdown){
    
            profileDropdown.classList.remove("show");
    
        }
    
    
    });
    
    
    
    
    
    
    
    /* =====================================
       REVENUE TABLE
    ===================================== */
    
    
    const revenueTableBody =
    document.getElementById("revenueTableBody");
    
    
    
    
    function loadRevenueTable(data = revenueData){
    
    
    if(!revenueTableBody) return;
    
    
    revenueTableBody.innerHTML = "";
    
    
    
    data.forEach(function(item){
    
    
    revenueTableBody.innerHTML += `
    
    
    <tr>
    
    <td>${item.id}</td>
    
    <td>${item.client}</td>
    
    <td>${item.category}</td>
    
    <td>${item.date}</td>
    
    <td>$${item.amount}</td>
    
    
    <td>
    
    <span class="badge bg-success">
    
    ${item.status}
    
    </span>
    
    </td>
    
    
    <td>
    
    
    <button 
    class="btn btn-sm btn-info viewRevenue"
    data-id="${item.id}">
    
    View
    
    </button>
    
    
    <button
    class="btn btn-sm btn-warning editRevenue"
    data-id="${item.id}">
    
    Edit
    
    </button>
    
    
    <button
    class="btn btn-sm btn-danger deleteRevenue"
    data-id="${item.id}">
    
    Delete
    
    </button>
    
    
    </td>
    
    
    </tr>
    
    
    `;
    
    
    
    });
    
    
    }
    
    
    
    loadRevenueTable();
    
    
    
    
    
    /* =====================================
       SEARCH
    ===================================== */
    
    
    const searchRevenue =
    document.getElementById("searchRevenue");
    
    
    
    if(searchRevenue){
    
    
    searchRevenue.addEventListener("input",function(){
    
    
    let value =
    searchRevenue.value.toLowerCase();
    
    
    
    let filtered =
    revenueData.filter(function(item){
    
    
    return(
    
    item.client.toLowerCase().includes(value) ||
    
    item.category.toLowerCase().includes(value) ||
    
    item.status.toLowerCase().includes(value)
    
    );
    
    
    });
    
    
    
    loadRevenueTable(filtered);
    
    
    
    });
    
    
    
    }
    
    
    
    });
    /* =====================================
   ADD REVENUE
===================================== */


document.addEventListener("DOMContentLoaded", function(){


    const addRevenueBtn =
    document.getElementById("addRevenueBtn");
    
    
    let revenueModal;
    
    
    
    if(addRevenueBtn){
    
    
    addRevenueBtn.addEventListener("click",function(){
    
    
    
    const modalElement =
    document.getElementById("addRevenueModal");
    
    
    
    if(modalElement){
    
    
    revenueModal =
    new bootstrap.Modal(modalElement);
    
    
    revenueModal.show();
    
    
    
    }
    
    
    
    });
    
    
    
    }
    
    
    
    
    
    
    
    /* =====================================
       SAVE REVENUE
    ===================================== */
    
    
    const saveRevenue =
    document.getElementById("saveRevenue");
    
    
    
    if(saveRevenue){
    
    
    
    saveRevenue.addEventListener("click",function(){
    
    
    
    let client =
    document.getElementById("clientName").value;
    
    
    let category =
    document.getElementById("category").value;
    
    
    let date =
    document.getElementById("date").value;
    
    
    let amount =
    document.getElementById("amount").value;
    
    
    let status =
    document.getElementById("status").value;
    
    
    
    
    
    if(
    client === "" ||
    category === "" ||
    date === "" ||
    amount === ""
    ){
    
    alert("Please fill all fields");
    
    return;
    
    }
    
    
    
    
    
    let newRevenue = {
    
    
    id: revenueData.length + 1,
    
    client:client,
    
    category:category,
    
    date:date,
    
    amount:Number(amount),
    
    status:status
    
    
    };
    
    
    
    
    
    revenueData.push(newRevenue);
    
    
    
    
    
    const table =
    document.getElementById("revenueTableBody");
    
    
    
    if(table){
    
    
    table.innerHTML="";
    
    
    revenueData.forEach(function(item){
    
    
    table.innerHTML += `
    
    
    <tr>
    
    <td>${item.id}</td>
    
    <td>${item.client}</td>
    
    <td>${item.category}</td>
    
    <td>${item.date}</td>
    
    <td>$${item.amount}</td>
    
    
    <td>
    
    <span class="badge bg-success">
    ${item.status}
    </span>
    
    </td>
    
    
    <td>
    
    <button class="btn btn-sm btn-info viewRevenue"
    data-id="${item.id}">
    View
    </button>
    
    
    <button class="btn btn-sm btn-warning editRevenue"
    data-id="${item.id}">
    Edit
    </button>
    
    
    <button class="btn btn-sm btn-danger deleteRevenue"
    data-id="${item.id}">
    Delete
    </button>
    
    
    </td>
    
    
    </tr>
    
    
    `;
    
    
    
    });
    
    
    
    }
    
    
    
    
    
    updateRevenueTotal();
    
    
    
    
    revenueModal.hide();
    
    
    
    
    
    // clear fields
    
    
    document.getElementById("clientName").value="";
    
    document.getElementById("category").value="";
    
    document.getElementById("date").value="";
    
    document.getElementById("amount").value="";
    
    
    
    
    
    });
    
    
    
    }
    
    
    
    
    
    
    });
    
    
    
    
    
    
    
    
    /* =====================================
       UPDATE TOTAL REVENUE
    ===================================== */
    
    
    function updateRevenueTotal(){
    
    
    
    const total =
    document.getElementById("totalRevenue");
    
    
    
    if(total){
    
    
    let sum =
    revenueData.reduce(function(a,b){
    
    
    return a + Number(b.amount);
    
    
    },0);
    
    
    
    total.innerText =
    "$" + sum.toLocaleString();
    
    
    
    }
    
    
    
    }
    /* =====================================
   VIEW REVENUE
===================================== */


document.addEventListener("click",function(e){



    if(e.target.classList.contains("viewRevenue")){
    
    
    let id = e.target.dataset.id;
    
    
    
    let revenue =
    revenueData.find(function(item){
    
    return item.id == id;
    
    });
    
    
    
    if(revenue){
    
    
    
    const viewContent =
    document.getElementById("viewContent");
    
    
    
    if(viewContent){
    
    
    viewContent.innerHTML = `
    
    
    <p>
    <strong>Client:</strong>
    ${revenue.client}
    </p>
    
    
    <p>
    <strong>Category:</strong>
    ${revenue.category}
    </p>
    
    
    <p>
    <strong>Date:</strong>
    ${revenue.date}
    </p>
    
    
    <p>
    <strong>Amount:</strong>
    $${revenue.amount}
    </p>
    
    
    <p>
    <strong>Status:</strong>
    ${revenue.status}
    </p>
    
    
    `;
    
    
    
    }
    
    
    
    
    let modalElement =
    document.getElementById("viewModal");
    
    
    
    if(modalElement){
    
    
    let viewModal =
    new bootstrap.Modal(modalElement);
    
    
    viewModal.show();
    
    
    }
    
    
    
    }
    
    
    
    }
    
    
    });
    
    
    
    
    
    
    
    
    /* =====================================
       DELETE REVENUE
    ===================================== */
    
    
    let deleteId = null;
    
    
    
    document.addEventListener("click",function(e){
    
    
    
    if(e.target.classList.contains("deleteRevenue")){
    
    
    deleteId =
    e.target.dataset.id;
    
    
    
    let modalElement =
    document.getElementById("deleteModal");
    
    
    
    if(modalElement){
    
    
    let deleteModal =
    new bootstrap.Modal(modalElement);
    
    
    deleteModal.show();
    
    
    }
    
    
    
    }
    
    
    
    });
    
    
    
    
    
    
    
    const confirmDelete =
    document.getElementById("confirmDelete");
    
    
    
    if(confirmDelete){
    
    
    
    confirmDelete.addEventListener("click",function(){
    
    
    
    revenueData =
    revenueData.filter(function(item){
    
    
    return item.id != deleteId;
    
    
    });
    
    
    
    const table =
    document.getElementById("revenueTableBody");
    
    
    
    if(table){
    
    table.innerHTML="";
    
    
    revenueData.forEach(function(item){
    
    
    table.innerHTML += `
    
    
    <tr>
    
    <td>${item.id}</td>
    
    <td>${item.client}</td>
    
    <td>${item.category}</td>
    
    <td>${item.date}</td>
    
    <td>$${item.amount}</td>
    
    
    <td>
    
    <span class="badge bg-success">
    ${item.status}
    </span>
    
    </td>
    
    
    <td>
    
    
    <button class="btn btn-sm btn-info viewRevenue"
    data-id="${item.id}">
    View
    </button>
    
    
    <button class="btn btn-sm btn-warning editRevenue"
    data-id="${item.id}">
    Edit
    </button>
    
    
    <button class="btn btn-sm btn-danger deleteRevenue"
    data-id="${item.id}">
    Delete
    </button>
    
    
    </td>
    
    
    </tr>
    
    
    `;
    
    
    
    });
    
    
    }
    
    
    
    updateRevenueTotal();
    
    
    
    
    
    let modal =
    bootstrap.Modal.getInstance(
    document.getElementById("deleteModal")
    );
    
    
    
    if(modal){
    
    modal.hide();
    
    }
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    
    /* =====================================
       EDIT REVENUE
    ===================================== */
    
    
    document.addEventListener("click",function(e){
    
    
    
    if(e.target.classList.contains("editRevenue")){
    
    
    let id =
    e.target.dataset.id;
    
    
    
    let revenue =
    revenueData.find(function(item){
    
    
    return item.id == id;
    
    
    });
    
    
    
    if(revenue){
    
    
    
    document.getElementById("editId").value =
    revenue.id;
    
    
    document.getElementById("editClient").value =
    revenue.client;
    
    
    document.getElementById("editCategory").value =
    revenue.category;
    
    
    document.getElementById("editDate").value =
    revenue.date;
    
    
    document.getElementById("editAmount").value =
    revenue.amount;
    
    
    document.getElementById("editStatus").value =
    revenue.status;
    
    
    
    
    
    let editModal =
    new bootstrap.Modal(
    document.getElementById("editModal")
    );
    
    
    
    editModal.show();
    
    
    
    }
    
    
    
    }
    
    
    
    });
    
    
    
    
    
    
    
    /* =====================================
       UPDATE REVENUE
    ===================================== */
    
    
    const updateRevenueBtn =
    document.getElementById("updateRevenue");
    
    
    
    if(updateRevenueBtn){
    
    
    updateRevenueBtn.addEventListener("click",function(){
    
    
    
    let id =
    document.getElementById("editId").value;
    
    
    
    let revenue =
    revenueData.find(function(item){
    
    
    return item.id == id;
    
    
    });
    
    
    
    if(revenue){
    
    
    
    revenue.client =
    document.getElementById("editClient").value;
    
    
    revenue.category =
    document.getElementById("editCategory").value;
    
    
    revenue.date =
    document.getElementById("editDate").value;
    
    
    revenue.amount =
    Number(document.getElementById("editAmount").value);
    
    
    revenue.status =
    document.getElementById("editStatus").value;
    
    
    
    location.reload();
    
    
    
    }
    
    
    
    });
    
    
    }
    /* =====================================
   REVENUE ANALYTICS CHART
===================================== */


const revenueChartCanvas =
document.getElementById("revenueChart");



if(revenueChartCanvas){



new Chart(revenueChartCanvas,{

type:"line",


data:{


labels:[

"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"

],


datasets:[{

label:"Revenue",

data:[

12000,
18000,
15000,
25000,
22000,
32000

],


borderWidth:3,

tension:0.4


}]

},



options:{


responsive:true,


plugins:{


legend:{


labels:{


color:"#ffffff"


}


}


},



scales:{


x:{


ticks:{


color:"#aaa"


}


},



y:{


ticks:{


color:"#aaa"


}


}



}



}



});



}







/* =====================================
   REVENUE GOAL CHART
===================================== */


const goalChartCanvas =
document.getElementById("goalChart");



if(goalChartCanvas){



new Chart(goalChartCanvas,{

type:"doughnut",


data:{


labels:[

"Completed",

"Remaining"

],



datasets:[{

data:[

75,

25

],


borderWidth:0


}]

},




options:{


responsive:true,


plugins:{


legend:{


position:"bottom",


labels:{


color:"#ffffff"


}


}


}



}



});



}







/* =====================================
   DOWNLOAD REPORT
===================================== */


const downloadReport =
document.getElementById("downloadReport");



if(downloadReport){



downloadReport.addEventListener("click",function(){



let csv = 
"ID,Client,Category,Date,Amount,Status\n";



revenueData.forEach(function(item){



csv +=

`${item.id},${item.client},${item.category},${item.date},${item.amount},${item.status}\n`;



});





let blob =
new Blob([csv],{

type:"text/csv"

});





let url =
URL.createObjectURL(blob);





let link =
document.createElement("a");


link.href=url;


link.download="revenue-report.csv";


link.click();




URL.revokeObjectURL(url);



});



}