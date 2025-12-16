// memberi  tahu pengguna bahwa script berhasil di-load
alert('Selamat datang di Website Profil UMKM Anda!');

// memperlihatkan informasi variabel di console
const namaUMKM = 'Kopi Nusantara';
console.log('Nama UMKM:', namaUMKM);

// contoh variabel dan operator
let produk = 5;
console.log('Jumlah produk saat ini:', produk);
produk += 3;
console.log('Setelah penambahan:', produk);

// rating produk (percabangan)
let rating = 5;
  let hasil = "";

  if (rating === 5) {
    hasil = "★★★★★ Sangat Disarankan";
  } else if (rating < 5) {
    hasil = "★★★★ Direkomendasikan";
  } else if (rating < 4) {
    hasil = "★★★ Cukup Baik";
  } else if (rating < 3) {
    hasil = "★★ Kurang Memuaskan";
  } else if (rating < 2) {
    hasil = "★ Tidak Direkomendasikan";
  } else {
    hasil = "Rating tidak valid."; }

  document.getElementById("hasil-rating").textContent = hasil;

// layanan (perulangan)
let layanan = ["Gratis Ongkir", "Bayar di Tempat", "Garansi 30 Hari"];

layanan.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item;
  document.getElementById("layanan-list").appendChild(li);
});

// form pemesanan (function)
function cekForm() {
  let nama = document.getElementById("namaProduk").value;
  let jumlah = document.getElementById("jumlah").value;

  if (nama === "" || jumlah === "") {
    alert("Semua kolom wajib diisi.");
    return false;
  }

  if (jumlah <= 0) {
    alert("Jumlah harus lebih dari 0");
    return false;
  }

  alert("Pemesanan berhasil dikirim!");
  return true;
}

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
      li.addEventListener("mouseover", () => (li.style.backgroundColor = "#e0e0e0"));
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

    // --- 1. Validasi Nama ---
    const nama = document.getElementById("nama");
    const errorNama = document.getElementById("errorNama");

    if (nama.value.trim() === "") {
        errorNama.textContent = "Nama wajib diisi.";
        valid = false;
    } else {
        errorNama.textContent = "";
    }

    // --- 2. Validasi Email ---
    // Email harus valid dan domain harus @gmail.com
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailPattern = /^[^ ]+@gmail\.com$/i; // Regex: memastikan format dan domain @gmail.com

    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Email harus @gmail.com dan format benar.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    // --- 3. Validasi Kategori ---
    const kategori = document.getElementById("kategori");
    const errorKategori = document.getElementById("errorKategori");

    if (kategori.value === "") {
        errorKategori.textContent = "Pilih salah satu kategori.";
        valid = false;
    } else {
        errorKategori.textContent = "";
    }

    // --- 4. Validasi Pesan ---
    // Pesan minimal 10 karakter
    const pesan = document.getElementById("pesan");
    const errorPesan = document.getElementById("errorPesan");

    if (pesan.value.trim().length < 10) {
        errorPesan.textContent = "Pesan minimal 10 karakter.";
        valid = false;
    } else {
        errorPesan.textContent = "";
    }

    // --- Penanganan Akhir Submit ---
    if (!valid) {
        event.preventDefault(); // Gagalkan submit jika ada kesalahan validasi
    } else {
        // Jika validasi sukses
        alert("Pesan berhasil dikirim!");
        form.reset(); // Kosongkan formulir setelah sukses
        event.preventDefault(); // Mencegah formulir mencoba mengirim secara default (karena action="#" digunakan)
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