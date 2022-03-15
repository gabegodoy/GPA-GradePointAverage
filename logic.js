function arts() {
    var arts1 = parseInt(document.getElementById('arts1').value);
    var arts2 = parseInt(document.getElementById('arts2').value);
    var arts3 = parseInt(document.getElementById('arts3').value);
    var artsNumbers = [];
        artsNumbers += arts1 + arts2 + arts3
    var artsAverage = document.getElementById('arts-result'); 

    if (artsNumbers > 0){
        artsAverage.innerHTML = (artsNumbers/3).toFixed(2);
    }
    total()

}


    function biology() {
    var bio1 = parseInt(document.getElementById('biology1').value); 
    var bio2 = parseInt(document.getElementById('biology2').value);
    var bio3 = parseInt(document.getElementById('biology3').value);
    var biologyAverage = document.getElementById('biology-result');
    var bioNumbers = [];
        
    bioNumbers += bio1 + bio2 + bio3;

    if (bioNumbers > 0){
        biologyAverage.innerHTML = (bioNumbers/3).toFixed(2);
    }        
    total()
    
}


function english() {
    var en1 = parseInt(document.getElementById('english1').value); 
    var en2 = parseInt(document.getElementById('english2').value);
    var en3 = parseInt(document.getElementById('english3').value);
    var englishAverage = document.getElementById('english-result');
    var englishNumbers = [];
        
    englishNumbers += en1 + en2 + en3;

    if (englishNumbers > 0){
        englishAverage.innerHTML = (englishNumbers/3).toFixed(2);
    }        
    total()
        
}

function history() {
    var hist1 = parseInt(document.getElementById('history1').value); 
    var hist2 = parseInt(document.getElementById('history2').value);
    var hist3 = parseInt(document.getElementById('history3').value);
    var historyAverage = document.getElementById('history-result');
    var historyNumbers = [];
        
    historyNumbers += hist1 + hist2 + hist3;

    if (historyNumbers > 0){
        historyAverage.innerHTML = (historyNumbers/3).toFixed(2);
    }
    total()
    
}

function total() {
    var arts1 = parseInt(document.getElementById('arts1').value);
    var arts2 = parseInt(document.getElementById('arts2').value);
    var arts3 = parseInt(document.getElementById('arts3').value);
    var bio1 = parseInt(document.getElementById('biology1').value); 
    var bio2 = parseInt(document.getElementById('biology2').value);
    var bio3 = parseInt(document.getElementById('biology3').value);
    var en1 = parseInt(document.getElementById('english1').value); 
    var en2 = parseInt(document.getElementById('english2').value);
    var en3 = parseInt(document.getElementById('english3').value);
    var hist1 = parseInt(document.getElementById('history1').value); 
    var hist2 = parseInt(document.getElementById('history2').value);
    var hist3 = parseInt(document.getElementById('history3').value);

    var totalNumbers = [];

    totalNumbers += arts1 + arts2 + arts3 + bio1 + bio2 + bio3 + en1 + en2 + en3 + hist1 + hist2 + hist3

    var resultsTotal = document.getElementById('results-total');
    var resultsAverage = document.getElementById('results-average')

    if (totalNumbers > 0){
        resultsTotal.innerHTML = "Total Grade Points: " + totalNumbers   
        resultsAverage.innerHTML = "Grade Point Average: " + totalNumbers/12            
    }

}

