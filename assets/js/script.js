function punyaAnak() {
    if(document.getElementById('anakYa').checked == true) {   
        document.getElementById('jumlahAnak').hidden = false;   
    } else {  
        document.getElementById('jumlahAnak').hidden = true;   
    }  
}

function punyaCucu() {
    if(document.getElementById('cucuYa').checked == true) {   
        document.getElementById('jumlahCucu').hidden = false;   
    } else {  
        document.getElementById('jumlahCucu').hidden = true;   
    }  
}

var ortuArray = new Array(
    "Bapak masih hidup, ibu sudah meninggal", 
    "Ibu masih hidup, bapak sudah meninggal", 
    "Bapak dan ibu sudah meninggal", 
    "Bapak dan ibu masih hidup"
    );
// Get dropdown element from DOM
var dropdown = document.getElementById("ortu");
// Loop through the array
for (var i = 0; i < ortuArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(ortuArray[i], ortuArray[i]);
}

document.getElementById('ortu').addEventListener('mouseup', ortu);

function ortu() {
    // console.log(ortuArray[2]);
    if(document.getElementById('ortu').value == ortuArray[2]) {
        document.getElementById('nenekIbu').hidden = false; 
    }
    else {
        document.getElementById('nenekIbu').hidden = true; 
    }
}

// Mbah Ayah
var mbahArray = new Array(
    "Kakek masih hidup, nenek sudah meninggal", 
    "Nenek masih hidup, kakek sudah meninggal", 
    "Kakek nenek sudah meninggal", 
    "Kakek dan nenek masih hidup"
    );
// Get dropdown element from DOM
var dropdown = document.getElementById("mbah");
// Loop through the array
for (var i = 0; i < mbahArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(mbahArray[i], mbahArray[i]);
}



// function anakYa() {
//     document.getElementById('jumlahAnak').hidden = false;
// }

// function anakTidak() {
//     document.getElementById('jumlahAnak').hidden = true;
// }

function cucuYa() {
    document.getElementById('jumlahCucu').hidden = false;
}

function cucuTidak() {
    document.getElementById('jumlahCucu').hidden = true;
}

// function anakYa() {
//     document.getElementById("alak").disabled = false;
//     document.getElementById("aper").disabled = false;
// }
// function anakTidak() {
//     document.getElementById("alak").disabled = true;
//     document.getElementById("aper").disabled = true;
// }

// $(".harta").keyup(function(){
//     var harta = parseInt($("#harta").val())
//     var hutang = parseInt($("#hutang").val())

//     var totHarta = harta - hutang;
//     $("#totHarta").attr("value", totHarta)
// });

// function anakYa() {
//     document.getElementById('jumlahAnak').hidden = false;
// }

// function anakTidak() {
//     document.getElementById('jumlahAnak').hidden = true;
// }

// function anak() {
//     if (document.getElementById('anak').value == 'Ya') {
//         document.getElementById('jumlahAnak').hidden = false;
//     }
//     else {
//         document.getElementById('jumlahAnak').hidden = true;
//     }
// }