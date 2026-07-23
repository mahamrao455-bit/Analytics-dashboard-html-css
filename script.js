/* ==========================================
   VEXORIUM DASHBOARD SCRIPT
   PART 1
========================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ==============================
       ELEMENTS
    ============================== */
    
    
    const menuToggle = document.getElementById("menuToggle");
    
    const sidebar = document.querySelector(".sidebar");
    
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    
    
    const notificationBtn = document.getElementById("notificationBtn");
    
    const notificationDropdown = document.getElementById("notificationDropdown");
    
    
    const profile = document.querySelector(".profile");
    
    const profileDropdown = document.querySelector(".profile-dropdown");
    
    
    
    /* ==============================
       HAMBURGER MENU
    ============================== */
    
    
    if(menuToggle && sidebar){
    
    
        menuToggle.addEventListener("click", function(e){
    
            e.stopPropagation();
    
    
            sidebar.classList.toggle("show");
    
    
            if(sidebarOverlay){
    
                sidebarOverlay.classList.toggle("show");
    
            }
    
    
            console.log("Hamburger clicked");
    
        });
    
    
    }
    
    
    
    /* ==============================
       OVERLAY CLOSE
    ============================== */
    
    
    if(sidebarOverlay){
    
    
        sidebarOverlay.addEventListener("click", function(){
    
    
            sidebar.classList.remove("show");
    
    
            sidebarOverlay.classList.remove("show");
    
    
        });
    
    
    }
    
    
    
    /* ==============================
       NOTIFICATION DROPDOWN
    ============================== */
    
    
    if(notificationBtn && notificationDropdown){
    
    
    notificationBtn.addEventListener("click", function(e){
    
    
        e.stopPropagation();
    
    
        notificationDropdown.classList.toggle("show");
    
    
        if(profileDropdown){
    
            profileDropdown.classList.remove("show");
    
        }
    
    
    });
    
    
    }
    
    
    
    /* ==============================
       PROFILE DROPDOWN
    ============================== */
    
    
    if(profile && profileDropdown){
    
    
    profile.addEventListener("click", function(e){
    
    
        e.stopPropagation();
    
    
        profileDropdown.classList.toggle("show");
    
    
        if(notificationDropdown){
    
            notificationDropdown.classList.remove("show");
    
        }
    
    
    });
    
    
    }
    
    
    
    /* ==============================
       CLOSE ALL DROPDOWNS
    ============================== */
    
    
    document.addEventListener("click",function(){
    
    
        if(notificationDropdown){
    
            notificationDropdown.classList.remove("show");
    
        }
    
    
        if(profileDropdown){
    
            profileDropdown.classList.remove("show");
    
        }
    
    
    });
    
    
    
    });
    /* ==========================================
   VEXORIUM DASHBOARD SCRIPT
   PART 2
   ACTIVE MENU + SEARCH + BUTTONS
========================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* ==============================
       ACTIVE SIDEBAR MENU
    ============================== */
    
    
    const menuItems = document.querySelectorAll(".menu li");
    
    
    const currentPage = window.location.pathname
    .split("/")
    .pop();
    
    
    
    menuItems.forEach(item => {
    
    
        const link = item.querySelector("a");
    
    
        if(link){
    
    
            const pageLink = link.getAttribute("href");
    
    
            if(pageLink === currentPage){
    
    
                item.classList.add("active");
    
    
            }
    
    
    
            item.addEventListener("click", function(){
    
    
                menuItems.forEach(menu => {
    
                    menu.classList.remove("active");
    
                });
    
    
                this.classList.add("active");
    
    
            });
    
    
    
        }
    
    
    
    });
    
    
    
    
    /* ==============================
       SEARCH BAR
    ============================== */
    
    
    const searchInput = document.getElementById("searchInput");
    
    
    if(searchInput){
    
    
    searchInput.addEventListener("keyup",function(){
    
    
        console.log(
            "Searching:",
            this.value
        );
    
    
    });
    
    
    }
    
    
    
    
    /* ==============================
       UPGRADE BUTTON
    ============================== */
    
    
    const upgradeBtn =
    document.querySelector(".upgrade-box button");
    
    
    
    if(upgradeBtn){
    
    
    upgradeBtn.addEventListener("click",function(){
    
    
        alert(
            "Upgrade plan feature coming soon!"
        );
    
    
    });
    
    
    }
    
    
    
    
    /* ==============================
       DOWNLOAD REPORT BUTTON
    ============================== */
    
    
    const downloadReport =
    document.getElementById("downloadReport");
    
    
    
    if(downloadReport){
    
    
    downloadReport.addEventListener("click",function(){
    
    
        alert(
            "Report downloaded successfully!"
        );
    
    
    });
    
    
    }
    
    
    
    
    /* ==============================
       ESC KEY CLOSE
    ============================== */
    
    
    document.addEventListener("keydown",function(e){
    
    
        if(e.key === "Escape"){
    
    
            const notificationDropdown =
            document.getElementById("notificationDropdown");
    
    
            const profileDropdown =
            document.querySelector(".profile-dropdown");
    
    
    
            if(notificationDropdown){
    
                notificationDropdown.classList.remove("show");
    
            }
    
    
    
            if(profileDropdown){
    
                profileDropdown.classList.remove("show");
    
            }
    
    
    
        }
    
    
    
    });
    
    
    
    });
    /* ==========================================
   VEXORIUM DASHBOARD SCRIPT
   PART 3
   CHARTS + ANIMATIONS + MOBILE FIX
========================================== */


document.addEventListener("DOMContentLoaded", () => {



    /* ==============================
       REVENUE CHART
    ============================== */
    
    
    const revenueCanvas =
    document.getElementById("revenueChart");
    
    
    
    if(revenueCanvas && typeof Chart !== "undefined"){
    
    
    new Chart(revenueCanvas, {
    
    
        type:"line",
    
    
        data:{
    
    
            labels:[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul"
            ],
    
    
            datasets:[{
    
    
                label:"Revenue",
    
    
                data:[
                    12000,
                    18000,
                    15000,
                    24000,
                    21000,
                    29000,
                    35000
                ],
    
    
                borderColor:"#00f5a0",
    
    
                backgroundColor:
                "rgba(0,245,160,.15)",
    
    
                fill:true,
    
    
                tension:.4,
    
    
                borderWidth:3
    
    
    
            }]
    
    
        },
    
    
        options:{
    
    
            responsive:true,
    
    
            maintainAspectRatio:false,
    
    
            plugins:{
    
    
                legend:{
    
    
                    labels:{
    
    
                        color:"#fff"
    
    
                    }
    
    
                }
    
    
            }
    
    
    
        }
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    /* ==============================
       TRAFFIC CHART
    ============================== */
    
    
    const trafficCanvas =
    document.getElementById("trafficChart");
    
    
    
    if(trafficCanvas && typeof Chart !== "undefined"){
    
    
    new Chart(trafficCanvas,{
    
    
    type:"doughnut",
    
    
    data:{
    
    
    labels:[
    
    "Organic",
    "Social",
    "Direct",
    "Referral"
    
    ],
    
    
    datasets:[{
    
    
    data:[45,25,20,10],
    
    
    backgroundColor:[
    
    "#00f5a0",
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6"
    
    ],
    
    
    borderWidth:0
    
    
    
    }]
    
    
    },
    
    
    options:{
    
    
    responsive:true,
    
    
    maintainAspectRatio:false,
    
    
    plugins:{
    
    
    legend:{
    
    
    position:"bottom",
    
    
    labels:{
    
    
    color:"#fff"
    
    
    }
    
    
    }
    
    
    }
    
    
    
    }
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    /* ==============================
       CARD ANIMATION
    ============================== */
    
    
    const cards =
    document.querySelectorAll(".stat-card");
    
    
    
    cards.forEach(card=>{
    
    
    card.addEventListener("mouseenter",()=>{
    
    
    card.style.transform =
    "translateY(-8px)";
    
    
    });
    
    
    
    card.addEventListener("mouseleave",()=>{
    
    
    card.style.transform =
    "translateY(0)";
    
    
    });
    
    
    
    });
    
    
    
    
    
    
    
    /* ==============================
       PAGE LOAD ANIMATION
    ============================== */
    
    
    const dashboard =
    document.querySelector(".dashboard");
    
    
    
    if(dashboard){
    
    
    dashboard.style.opacity="0";
    
    
    setTimeout(()=>{
    
    
    dashboard.style.transition=".6s ease";
    
    
    dashboard.style.opacity="1";
    
    
    },100);
    
    
    }
    
    
    
    
    
    
    
    /* ==============================
       MOBILE SIDEBAR AUTO CLOSE
    ============================== */
    
    
    window.addEventListener("resize",()=>{
    
    
    if(window.innerWidth > 900){
    
    
    const sidebar =
    document.querySelector(".sidebar");
    
    
    const overlay =
    document.getElementById("sidebarOverlay");
    
    
    
    if(sidebar){
    
    sidebar.classList.remove("show");
    
    }
    
    
    
    if(overlay){
    
    overlay.classList.remove("show");
    
    }
    
    
    
    }
    
    
    
    });
    
    
    
    });