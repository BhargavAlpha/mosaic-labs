// script.js

document.addEventListener("DOMContentLoaded", function() {
    const executeBtn = document.getElementById("btn");
    const contentDiv = document.getElementById("content");
    const tabs = document.querySelectorAll(".tab");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function() {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
      });
    });
    
  
    executeBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        console.log("Button clicked!");
        const executedQueryDiv = document.createElement("div");
        executedQueryDiv.className = "lorem-content";
        executedQueryDiv.innerHTML = `Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur<i class="fa fa-spinner fa-spin tick-icon" style="color: #F5461B;"></i>`;

        contentDiv.insertBefore(executedQueryDiv, contentDiv.firstChild);
        
        setTimeout(function() {
            const tickIcon = executedQueryDiv.querySelector(".tick-icon");
            if (tickIcon) {
                tickIcon.className = "fa fa-check-circle tick-icon";
                tickIcon.style.color = "rgb(100, 212, 100)";
                // executedQueryDiv.innerHTML = `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur<i class="fa fa-check-circle tick-icon" style="color: rgb(100, 212, 100);"></i>`;
            }
        }, 10000);
    });
      
    });
  // script.js


  