document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Challenge Completed"); 
            this.disabled = true;
            this.classList.add("opacity-50", "cursor-not-allowed"); 
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.completed-btn').forEach(button => {
        button.addEventListener('click', function() {
            let completedTasks = document.getElementById('completed-tasks');
            let taskAssigned = document.getElementById('task-assigned');

            let completedCount = parseInt(completedTasks.innerText);
            let assignedCount = parseInt(taskAssigned.innerText);

            if (assignedCount > 0) {
                completedTasks.innerText = completedCount + 1;
                taskAssigned.innerText = assignedCount - 1;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const completedButtons = document.querySelectorAll(".completed-btn");
    const activityLog = document.querySelector(".activity-log"); // Add a div for the log

    completedButtons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Task marked as completed!");

           
            const logEntry = document.createElement("p");
            logEntry.textContent = `Task "${this.parentElement.parentElement.querySelector("h1").textContent}" marked as completed.`;
            logEntry.classList.add("text-gray-700", "text-sm", "border-b", "py-2");

            
            activityLog.appendChild(logEntry);
        });
    });
});







