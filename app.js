function mainPage() {
    var boardName = document.getElementById('board-name').value;

    // Save the board name to localStorage
    localStorage.setItem('boardName', boardName);

    // Clear the input value
    document.getElementById('board-name').value = '';

    // Navigate to the second page
    window.location.href = './main.html';
}
var addListButton;

document.addEventListener('DOMContentLoaded', function () {
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
    addListButton = document.createElement('button');
    addListButton.className = 'btn add-list';
    addListButton.innerHTML = '<span class="material-symbols-outlined pe-2"> add </span> Add list';

    // Append the "Add list" button to the new list
    newList.appendChild(addListButton);

    // Create the input field container but hide it initially
    const inputFieldContainer = document.createElement('div');
    inputFieldContainer.style.display = 'none'; // Initially hidden
    inputFieldContainer.innerHTML = `
        <span class="list-first-line">
            <b>todo</b>
            <span class="material-symbols-outlined list-first-line bg-light" onclick="closeList()"> close </span>
        </span>
        <br>
        <input type="text" name="todo" id="todo" class="my-1 p-1" placeholder="Enter list name">
        <br>
        <button id="add-list" class="btn btn-outline-danger my-3 p-1">Add List</button>
    `;

    // Append the input field container to the new list
    newList.appendChild(inputFieldContainer);

    // Set up the click event to show the input field and hide the "Add list" button
    addListButton.onclick = function () {
        addListButton.style.display = 'none'; 
        inputFieldContainer.style.display = 'block'; 
    };

    // Define the close function
    window.closeList = function () {
        inputFieldContainer.style.display = 'none'; // Hide the input field and other elements
        addListButton.style.display = 'inline-block'; // Show the "Add list" button again
    };

    // Handle adding a new list when "Add List" button is clicked
    inputFieldContainer.querySelector('#add-list').onclick = function () {
        console.log(document.getElementById('todo').value);
    };

    // Append the new list to the lists container
    lists.appendChild(newList);
});

function enter(event) {
    if (event.keyCode === 13) {
        mainPage();
    }
}
