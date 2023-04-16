API_KATEGORIBARANG = ("https://databarang.hadinizar.com/api/kategori")

// GET DATA KATEGORI START==========================
axios.get(API_KATEGORIBARANG)
.then((response) => {
    let dataKategori = response.data;
    console.log(dataKategori);

    let htmlKategori = "";

    dataKategori.forEach(kategori_barang => {
        htmlKategori +=`
        <tr class="tbody" >
            <td class="id-kategori">${kategori_barang.id_kategori}</td>
            <td class="kategori">${kategori_barang.kategori }</td>
            <td class="deskripsi">${kategori_barang.deskripsi }</td>
            <td class="btn-act-table"><a href="detailDataBarang.html"><button class="btn-view">Detail</button></a></td>
            <td class="btn-act-table"><button class="btn-edit">Edit</button></td>
            <td class="btn-act-table"><button onclick='deleteData(${kategori_barang.id_kategori})' class="btn-delete">Delete</button></td>
        </tr>`
    });
    document.querySelector(".isi-kategori").innerHTML = htmlKategori;
})
// GET DATA KATEGORI END==============================


// POST DATA KATEGORI START==========================
const form = document.getElementById('formKategori');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	const id_kategori = document.getElementById('inputIdKategori').value;
	const kategori = document.getElementById('inputKategori').value;
	const deskripsi = document.getElementById('inputDeskripsi').value;

	const data = { id_kategori, kategori, deskripsi };
	

    console.log(JSON.stringify(data));
	fetch(API_KATEGORIBARANG, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(result => {
		form.reset();
        location.reload();
	})
	.catch(error => {
		console.error(error);
		alert('Terjadi kesalahan pada server');
	});
});
// POST DATA KATEGORI END==================================

// DELETE DATA KATEGORI START===============================
const deleteData = (id) => {
    fetch(API_KATEGORIBARANG+`/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      location.reload()
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Data deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
  };
// DELETE DATA KATEGORI END==================================

//UPDATE DATA KATEGORI START=================================

//UPDATE DATA KATEGORI END===================================