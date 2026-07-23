/* =========================================
   VEXORIUM ANALYTICS PAGE JS
========================================= */


document.addEventListener("DOMContentLoaded",()=>{


    /* =========================
    ACTIVE SIDEBAR MENU
    ========================= */
    
    const currentPage = window.location.pathname.split("/").pop();
    
    document.querySelectorAll(".menu li a").forEach(link=>{
    
        if(link.getAttribute("href") === currentPage){
    
            link.parentElement.classList.add("active");
    
        }
    
    });
    
    
    
    
    
    /* =========================
    SEARCH BAR
    ========================= */
    
    const analyticsSearch = document.querySelector(
    ".search-container input"
    );
    
    
    if(analyticsSearch){
    
    analyticsSearch.addEventListener("keyup",()=>{
    
    let value = analyticsSearch.value.toLowerCase();
    
    
    document.querySelectorAll(
    ".panel, .stat-card, .activity p, table tbody tr"
    ).forEach(item=>{
    
    
    if(item.innerText.toLowerCase().includes(value)){
    
    item.style.display="";
    
    }
    else{
    
    item.style.display="none";
    
    }
    
    
    });
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    /* =========================
    EXPORT REPORT CSV
    ========================= */
    
    
    const exportBtn = document.getElementById(
        "exportAnalyticsReport"
        );
        
        
        if(exportBtn){
        
        exportBtn.addEventListener("click",()=>{
        
        
        let csvData =
        `Analytics Report
        
        Metric,Value
        Total Visitors,248K
        Conversion Rate,7.8%
        Bounce Rate,31%
        Average Session,8m 42s`;
        
        
        let blob = new Blob(
        [csvData],
        {
        type:"text/csv"
        }
        );
        
        
        let link=document.createElement("a");
        
        link.href=URL.createObjectURL(blob);
        
        link.download="Analytics_Report.csv";
        
        link.click();
        
        
        });
        
        
        }
/* =========================
CHARTS SECTION
========================= */


// WEBSITE TRAFFIC CHART

const websiteTraffic = document.getElementById(
    "websiteTrafficChart"
    );
    
    
    if(websiteTraffic){
    
    
    new Chart(websiteTraffic,{
    
    type:"line",
    
    
    data:{
    
    
    labels:[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ],
    
    
    
    datasets:[{
    
    label:"Visitors",
    
    data:[
    12000,
    15000,
    18000,
    22000,
    21000,
    26000,
    30000,
    32000,
    35000,
    38000,
    42000,
    48000
    ],
    
    
    borderWidth:3,
    
    fill:true
    
    
    }]
    
    },
    
    
    
    options:{
    
    
    responsive:true,
    
    
    plugins:{
    
    
    legend:{
    
    display:true
    
    }
    
    
    }
    
    
    
    }
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    // TRAFFIC SOURCE CHART
    
    
    const trafficSource = document.getElementById(
    "analyticsTrafficChart"
    );
    
    
    
    if(trafficSource){
    
    
    new Chart(trafficSource,{
    
    type:"doughnut",
    
    
    data:{
    
    
    labels:[
    
    "Organic Search",
    
    "Social Media",
    
    "Paid Ads",
    
    "Email"
    
    ],
    
    
    
    datasets:[{
    
    
    data:[
    
    42,
    
    21,
    
    26,
    
    11
    
    ],
    
    
    
    borderWidth:2
    
    
    }]
    
    },
    
    
    
    options:{
    
    
    responsive:true
    
    
    }
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    
    
    // ENGAGEMENT CHART
    
    
    const engagement = document.getElementById(
    "engagementChart"
    );
    
    
    
    if(engagement){
    
    
    new Chart(engagement,{
    
    
    type:"bar",
    
    
    
    data:{
    
    
    labels:[
    
    "Mon",
    
    "Tue",
    
    "Wed",
    
    "Thu",
    
    "Fri",
    
    "Sat",
    
    "Sun"
    
    ],
    
    
    
    datasets:[{
    
    
    label:"Users",
    
    
    data:[
    
    3200,
    
    4500,
    
    5200,
    
    6100,
    
    7200,
    
    6800,
    
    7900
    
    ],
    
    
    borderWidth:1
    
    
    }]
    
    
    },
    
    
    
    options:{
    
    
    responsive:true
    
    
    
    }
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    
    // WEEKLY PERFORMANCE CHART
    
    
    const weekly = document.getElementById(
    "weeklyPerformanceChart"
    );
    
    
    
    if(weekly){
    
    
    new Chart(weekly,{
    
    
    type:"radar",
    
    
    
    data:{
    
    
    labels:[
    
    "Traffic",
    
    "Sales",
    
    "Revenue",
    
    "Users",
    
    "Growth",
    
    "Retention"
    
    ],
    
    
    
    datasets:[{
    
    
    label:"Performance",
    
    
    data:[
    
    90,
    
    75,
    
    85,
    
    88,
    
    80,
    
    92
    
    ],
    
    
    borderWidth:2
    
    
    
    }]
    
    
    },
    
    
    
    options:{
    
    
    responsive:true
    
    
    }
    
    
    
    });
    
    
    }
/* =========================
NOTIFICATION DROPDOWN
========================= */


const notificationBtn = document.getElementById(
    "analyticsNotificationBtn"
    );
    
    const notificationBox = document.querySelector(
    ".notification-dropdown"
    );
    
    
    
    if(notificationBtn && notificationBox){
    
    
    notificationBtn.addEventListener("click",(e)=>{
    
    
    e.stopPropagation();
    
    
    notificationBox.classList.toggle(
    "show"
    );
    
    
    });
    
    
    }
    
    
    
    /* =========================
PROFILE DROPDOWN
========================= */


/* =========================
PROFILE DROPDOWN FIX
========================= */

document.addEventListener("DOMContentLoaded",()=>{


    const profile = document.querySelector(".profile");
    
    const dropdown = document.querySelector(".profile-dropdown");
    
    
    if(profile && dropdown){
    
    
    profile.addEventListener("click",(e)=>{
    
    e.stopPropagation();
    
    dropdown.style.display =
    dropdown.style.display === "block"
    ? "none"
    : "block";
    
    
    });
    
    
    document.addEventListener("click",()=>{
    
    dropdown.style.display="none";
    
    });
    
    
    }
    
    
    });
    
    /* =========================
    OUTSIDE CLICK CLOSE
    ========================= */
    
    
    document.addEventListener("click",()=>{
    
    
    if(notificationBox){
    
    notificationBox.classList.remove(
    "show"
    );
    
    }
    
    
    
    if(profileDropdown){
    
    profileDropdown.classList.remove(
    "show"
    );
    
    }
    
    
    
    });
    
    
    
    
    
    
    
    
    
    /* =========================
    UPGRADE BUTTON
    ========================= */
    
    
    const upgradeBtn = document.querySelector(
    ".upgrade-box button"
    );
    
    
    
    if(upgradeBtn){
    
    
    upgradeBtn.addEventListener("click",()=>{
    
    
    alert(
    "Upgrade Plan feature coming soon 🚀"
    );
    
    
    
    });
    
    
    }
    
    
    
    
    
    
    
    
    
    /* =========================
    TABLE HOVER EFFECT
    ========================= */
    
    
    document.querySelectorAll("table tbody tr")
    .forEach(row=>{
    
    
    row.addEventListener("click",()=>{
    
    
    row.classList.toggle(
    "selected-row"
    );
    
    
    });
    
    
    });
    
    
    
    
    
    
    
    /* =========================
    LOGOUT BUTTON
    ========================= */
    
    
    const logoutBtn = document.querySelector(
    ".profile-dropdown a:last-child"
    );
    
    
    
    if(logoutBtn){
    
    
    logoutBtn.addEventListener("click",(e)=>{
    
    
    e.preventDefault();
    
    
    
    alert(
    "You have been logged out!"
    );
    
    
    
    });
    
    
    
    }
    
    
    
    });        
