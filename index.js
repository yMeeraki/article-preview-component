function iconsToggle(){
    let shareOptions = document.getElementById("share-options")
    if(shareOptions.style.display === 'none' || shareOptions.style.display === ''){
        shareOptions.style.display = 'flex'
    }
    else{
        shareOptions.style.display = 'none'
    }
}