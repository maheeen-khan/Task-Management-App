function mainPage(){
    // console.log('hi');
    console.log(document.getElementById('board-name').value);
    var boardName = document.getElementById('board-name').value;
}


function enter(event){
    if(event.keyCode === 13){
        mainPage();
    }
}