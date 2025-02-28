document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Challenge Completed!"); 
            disabled = true;
            classList.add("opacity-50", "cursor-not-allowed"); 
        });
    });
});




