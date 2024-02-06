document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("modalTrigger");

    // Get the textarea inside the modal
    var modalTextarea = document.getElementById("modalTextarea");

    // Get the copy and cancel buttons
    var copyBtn = document.getElementById("copyBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    // When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Copy the textarea value to clipboard and close the modal
    copyBtn.onclick = function () {
        modalTextarea.select();
        document.execCommand("copy");
        modal.style.display = "none";
    };

    // Close the modal when cancel button is clicked
    cancelBtn.onclick = function () {
        modal.style.display = "none";
    };
});
