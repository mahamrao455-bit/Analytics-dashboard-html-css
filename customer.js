document.addEventListener("DOMContentLoaded", function(){


    /* ===============================
       ELEMENTS
    ================================ */
    
    const searchInput = document.getElementById("searchCustomer");
    const tableBody = document.querySelector("#customerTable tbody");
    
    const totalCustomers = document.getElementById("totalCustomers");
    const activeCustomers = document.getElementById("activeCustomers");
    const inactiveCustomers = document.getElementById("inactiveCustomers");
    const premiumCustomers = document.getElementById("premiumCustomers");
    
    const statusFilter = document.getElementById("statusFilter");
    
    const saveCustomerBtn = document.getElementById("saveCustomer");
    
    
    
    /* ===============================
       CUSTOMER DATA
    ================================ */
    
    
    let customers = [
    
    {
    id:1,
    name:"Ali Khan",
    email:"ali@gmail.com",
    phone:"03001234567",
    status:"Active",
    premium:true
    },
    
    
    {
    id:2,
    name:"Sara Ahmed",
    email:"sara@gmail.com",
    phone:"03124567890",
    status:"Inactive",
    premium:false
    },
    
    
    {
    id:3,
    name:"Muhammad Hassan",
    email:"hassan@gmail.com",
    phone:"03219876543",
    status:"Active",
    premium:true
    }
    
    ];
    
    
    let editMode = false;
    let editId = null;
    
    
    
    /* ===============================
       LOAD TABLE
    ================================ */
    
    
    function loadCustomers(data = customers){
    
    
    tableBody.innerHTML="";
    
    
    data.forEach(customer=>{
    
    
    let row = `
    
    <tr>
    
    <td>${customer.id}</td>
    
    <td>${customer.name}</td>
    
    <td>${customer.email}</td>
    
    <td>${customer.phone}</td>
    
    
    <td>
    
    <span class="badge ${customer.status==="Active" ? "bg-success":"bg-danger"}">
    
    ${customer.status}
    
    </span>
    
    </td>
    
    
    
    <td>
    
    
    <button class="btn btn-primary btn-sm viewBtn"
    data-id="${customer.id}">
    
    <i class="fa-solid fa-eye"></i>
    
    </button>
    
    
    
    <button class="btn btn-warning btn-sm editBtn"
    data-id="${customer.id}">
    
    <i class="fa-solid fa-pen"></i>
    
    </button>
    
    
    
    <button class="btn btn-danger btn-sm deleteBtn"
    data-id="${customer.id}">
    
    <i class="fa-solid fa-trash"></i>
    
    </button>
    
    
    </td>
    
    
    </tr>
    
    
    `;
    
    
    tableBody.innerHTML += row;
    
    
    });
    
    
    updateStats();
    
    }
    
    
    loadCustomers();
    
    
    
    
    
    /* ===============================
       STATS
    ================================ */
    
    
    function updateStats(){
    
    
    totalCustomers.innerText = customers.length;
    
    
    activeCustomers.innerText =
    customers.filter(c=>c.status==="Active").length;
    
    
    inactiveCustomers.innerText =
    customers.filter(c=>c.status==="Inactive").length;
    
    
    premiumCustomers.innerText =
    customers.filter(c=>c.premium).length;
    
    
    }
/* ===============================
   ADD / EDIT CUSTOMER
================================ */

saveCustomerBtn.addEventListener("click", () => {

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const status = document.getElementById("customerStatus").value;
    
    if(name==="" || email==="" || phone===""){
    alert("Please fill all fields.");
    return;
    }
    
    if(editMode){
    
    const customer = customers.find(c=>c.id===editId);
    
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.status = status;
    
    editMode = false;
    editId = null;
    
    }else{
    
    customers.push({
    
    id: customers.length
    ? Math.max(...customers.map(c=>c.id))+1
    :1,
    
    name,
    email,
    phone,
    status,
    premium:false
    
    });
    
    }
    
    loadCustomers();
    
    document.getElementById("customerName").value="";
    document.getElementById("customerEmail").value="";
    document.getElementById("customerPhone").value="";
    document.getElementById("customerStatus").value="Active";
    
    bootstrap.Modal.getInstance(
    document.getElementById("customerModal")
    ).hide();
    
    });
    
    
    
    /* ===============================
       TABLE BUTTONS
    ================================ */
    
    tableBody.addEventListener("click",(e)=>{
    
    const id = Number(e.target.closest("button")?.dataset.id);
    
    if(!id) return;
    
    
    /* ===== DELETE ===== */
    
    if(e.target.closest(".deleteBtn")){
    
    if(confirm("Delete this customer?")){
    
    customers = customers.filter(c=>c.id!==id);
    
    loadCustomers();
    
    }
    
    }
    
    
    /* ===== EDIT ===== */
    
    if(e.target.closest(".editBtn")){
    
    const customer = customers.find(c=>c.id===id);
    
    document.getElementById("customerName").value = customer.name;
    document.getElementById("customerEmail").value = customer.email;
    document.getElementById("customerPhone").value = customer.phone;
    document.getElementById("customerStatus").value = customer.status;
    
    editMode = true;
    editId = id;
    
    new bootstrap.Modal(
    document.getElementById("customerModal")
    ).show();
    
    }
    
    
    /* ===== VIEW ===== */
    
    if(e.target.closest(".viewBtn")){
    
    const customer = customers.find(c=>c.id===id);
    
    document.getElementById("viewCustomerBody").innerHTML = `
    
    <div class="mb-2">
    
    <strong>ID:</strong> ${customer.id}
    
    </div>
    
    <div class="mb-2">
    
    <strong>Name:</strong> ${customer.name}
    
    </div>
    
    <div class="mb-2">
    
    <strong>Email:</strong> ${customer.email}
    
    </div>
    
    <div class="mb-2">
    
    <strong>Phone:</strong> ${customer.phone}
    
    </div>
    
    <div class="mb-2">
    
    <strong>Status:</strong> ${customer.status}
    
    </div>
    
    `;
    
    new bootstrap.Modal(
    document.getElementById("viewModal")
    ).show();
    
    }
    
    });
    
    
    
    /* ===============================
       SEARCH CUSTOMER
    ================================ */
    
    searchInput.addEventListener("keyup",()=>{
    
    const value = searchInput.value.toLowerCase();
    
    const filtered = customers.filter(customer=>
    
    customer.name.toLowerCase().includes(value)
    
    ||
    
    customer.email.toLowerCase().includes(value)
    
    ||
    
    customer.phone.includes(value)
    
    );
    
    loadCustomers(filtered);
    
    });
    
    
    
    /* ===============================
       STATUS FILTER
    ================================ */
    
    statusFilter.addEventListener("change",()=>{
    
    if(statusFilter.value==="all"){
    
    loadCustomers();
    
    return;
    
    }
    
    const filtered = customers.filter(customer=>
    
    customer.status===statusFilter.value
    
    );
    
    loadCustomers(filtered);
    
    });
    /* ===============================
   NOTIFICATION DROPDOWN
================================ */

const bellBtn = document.getElementById("bellBtn");
const notificationMenu = document.getElementById("notificationMenu");

if (bellBtn && notificationMenu) {

    bellBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        notificationMenu.classList.toggle("show");

        const profileDropdown = document.querySelector(".profile-dropdown");
        if (profileDropdown) {
            profileDropdown.classList.remove("show");
        }

    });

}



/* ===============================
   PROFILE DROPDOWN
================================ */

const profile = document.querySelector(".profile");
const profileDropdown = document.querySelector(".profile-dropdown");

if (profile && profileDropdown) {

    profile.addEventListener("click", function (e) {

        e.stopPropagation();

        profileDropdown.classList.toggle("show");

        if (notificationMenu) {
            notificationMenu.classList.remove("show");
        }

    });

}



/* ===============================
   CLOSE DROPDOWNS
================================ */

document.addEventListener("click", function () {

    if (notificationMenu)
        notificationMenu.classList.remove("show");

    if (profileDropdown)
        profileDropdown.classList.remove("show");

});



/* ===============================
   EXPORT CSV
================================ */

const exportBtn = document.getElementById("exportCustomers");

if (exportBtn) {

    exportBtn.addEventListener("click", function () {

        let csv =
            "ID,Name,Email,Phone,Status\n";

        customers.forEach(c => {

            csv += `${c.id},${c.name},${c.email},${c.phone},${c.status}\n`;

        });

        const blob = new Blob([csv], {
            type: "text/csv"
        });

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);

        link.download = "customers.csv";

        link.click();

    });

}



/* ===============================
   PAGINATION
================================ */

const rowsPerPage = 2;

let currentPage = 1;



function showPage(page) {

    const rows =
        document.querySelectorAll("#customerTable tbody tr");

    const totalPages =
        Math.ceil(rows.length / rowsPerPage);

    if (page < 1) page = 1;

    if (page > totalPages) page = totalPages;

    currentPage = page;

    rows.forEach((row, index) => {

        row.style.display =

            (
                index >= (page - 1) * rowsPerPage &&
                index < page * rowsPerPage
            )

                ? ""

                : "none";

    });


    const pageItems =
        document.querySelectorAll(".pagination .page-item");

    pageItems.forEach(item =>
        item.classList.remove("active")
    );

    if (pageItems[page])
        pageItems[page].classList.add("active");

}


showPage(1);



const pageLinks =
    document.querySelectorAll(".pagination .page-link");

pageLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const text =
            this.textContent.trim();

        if (text === "Previous") {

            showPage(currentPage - 1);

        }

        else if (text === "Next") {

            showPage(currentPage + 1);

        }

        else {

            showPage(Number(text));

        }

    });

});


});    