
var missionInput = document.getElementById("missionInput");
var addBtn = document.getElementById("addBtn");
var colourBtn = document.getElementById("colourBtn");
var missionList = document.getElementById("missionList");
var totalCount = document.getElementById("totalCount");
var completedCount = document.getElementById("completedCount");
var pendingCount = document.getElementById("pendingCount");

var colours = ["lightblue", "lightgreen", "lavender", "peachpuff"];
var colourIndex = 0;

function getCompletedCount() {
    var count = 0;
    for (var i = 0; i < missionList.children.length; i++) {
        if (missionList.children[i].classList.contains("completed")) {
            count = count + 1;
        }
    }
    return count;
}

function updateCounter() {
    var total = missionList.children.length; 
    var completed = getCompletedCount();
    var pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

function addMission() {
    var text = missionInput.value.trim();

    
    if (text === "") {
        alert("Please enter a mission!");
        return;
    }

    var item = document.createElement("div");
    item.className = "mission";

    var missionText = document.createElement("span");
    missionText.textContent = text;
    missionText.onclick = function () {
        item.classList.toggle("completed");
        updateCounter();
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        item.remove();
        updateCounter();
    };

    item.appendChild(missionText);
    item.appendChild(deleteBtn);
    missionList.appendChild(item);

    missionInput.value = "";
    updateCounter();
}

function changeColour() {
    document.body.style.backgroundColor = colours[colourIndex];
    colourIndex = colourIndex + 1;

    if (colourIndex === colours.length) {
        colourIndex = 0;
    }
}

addBtn.addEventListener("click", addMission);
colourBtn.addEventListener("click", changeColour);

updateCounter();
