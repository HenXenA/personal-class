// JavaScript untuk menambahkan interaksi pada tombol-tombol
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', function() {
        // Efek atau animasi lain dapat ditambahkan di sini
        console.log('Mouseover pada tombol:', this.innerText);
    });

    button.addEventListener('click', function(e) {
        // Menangani klik pada tombol, bisa menambahkan logika lebih lanjut
        console.log('Tombol diklik:', this.href);
    });
});
