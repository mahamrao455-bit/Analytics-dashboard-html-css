/* =====================================
   VEXORIUM PRODUCTS PAGE JS
===================================== */


// ===============================
// VARIABLES
// ===============================

let editingRow = null;


const searchInput = document.getElementById("searchProduct");

const notificationBtn = document.getElementById("notificationBtn");
const notificationDropdown = document.getElementById("notificationDropdown");


const profile = document.querySelector(".profile");
const profileDropdown = document.querySelector(".profile-dropdown");


const productTable = document.getElementById("productTable");


const addProductBtn = document.getElementById("addProductBtn");
const saveProductBtn = document.getElementById("saveProduct")
const exportBtn = document.getElementById("exportProducts");


const modalElement = document.getElementById("addProductModal");

let productModal;

if(modalElement){
    productModal = new bootstrap.Modal(modalElement);
}




// ===============================
// NOTIFICATION DROPDOWN
// ===============================
if(notificationBtn){

   notificationBtn.addEventListener("click",(e)=>{

       e.stopPropagation();

       notificationDropdown.classList.toggle("show");

       if(profileDropdown){
           profileDropdown.classList.remove("show");
       }

   });

}


// ===============================
// PROFILE DROPDOWN
// ===============================


if(profile){

   profile.addEventListener("click",(e)=>{

       e.stopPropagation();

       profileDropdown.classList.toggle("show");

       if(notificationDropdown){
           notificationDropdown.classList.remove("show");
       }

   });

}





// ===============================
// ADD PRODUCT MODAL OPEN
// ===============================


addProductBtn.addEventListener("click",()=>{


editingRow=null;


document.getElementById("productName").value="";
document.getElementById("productCategory").value="";
document.getElementById("productPrice").value="";
document.getElementById("productStock").value="";


productModal.show();


});





// ===============================
// SAVE PRODUCT
// ===============================


saveProductBtn.addEventListener("click",()=>{


const name =
document.getElementById("productName").value.trim();


const category =
document.getElementById("productCategory").value.trim();



const price =
document.getElementById("productPrice").value.trim();



const stock =
document.getElementById("productStock").value.trim();





if(
name==="" ||
category==="" ||
price==="" ||
stock===""
){

alert("Please fill all fields");

return;

}





const status =

Number(stock)>20

?
'<span class="badge bg-success">In Stock</span>'

:

'<span class="badge bg-warning text-dark">Low Stock</span>';





// ===============================
// EDIT MODE
// ===============================


if(editingRow){


editingRow.cells[1].innerText=name;

editingRow.cells[2].innerText=category;

editingRow.cells[3].innerText="$"+price;

editingRow.cells[4].innerText=stock;

editingRow.cells[5].innerHTML=status;


editingRow=null;


productModal.hide();


alert("Product Updated Successfully");


updateProductCount();


return;


}






// ===============================
// ADD MODE
// ===============================


const id =
"#P"+String(productTable.rows.length+1).padStart(3,"0");



const row =
productTable.insertRow();



row.innerHTML=`

<td>${id}</td>

<td>${name}</td>

<td>${category}</td>

<td>$${price}</td>

<td>${stock}</td>

<td>${status}</td>


<td>

<button class="btn btn-success btn-sm">
View
</button>


<button class="btn btn-warning btn-sm">
Edit
</button>


<button class="btn btn-danger btn-sm">
Delete
</button>


</td>


`;



productModal.hide();


alert("Product Added Successfully");


updateProductCount();



});
// ===============================
// LIVE SEARCH
// ===============================


searchInput.addEventListener("keyup",()=>{


   const value =
   searchInput.value.toLowerCase();
   
   
   
   const rows =
   productTable.querySelectorAll("tr");
   
   
   
   rows.forEach((row)=>{
   
   
   const text =
   row.innerText.toLowerCase();
   
   
   
   if(text.includes(value)){
   
   row.style.display="";
   
   }
   
   else{
   
   row.style.display="none";
   
   }
   
   
   
   });
   
   
   });
   
   
   
   
   
   
   // ===============================
   // TABLE ACTIONS
   // ===============================
   
   
   productTable.addEventListener("click",(e)=>{
   
   
   const row =
   e.target.closest("tr");
   
   
   
   if(!row) return;
   
   
   
   
   
   // ===============================
   // VIEW PRODUCT
   // ===============================
   
   
   if(e.target.innerText==="View"){
   
   
   
   const details = `
   
   Product Details
   
   
   ID:
   ${row.cells[0].innerText}
   
   
   Name:
   ${row.cells[1].innerText}
   
   
   Category:
   ${row.cells[2].innerText}
   
   
   Price:
   ${row.cells[3].innerText}
   
   
   Stock:
   ${row.cells[4].innerText}
   
   
   Status:
   ${row.cells[5].innerText}
   
   
   
   `;
   
   
   
   alert(details);
   
   
   
   }
   
   
   
   
   
   
   
   
   // ===============================
   // DELETE PRODUCT
   // ===============================
   
   
   if(e.target.innerText==="Delete"){
   
   
   
   const confirmDelete =
   confirm("Are you sure you want to delete this product?");
   
   
   
   if(confirmDelete){
   
   
   row.remove();
   
   
   alert("Product Deleted Successfully");
   
   
   updateProductCount();
   
   
   }
   
   
   
   }
   
   
   
   
   
   
   
   
   
   // ===============================
   // EDIT PRODUCT
   // ===============================
   
   
   if(e.target.innerText==="Edit"){
   
   
   
   editingRow=row;
   
   
   
   
   document.getElementById("productName").value =
   row.cells[1].innerText;
   
   
   
   document.getElementById("productCategory").value =
   row.cells[2].innerText;
   
   
   
   document.getElementById("productPrice").value =
   row.cells[3].innerText.replace("$","");
   
   
   
   document.getElementById("productStock").value =
   row.cells[4].innerText;
   
   
   
   
   
   productModal.show();
   
   
   
   
   }
   
   
   
   });
   // ===============================
// EXPORT PRODUCTS CSV
// ===============================


exportBtn.addEventListener("click",()=>{


   let csv =
   "ID,Product,Category,Price,Stock,Status\n";
   
   
   
   const rows =
   productTable.querySelectorAll("tr");
   
   
   
   rows.forEach((row)=>{
   
   
   const cols =
   row.querySelectorAll("td");
   
   
   
   if(cols.length>0){
   
   
   
   const data=[
   
   
   cols[0].innerText,
   
   cols[1].innerText,
   
   cols[2].innerText,
   
   cols[3].innerText,
   
   cols[4].innerText,
   
   cols[5].innerText
   
   
   ];
   
   
   
   csv += data.join(",")+"\n";
   
   
   
   }
   
   
   
   });
   
   
   
   
   
   const blob =
   new Blob([csv],{
   
   type:"text/csv"
   
   });
   
   
   
   const url =
   URL.createObjectURL(blob);
   
   
   
   const link =
   document.createElement("a");
   
   
   
   link.href=url;
   
   
   link.download="products.csv";
   
   
   
   document.body.appendChild(link);
   
   
   
   link.click();
   
   
   
   document.body.removeChild(link);
   
   
   
   URL.revokeObjectURL(url);
   
   
   
   });
   
   
   
   
   
   
   
   // ===============================
   // TOTAL PRODUCTS COUNT
   // ===============================
   
   
   function updateProductCount(){
   
   
   
   const total =
   productTable.querySelectorAll("tr").length;
   
   
   
   const cards =
   document.querySelectorAll(".stat-card h2");
   
   
   
   if(cards.length>0){
   
   
   cards[0].innerText=total;
   
   
   
   }
   
   
   
   }
   
   
   
   updateProductCount();
   
   
   
   
   
   
   
   // ===============================
   // BUTTON HOVER EFFECT
   // ===============================
   
   
   document.querySelectorAll(".btn").forEach((btn)=>{
   
   
   btn.addEventListener("mouseenter",()=>{
   
   
   btn.style.transform="scale(1.05)";
   
   
   });
   
   
   
   
   btn.addEventListener("mouseleave",()=>{
   
   
   btn.style.transform="scale(1)";
   
   
   });
   
   
   
   });
   
   
   
   
   // ===============================
   // END
   // ===============================