const input = document.getElementById('text-input');
const btn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qrcode');
let qr;

function generateQR(text) {
    qrContainer.innerHTML = '';
    if (!text.trim()) return;

    text = "https://cp.nor.charge.wattifev.com/public/cs/qr?evseid=NO*WAT*E" + text;

    qr = new QRCode(qrContainer, {
        text: text,
        width: 180,
        height: 180,
        colorDark: "#2d3a4b",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

btn.addEventListener('click', () => {
    var s = input.value;
    var num = parseInt(s, 10);
    if (isNaN(num) || num < 0 || num > 150) {
        alert("Legg inn en verdi mellom 0 og 150.");
        return;
    }

    let myValue = "W0" + (47676000 + num).toString();
    generateQR(myValue);
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        generateQR(input.value);
    }
});
