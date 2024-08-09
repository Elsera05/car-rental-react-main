import React from 'react';
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Sewa() {
  return (
    <>
      <Navigation />
      <Hero />
      <section id="search">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form className="row g-3 justify-content-center">
                <div className="col-auto">
                  <label className="form-label" htmlFor="tipedriver">Tipe Driver</label>
                  <select className="form-select" id="tipedriver">
                    <option value="Dengan Supir">Dengan Sopir</option>
                    <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-auto">
                  <label className="form-label" htmlFor="tanggal">Tanggal</label>
                  <input type="date" id="tanggal" className="form-control" placeholder="Pilih Tanggal" />
                </div>
                <div className="col-auto">
                  <label className="form-label" htmlFor="jam">Waktu / Jam Jemput</label>
                  <input type="time" id="jam" className="form-control" placeholder="Pilih Waktu" />
                </div>
                <div className="col-auto">
                  <label className="form-label" htmlFor="penumpang">Jumlah Penumpang</label>
                  <input type="number" id="penumpang" className="form-control" placeholder="Jumlah Penumpang" />
                </div>
                <div className="col-auto">
                  <button type="button" id="cari" className="btn btn-success">Cari Mobil</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="result">
        <div className="container">
          <div className="row" id="searchresult">
            {/* Hasil pencarian akan ditampilkan di sini */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sewa;
