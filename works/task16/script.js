const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
};



const nav = document.getElementById("nav_id");
const contentFrame = document.getElementById("content_frame");


function createNavigation() {
    for (const key in works) {
        const work = works[key];
        const button = document.createElement("button");
        button.innerText = work.title;
        button.style.display = "horizontal";  
        button.style.margin = "9px";   
        button.style.padding = "15px";
        button.style.cursor = "pointer";
        button.style.gap="20px";
        button.style.color="green";
        button.style.borderRadius="20px";
        button.style.backgroundColor="orange"
     
        button.addEventListener("click", function() {
            contentFrame.src = work.url;
        });

        nav.appendChild(button);
    }
}

// Initialize navigation on page load
createNavigation();
