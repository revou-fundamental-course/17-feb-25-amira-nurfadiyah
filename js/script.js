// Ini Javascript External 

function validateForm() {
    let nameInput = document.getElementById('name-input');
    console.log(nameInput.value);

    // Kondisi Validasinya
    if(nameInput.value == '') { 
        alert('Nama tidak boleh kosong');
    } else {
        alert('Welcome ' + nameInput.value);
    }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

// Auto-slide every 3 sec
setInterval(nextBanner, 3000)

function nextBanner () {
    // Increment IndexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    // Reset Condition 
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Hide all banner
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = "none"
    }

    //Show the current banner
    banner[indexBanner].style.display = "block"
}