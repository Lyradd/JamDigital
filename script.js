function DisplayJam() {
  var date = new Date(); // Corrected 'Date' here
  var jam = date.getHours();
  var menit = date.getMinutes();
  var detik = date.getSeconds();
  var sesi = "AM";

  if (jam === 0) {
    jam = 12;
  }

  if (jam > 12) {
    jam = jam - 12;
    sesi = "PM";
  }

  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  var waktu = jam + ":" + menit + ":" + detik + " " + sesi;
  document.getElementById("JamDigital").innerText = waktu;

  setTimeout(DisplayJam, 1000);
}

DisplayJam();
