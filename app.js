function getGempa() {
    fetch('https://cuaca-gempa-rest-api.vercel.app/quake')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        const tanggal = res.data.tanggal;
        const jam = res.data.jam;
        const gambar = res.data.shakemap;
        const koordinat = res.data.coordinates;

        document.getElementById('tanggal').innerHTML = tanggal;
        document.getElementById('jam').innerHTML = jam;
        document.getElementById('koordinat').innerHTML = koordinat;
        document.getElementById('gambar').setAttribute('src', gambar);
    })
}

getGempa();