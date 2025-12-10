// Memberi tahu mahasiswa bahwa script berhasil di-load
alert("Selamat datang di Website Profil UMKM Anda!");
// Menampilkan informasi variabel di console
const namaUMKM = "Kopi Nusantara";
console.log("Nama UMKM:", namaUMKM);
// Demonstrasi variabel dan operator
let produk = 3;
console.log("Jumlah produk saat ini:", produk);
produk += 2;
console.log("Setelah penambahan:", produk);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const pesan = document.getElementById("pesan");
  const errorMsg = document.getElementById("errorMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload halaman
    if (nama.value === "" || email.value === "" || pesan.value === "") {
      errorMsg.textContent = "Semua field harus diisi.";
    } else {
      errorMsg.textContent = "";
      alert("Pesan berhasil dikirim!");
      form.reset();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const produkInput = document.getElementById("produkInput");
  const tambahBtn = document.getElementById("tambahBtn");
  const daftarProduk = document.getElementById("daftarProduk");
  const previewProduk = document.getElementById("previewProduk");
  const temaSelect = document.getElementById("temaSelect");
  // Event 1: Tambah Produk ke daftar (click)
  tambahBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const namaProduk = produkInput.value.trim();
    if (namaProduk !== "") {
      const li = document.createElement("li");
      li.textContent = namaProduk;

      // Tambahkan Event Hover (mouseover & mouseout)
      li.addEventListener(
        "mouseover",
        () => (li.style.backgroundColor = "#e0e0e0")
      );
      li.addEventListener("mouseout", () => (li.style.backgroundColor = ""));
      // Tambahkan Event Hapus (dblclick)
      li.addEventListener("dblclick", () => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
          li.remove();
        }
      });
      daftarProduk.appendChild(li);
      produkInput.value = "";
      previewProduk.textContent = "";
    }
  });
  // Event 2: Preview input secara langsung (keyup)
  produkInput.addEventListener("keyup", function () {
    previewProduk.textContent = produkInput.value;
  });
  // Event 3: Ubah tema background (change)
  temaSelect.addEventListener("change", function () {
    document.body.style.backgroundColor = temaSelect.value;
  });
});

const form = document.getElementById("formKontak");

form.addEventListener("submit", function (event) {
  let valid = true;

  // Nama harus diisi
  const nama = document.getElementById("nama");
  const errorNama = document.getElementById("errorNama");
  if (nama.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
    valid = false;
  } else {
    errorNama.textContent = "";
  }

  // Email harus valid dan domain harus @gmail.com
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const emailPattern = /^[^ ]+@gmail\.com$/i;
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = "Email harus @gmail.com dan format benar.";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  // Kategori harus dipilih
  const kategori = document.getElementById("kategori");
  const errorKategori = document.getElementById("errorKategori");
  if (kategori.value === "") {
    errorKategori.textContent = "Pilih salah satu kategori.";
    valid = false;
  } else {
    errorKategori.textContent = "";
  }

  // Pesan minimal 10 karakter
  const pesan = document.getElementById("pesan");
  const errorPesan = document.getElementById("errorPesan");
  if (pesan.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
    valid = false;
  } else {
    errorPesan.textContent = "";
  }

  if (!valid) {
    event.preventDefault(); // Gagalkan submit
  } else {
    alert("Pesan berhasil dikirim!");
    form.reset();
  }
});

document.getElementById("nama").addEventListener("blur", function () {
  const errorNama = document.getElementById("errorNama");
  if (this.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
  } else {
    errorNama.textContent = "";
  }
});
document.getElementById("pesan").addEventListener("input", function () {
  const errorPesan = document.getElementById("errorPesan");
  if (this.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
  } else {
    errorPesan.textContent = "";
  }
});

document.getElementById("langganan").addEventListener("change", function () {
  if (this.checked) {
    alert("Terima kasih telah berlangganan newsletter!");
  }
});
