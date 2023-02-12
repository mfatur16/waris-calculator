// Hitung Harta
document.getElementById('harta').addEventListener('keyup', getFormat);
document.getElementById('hutang').addEventListener('keyup', getFormat);
document.getElementById('totHarta').addEventListener('change', getFormat);

function getFormat() {
    var totHarta = document.getElementById('harta').value.replace('Rp', '').replace(/(\..*?)/g, '') - document.getElementById('hutang').value.replace('Rp', '').replace(/(\..*?)/g, '');
    if (totHarta < 0) {
        totHarta = 0;
    }

    document.getElementById('totHarta').value = totHarta;

    $('.format').priceFormat({
        prefix: 'Rp ',
        limit: 13,
        centsLimit: 0,
        thousandsSeparator: '.'
    });
}


// Visibilitas Keluarga
function nikahBelum() {
    if(document.getElementById('sudahNikah').checked == true) {   
        document.getElementById('kelInti').hidden = false;   
    } else {  
        document.getElementById('kelInti').hidden = true; 
        document.getElementById('anakYa').removeAttribute('required');
        document.getElementById('cucuYa').removeAttribute('checked');
        document.getElementById('cucuYa').removeAttribute('required');
    } 
}


// Visibilitas Anak
function punyaAnak() {
    if(document.getElementById('anakYa').checked == true) {   
        document.getElementById('anakAda').hidden = false;  
    } else {  
        document.getElementById('anakAda').hidden = true; 
        document.getElementById('cucuYa').removeAttribute('required');
    }  
}


// Visibilitas Cucu
function punyaCucu() {
    if(document.getElementById('cucuYa').checked == true) {   
        document.getElementById('jumlahCucu').hidden = false;   
    } else {  
        document.getElementById('jumlahCucu').hidden = true;   
    }  
}


// Orang Tua
var ortuArray = new Array(
    "Bapak masih hidup, ibu sudah meninggal", 
    "Ibu masih hidup, bapak sudah meninggal", 
    "Bapak dan ibu sudah meninggal", 
    "Bapak dan ibu masih hidup"
    );

var dropdown = document.getElementById('ortu');

for (var i = 0; i < ortuArray.length; ++i) {
    
    dropdown[dropdown.length] = new Option(ortuArray[i], ortuArray[i]);
}

document.getElementById('ortu').addEventListener('mouseup', ortu);

function ortu() {
    if(document.getElementById('ortu').value == ortuArray[0] || document.getElementById('ortu').value == ortuArray[2]) {
        document.getElementById('nenekIbu').hidden = false; 
        // console.log(ortuArray[2]);
    }
    else {
        document.getElementById('nenekIbu').hidden = true; 
        document.getElementById('nenekYa').removeAttribute('required');
    }
}

document.getElementById('ortu').addEventListener('mousedown', ortuOpt);

function ortuOpt() {
    document.getElementById('ortuOpt').hidden = true;
}


// Mbah Ayah
var mbahArray = new Array(
    "Kakek masih hidup, nenek sudah meninggal", 
    "Nenek masih hidup, kakek sudah meninggal", 
    "Kakek nenek sudah meninggal", 
    "Kakek dan nenek masih hidup"
    );

var dropdown = document.getElementById('mbah');

for (var i = 0; i < mbahArray.length; ++i) {
    
    dropdown[dropdown.length] = new Option(mbahArray[i], mbahArray[i]);
}

document.getElementById('mbah').addEventListener('mousedown', mbahOpt);

function mbahOpt() {
    document.getElementById('mbahOpt').hidden = true;
}