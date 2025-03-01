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




