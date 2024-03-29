API_DATABARANG = "https://databarang.hadinizar.com/api/data-barang";

// GET DATABARANG START===============================
axios.get(API_DATABARANG)
.then((response) => {
    let data = response.data;
    console.log(data);

    let htmlBarang = "";

    data.forEach(data_barang => {
        htmlBarang +=`
        <tr class="tbody" >
            <td id="id">${data_barang.id_barang}</td>
            <td id="id_kategori">${data_barang.id_kategori}</td>
            <td id="nama">${data_barang.nama_barang}</td>
            <td id="foto"><img src="${data_barang.foto_barang}" alt="" class="foto-barang"></td>
            <td id="deskripsi">${data_barang.deskripsi}</td>
            <td id="jumlah">${data_barang.jumlah}</td>
            <td id="harga">${data_barang.harga_barang}</td>
            <td id="createdAt">${data_barang.created_at}</td>
            <td id="updatedAt">${data_barang.updated_at}</td>
            <td class="btn-act-table"><a href="detailDataBarang.html"><button class="btn-view">Detail</button></a></td>
            <td class="btn-act-table"><button onclick='updateBarang(${data_barang.id_barang})' class="btn-edit">Edit</button></td>
            <td class="btn-act-table"><button onclick='deleteData(${data_barang.id_barang})' id="btn-delete">Delete</button></td>
        </tr>`
    });
    document.querySelector(".isi-data-barang").innerHTML = htmlBarang;
});
// GET DATABARANG END========================================

//CALL FORM TAMBAH BARANG START==============================
function tambahBarang(){
  let show = document.getElementById("formData");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}
//CALL FORM TAMBAH BARANG END==============================

// POST DATA BARANG START====================================
const form = document.getElementById('formData');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	const id_barang = document.getElementById('inputIdBarang').value;
	const id_kategori = document.getElementById('inputIdKategori').value;
	const nama_barang = document.getElementById('inputNamaBarang').value;
	const foto_barang = document.getElementById('inputFotoBarang').value;
	const deskripsi = document.getElementById('inputDeskripsi').value;
	const jumlah_barang = document.getElementById('inputJumlahBarang').value;
	const harga_barang = document.getElementById('hargaBarang').value;
	const created_at = document.querySelector('#CreatedAt').value;
	const updated_at = document.querySelector('#UpdatedAt').value;
	const data = { id_barang, id_kategori, nama_barang, foto_barang, deskripsi, jumlah_barang, harga_barang, created_at, updated_at };
	

    console.log(JSON.stringify(data));
	fetch(API_DATABARANG, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(result => {
		location.reload();
		form.reset();
	})
	.catch(error => {
		console.error(error);
		alert('Terjadi kesalahan pada server');
	});
});

// POST DATA BARANG END=======================================

// DELETE DATA BARANG START===================================

const deleteData = (id) => {
    fetch(API_DATABARANG+`/${id}`, {
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

// DELETE DATA BARANG END======================================

// UPDATE DATA BARANG START===================================

//CALL FORM TAMBAH BARANG START==============================
// let show = document.getElementById("formUpdateData");
// if (show.style.display === "none") {
//   show.style.display = "block";
// } else {
//   show.style.display = "none";
// }

//CALL FORM TAMBAH BARANG END==============================

let updateData = (event) => {
	event.preventDefault();

	const id_barang = document.getElementById('updateIdBarang').value;
	const id_kategori = document.getElementById('updateIdKategori').value;
	const nama_barang = document.getElementById('updateNamaBarang').value;
	const foto_barang = document.getElementById('updateFotoBarang').value;
	const deskripsi = document.getElementById('updateDeskripsi').value;
	const jumlah_barang = document.getElementById('updateJumlahBarang').value;
	const harga_barang = document.getElementById('updateHargaBarang').value;
	const created_at = document.querySelector('#updateCreatedAt').value;
	const updated_at = document.querySelector('#UpdatedAt').value;
	const data = { id_barang, id_kategori, nama_barang, foto_barang, deskripsi, jumlah_barang, harga_barang, created_at, updated_at, id_barang };
	
    fetch(API_DATABARANG+`/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Data Update Successfully!');
      } else {
        console.error('Failed to Update Data')
      }
    })
    .catch(error =>{
      console.error('Failed To Update Data', error);
    })
};

const formUpdate = document.getElementById('formUpdateData');
formUpdate.addEventListener('submit', updateData);

// UPDATE DATA BARANG END========================================


