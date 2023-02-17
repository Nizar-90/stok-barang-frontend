
axios.get("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang")
.then((response) => {
    let data = response.data;
    console.log(data);

    let htmlBarang = "";

    data.forEach(data_barang => {
        htmlBarang +=`
        <tr class="tbody" >
            <td class="id">${data_barang.id_barang}</td>
            <td class="nama">${data_barang.nama_barang}</td>
            <td class="foto">${data_barang.foto_barang}</td>
            <td class="deskripsi">${data_barang.deskripsi}</td>
            <td class="jumlah">${data_barang.jumlah_barang}</td>
            <td class="harga">${data_barang.harga_barang}</td>
            <td class="btn-act-table"><a href="detailDataBarang.html"><button class="btn-view">Detail</button></a></td>
            <td class="btn-act-table"><button class="btn-edit">Edit</button></td>
            <td class="btn-act-table"><button class="btn-delete">Delete</button></td>
        </tr>`
    });
    document.querySelector(".isi-data-barang").innerHTML = htmlBarang;
})

axios.get("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/kategori")
.then((response) => {
    let dataKategori = response.dataKategori;
    console.log(dataKategori);

    let htmlKategori = "";

    data.forEach(kategori_barang => {
        htmlKategori +=`
        <tr class="tbody" >
            <td class="id-kategori">${kategori_barang.id_kategori}</td>
            <td class="kategori">${kategori_barang.kategori }</td>
            <td class="deskripsi">${kategori_barang.deskripsi }</td>
        </tr>`
    });
    document.querySelector(".isi-kategori").innerHTML = htmlKategori;
})

