/**
 * Title: devops.js
 * Author: Walter McCue
 * Date: 02/26/23
 * Description: Scripting for DevOps Presentations
*/

// On Page Load, no video divs will be displayed

function noDisplay() {
    document.getElementById('week-1').style.display = 'none';
    document.getElementById('week-2').style.display = 'none';
    document.getElementById('week-3').style.display = 'none';
    document.getElementById('week-4').style.display = 'none';
    document.getElementById('week-5').style.display = 'none';
    document.getElementById('week-6').style.display = 'none';
    document.getElementById('week-7').style.display = 'none';
    document.getElementById('week-8').style.display = 'none';
    document.getElementById('week-9').style.display = 'none';
}

// Upon user selection, the appropriate week's video will be displayed and will begin playing

function presentationSelect() {
    const choice = document.getElementById('presentation').value;
    if (choice == 'week-1') {
        noDisplay()
        document.getElementById('week-1').style.display = 'block';
        document.getElementById('video-1').play();
    }
    else if (choice == 'week-2') {
        noDisplay()
        document.getElementById('week-2').style.display = 'block';
        document.getElementById('video-2').play();
    }
    else if (choice == 'week-3') {
        noDisplay()
        document.getElementById('week-3').style.display = 'block';
        document.getElementById('video-3').play();
    }
    else if (choice == 'week-4') {
        noDisplay()
        document.getElementById('week-4').style.display = 'block';
        document.getElementById('video-4').play();
    }
    else if (choice == 'week-5') {
        noDisplay()
        document.getElementById('week-5').style.display = 'block';
        document.getElementById('video-5').play();
    }
    else if (choice == 'week-6') {
        noDisplay()
        document.getElementById('week-6').style.display = 'block';
        document.getElementById('video-6').play();
    }
    else if (choice == 'week-7') {
        noDisplay()
        document.getElementById('week-7').style.display = 'block';
        document.getElementById('video-7').play();
    }
    else if (choice == 'week-8') {
        noDisplay()
        document.getElementById('week-8').style.display = 'block';
        document.getElementById('video-8').play();
    }
    else if (choice == 'week-9') {
        noDisplay()
        document.getElementById('week-9').style.display = 'block';
        document.getElementById('video-9').play();
    }
    else {
        noDisplay()
        alert("Please make a valid selection.");
    }
}