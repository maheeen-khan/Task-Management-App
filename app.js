function mainPage(){
    
    // console.log(document.getElementById('board-name').value);

    var boardName = document.getElementById('board-name').value;

        // Save the board name to localStorage
        localStorage.setItem('boardName', boardName);


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
    console.log(lists);

    var newList = this.createElement('div');

    newList.setAttribute('class', 'list');
    newList.classList.add('col-lg-4', 'col-md-4', 'col-sm-12');

    newList.innerHTML = `<button class="btn add-list"> <span class="material-symbols-outlined pe-2"> add </span> Add list</button>`;


    // newList.innerHTML += `<br><input type="text" name="todo" id="todo" class="my-3 p-1" placeholder="Kickoff meeting">`;
    // newList.innerHTML += `<br><button class="btn"> <span class="material-symbols-outlined pe-2"> add </span> Add a card</button>`

    console.log(newList);

    lists.appendChild(newList);

});


function enter(event){
    if(event.keyCode === 13){
        mainPage();
    }
}

// second page
