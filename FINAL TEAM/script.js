document.addEventListener("DOMContentLoaded", () => {
    const jumlah = document.getElementById("jumlah");
    const total = document.getElementById("totalHarga");
    jumlah?.addEventListener("input", () => {
      const totalHarga = 75000 * parseInt(jumlah.value || 0);
      total.textContent = `Rp ${totalHarga.toLocaleString("id-ID")}`;
    });
  
    const form = document.getElementById("formDaftar");
    form?.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const event = document.getElementById("event").value;
      const jml = parseInt(document.getElementById("jumlah").value);
      const totalHarga = 75000 * jml;
  
      localStorage.setItem("pendaftaran", JSON.stringify({
        nama, email, event, jumlah: jml, total: totalHarga
      }));
  
      window.location.href = "summary.html";
    });
  });
  