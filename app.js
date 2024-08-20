function mainPage(){
    var boardName = document.getElementById('board-name').value;

    // Save the board name to localStorage
    localStorage.setItem('boardName', boardName);

    // Clear the input value
    document.getElementById('board-name').value = '';

    // Navigate to the second page
    window.location.href = './main.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the board name from localStorage
    var boardName = localStorage.getItem('boardName');

    // If a board name exists, display it in the desired element
    if (boardName) {
        document.getElementById('sec-nav').innerHTML += `<h5> ${boardName}</h5>`;
    }

    var lists = document.getElementById('lists');

    var newList = document.createElement('div');
    newList.setAttribute('class', 'list');
    newList.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');

    // Create the "Add list" button
    const addListButton = document.createElement('button');
    addListButton.className = 'btn add-list';
    addListButton.innerHTML = '<span class="material-symbols-outlined pe-2"> add </span> Add list';
    
    // Set up the click event to show the input field
    addListButton.onclick = function() {
        enterListName();
    };
    
    // Append the "Add list" button to the new list
    newList.appendChild(addListButton);

    // Define the function to show the input field
    function enterListName() {
        // Create and show the input field for the list name
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'todo';
        inputField.id = 'todo';
        inputField.className = 'my-3 p-1';
        inputField.placeholder = 'Enter list name';

        // Add the input field after the "Add list" button
        newList.appendChild(inputField);

        // Disable the "Add list" button after it's clicked to prevent multiple inputs
        addListButton.disabled = true;
    }

    // Append the new list to the lists container
    lists.appendChild(newList);
});

function enter(event){
    if(event.keyCode === 13){
        mainPage();
    }
}
