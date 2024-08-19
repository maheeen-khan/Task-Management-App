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
});


function enter(event){
    if(event.keyCode === 13){
        mainPage();
    }
}