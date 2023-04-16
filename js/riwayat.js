
axios.get("http://localhost:3004/api/riwayat/")
.then((response) => {
    let data = response.data;
    console.log(data);

    let htmlRiwayat = "";

    data.forEach(history_barang => {
        htmlRiwayat +=`
        <tr class="tbody" >
            <td class="id">${history_barang.id_barang}</td>
            <td class="foto">${history_barang.id_transaksi}</td>
            <td class="nama">${history_barang.nama_barang}</td>
            <td class="deskripsi">${history_barang.tgl_masuk}</td>
            <td class="jumlah">${history_barang.tgl_keluar}</td>
            <td class="btn-act-table"><a href="detailDataBarang.html"><button class="btn-view">Detail</button></a></td>
            <td class="btn-act-table"><button class="btn-edit">Edit</button></td>
            <td class="btn-act-table"><button class="btn-delete">Delete</button></td>
        </tr>`
    });
    document.querySelector(".isi-riwayat").innerHTML = htmlRiwayat;
})



