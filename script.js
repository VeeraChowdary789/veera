const works = {
    "task1": {"title": "Project 1", "url": "works/task1/index.html"},
    "task2": {"title": "Project 2", "url": "works/task2/index.html"},
    "task3": {"title": "Project 3", "url": "works/task3/hoover.html"},
    "task4": {"title": "Project 4", "url": "works/task4/trigger.html"},
    "task5": {"title": "Project 5", "url": "works/task5/calculations.html"},
    "task6": {"title": "Project 6", "url": "works/task6/calculationgithub.html"},
    "task7": {"title": "Project 7", "url": "works/task7/assign.html"},
    "task8": {"title": "Project 8", "url": "works/task8/string.html"},
    "task9": {"title": "Project 9", "url": "works/task9/score.html"},
    "task10": {"title": "Project 10", "url": "works/task10/pvc.html"},
    "task11": {"title": "Project 11", "url": "works/task11/series.html"},
    "task12": {"title": "Project 12", "url": "works/task12/today.html"},
    "task13": {"title": "Project 13", "url": "works/task13/student.html"},
    "task14": {"title": "Project 14", "url": "works/task14/random.html"},
    "task15": {"title": "Project 15", "url": "works/task15/bulb_q.html"},
    "task16": {"title": "Project 16", "url": "works/task16/color.html"}
};

const nav = document.getElementById("nav_id");
const contentFrame = document.getElementById("content_frame");

function createNavigation() {
    for (const key in works) {
        const work = works[key];
        const button = document.createElement("button");
        button.innerText = work.title;
        button.addEventListener("click", function() {
            contentFrame.src = work.url;
        });
        nav.appendChild(button);
    }

    
    if (Object.keys(works).length > 0) {
        const firstProject = works["task1"];
        contentFrame.src = firstProject.url;
    }
}

createNavigation();
