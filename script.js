function changeimg() {
    const img = document.getElementById('toggle--on').src;
    if (img.indexOf('toggle-on.png')!=-1) {
        document.getElementById('toggle--on').src = 'toggle-off.png';
    } else {
        document.getElementById('toggle--on').src = 'toggle-on.png';
    }
}

function changeback() {
    const img = document.getElementById('toggle--off').src;
    if (img.indexOf('toggle-off.png')!=-1) {
        document.getElementById('toggle--off').src = 'toggle-on.png';
    } else {
        document.getElementById('toggle--off').src = 'toggle-off.png';
    }
}

function changebac() {
    const img = document.getElementById('toggle--of').src;
    if (img.indexOf('toggle-off.png')!=-1) {
        document.getElementById('toggle--of').src = 'toggle-on.png';
    } else {
        document.getElementById('toggle--of').src = 'toggle-off.png';
    }
}

function changebak() {
    const img = document.getElementById('toggle--ff').src;
    if (img.indexOf('toggle-off.png')!=-1) {
        document.getElementById('toggle--ff').src = 'toggle-on.PNG';
    } else {
        document.getElementById('toggle--ff').src = 'toggle-off.PNG';
    }
}

function changeba() {
    const img = document.getElementById('toggle--').src;
    if (img.indexOf('toggle-off.png')!=-1) {
        document.getElementById('toggle--').src = 'toggle-on.png';
    } else {
        document.getElementById('toggle--').src = 'toggle-off.png';
    }
}


