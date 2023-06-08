function calculateTip(event){
    event.preventDefault(); // atraves desta funçao o browser nao iara mais recarregar a pag
    let bill = document.getElementById('bill').value;
    let ServiceQuality = document.getElementById('ServiceQuality').value;
    let numofpeople = document.getElementById('people').value;

    if(bill == "" | ServiceQuality == 0){
        alert('Por favor, prencha os campos !')
        return;
    }

    if(numofpeople == "" | numofpeople<=1){
        numofpeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById('each').style.display = "block";
    }

    

    let total = (bill * ServiceQuality) / numofpeople;
    total = total.toFixed(2)
    document.getElementById("tip").innerHTML = total;
    document.getElementById("totaltips").style.display = "block";
}

document.getElementById('totaltips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit',calculateTip);