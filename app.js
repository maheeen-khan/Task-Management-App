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

    // Set up the click event to show the input field
    addListButton.onclick = function () {
        enterListName();
    };

    // Append the "Add list" button to the new list
    newList.appendChild(addListButton);

    // Define the function to show the input field
    function enterListName() {
        var temp = '<span class="list-first-line"><b>todo</b><span class="material-symbols-outlined list-first-line bg-light" onclick="closeList(this)"> close </span></span>';

        newList.innerHTML = temp + '<br>';
        
        // Create and show the input field for the list name
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'todo';
        inputField.id = 'todo';
        inputField.className = 'my-1 p-1';
        inputField.placeholder = 'Kickoff meeting';

        // Add the input field after the "Add list" button
        newList.appendChild(inputField);

        // Hide the "Add list" button after it's clicked
        addListButton.style.display = 'none';

        // Create and append the "Add List" button
        const add = document.createElement('button');
        add.innerText = 'Add List';
        add.id = 'add-list';
        add.className = 'btn btn-outline-danger my-3 p-1';
        newList.appendChild(add);

        add.onclick = function () {
            addList();
        };

        function addList() {
            console.log(document.getElementById('todo').value);
        }
    }

    // Append the new list to the lists container
    lists.appendChild(newList);
});

function closeList(element) {

    
    const parentList = element.closest('.list');
    parentList.innerHTML = ''; // Clear the list content

    // Recreate the "Add list" button and append it back
    const addListButton = document.createElement('button');
    addListButton.className = 'btn add-list';
    addListButton.innerHTML = '<span class="material-symbols-outlined pe-2"> add </span> Add list';

    addListButton.onclick = function () {
        enterListName();
    };

    parentList.appendChild(addListButton);

    console.log('List closed');
}


function enter(event) {
    if (event.keyCode === 13) {
        mainPage();
    }
}
