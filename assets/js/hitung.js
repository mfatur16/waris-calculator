// NOTE YANG SAMA :

// BELUM NIKAH > IBU > KAKEK HIDUP == BELUM NIKAH > IBU > KAKEK & NENEK HIDUP
// BELUM NIKAH > IBU > NENEK HIDUP == BELUM NIKAH > IBU > KAKEK & NENEK WAFAT
// GA PUNYA ANAK > IBU > KAKEK HIDUP == GA PUNYA ANAK > IBU > KAKEK & NENEK HIDUP
// GA PUNYA ANAK > IBU > NENEK HIDUP == GA PUNYA ANAK > IBU > KAKEK & NENEK WAFAT
// ANAK PEREMPUAN > IBU > KAKEK HIDUP == ANAK PEREMPUAN > IBU > KAKEK & NENEK HIDUP
// ANAK PEREMPUAN > IBU > NENEK HIDUP == ANAK PEREMPUAN > IBU > KAKEK & NENEK WAFAT
// ANAK WAFAT > IBU > KAKEK HIDUP == ANAK WAFAT > IBU > KAKEK & NENEK HIDUP
// ANAK WAFAT > IBU > NENEK HIDUP == ANAK WAFAT > IBU > KAKEK & NENEK WAFAT

// ===========================================================================================================

// document.getElementById('mbah').addEventListener('mouseup', hitung);

function hitung() {
    // Jumlah Harta
    var totHarta = document.getElementById('totHarta').value.replace('Rp', '').replace(/(\..*?)/g, '');
    var kelamin = $(":radio[name=kelamin]:checked").val();

    // GENDER PEWARIS LELAKI =================================================================================
    // (COMPLETED)
    if (kelamin == 'Lelaki') {
        var nikah = $(":radio[name=nikah]:checked").val();

        // STATUS PEWARIS LELAKI MENIKAH ======================================================================
        // (COMPLETED)
        if (nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            // ==================================== PEWARIS LELAKI PUNYA ANAK ==================================
            // (COMPLETED)
            if (anak == "Ya") {
                // Deklarasi jumlah anak
                var anakLelaki = document.getElementById('anakLelaki').value;
                var anakPerempuan = document.getElementById('anakPerempuan').value;

                // ================ ANAK LELAKI > ORANGTUA > KAKEK NENEK =======================================
                // Hanya ada anak lelaki (COMPLETED)
                if (anakLelaki > 0 && anakPerempuan <= 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (13 / 24);
                            var bagBapak = totHarta * (4 / 24);
                            var bagNenekI = totHarta * (4 / 24);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (17 / 24);
                            var bagBapak = totHarta * (4 / 24);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (13 / 24);
                            var bagIbu = totHarta * (4 / 24);
                            var bagKakek = totHarta * (4 / 24);
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (17 / 24);
                            var bagIbu = totHarta * (4 / 24);
                            var bagNenek = totHarta * (0);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (17 / 24);
                            var bagIbu = totHarta * (4 / 24);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakLelaki = totHarta * (13 / 24);
                            var bagIbu = totHarta * (4 / 24);
                            var bagKakek = totHarta * (4 / 24);
                            var bagNenek = totHarta * (0);
                        }
                    }

                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (13 / 24);
                                var bagNenekI = totHarta * (4 / 24);
                                var bagKakek = totHarta * (4 / 24);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (17 / 24);
                                var bagNenekI = totHarta * (2 / 24);
                                var bagNenek = totHarta * (2 / 24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (17 / 24);
                                var bagNenekI = totHarta * (4 / 24);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (13 / 24);
                                var bagNenekI = totHarta * (2 / 24);
                                var bagKakek = totHarta * (4 / 24);
                                var bagNenek = totHarta * (2 / 24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (17 / 24);
                                var bagKakek = totHarta * (4 / 24);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (17 / 24);
                                var bagNenek = totHarta * (4 / 24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (1 / 8);
                                var bagAnakLelaki = totHarta * (7 / 8);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakLelaki = totHarta * (13 / 24);
                                var bagKakek = totHarta * (4 / 24);
                                var bagNenek = totHarta * (4 / 24);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (3 / 24);
                        var bagAnakLelaki = totHarta * (13 / 24);
                        var bagBapak = totHarta * (4 / 24);
                        var bagIbu = totHarta * (4 / 24);
                    }
                }

                // =============== ANAK PEREMPUAN > ORANGTUA > KAKEK NENEK(2) > CUCU > SAUDARA =================
                // Hanya ada anak perempuan (COMPLETED)
                else if (anakLelaki <= 0 && anakPerempuan > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // ========= ANAK PEREMPUAN > BAPAK > NENEK DARI IBU > CUCU ==============================
                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagBapak = totHarta * (4 / 24);
                                    var bagNenekI = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (1 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 27);
                                    var bagAnakPerempuan = totHarta * (12 / 27);
                                    var bagBapak = totHarta * (4 / 27);
                                    var bagNenekI = totHarta * (4 / 27);
                                    var bagCucuPerempuan = totHarta * (4 / 27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagBapak = totHarta * (12 / 72);
                                    var bagNenekI = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (2 / 72);
                                    var bagCucuPerempuan = totHarta * (1 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakPerempuan = totHarta * (12 / 24);
                                var bagBapak = totHarta * (5 / 24);
                                var bagNenekI = totHarta * (4 / 24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagBapak = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (5 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagBapak = totHarta * (5 / 24);
                                    var bagCucuPerempuan = totHarta * (4 / 24);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagBapak = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (10 / 72);
                                    var bagCucuPerempuan = totHarta * (5 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 8);
                                var bagAnakPerempuan = totHarta * (4 / 8);
                                var bagBapak = totHarta * (3 / 8);
                            }
                        }
                    }

                    // ========= ANAK PEREMPUAN > IBU > KAKEK NENEK > CUCU > SAUDARA ==========================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (1 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 27);
                                    var bagAnakPerempuan = totHarta * (12 / 27);
                                    var bagIbu = totHarta * (4 / 27);
                                    var bagKakek = totHarta * (4 / 27);
                                    var bagCucuPerempuan = totHarta * (4 / 27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (2 / 72);
                                    var bagCucuPerempuan = totHarta * (1 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagSaudaraLelaki = totHarta * (1 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagSaudaraPerempuan = totHarta * (1 / 24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagSaudaraLelaki = totHarta * (2 / 72);
                                    var bagSaudaraPerempuan = totHarta * (1 / 72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (5 / 24);
                                }
                            }
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (5 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (5 / 40);
                                        var bagAnakPerempuan = totHarta * (21 / 40);
                                        var bagIbu = totHarta * (7 / 40);
                                        var bagCucuPerempuan = totHarta * (7 / 40);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (10 / 72);
                                    var bagCucuPerempuan = totHarta * (5 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagSaudaraLelaki = totHarta * (5 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagSaudaraPerempuan = totHarta * (5 / 24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagSaudaraLelaki = totHarta * (10 / 72);
                                    var bagSaudaraPerempuan = totHarta * (5 / 72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4 / 32);
                                    var bagAnakPerempuan = totHarta * (21 / 32);
                                    var bagIbu = totHarta * (7 / 32);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (5 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (5 / 40);
                                        var bagAnakPerempuan = totHarta * (121 / 40);
                                        var bagIbu = totHarta * (7 / 40);
                                        var bagCucuPerempuan = totHarta * (7 / 40);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (10 / 72);
                                    var bagCucuPerempuan = totHarta * (5 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagSaudaraLelaki = totHarta * (5 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagSaudaraPerempuan = totHarta * (5 / 24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagSaudaraLelaki = totHarta * (10 / 72);
                                    var bagSaudaraPerempuan = totHarta * (5 / 72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4 / 32);
                                    var bagAnakPerempuan = totHarta * (21 / 32);
                                    var bagIbu = totHarta * (7 / 32);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (1 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 27);
                                    var bagAnakPerempuan = totHarta * (12 / 27);
                                    var bagIbu = totHarta * (4 / 27);
                                    var bagKakek = totHarta * (4 / 27);
                                    var bagCucuPerempuan = totHarta * (4 / 27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (2 / 72);
                                    var bagCucuPerempuan = totHarta * (1 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagSaudaraLelaki = totHarta * (1 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagSaudaraPerempuan = totHarta * (1 / 24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagAnakPerempuan = totHarta * (36 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagSaudaraLelaki = totHarta * (2 / 72);
                                    var bagSaudaraPerempuan = totHarta * (1 / 72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagAnakPerempuan = totHarta * (12 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (5 / 24);
                                }
                            }
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU WAFAT > KAKEK NENEK(2) > CUCU > SAUDARA =======
                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (1 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 27);
                                        var bagAnakPerempuan = totHarta * (12 / 27);
                                        var bagNenekI = totHarta * (4 / 27);
                                        var bagKakek = totHarta * (4 / 27);
                                        var bagCucuPerempuan = totHarta * (4 / 27);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (2 / 72);
                                        var bagCucuPerempuan = totHarta * (1 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagCucuLelaki = totHarta * (5 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagAnakPerempuan = totHarta * (36 / 72);
                                            var bagNenekI = totHarta * (6 / 72);
                                            var bagNenek = totHarta * (6 / 72);
                                            var bagCucuPerempuan = totHarta * (12 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (10 / 80);
                                            var bagAnakPerempuan = totHarta * (42 / 80);
                                            var bagNenekI = totHarta * (7 / 80);
                                            var bagNenek = totHarta * (7 / 80);
                                            var bagCucuPerempuan = totHarta * (14 / 80);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagCucuLelaki = totHarta * (10 / 72);
                                        var bagCucuPerempuan = totHarta * (5 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraLelaki = totHarta * (5 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (8 / 64);
                                        var bagAnakPerempuan = totHarta * (42 / 64);
                                        var bagNenekI = totHarta * (7 / 64);
                                        var bagNenek = totHarta * (7 / 64);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (5 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagAnakPerempuan = totHarta * (36 / 72);
                                            var bagNenekI = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (12 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (5 / 40);
                                            var bagAnakPerempuan = totHarta * (21 / 40);
                                            var bagNenekI = totHarta * (7 / 40);
                                            var bagCucuPerempuan = totHarta * (7 / 40);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (10 / 72);
                                        var bagCucuPerempuan = totHarta * (5 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (5 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 32);
                                        var bagAnakPerempuan = totHarta * (21 / 32);
                                        var bagNenekI = totHarta * (7 / 32);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagCucuLelaki = totHarta * (1 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagCucuPerempuan = totHarta * (1 / 24);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagCucuLelaki = totHarta * (2 / 72);
                                        var bagCucuPerempuan = totHarta * (1 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (5 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                        var bagCucuPerempuan = totHarta * (4 / 24);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (10 / 72);
                                        var bagCucuPerempuan = totHarta * (5 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (2 / 16);
                                        var bagAnakPerempuan = totHarta * (8 / 16);
                                        var bagKakek = totHarta * (3 / 16);
                                        var bagSaudaraLelaki = totHarta * (3 / 16);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagKakek = totHarta * (3 / 8);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (5 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagAnakPerempuan = totHarta * (36 / 72);
                                            var bagNenek = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (12 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (5 / 40);
                                            var bagAnakPerempuan = totHarta * (21 / 40);
                                            var bagNenek = totHarta * (7 / 40);
                                            var bagCucuPerempuan = totHarta * (7 / 40);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (10 / 72);
                                        var bagCucuPerempuan = totHarta * (5 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (5 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 32);
                                        var bagAnakPerempuan = totHarta * (21 / 32);
                                        var bagNenek = totHarta * (7 / 32);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagCucuLelaki = totHarta * (3 / 8);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraLelaki = totHarta * (5 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagAnakPerempuan = totHarta * (12 / 24);
                                            var bagCucuPerempuan = totHarta * (4 / 24);
                                            var bagSaudaraPerempuan = totHarta * (5 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagAnakPerempuan = totHarta * (36 / 72);
                                            var bagCucuPerempuan = totHarta * (12 / 72);
                                            var bagSaudaraLelaki = totHarta * (10 / 72);
                                            var bagSaudaraPerempuan = totHarta * (5 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 32);
                                            var bagAnakPerempuan = totHarta * (21 / 32);
                                            var bagCucuPerempuan = totHarta * (7 / 32);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagCucuLelaki = totHarta * (2 / 8);
                                        var bagCucuPerempuan = totHarta * (1 / 8);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagSaudaraLelaki = totHarta * (3 / 8);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagSaudaraPerempuan = totHarta * (3 / 8);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (4 / 8);
                                        var bagSaudaraLelaki = totHarta * (2 / 8);
                                        var bagSaudaraPerempuan = totHarta * (1 / 8);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagAnakPerempuan = totHarta * (7 / 8);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (1 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (1 / 24);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (2 / 72);
                                        var bagCucuPerempuan = totHarta * (1 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagAnakPerempuan = totHarta * (36 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagAnakPerempuan = totHarta * (12 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                    }
                                }
                            }
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU HIDUP > CUCU =================================
                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        // Deklarasi cucu
                        var cucu = $(":radio[name=cucu]:checked").val();

                        // Punya cucu - Dari anak lelaki (COMPLETED)
                        if (cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value;
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (COMPLETED)
                            if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakPerempuan = totHarta * (12 / 24);
                                var bagBapak = totHarta * (4 / 24);
                                var bagIbu = totHarta * (4 / 24);
                                var bagCucuLelaki = totHarta * (1 / 24);
                            }

                            // Cucu perempuan saja (COMPLETED)
                            else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagAnakPerempuan = totHarta * (12 / 24);
                                var bagBapak = totHarta * (4 / 24);
                                var bagIbu = totHarta * (4 / 24);
                                var bagCucuPerempuan = totHarta * (1 / 24);
                            }

                            // Cucu lelaki & perempuan (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakPerempuan = totHarta * (36 / 72);
                                var bagBapak = totHarta * (12 / 72);
                                var bagIbu = totHarta * (12 / 72);
                                var bagCucuLelaki = totHarta * (2 / 72);
                                var bagCucuPerempuan = totHarta * (1 / 72);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 24);
                            var bagAnakPerempuan = totHarta * (12 / 24);
                            var bagBapak = totHarta * (5 / 24);
                            var bagIbu = totHarta * (4 / 24);
                        }
                    }
                }

                // ================ ANAK LELAKI & PEREMPUAN > ORANGTUA > KAKEK NENEK ===========================
                // Anak lelaki & Perempuan (COMPLETED)
                else if (anakPerempuan > 0 && anakLelaki > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (26 / 72);
                            var bagAnakPerempuan = totHarta * (13 / 72);
                            var bagBapak = totHarta * (12 / 72);
                            var bagNenekI = totHarta * (12 / 72);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (34 / 72);
                            var bagAnakPerempuan = totHarta * (17 / 72);
                            var bagBapak = totHarta * (12 / 72);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (26 / 72);
                            var bagAnakPerempuan = totHarta * (13 / 72);
                            var bagIbu = totHarta * (12 / 72);
                            var bagKakek = totHarta * (12 / 72);
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (34 / 72);
                            var bagAnakPerempuan = totHarta * (17 / 72);
                            var bagIbu = totHarta * (12 / 72);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (34 / 72);
                            var bagAnakPerempuan = totHarta * (17 / 72);
                            var bagIbu = totHarta * (12 / 72);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9 / 72);
                            var bagAnakLelaki = totHarta * (26 / 72);
                            var bagAnakPerempuan = totHarta * (13 / 72);
                            var bagIbu = totHarta * (12 / 72);
                            var bagKakek = totHarta * (12 / 72);
                        }
                    }

                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (126 / 72);
                                var bagAnakPerempuan = totHarta * (13 / 72);
                                var bagNenekI = totHarta * (12 / 72);
                                var bagKakek = totHarta * (12 / 72);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (34 / 72);
                                var bagAnakPerempuan = totHarta * (17 / 72);
                                var bagNenekI = totHarta * (6 / 72);
                                var bagNenek = totHarta * (6 / 72);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (34 / 72);
                                var bagAnakPerempuan = totHarta * (17 / 72);
                                var bagNenekI = totHarta * (12 / 72);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (26 / 72);
                                var bagAnakPerempuan = totHarta * (13 / 72);
                                var bagNenekI = totHarta * (6 / 72);
                                var bagKakek = totHarta * (12 / 72);
                                var bagNenek = totHarta * (6 / 72);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (26 / 72);
                                var bagAnakPerempuan = totHarta * (13 / 72);
                                var bagNenekI = totHarta * (12 / 72);
                                var bagKakek = totHarta * (12 / 72);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (34 / 72);
                                var bagAnakPerempuan = totHarta * (17 / 72);
                                var bagNenekI = totHarta * (6 / 72);
                                var bagNenek = totHarta * (6 / 72);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (34 / 72);
                                var bagAnakPerempuan = totHarta * (17 / 72);
                                var bagNenekI = totHarta * (12 / 72);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagAnakLelaki = totHarta * (26 / 72);
                                var bagAnakPerempuan = totHarta * (13 / 72);
                                var bagNenekI = totHarta * (6 / 72);
                                var bagKakek = totHarta * (12 / 72);
                                var bagNenek = totHarta * (6 / 72);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (9 / 72);
                        var bagAnakLelaki = totHarta * (26 / 72);
                        var bagAnakPerempuan = totHarta * (13 / 72);
                        var bagBapak = totHarta * (12 / 72);
                        var bagIbu = totHarta * (12 / 72);
                    }
                }

                // ================ ANAK WAFAT > ORANGTUA > KAKEK NENEK(2) > CUCU > SAUDARA ====================
                // Anak lelaki & perempuan wafat (COMPLETED)
                else {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // =============== ANAK WAFAT > BAPAK > NENEK > CUCU =====================================
                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagBapak = totHarta * (4 / 24);
                                    var bagNenekI = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (13 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagBapak = totHarta * (5 / 24);
                                    var bagNenekI = totHarta * (4 / 24);
                                    var bagCucuPerempuan = totHarta * (12 / 24);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagBapak = totHarta * (12 / 72);
                                    var bagNenekI = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (26 / 72);
                                    var bagCucuPerempuan = totHarta * (13 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagBapak = totHarta * (7 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagBapak = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (17 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (1 / 8);
                                    var bagBapak = totHarta * (3 / 8);
                                    var bagCucuPerempuan = totHarta * (4 / 8);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagBapak = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (34 / 72);
                                    var bagCucuPerempuan = totHarta * (17 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagBapak = totHarta * (3 / 4);
                            }
                        }
                    }

                    // ================ ANAK WAFAT > IBU > KAKEK NENEK > CUCU > SAUDARA ======================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (13 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (36 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (26 / 72);
                                    var bagCucuPerempuan = totHarta * (13 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (6 / 24);
                                    var bagIbu = totHarta * (8 / 24);
                                    var bagKakek = totHarta * (5 / 24);
                                    var bagSaudaraLelaki = totHarta * (5 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 15);
                                    var bagIbu = totHarta * (4 / 15);
                                    var bagKakek = totHarta * (2 / 15);
                                    var bagSaudaraPerempuan = totHarta * (6 / 15);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (15 / 60);
                                    var bagIbu = totHarta * (10 / 60);
                                    var bagKakek = totHarta * (14 / 60);
                                    var bagSaudaraLelaki = totHarta * (14 / 60);
                                    var bagSaudaraPerempuan = totHarta * (7 / 60);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (4 / 12);
                                    var bagKakek = totHarta * (5 / 12);
                                }
                            }
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (17 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraLelaki = totHarta * (5 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (36 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 232);
                                        var bagIbu = totHarta * (7 / 32);
                                        var bagCucuPerempuan = totHarta * (21 / 32);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (34 / 72);
                                    var bagCucuPerempuan = totHarta * (17 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (4 / 12);
                                    var bagSaudaraLelaki = totHarta * (5 / 12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagIbu = totHarta * (4 / 13);
                                    var bagSaudaraPerempuan = totHarta * (6 / 13);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagSaudaraLelaki = totHarta * (14 / 36);
                                    var bagSaudaraPerempuan = totHarta * (7 / 36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1 / 4);
                                    var bagIbu = totHarta * (3 / 4);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (17 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraLelaki = totHarta * (5 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraPerempuan = totHarta * (5 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (36 / 72);
                                        var bagSaudaraLelaki = totHarta * (10 / 72);
                                        var bagSaudaraPerempuan = totHarta * (5 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 232);
                                        var bagIbu = totHarta * (7 / 32);
                                        var bagCucuPerempuan = totHarta * (21 / 32);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (34 / 72);
                                    var bagCucuPerempuan = totHarta * (17 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (4 / 12);
                                    var bagSaudaraLelaki = totHarta * (5 / 12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagIbu = totHarta * (4 / 13);
                                    var bagSaudaraPerempuan = totHarta * (6 / 13);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagSaudaraLelaki = totHarta * (14 / 36);
                                    var bagSaudaraPerempuan = totHarta * (7 / 36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1 / 4);
                                    var bagIbu = totHarta * (3 / 4);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 24);
                                    var bagIbu = totHarta * (4 / 24);
                                    var bagKakek = totHarta * (4 / 24);
                                    var bagCucuLelaki = totHarta * (13 / 24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraLelaki = totHarta * (1 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                        var bagSaudaraPerempuan = totHarta * (1 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagIbu = totHarta * (12 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuPerempuan = totHarta * (36 / 72);
                                        var bagSaudaraLelaki = totHarta * (2 / 72);
                                        var bagSaudaraPerempuan = totHarta * (1 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagIbu = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (5 / 24);
                                        var bagCucuPerempuan = totHarta * (12 / 24);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 72);
                                    var bagIbu = totHarta * (12 / 72);
                                    var bagKakek = totHarta * (12 / 72);
                                    var bagCucuLelaki = totHarta * (26 / 72);
                                    var bagCucuPerempuan = totHarta * (13 / 72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (6 / 24);
                                    var bagIbu = totHarta * (8 / 24);
                                    var bagKakek = totHarta * (5 / 24);
                                    var bagSaudaraLelaki = totHarta * (5 / 24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 15);
                                    var bagIbu = totHarta * (4 / 15);
                                    var bagKakek = totHarta * (2 / 15);
                                    var bagSaudaraPerempuan = totHarta * (6 / 15);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (15 / 60);
                                    var bagIbu = totHarta * (10 / 60);
                                    var bagKakek = totHarta * (14 / 60);
                                    var bagSaudaraLelaki = totHarta * (14 / 60);
                                    var bagSaudaraPerempuan = totHarta * (7 / 60);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (4 / 12);
                                    var bagKakek = totHarta * (5 / 12);
                                }
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU WAFAT > KAKEK NENEK(2) > CUCU ================
                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (13 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagNenekI = totHarta * (12 / 72);
                                            var bagKakek = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (13 / 24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (26 / 72);
                                        var bagCucuPerempuan = totHarta * (13 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (6 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagKakek = totHarta * (7 / 24);
                                        var bagSaudaraLelaki = totHarta * (7 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagNenekI = totHarta * (2 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagSaudaraPerempuan = totHarta * (6 / 13);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (15 / 72);
                                        var bagNenekI = totHarta * (10 / 72);
                                        var bagKakek = totHarta * (14 / 72);
                                        var bagSaudaraLelaki = totHarta * (14 / 72);
                                        var bagSaudaraPerempuan = totHarta * (7 / 72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagKakek = totHarta * (7 / 12);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagCucuLelaki = totHarta * (17 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (5 / 24);
                                            var bagSaudaraLelaki = totHarta * (12 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (5 / 24);
                                            var bagSaudaraPerempuan = totHarta * (12 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagNenekI = totHarta * (5 / 72);
                                            var bagNenek = totHarta * (5 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (10 / 72);
                                            var bagSaudaraPerempuan = totHarta * (5 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (8 / 64);
                                            var bagNenekI = totHarta * (7 / 64);
                                            var bagNenek = totHarta * (7 / 64);
                                            var bagCucuPerempuan = totHarta * (42 / 64);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagCucuLelaki = totHarta * (34 / 72);
                                        var bagCucuPerempuan = totHarta * (17 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagSaudaraLelaki = totHarta * (7 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (8 / 32);
                                        var bagNenekI = totHarta * (3 / 32);
                                        var bagNenek = totHarta * (3 / 32);
                                        var bagSaudaraPerempuan = totHarta * (18 / 32);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagSaudaraLelaki = totHarta * (14 / 36);
                                        var bagSaudaraPerempuan = totHarta * (7 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (2 / 8);
                                        var bagNenekI = totHarta * (3 / 8);
                                        var bagNenek = totHarta * (3 / 8);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagNenekI = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (17 / 24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraLelaki = totHarta * (5 / 24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (5 / 24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagNenekI = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (10 / 72);
                                            var bagSaudaraPerempuan = totHarta * (5 / 72);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 32);
                                            var bagNenekI = totHarta * (7 / 32);
                                            var bagCucuPerempuan = totHarta * (21 / 32);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagNenekI = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (34 / 72);
                                        var bagCucuPerempuan = totHarta * (17 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagSaudaraLelaki = totHarta * (7 / 12);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagNenekI = totHarta * (3 / 16);
                                        var bagSaudaraPerempuan = totHarta * (9 / 16);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (6 / 36);
                                        var bagSaudaraLelaki = totHarta * (14 / 36);
                                        var bagSaudaraPerempuan = totHarta * (7 / 36);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagNenekI = totHarta * (3 / 4);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED) 
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagCucuLelaki = totHarta * (13 / 24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagNenekI = totHarta * (6 / 72);
                                            var bagKakek = totHarta * (12 / 72);
                                            var bagNenek = totHarta * (6 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenekI = totHarta * (2 / 24);
                                            var bagKakek = totHarta * (5 / 24);
                                            var bagNenek = totHarta * (2 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagNenekI = totHarta * (6 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (6 / 72);
                                        var bagCucuLelaki = totHarta * (26 / 72);
                                        var bagCucuPerempuan = totHarta * (13 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (6 / 24);
                                        var bagNenekI = totHarta * (2 / 24);
                                        var bagKakek = totHarta * (7 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraLelaki = totHarta * (7 / 24);
                                    }
// FTR - NPL
                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 16);
                                        var bagNenekI = totHarta * (1 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagNenek = totHarta * (1 / 13);
                                        var bagSaudaraPerempuan = totHarta * (6 / 13);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (15 / 60);
                                        var bagNenekI = totHarta * (5 / 60);
                                        var bagKakek = totHarta * (14 / 60);
                                        var bagNenek = totHarta * (5 / 60);
                                        var bagSaudaraLelaki = totHarta * (14 / 60);
                                        var bagSaudaraPerempuan = totHarta * (7 / 60);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagKakek = totHarta * (7 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (17 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (2 / 16);
                                            var bagKakek = totHarta * (3 / 16);
                                            var bagCucuPerempuan = totHarta * (8 / 16);
                                            var bagSaudaraLelaki = totHarta * (3 / 16);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (5 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagKakek = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (10 / 72);
                                            var bagSaudaraPerempuan = totHarta * (5 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (1 / 8);
                                            var bagKakek = totHarta * (3 / 8);
                                            var bagCucuPerempuan = totHarta * (4 / 8);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (34 / 72);
                                        var bagCucuPerempuan = totHarta * (17 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (2 / 8);
                                        var bagKakek = totHarta * (3 / 8);
                                        var bagSaudaraLelaki = totHarta * (3 / 8);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagKakek = totHarta * (2 / 4);
                                        var bagSaudaraPerempuan = totHarta * (1 / 4);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (5 / 20);
                                        var bagKakek = totHarta * (6 / 20);
                                        var bagSaudaraLelaki = totHarta * (6 / 20);
                                        var bagSaudaraPerempuan = totHarta * (3 / 20);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagKakek = totHarta * (3 / 4);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (17 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraLelaki = totHarta * (5 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (5 / 24);
                                        }
// NPL - IKBL
                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagNenek = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (10 / 72);
                                            var bagSaudaraPerempuan = totHarta * (5 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 32);
                                            var bagNenek = totHarta * (7 / 32);
                                            var bagCucuPerempuan = totHarta * (21 / 32);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (34 / 72);
                                        var bagCucuPerempuan = totHarta * (34 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagSaudaraLelaki = totHarta * (7 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagNenek = totHarta * (3 / 16);
                                        var bagSaudaraPerempuan = totHarta * (9 / 16);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenek = totHarta * (6 / 36);
                                        var bagSaudaraLelaki = totHarta * (14 / 36);
                                        var bagSaudaraPerempuan = totHarta * (7 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagNenek = totHarta * (3 / 4);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 8);
                                        var bagCucuLelaki = totHarta * (7 / 8);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (1 / 8);
                                            var bagCucuPerempuan = totHarta * (4 / 8);
                                            var bagSaudaraLelaki = totHarta * (3 / 8);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (1 / 8);
                                            var bagCucuPerempuan = totHarta * (4 / 8);
                                            var bagSaudaraPerempuan = totHarta * (3 / 8);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (1 / 8);
                                            var bagCucuPerempuan = totHarta * (4 / 8);
                                            var bagSaudaraLelaki = totHarta * (2 / 8);
                                            var bagSaudaraPerempuan = totHarta * (1 / 8);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (1 / 8);
                                            var bagCucuPerempuan = totHarta * (7 / 8);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagCucuLelaki = totHarta * (14 / 24);
                                        var bagCucuPerempuan = totHarta * (7 / 24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagSaudaraLelaki = totHarta * (3 / 4);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagSaudaraPerempuan = totHarta * (3 / 4);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagSaudaraLelaki = totHarta * (2 / 4);
                                        var bagSaudaraPerempuan = totHarta * (1 / 4);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 1);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagKakek = totHarta * (4 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagCucuLelaki = totHarta * (13 / 24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraLelaki = totHarta * (1 / 24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagKakek = totHarta * (4 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                            var bagSaudaraPerempuan = totHarta * (1 / 24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 72);
                                            var bagKakek = totHarta * (12 / 72);
                                            var bagNenek = totHarta * (12 / 72);
                                            var bagCucuPerempuan = totHarta * (36 / 72);
                                            var bagSaudaraLelaki = totHarta * (2 / 72);
                                            var bagSaudaraPerempuan = totHarta * (1 / 72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (3 / 24);
                                            var bagKakek = totHarta * (5 / 24);
                                            var bagNenek = totHarta * (4 / 24);
                                            var bagCucuPerempuan = totHarta * (12 / 24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 72);
                                        var bagKakek = totHarta * (12 / 72);
                                        var bagNenek = totHarta * (12 / 72);
                                        var bagCucuLelaki = totHarta * (26 / 72);
                                        var bagCucuPerempuan = totHarta * (13 / 72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (6 / 24);
                                        var bagKakek = totHarta * (7 / 24);
                                        var bagNenek = totHarta * (4 / 24);
                                        var bagSaudaraLelaki = totHarta * (7 / 24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 24);
                                        var bagKakek = totHarta * (2 / 24);
                                        var bagNenek = totHarta * (2 / 24);
                                        var bagSaudaraPerempuan = totHarta * (6 / 24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (15 / 60);
                                        var bagKakek = totHarta * (14 / 60);
                                        var bagNenek = totHarta * (10 / 60);
                                        var bagSaudaraLelaki = totHarta * (14 / 60);
                                        var bagSaudaraPerempuan = totHarta * (7 / 60);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagKakek = totHarta * (7 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                    }
                                }
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU HIDUP > CUCU =================================
                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        // Deklarasi cucu
                        var cucu = $(":radio[name=cucu]:checked").val();

                        // Punya cucu - Dari anak lelaki (COMPLETED)
                        if (cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value;
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (COMPLETED)
                            if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagBapak = totHarta * (4 / 24);
                                var bagIbu = totHarta * (4 / 24);
                                var bagCucuLelaki = totHarta * (13 / 24);
                            }

                            // Cucu perempuan saja (COMPLETED)
                            else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 24);
                                var bagBapak = totHarta * (5 / 24);
                                var bagIbu = totHarta * (4 / 24);
                                var bagCucuPerempuan = totHarta * (12 / 24);
                            }

                            // Cucu lelaki & perempuan (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 72);
                                var bagBapak = totHarta * (12 / 72);
                                var bagIbu = totHarta * (12 / 72);
                                var bagCucuLelaki = totHarta * (26 / 72);
                                var bagCucuPerempuan = totHarta * (13 / 72);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (1 / 4);
                            var bagBapak = totHarta * (2 / 4);
                            var bagIbu = totHarta * (1 / 4);
                        }
                    }
                }
            }

            // ==================================== PEWARIS LELAKI GA PUNYA ANAK ===============================
            // (COMPLETED)
            else {
                // Deklarasi orangtua
                var ortu = document.getElementById('ortu').value;

                // ============================= BAPAK > NENEK =================================================
                // Hanya bapak yang hidup (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                if (ortu == ortuArray[0]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    if (nenek == "Ya") {
                        var bagPasangan = totHarta * (3 / 12);
                        var bagBapak = totHarta * (7 / 12);
                        var bagNenekI = totHarta * (2 / 12);
                    }

                    // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (1 / 4);
                        var bagBapak = totHarta * (3 / 4);
                    }
                }

                // ============================= IBU > KAKEK NENEK > SAUDARA ===================================
                // Hanya ibu yang hidup (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                else if (ortu == ortuArray[1]) {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (6 / 24);
                            var bagIbu = totHarta * (8 / 24);
                            var bagKakek = totHarta * (5 / 24);
                            var bagSaudaraLelaki = totHarta * (5 / 24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 15);
                            var bagIbu = totHarta * (4 / 15);
                            var bagKakek = totHarta * (2 / 15);
                            var bagSaudaraPerempuan = totHarta * (6 / 15);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (15 / 60);
                            var bagIbu = totHarta * (10 / 60);
                            var bagKakek = totHarta * (14 / 60);
                            var bagSaudaraLelaki = totHarta * (14 / 60);
                            var bagSaudaraPerempuan = totHarta * (7 / 60);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagIbu = totHarta * (4 / 12);
                            var bagKakek = totHarta * (5 / 12);
                        }
                    }

                    // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagIbu = totHarta * (4 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 13);
                            var bagIbu = totHarta * (4 / 13);
                            var bagSaudaraPerempuan = totHarta * (6 / 13);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagIbu = totHarta * (6 / 36);
                            var bagSaudaraLelaki = totHarta * (14 / 36);
                            var bagSaudaraPerempuan = totHarta * (7 / 36);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (1 / 4);
                            var bagIbu = totHarta * (3 / 4);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagIbu = totHarta * (4 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 13);
                            var bagIbu = totHarta * (4 / 13);
                            var bagSaudaraPerempuan = totHarta * (6 / 13);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagIbu = totHarta * (6 / 36);
                            var bagSaudaraLelaki = totHarta * (14 / 36);
                            var bagSaudaraPerempuan = totHarta * (7 / 36);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (1 / 4);
                            var bagIbu = totHarta * (3 / 4);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (6 / 24);
                            var bagIbu = totHarta * (8 / 24);
                            var bagKakek = totHarta * (5 / 24);
                            var bagSaudaraLelaki = totHarta * (5 / 24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 15);
                            var bagIbu = totHarta * (4 / 15);
                            var bagKakek = totHarta * (2 / 15);
                            var bagSaudaraPerempuan = totHarta * (6 / 15);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagPasangan = totHarta * (15 / 60);
                            var bagIbu = totHarta * (10 / 60);
                            var bagKakek = totHarta * (14 / 60);
                            var bagSaudaraLelaki = totHarta * (14 / 60);
                            var bagSaudaraPerempuan = totHarta * (7 / 60);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagIbu = totHarta * (4 / 12);
                            var bagKakek = totHarta * (5 / 12);
                        }
                    }
                }

                // ============================= BAPAK IBU WAFAT > KAKEK NENEK(2) > SAUDARA ====================
                // Bapak & ibu wafat (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                else if (ortu == ortuArray[2]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    if (nenek == "Ya") {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 24);
                                var bagNenekI = totHarta * (4 / 24);
                                var bagKakek = totHarta * (7 / 24);
                                var bagSaudaraLelaki = totHarta * (7 / 24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagNenekI = totHarta * (2 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagSaudaraPerempuan = totHarta * (6 / 13);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (15 / 60);
                                var bagNenekI = totHarta * (10 / 60);
                                var bagKakek = totHarta * (14 / 60);
                                var bagSaudaraLelaki = totHarta * (14 / 60);
                                var bagSaudaraPerempuan = totHarta * (7 / 60);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                                var bagKakek = totHarta * (7 / 12);
                            }
                        }

                        // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagNenek = totHarta * (1 / 12);
                                var bagSaudaraLelaki = totHarta * (7 / 12);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (8 / 32);
                                var bagNenekI = totHarta * (3 / 32);
                                var bagNenek = totHarta * (3 / 32);
                                var bagSaudaraPerempuan = totHarta * (18 / 32);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagNenek = totHarta * (3 / 36);
                                var bagSaudaraLelaki = totHarta * (14 / 36);
                                var bagSaudaraPerempuan = totHarta * (7 / 36);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (2 / 8);
                                var bagNenekI = totHarta * (3 / 8);
                                var bagNenek = totHarta * (3 / 8);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                                var bagSaudaraLelaki = totHarta * (7 / 12);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED) 
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (4 / 16);
                                var bagNenekI = totHarta * (3 / 16);
                                var bagSaudaraPerempuan = totHarta * (9 / 16);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagNenekI = totHarta * (6 / 36);
                                var bagSaudaraLelaki = totHarta * (14 / 36);
                                var bagSaudaraPerempuan = totHarta * (7 / 36);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagNenekI = totHarta * (3 / 4);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 24);
                                var bagNenekI = totHarta * (2 / 24);
                                var bagKakek = totHarta * (7 / 24);
                                var bagNenek = totHarta * (2 / 24);
                                var bagSaudaraLelaki = totHarta * (7 / 24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagNenekI = totHarta * (1 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagNenek = totHarta * (1 / 13);
                                var bagSaudaraPerempuan = totHarta * (6 / 13);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (15 / 60);
                                var bagNenekI = totHarta * (5 / 60);
                                var bagKakek = totHarta * (14 / 60);
                                var bagNenek = totHarta * (5 / 60);
                                var bagSaudaraLelaki = totHarta * (14 / 60);
                                var bagSaudaraPerempuan = totHarta * (7 / 60);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagKakek = totHarta * (7 / 12);
                                var bagNenek = totHarta * (1 / 12);
                            }
                        }
                    }

                    // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                    else {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 24);
                                var bagNenekI = totHarta * (4 / 24);
                                var bagKakek = totHarta * (7 / 24);
                                var bagSaudaraLelaki = totHarta * (7 / 24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagNenekI = totHarta * (2 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagSaudaraPerempuan = totHarta * (6 / 13);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (15 / 60);
                                var bagNenekI = totHarta * (10 / 60);
                                var bagKakek = totHarta * (14 / 60);
                                var bagSaudaraLelaki = totHarta * (14 / 60);
                                var bagSaudaraPerempuan = totHarta * (7 / 60);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                                var bagKakek = totHarta * (7 / 12);
                            }
                        }

                        // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagNenek = totHarta * (1 / 12);
                                var bagSaudaraLelaki = totHarta * (7 / 12);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (8 / 32);
                                var bagNenekI = totHarta * (3 / 32);
                                var bagNenek = totHarta * (3 / 32);
                                var bagSaudaraPerempuan = totHarta * (18 / 32);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagNenek = totHarta * (3 / 36);
                                var bagSaudaraLelaki = totHarta * (14 / 36);
                                var bagSaudaraPerempuan = totHarta * (7 / 36);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (2 / 8);
                                var bagNenekI = totHarta * (3 / 8);
                                var bagNenek = totHarta * (3 / 8);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                                var bagSaudaraLelaki = totHarta * (7 / 12);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (4 / 16);
                                var bagNenekI = totHarta * (3 / 16);
                                var bagSaudaraPerempuan = totHarta * (9 / 16);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagNenekI = totHarta * (6 / 36);
                                var bagSaudaraLelaki = totHarta * (14 / 36);
                                var bagSaudaraPerempuan = totHarta * (7 / 36);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagNenekI = totHarta * (3 / 4);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 24);
                                var bagNenekI = totHarta * (2 / 24);
                                var bagKakek = totHarta * (7 / 24);
                                var bagNenek = totHarta * (2 / 24);
                                var bagSaudaraLelaki = totHarta * (7 / 24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagNenekI = totHarta * (1 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagNenek = totHarta * (1 / 13);
                                var bagSaudaraPerempuan = totHarta * (6 / 13);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (15 / 60);
                                var bagNenekI = totHarta * (5 / 60);
                                var bagKakek = totHarta * (14 / 60);
                                var bagNenek = totHarta * (5 / 60);
                                var bagSaudaraLelaki = totHarta * (14 / 24);
                                var bagSaudaraPerempuan = totHarta * (7 / 24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagKakek = totHarta * (7 / 12);
                                var bagNenek = totHarta * (1 / 12);
                            }
                        }
                    }
                }

                // ============================= BAPAK IBU =====================================================
                // Bapak dan Ibu Hidup (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                else {
                    var bagPasangan = totHarta * (1 / 4);
                    var bagBapak = totHarta * (2 / 4);
                    var bagIbu = totHarta * (1 / 4);
                }
            }
        }

        // STATUS PEWARIS LELAKI BELUM MENIKAH =================================================================
        // (COMPLETED)
        else {
            // Deklarasi orangtua
            var ortu = document.getElementById('ortu').value;

            // ============================= BAPAK > NENEK =====================================================
            // Hanya bapak yang hidup (COMPLETED)
            if (ortu == ortuArray[0]) {
                // Deklarasi nenek dari sisi ibu
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                // Nenek hidup - Sisi ibu (COMPLETED)
                if (nenek == "Ya") {
                    var bagBapak = totHarta * (5 / 6);
                    var bagNenekI = totHarta * (1 / 6);
                }

                // Nenek wafat - Sisi ibu (COMPLETED)
                else {
                    var bagBapak = totHarta * (1 / 1);
                }
            }

            // ============================= IBU > KAKEK NENEK > SAUDARA =======================================
            // Hanya ibu yang hidup (COMPLETED)
            else if (ortu == ortuArray[1]) {
                // Deklarasi kakek dan nenek dari sisi bapak
                var mbah = document.getElementById('mbah').value;

                // Kakek hidup - Sisi bapak (COMPLETED)
                if (mbah == mbahArray[0]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (1 / 3);
                    }

                    // Saudara perempuan saja (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                        var bagSaudaraPerempuan = totHarta * (3 / 6);
                    }

                    // Saudara lelaki & perempuan (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (1 / 6);
                        var bagKakek = totHarta * (2 / 6);
                        var bagSaudaraLelaki = totHarta * (2 / 6);
                        var bagSaudaraPerempuan = totHarta * (1 / 6);
                    }

                    // Ga punya saudara (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (2 / 3);
                    }
                }

                // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                else if (mbah == mbahArray[1]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (2 / 3);
                    }

                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 5);
                        var bagSaudaraPerempuan = totHarta * (3 / 5);
                    }

                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (3 / 18);
                        var bagSaudaraLelaki = totHarta * (10 / 18);
                        var bagSaudaraPerempuan = totHarta * (5 / 18);
                    }

                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 1);
                    }
                }

                // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                else if (mbah == mbahArray[2]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (2 / 3);
                    }

                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 5);
                        var bagSaudaraPerempuan = totHarta * (3 / 5);
                    }

                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (3 / 18);
                        var bagSaudaraLelaki = totHarta * (10 / 18);
                        var bagSaudaraPerempuan = totHarta * (5 / 18);
                    }

                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 1);
                    }
                }

                // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                else {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (1 / 3);
                    }

                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                        var bagSaudaraPerempuan = totHarta * (3 / 6);
                    }

                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (1 / 6);
                        var bagKakek = totHarta * (2 / 6);
                        var bagSaudaraLelaki = totHarta * (2 / 6);
                        var bagSaudaraPerempuan = totHarta * (1 / 6);
                    }

                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (2 / 3);
                    }
                }
            }

            // ============================= BAPAK IBU WAFAT > KAKEK NENEK(2) > SAUDARA ========================
            // Bapak & ibu wafat (COMPLETED)
            else if (ortu == ortuArray[2]) {
                // Deklarasi nenek dari sisi ibu
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                if (nenek == "Ya") {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (2 / 13);
                            var bagKakek = totHarta * (5 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (3 / 6);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraLelaki = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (1 / 6);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (5 / 6);
                        }
                    }

                    // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (10 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 8);
                            var bagNenek = totHarta * (1 / 8);
                            var bagSaudaraPerempuan = totHarta * (6 / 8);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (3 / 36);
                            var bagNenek = totHarta * (3 / 36);
                            var bagSaudaraLelaki = totHarta * (20 / 36);
                            var bagSaudaraPerempuan = totHarta * (10 / 36);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 2);
                            var bagNenek = totHarta * (1 / 2);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagSaudaraLelaki = totHarta * (5 / 6);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 4);
                            var bagSaudaraPerempuan = totHarta * (3 / 4);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (10 / 18);
                            var bagSaudaraPerempuan = totHarta * (5 / 18);
                        }

                        // Ga punya saudara(COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 1);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (5 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraPerempuan = totHarta * (6 / 12);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (4 / 12);
                            var bagSaudaraPerempuan = totHarta * (2 / 12);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (10 / 12);
                            var bagNenek = totHarta * (1 / 12);
                        }
                    }
                }

                // Nenek wafat - Sisi ibu (COMPLETED)
                else {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (2 / 12);
                            var bagKakek = totHarta * (5 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (3 / 6);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraLelaki = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (1 / 6);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (5 / 6);
                        }
                    }

                    // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (10 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 8);
                            var bagNenek = totHarta * (1 / 8);
                            var bagSaudaraPerempuan = totHarta * (6 / 8);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (3 / 36);
                            var bagNenek = totHarta * (3 / 36);
                            var bagSaudaraLelaki = totHarta * (20 / 36);
                            var bagSaudaraPerempuan = totHarta * (10 / 36);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 2);
                            var bagNenek = totHarta * (1 / 2);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagSaudaraLelaki = totHarta * (5 / 6);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 4);
                            var bagSaudaraPerempuan = totHarta * (3 / 4);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (10 / 18);
                            var bagSaudaraPerempuan = totHarta * (5 / 18);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 1);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (5 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraPerempuan = totHarta * (6 / 12);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (4 / 12);
                            var bagSaudaraPerempuan = totHarta * (2 / 12);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA) (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (10 / 12);
                            var bagNenek = totHarta * (1 / 12);
                        }
                    }
                }
            }

            // ============================= BAPAK IBU =========================================================
            // Bapak dan Ibu Hidup (COMPLETED)
            else {
                var bagBapak = totHarta * (2 / 3);
                var bagIbu = totHarta * (1 / 3);
            }
        }
    }

    // GENDER PEWARIS WANITA ===================================================================================
    // (COMPLETED)
    else {
        var nikah = $(":radio[name=nikah]:checked").val();

        // STATUS PEWARIS WANITA MENIKAH ======================================================================
        // (COMPLETED)
        if (nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            // ==================================== PEWARIS WANITA PUNYA ANAK ==================================
            // (COMPLETED)
            if (anak == "Ya") {
                // Deklarasi jumlah anak
                var anakLelaki = document.getElementById('anakLelaki').value;
                var anakPerempuan = document.getElementById('anakPerempuan').value;

                // ================ ANAK LELAKI > ORANGTUA > KAKEK NENEK DARI BAPAK & NENEK DARI IBU =======================================
                // Hanya ada anak lelaki (COMPLETED)
                if (anakLelaki > 0 && anakPerempuan <= 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (5 / 12);
                            var bagBapak = totHarta * (2 / 12);
                            var bagNenekI = totHarta * (2 / 12);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (7 / 12);
                            var bagBapak = totHarta * (2 / 12);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (5 / 12);
                            var bagIbu = totHarta * (2 / 12);
                            var bagKakek = totHarta * (2 / 12);
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (7 / 12);
                            var bagIbu = totHarta * (2 / 12);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (7 / 12);
                            var bagIbu = totHarta * (2 / 12);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 12);
                            var bagAnakLelaki = totHarta * (5 / 12);
                            var bagIbu = totHarta * (2 / 12);
                            var bagKakek = totHarta * (2 / 12);
                        }
                    }

                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (5 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                                var bagKakek = totHarta * (2 / 12);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (7 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagNenek = totHarta * (1 / 12);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (7 / 12);
                                var bagNenekI = totHarta * (2 / 12);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (5 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagKakek = totHarta * (2 / 12);
                                var bagNenek = totHarta * (1 / 12);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (7 / 12);
                                var bagKakek = totHarta * (2 / 12);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (7 / 12);
                                var bagNenek = totHarta * (2 / 12);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagAnakLelaki = totHarta * (3 / 4);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagAnakLelaki = totHarta * (5 / 12);
                                var bagKakek = totHarta * (2 / 12);
                                var bagNenek = totHarta * (2 / 12);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (3 / 12);
                        var bagAnakLelaki = totHarta * (5 / 12);
                        var bagBapak = totHarta * (2 / 12);
                        var bagIbu = totHarta * (2 / 12);
                    }
                }

                // =============== ANAK PEREMPUAN > ORANGTUA > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > CUCU > SAUDARA =================
                // Hanya ada anak perempuan (COMPLETED)
                else if (anakLelaki <= 0 && anakPerempuan > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // ========= ANAK PEREMPUAN > BAPAK > NENEK DARI IBU > CUCU ==============================
                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            var bagPasangan = totHarta * (3 / 13);
                            var bagAnakPerempuan = totHarta * (6 / 13);
                            var bagBapak = totHarta * (2 / 13);
                            var bagNenekI = totHarta * (2 / 13);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagBapak = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (1 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagAnakPerempuan = totHarta * (6 / 13);
                                    var bagBapak = totHarta * (2 / 13);
                                    var bagCucuPerempuan = totHarta * (2 / 13);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagAnakPerempuan = totHarta * (18 / 36);
                                    var bagBapak = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (2 / 36);
                                    var bagCucuPerempuan = totHarta * (1 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagAnakPerempuan = totHarta * (2 / 4);
                                var bagBapak = totHarta * (1 / 4);
                            }
                        }
                    }

                    // ========= ANAK PEREMPUAN > IBU > KAKEK NENEK DARI BAPAK > CUCU > SAUDARA ==========================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3 / 13);
                            var bagAnakPerempuan = totHarta * (6 / 13);
                            var bagIbu = totHarta * (2 / 13);
                            var bagKakek = totHarta * (2 / 13);
                        }

                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (1 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagAnakPerempuan = totHarta * (6 / 13);
                                    var bagIbu = totHarta * (2 / 13);
                                    var bagCucuPerempuan = totHarta * (2 / 13);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagAnakPerempuan = totHarta * (18 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (2 / 36);
                                    var bagCucuPerempuan = totHarta * (1 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagSaudaraLelaki = totHarta * (1 / 12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagSaudaraPerempuan = totHarta * (1 / 12);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagAnakPerempuan = totHarta * (18 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagSaudaraLelaki = totHarta * (2 / 36);
                                    var bagSaudaraPerempuan = totHarta * (1 / 36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4 / 16);
                                    var bagAnakPerempuan = totHarta * (9 / 16);
                                    var bagIbu = totHarta * (3 / 16);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (1 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagAnakPerempuan = totHarta * (6 / 13);
                                    var bagIbu = totHarta * (2 / 13);
                                    var bagCucuPerempuan = totHarta * (2 / 13);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagAnakPerempuan = totHarta * (18 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (2 / 36);
                                    var bagCucuPerempuan = totHarta * (1 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagSaudaraLelaki = totHarta * (1 / 12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagAnakPerempuan = totHarta * (6 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagSaudaraPerempuan = totHarta * (1 / 12);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagAnakPerempuan = totHarta * (18 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagSaudaraLelaki = totHarta * (2 / 36);
                                    var bagSaudaraPerempuan = totHarta * (1 / 36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4 / 16);
                                    var bagAnakPerempuan = totHarta * (9 / 16);
                                    var bagIbu = totHarta * (3 / 16);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 13);
                            var bagAnakPerempuan = totHarta * (6 / 13);
                            var bagIbu = totHarta * (2 / 13);
                            var bagKakek = totHarta * (2 / 13);
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU WAFAT > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > CUCU > SAUDARA =======
                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagAnakPerempuan = totHarta * (6 / 13);
                                var bagNenekI = totHarta * (2 / 13);
                                var bagKakek = totHarta * (2 / 13);
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagCucuLelaki = totHarta * (1 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagAnakPerempuan = totHarta * (6 / 13);
                                        var bagNenekI = totHarta * (1 / 13);
                                        var bagNenek = totHarta * (1 / 13);
                                        var bagCucuPerempuan = totHarta * (2 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagCucuLelaki = totHarta * (2 / 36);
                                        var bagCucuPerempuan = totHarta * (1 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (8 / 32);
                                        var bagAnakPerempuan = totHarta * (18 / 32);
                                        var bagNenekI = totHarta * (3 / 32);
                                        var bagNenek = totHarta * (3 / 32);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (1 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/ 13);
                                        var bagAnakPerempuan = totHarta * (6 / 13);
                                        var bagNenekI = totHarta * (2 / 13);
                                        var bagCucuPerempuan = totHarta * (2 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (2 / 36);
                                        var bagCucuPerempuan = totHarta * (1 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (6 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagAnakPerempuan = totHarta * (9 / 16);
                                        var bagNenekI = totHarta * (3 / 16);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagAnakPerempuan = totHarta * (6 / 13);
                                var bagNenekI = totHarta * (1 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagNenek = totHarta * (1 / 13);
                            }
                        }

                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (1 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagAnakPerempuan = totHarta * (6 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagCucuPerempuan = totHarta * (2 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (2 / 36);
                                        var bagCucuPerempuan = totHarta * (1 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (2 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagAnakPerempuan = totHarta * (2 / 4);
                                        var bagKakek = totHarta * (1 / 4);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (1 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagAnakPerempuan = totHarta * (6 / 13);
                                        var bagNenek = totHarta * (2 / 13);
                                        var bagCucuPerempuan = totHarta * (2 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (2 / 36);
                                        var bagCucuPerempuan = totHarta * (1 / 36);
                                    }
                                }

                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagAnakPerempuan = totHarta * (18 / 36);
                                        var bagNenek = totHarta * (6 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagAnakPerempuan = totHarta * (9 / 16);
                                        var bagNenek = totHarta * (3 / 16);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagAnakPerempuan = totHarta * (2 / 4);
                                        var bagCucuLelaki = totHarta * (1 / 4);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagAnakPerempuan = totHarta * (6 / 12);
                                            var bagCucuPerempuan = totHarta * (2 / 12);
                                            var bagSaudaraLelaki = totHarta * (1 / 12);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagAnakPerempuan = totHarta * (6 / 12);
                                            var bagCucuPerempuan = totHarta * (1 / 12);
                                            var bagSaudaraPerempuan = totHarta * (2 / 12);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 36);
                                            var bagAnakPerempuan = totHarta * (18 / 36);
                                            var bagCucuPerempuan = totHarta * (6 / 36);
                                            var bagSaudaraLelaki = totHarta * (2 / 36);
                                            var bagSaudaraPerempuan = totHarta * (1 / 36);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 16);
                                            var bagAnakPerempuan = totHarta * (9 / 16);
                                            var bagCucuPerempuan = totHarta * (3 / 16);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagCucuLelaki = totHarta * (2 / 12);
                                        var bagCucuPerempuan = totHarta * (1 / 12);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagAnakPerempuan = totHarta * (2 / 4);
                                        var bagSaudaraLelaki = totHarta * (1 / 4);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagAnakPerempuan = totHarta * (2 / 4);
                                        var bagSaudaraPerempuan = totHarta * (1 / 4);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagAnakPerempuan = totHarta * (6 / 12);
                                        var bagSaudaraLelaki = totHarta * (2 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagAnakPerempuan = totHarta * (3 / 4);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagAnakPerempuan = totHarta * (6 / 13);
                                var bagKakek = totHarta * (2 / 13);
                                var bagNenek = totHarta * (2 / 13);
                            }
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU HIDUP =================================
                    // Bapak & ibu hidup (COMPLETED)
                    else { 
                        var bagPasangan = totHarta * (3 / 13);
                        var bagAnakPerempuan = totHarta * (6 / 13);
                        var bagBapak = totHarta * (2 / 13);
                        var bagIbu = totHarta * (2 / 13);
                    }
                }

                // ================ ANAK LELAKI & PEREMPUAN > ORANGTUA > KAKEK NENEK DARI BAPAK & NENEK DARI IBU ===========================
                // Anak lelaki & Perempuan (COMPLETED)
                else if (anakPerempuan > 0 && anakLelaki > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (10 / 36);
                            var bagAnakPerempuan = totHarta * (5 / 36);
                            var bagBapak = totHarta * (6 / 36);
                            var bagNenekI = totHarta * (6 / 36);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (14 / 36);
                            var bagAnakPerempuan = totHarta * (7 / 36);
                            var bagBapak = totHarta * (6 / 36);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (10 / 36);
                            var bagAnakPerempuan = totHarta * (5 / 36);
                            var bagIbu = totHarta * (6 / 36);
                            var bagKakek = totHarta * (6 / 36);
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (14 / 36);
                            var bagAnakPerempuan = totHarta * (7 / 36);
                            var bagIbu = totHarta * (6 / 36);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (14 / 36);
                            var bagAnakPerempuan = totHarta * (7 / 36);
                            var bagIbu = totHarta * (6 / 36);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9 / 36);
                            var bagAnakLelaki = totHarta * (10 / 36);
                            var bagAnakPerempuan = totHarta * (5 / 36);
                            var bagIbu = totHarta * (6 / 36);
                            var bagKakek = totHarta * (6 / 36);
                        }
                    }

                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (10 / 36);
                                var bagAnakPerempuan = totHarta * (5 / 36);
                                var bagNenekI = totHarta * (6 / 36);
                                var bagKakek = totHarta * (6 / 36);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (14 / 36);
                                var bagAnakPerempuan = totHarta * (7 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagNenek = totHarta * (3 / 36);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (14 / 36);
                                var bagAnakPerempuan = totHarta * (7 / 36);
                                var bagNenekI = totHarta * (6 / 36);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (10 / 36);
                                var bagAnakPerempuan = totHarta * (5 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagKakek = totHarta * (6 / 36);
                                var bagNenek = totHarta * (3 / 36);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (14 / 36);
                                var bagAnakPerempuan = totHarta * (7 / 36);
                                var bagKakek = totHarta * (6 / 36);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (14 / 36);
                                var bagAnakPerempuan = totHarta * (7 / 36);
                                var bagNenek = totHarta * (6 / 36);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (1 / 4);
                                var bagAnakLelaki = totHarta * (2 / 4);
                                var bagAnakPerempuan = totHarta * (1 / 4);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagAnakLelaki = totHarta * (10 / 36);
                                var bagAnakPerempuan = totHarta * (5 / 36);
                                var bagKakek = totHarta * (6 / 36);
                                var bagNenek = totHarta * (6 / 36);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (9 / 36);
                        var bagAnakLelaki = totHarta * (10 / 36);
                        var bagAnakPerempuan = totHarta * (5 / 36);
                        var bagBapak = totHarta * (6 / 36);
                        var bagIbu = totHarta * (6 / 36);
                    }
                }

                // ================ ANAK WAFAT > ORANGTUA > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > CUCU > SAUDARA ====================
                // Anak lelaki & perempuan wafat (COMPLETED)
                else {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // =============== ANAK WAFAT > BAPAK > NENEK DARI IBU > CUCU =====================================
                    // Hanya bapak yang hidup (COMPLETED)
                    if (ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagBapak = totHarta * (2 / 12);
                                    var bagNenekI = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (5 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagBapak = totHarta * (2 / 12);
                                    var bagNenekI = totHarta * (2 / 12);
                                    var bagCucuPerempuan = totHarta * (6 / 12);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagBapak = totHarta * (6 / 36);
                                    var bagNenekI = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (10 / 36);
                                    var bagCucuPerempuan = totHarta * (5 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagBapak = totHarta * (2 / 6);
                                var bagNenekI = totHarta * (1 / 6);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagBapak = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (7 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (1 / 4);
                                    var bagBapak = totHarta * (1 / 4);
                                    var bagCucuPerempuan = totHarta * (2 / 4);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagBapak = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (14 / 36);
                                    var bagCucuPerempuan = totHarta * (7 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagBapak = totHarta * (1 / 2);
                            }
                        }
                    }

                    // ================ ANAK WAFAT > IBU > KAKEK NENEK DARI BAPAK > CUCU > SAUDARA ======================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if (ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagKakek = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (5 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagIbu = totHarta * (2 / 13);
                                    var bagKakek = totHarta * (2 / 13);
                                    var bagCucuPerempuan = totHarta * (6 / 13);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6  / 36);
                                    var bagKakek = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (10 / 36);
                                    var bagCucuPerempuan = totHarta * (5 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagIbu = totHarta * (2 / 6);
                                var bagKakek = totHarta * (1 / 6);
                            }
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (7 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagIbu = totHarta * (2 / 12);
                                        var bagCucuPerempuan = totHarta * (6 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagIbu = totHarta * (2 / 12);
                                        var bagCucuPerempuan = totHarta * (6 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagIbu = totHarta * (6 / 36);
                                        var bagCucuPerempuan = totHarta * (18 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagIbu = totHarta * (3 / 16);
                                        var bagCucuPerempuan = totHarta * (9 / 16);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (14 / 36);
                                    var bagCucuPerempuan = totHarta * (7 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 6);
                                    var bagIbu = totHarta * (2 / 6);
                                    var bagSaudaraLelaki = totHarta * (1 / 6);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 8);
                                    var bagIbu = totHarta * (2 / 8);
                                    var bagSaudaraPerempuan = totHarta * (3 / 8);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 18);
                                    var bagIbu = totHarta * (3 / 18);
                                    var bagSaudaraLelaki = totHarta * (4 / 18);
                                    var bagSaudaraPerempuan = totHarta * (2 / 18);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1 / 2);
                                    var bagIbu = totHarta * (1 / 2);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (7 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagIbu = totHarta * (2 / 12);
                                        var bagCucuPerempuan = totHarta * (6 / 12);
                                        var bagSaudaraLelaki = totHarta * (1 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagIbu = totHarta * (2 / 12);
                                        var bagCucuPerempuan = totHarta * (6 / 12);
                                        var bagSaudaraPerempuan = totHarta * (1 / 12);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagIbu = totHarta * (6 / 36);
                                        var bagCucuPerempuan = totHarta * (18 / 36);
                                        var bagSaudaraLelaki = totHarta * (2 / 36);
                                        var bagSaudaraPerempuan = totHarta * (1 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4 / 16);
                                        var bagIbu = totHarta * (3 / 16);
                                        var bagCucuPerempuan = totHarta * (9 / 16);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (14 / 36);
                                    var bagCucuPerempuan = totHarta * (7 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 6);
                                    var bagIbu = totHarta * (2 / 6);
                                    var bagSaudaraLelaki = totHarta * (1 / 6);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 8);
                                    var bagIbu = totHarta * (2 / 8);
                                    var bagSaudaraPerempuan = totHarta * (3 / 8);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9 / 18);
                                    var bagIbu = totHarta * (3 / 18);
                                    var bagSaudaraLelaki = totHarta * (4 / 18);
                                    var bagSaudaraPerempuan = totHarta * (2 / 18);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1 / 2);
                                    var bagIbu = totHarta * (1 / 2);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if (cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value;
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3 / 12);
                                    var bagIbu = totHarta * (2 / 12);
                                    var bagKakek = totHarta * (2 / 12);
                                    var bagCucuLelaki = totHarta * (5 / 12);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3 / 13);
                                    var bagIbu = totHarta * (2 / 13);
                                    var bagKakek = totHarta * (2 / 13);
                                    var bagCucuPerempuan = totHarta * (6 / 13);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9 / 36);
                                    var bagIbu = totHarta * (6  / 36);
                                    var bagKakek = totHarta * (6 / 36);
                                    var bagCucuLelaki = totHarta * (10 / 36);
                                    var bagCucuPerempuan = totHarta * (5 / 36);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagIbu = totHarta * (2 / 6);
                                var bagKakek = totHarta * (1 / 6);
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU WAFAT > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > CUCU ================
                    // Bapak & ibu wafat (COMPLETED)
                    else if (ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if (nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (5 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagNenekI = totHarta * (2 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagCucuPerempuan = totHarta * (6 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (6 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (10 / 36);
                                        var bagCucuPerempuan = totHarta * (5 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagNenekI = totHarta * (1 / 6);
                                        var bagKakek = totHarta * (1 / 6);
                                        var bagSaudaraLelaki = totHarta * (1 / 6);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 8);
                                        var bagNenekI = totHarta * (1 / 8);
                                        var bagKakek = totHarta * (1 / 8);
                                        var bagSaudaraPerempuan = totHarta * (3 / 8);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 18);
                                        var bagNenekI = totHarta * (3 / 18);
                                        var bagKakek = totHarta * (3 / 18);
                                        var bagSaudaraLelaki = totHarta * (2 / 18);
                                        var bagSaudaraPerempuan = totHarta * (1 / 18);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagNenekI = totHarta * (1 / 6);
                                        var bagKakek = totHarta * (2 / 6);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagCucuLelaki = totHarta * (7 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenekI = totHarta * (1 / 12);
                                            var bagNenek = totHarta * (1 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraLelaki = totHarta * (1 / 12);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenekI = totHarta * (1 / 12);
                                            var bagNenek = totHarta * (1 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraPerempuan = totHarta * (1 / 12);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 36);
                                            var bagNenekI = totHarta * (3 / 36);
                                            var bagNenek = totHarta * (3 / 36);
                                            var bagCucuPerempuan = totHarta * (18 / 36);
                                            var bagSaudaraLelaki = totHarta * (2 / 36);
                                            var bagSaudaraPerempuan = totHarta * (1 / 36);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (8 / 32);
                                            var bagNenekI = totHarta * (3 / 32);
                                            var bagNenek = totHarta * (3 / 32);
                                            var bagCucuPerempuan = totHarta * (18 / 32);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagCucuLelaki = totHarta * (14 / 36);
                                        var bagCucuPerempuan = totHarta * (7 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagSaudaraLelaki = totHarta * (4 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (6 / 14);
                                        var bagNenekI = totHarta * (1 / 14);
                                        var bagNenek = totHarta * (1 / 14);
                                        var bagSaudaraPerempuan = totHarta * (6 / 14);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagSaudaraLelaki = totHarta * (8 / 36);
                                        var bagSaudaraPerempuan = totHarta * (4 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (2 / 4);
                                        var bagNenekI = totHarta * (1 / 4);
                                        var bagNenek = totHarta * (1 / 4);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (7 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenekI = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraLelaki = totHarta * (1 / 12);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenekI = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraPerempuan = totHarta * (1 / 12);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 36);
                                            var bagNenekI = totHarta * (6 / 36);
                                            var bagCucuPerempuan = totHarta * (18 / 36);
                                            var bagSaudaraLelaki = totHarta * (2 / 36);
                                            var bagSaudaraPerempuan = totHarta * (1 / 36);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 16);
                                            var bagNenekI = totHarta * (3 / 16);
                                            var bagCucuPerempuan = totHarta * (9 / 16);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (14 / 36);
                                        var bagCucuPerempuan = totHarta * (7 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagNenekI = totHarta * (1 / 6);
                                        var bagSaudaraLelaki = totHarta * (2 / 6);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 7);
                                        var bagNenekI = totHarta * (1 / 7);
                                        var bagSaudaraPerempuan = totHarta * (3 / 7);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (3 / 18);
                                        var bagNenekI = totHarta * (3 / 18);
                                        var bagSaudaraLelaki = totHarta * (4 / 18);
                                        var bagSaudaraPerempuan = totHarta * (2 / 18);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 2);
                                        var bagNenekI = totHarta * (1 / 2);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagCucuLelaki = totHarta * (5 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagNenekI = totHarta * (1 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagNenek = totHarta * (1 / 13);
                                        var bagCucuPerempuan = totHarta * (6 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagCucuLelaki = totHarta * (10 / 36);
                                        var bagCucuPerempuan = totHarta * (5 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                        var bagSaudaraLelaki = totHarta * (2 / 12);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (6 / 16);
                                        var bagNenekI = totHarta * (1 / 16);
                                        var bagKakek = totHarta * (2 / 16);
                                        var bagNenek = totHarta * (1 / 16);
                                        var bagSaudaraPerempuan = totHarta * (6 / 16);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (18 / 36);
                                        var bagNenekI = totHarta * (3 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagNenek = totHarta * (3 / 36);
                                        var bagSaudaraLelaki = totHarta * (4 / 36);
                                        var bagSaudaraPerempuan = totHarta * (2 / 36);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (6 / 12);
                                        var bagNenekI = totHarta * (1 / 12);
                                        var bagKakek = totHarta * (4 / 12);
                                        var bagNenek = totHarta * (1 / 12);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;

                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if (mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (7 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagKakek = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraLelaki = totHarta * (1 / 12);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagKakek = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraPerempuan = totHarta * (1 / 12);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 36);
                                            var bagKakek = totHarta * (6 / 36);
                                            var bagCucuPerempuan = totHarta * (18 / 36);
                                            var bagSaudaraLelaki = totHarta * (2 / 36);
                                            var bagSaudaraPerempuan = totHarta * (1 / 36);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (1 / 4);
                                            var bagKakek = totHarta * (2 / 4);
                                            var bagCucuPerempuan = totHarta * (1 / 4);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (14 / 36);
                                        var bagCucuPerempuan = totHarta * (7 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (2 / 4);
                                        var bagKakek = totHarta * (1 / 4);
                                        var bagSaudaraLelaki = totHarta * (1 / 4);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 7);
                                        var bagKakek = totHarta * (1 / 7);
                                        var bagSaudaraPerempuan = totHarta * (3 / 7);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (5 / 10);
                                        var bagKakek = totHarta * (2 / 10);
                                        var bagSaudaraLelaki = totHarta * (2 / 10);
                                        var bagSaudaraPerempuan = totHarta * (1 / 10);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 2);
                                        var bagKakek = totHarta * (1 / 2);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (7 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenek = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraLelaki = totHarta * (1 / 12);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagNenek = totHarta * (2 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraPerempuan = totHarta * (1 / 12);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (9 / 36);
                                            var bagNenek = totHarta * (6 / 36);
                                            var bagCucuPerempuan = totHarta * (2 / 36);
                                            var bagSaudaraLelaki = totHarta * (1 / 36);
                                            var bagSaudaraPerempuan = totHarta * (18 / 36);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4 / 16);
                                            var bagNenek = totHarta * (3 / 16);
                                            var bagCucuPerempuan = totHarta * (9 / 16);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagNenek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (14 / 36);
                                        var bagCucuPerempuan = totHarta * (7 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagNenek = totHarta * (1 / 6);
                                        var bagSaudaraLelaki = totHarta * (2 / 6);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 7);
                                        var bagNenek = totHarta * (1 / 7);
                                        var bagSaudaraPerempuan = totHarta * (3 / 7);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 18);
                                        var bagNenek = totHarta * (3 / 18);
                                        var bagSaudaraLelaki = totHarta * (4 / 18);
                                        var bagSaudaraPerempuan = totHarta * (2 / 18);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 2);
                                        var bagNenek = totHarta * (1 / 2);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if (mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagCucuLelaki = totHarta * (3 / 4);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (1 / 4);
                                            var bagCucuPerempuan = totHarta * (2 / 4);
                                            var bagSaudaraLelaki = totHarta * (1 / 4);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (1 / 4);
                                            var bagCucuPerempuan = totHarta * (2 / 4);
                                            var bagSaudaraPerempuan = totHarta * (1 / 4);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                            var bagPasangan = totHarta * (3 / 12);
                                            var bagCucuPerempuan = totHarta * (6 / 12);
                                            var bagSaudaraLelaki = totHarta * (2 / 12);
                                            var bagSaudaraPerempuan = totHarta * (1 / 12);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (1 / 4);
                                            var bagCucuPerempuan = totHarta * (3 / 4);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 4);
                                        var bagCucuLelaki = totHarta * (2 / 4);
                                        var bagCucuPerempuan = totHarta * (1 / 4);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1 / 2);
                                        var bagSaudaraLelaki = totHarta * (1 / 2);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1 / 2);
                                        var bagSaudaraPerempuan = totHarta * (1 / 2);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagSaudaraLelaki = totHarta * (2 / 6);
                                        var bagSaudaraPerempuan = totHarta * (1 / 6);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1 / 1);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if (cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value;
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 12);
                                        var bagKakek = totHarta * (2 / 12);
                                        var bagNenek = totHarta * (2 / 12);
                                        var bagCucuLelaki = totHarta * (5 / 12);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 13);
                                        var bagKakek = totHarta * (2 / 13);
                                        var bagNenek = totHarta * (2 / 13);
                                        var bagCucuPerempuan = totHarta * (6 / 13);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9 / 36);
                                        var bagKakek = totHarta * (6 / 36);
                                        var bagNenek = totHarta * (6 / 36);
                                        var bagCucuLelaki = totHarta * (10 / 36);
                                        var bagCucuPerempuan = totHarta * (5 / 36);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagKakek = totHarta * (1 / 6);
                                        var bagNenek = totHarta * (1 / 6);
                                        var bagSaudaraLelaki = totHarta * (1 / 6);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3 / 8);
                                        var bagKakek = totHarta * (1 / 8);
                                        var bagNenek = totHarta * (1 / 8);
                                        var bagSaudaraPerempuan = totHarta * (3 / 8);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9 / 18);
                                        var bagKakek = totHarta * (3 / 18);
                                        var bagNenek = totHarta * (3 / 18);
                                        var bagSaudaraLelaki = totHarta * (2 / 18);
                                        var bagSaudaraPerempuan = totHarta * (1 / 18);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3 / 6);
                                        var bagKakek = totHarta * (2 / 6);
                                        var bagNenek = totHarta * (1 / 6);
                                    }
                                }
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU HIDUP > CUCU =================================
                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        // Deklarasi cucu
                        var cucu = $(":radio[name=cucu]:checked").val();

                        // Punya cucu - Dari anak lelaki (COMPLETED)
                        if (cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value;
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (COMPLETED)
                            if (cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 12);
                                var bagBapak = totHarta * (2 / 12);
                                var bagIbu = totHarta * (2 / 12);
                                var bagCucuLelaki = totHarta * (5 / 12);
                            }

                            // Cucu perempuan saja (COMPLETED)
                            else if (cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 13);
                                var bagBapak = totHarta * (2 / 13);
                                var bagIbu = totHarta * (2 / 13);
                                var bagCucuPerempuan = totHarta * (6 / 13);
                            }

                            // Cucu lelaki & perempuan (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9 / 36);
                                var bagBapak = totHarta * (6 / 36);
                                var bagIbu = totHarta * (6 / 36);
                                var bagCucuLelaki = totHarta * (10 / 36);
                                var bagCucuPerempuan = totHarta * (5 / 36);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3 / 6);
                            var bagBapak = totHarta * (2 / 6);
                            var bagIbu = totHarta * (1 / 6);
                        }
                    }
                }
            }

            // ==================================== PEWARIS WANITA GA PUNYA ANAK ===============================
            // (COMPLETED)
            else {
                // Deklarasi orangtua
                var ortu = document.getElementById('ortu').value;

                // ============================= BAPAK > NENEK DARI IBU =================================================
                // Hanya bapak yang hidup (COMPLETED)
                if (ortu == ortuArray[0]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (COMPLETED)
                    if (nenek == "Ya") {
                        var bagPasangan = totHarta * (3 / 6);
                        var bagBapak = totHarta * (2 / 6);
                        var bagNenekI = totHarta * (1 / 6);
                    }

                    // Nenek wafat - Sisi ibu (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (1 / 2);
                        var bagBapak = totHarta * (1 / 4);
                    }
                }

                // ============================= IBU > KAKEK NENEK DARI BAPAK > SAUDARA ===================================
                // Hanya ibu yang hidup (COMPLETED)
                else if (ortu == ortuArray[1]) {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        var bagPasangan = totHarta * (3 / 6);
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                    }

                    // Nenek hidup - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3 / 6);
                            var bagIbu = totHarta * (2 / 6);
                            var bagSaudaraLelaki = totHarta * (1 / 6);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 8);
                            var bagIbu = totHarta * (2 / 8);
                            var bagSaudaraPerempuan = totHarta * (3 / 8);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagPasangan = totHarta * (9 / 18);
                            var bagIbu = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (4 / 18);
                            var bagSaudaraPerempuan = totHarta * (2 / 18);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (1 / 2);
                            var bagIbu = totHarta * (1 / 2);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3 / 6);
                            var bagIbu = totHarta * (2 / 6);
                            var bagSaudaraLelaki = totHarta * (1 / 6);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3 / 8);
                            var bagIbu = totHarta * (2 / 8);
                            var bagSaudaraPerempuan = totHarta * (3 / 8);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagPasangan = totHarta * (9 / 18);
                            var bagIbu = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (4 / 18);
                            var bagSaudaraPerempuan = totHarta * (2 / 18);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (1 / 2);
                            var bagIbu = totHarta * (1 / 2);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (3 / 6);
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                    }
                }

                // ============================= BAPAK IBU WAFAT > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > SAUDARA ====================
                // Bapak & ibu wafat (COMPLETED)
                else if (ortu == ortuArray[2]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (COMPLETED)
                    if (nenek == "Ya") {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagNenekI = totHarta * (1 / 6);
                                var bagKakek = totHarta * (1 / 6);
                                var bagSaudaraLelaki = totHarta * (1 / 6);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 8);
                                var bagNenekI = totHarta * (1 / 8);
                                var bagKakek = totHarta * (1 / 8);
                                var bagSaudaraPerempuan = totHarta * (3 / 8);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 18);
                                var bagNenekI = totHarta * (3 / 18);
                                var bagKakek = totHarta * (3 / 18);
                                var bagSaudaraLelaki = totHarta * (2 / 18);
                                var bagSaudaraPerempuan = totHarta * (1 / 18);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagNenekI = totHarta * (1 / 6);
                                var bagKakek = totHarta * (2 / 6);
                            }
                        }

                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagNenek = totHarta * (1 / 12);
                                var bagSaudaraLelaki = totHarta * (4 / 12);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (6 / 14);
                                var bagNenekI = totHarta * (1 / 14);
                                var bagNenek = totHarta * (1 / 14);
                                var bagSaudaraPerempuan = totHarta * (6 / 14);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (18 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagNenek = totHarta * (3 / 36);
                                var bagSaudaraLelaki = totHarta * (8 / 36);
                                var bagSaudaraPerempuan = totHarta * (4 / 36);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (2 / 4);
                                var bagNenekI = totHarta * (1 / 4);
                                var bagNenek = totHarta * (1 / 4);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagNenekI = totHarta * (1 / 6);
                                var bagSaudaraLelaki = totHarta * (2 / 6);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 7);
                                var bagNenekI = totHarta * (1 / 7);
                                var bagSaudaraPerempuan = totHarta * (3 / 7);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 18);
                                var bagNenekI = totHarta * (3 / 18);
                                var bagSaudaraLelaki = totHarta * (4 / 18);
                                var bagSaudaraPerempuan = totHarta * (2 / 18);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagNenekI = totHarta * (1 / 2);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (6 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagKakek = totHarta * (2 / 12);
                                var bagNenek = totHarta * (1 / 12);
                                var bagSaudaraLelaki = totHarta * (2 / 12);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (6 / 16);
                                var bagNenekI = totHarta * (1 / 16);
                                var bagKakek = totHarta * (2 / 16);
                                var bagNenek = totHarta * (1 / 16);
                                var bagSaudaraPerempuan = totHarta * (6 / 16);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (18 / 36);
                                var bagNenekI = totHarta * (3 / 36);
                                var bagKakek = totHarta * (6 / 36);
                                var bagNenek = totHarta * (3 / 36);
                                var bagSaudaraLelaki = totHarta * (4 / 36);
                                var bagSaudaraPerempuan = totHarta * (2 / 36);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (6 / 12);
                                var bagNenekI = totHarta * (1 / 12);
                                var bagKakek = totHarta * (4 / 12);
                                var bagNenek = totHarta * (1 / 12);
                            }
                        }
                    }

                    // Nenek wafat - Sisi ibu (COMPLETED)
                    else {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if (mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (2 / 4);
                                var bagKakek = totHarta * (1 / 4);
                                var bagSaudaraLelaki = totHarta * (1 / 4);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 7);
                                var bagKakek = totHarta * (1 / 7);
                                var bagSaudaraPerempuan = totHarta * (3 / 7);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (5 / 10);
                                var bagKakek = totHarta * (2 / 10);
                                var bagSaudaraLelaki = totHarta * (2 / 10);
                                var bagSaudaraPerempuan = totHarta * (1 / 10);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagKakek = totHarta * (1 / 2);
                            }
                        }

                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagNenek = totHarta * (1 / 6);
                                var bagSaudaraLelaki = totHarta * (2 / 6);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 7);
                                var bagNenek = totHarta * (1 / 7);
                                var bagSaudaraPerempuan = totHarta * (3 / 7);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 18);
                                var bagNenek = totHarta * (3 / 18);
                                var bagSaudaraLelaki = totHarta * (4 / 18);
                                var bagSaudaraPerempuan = totHarta * (2 / 18);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagNenek = totHarta * (1 / 2);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if (mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagSaudaraLelaki = totHarta * (1 / 2);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (1 / 2);
                                var bagSaudaraPerempuan = totHarta * (1 / 2);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagSaudaraLelaki = totHarta * (2 / 6);
                                var bagSaudaraPerempuan = totHarta * (1 / 6);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1 / 1);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (COMPLETED)
                            if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagKakek = totHarta * (1 / 6);
                                var bagNenek = totHarta * (1 / 6);
                                var bagSaudaraLelaki = totHarta * (1 / 6);
                            }

                            // Saudara perempuan saja (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3 / 8);
                                var bagKakek = totHarta * (1 / 8);
                                var bagNenek = totHarta * (1 / 8);
                                var bagSaudaraPerempuan = totHarta * (3 / 8);
                            }

                            // Saudara lelaki & perempuan (COMPLETED)
                            else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                var bagPasangan = totHarta * (9 / 18);
                                var bagKakek = totHarta * (3 / 18);
                                var bagNenek = totHarta * (3 / 18);
                                var bagSaudaraLelaki = totHarta * (2 / 18);
                                var bagSaudaraPerempuan = totHarta * (1 / 18);
                            }

                            // Ga punya saudara (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3 / 6);
                                var bagKakek = totHarta * (2 / 6);
                                var bagNenek = totHarta * (1 / 6);
                            }
                        }
                    }
                }

                // ============================= BAPAK IBU =====================================================
                // Bapak dan Ibu Hidup (COMPLETED)
                else {
                    var bagPasangan = totHarta * (3 / 6);
                    var bagBapak = totHarta * (2 / 6);
                    var bagIbu = totHarta * (1 / 6);
                }
            }
        }

        // STATUS PEWARIS WANITA BELUM MENIKAH =================================================================
        // (COMPLETED)
        else {
            // Deklarasi orangtua
            var ortu = document.getElementById('ortu').value;

            // ============================= BAPAK > NENEK DARI IBU =====================================================
            // Hanya bapak yang hidup (COMPLETED)
            if (ortu == ortuArray[0]) {
                // Deklarasi nenek dari sisi ibu
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                // Nenek hidup - Sisi ibu (COMPLETED)
                if (nenek == "Ya") {
                    var bagBapak = totHarta * (5 / 6);
                    var bagNenekI = totHarta * (1 / 6);
                }

                // Nenek wafat - Sisi ibu (COMPLETED)
                else {
                    var bagBapak = totHarta * (1 / 1);
                }
            }

            // ============================= IBU > KAKEK NENEK DARI BAPAK > SAUDARA =======================================
            // Hanya ibu yang hidup (COMPLETED)
            else if (ortu == ortuArray[1]) {
                // Deklarasi kakek dan nenek dari sisi bapak
                var mbah = document.getElementById('mbah').value;

                // Kakek hidup - Sisi bapak (COMPLETED)
                if (mbah == mbahArray[0]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (1 / 3);
                    }

                    // Saudara perempuan saja (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                        var bagSaudaraPerempuan = totHarta * (3 / 6);
                    }

                    // Saudara lelaki & perempuan (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (1 / 6);
                        var bagKakek = totHarta * (2 / 6);
                        var bagSaudaraLelaki = totHarta * (2 / 6);
                        var bagSaudaraPerempuan = totHarta * (1 / 6);
                    }

                    // Ga punya saudara (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (2 / 3);
                    }
                }

                // Nenek hidup - Sisi bapak (COMPLETED)
                else if (mbah == mbahArray[1]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (2 / 3);
                    }

                    // Saudara perempuan saja (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 5);
                        var bagSaudaraPerempuan = totHarta * (3/5);
                    }

                    // Saudara lelaki & perempuan (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (3 / 18);
                        var bagSaudaraLelaki = totHarta * (10 / 18);
                        var bagSaudaraPerempuan = totHarta * (5 / 18);
                    }

                    // Ga punya saudara (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 1);
                    }
                }

                // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                else if (mbah == mbahArray[2]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (2 / 3);
                    }

                    // Saudara perempuan saja (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 5);
                        var bagSaudaraPerempuan = totHarta * (3/5);
                    }

                    // Saudara lelaki & perempuan (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (3 / 18);
                        var bagSaudaraLelaki = totHarta * (10 / 18);
                        var bagSaudaraPerempuan = totHarta * (5 / 18);
                    }

                    // Ga punya saudara (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 1);
                    }
                }

                // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                if (mbah == mbahArray[0]) {
                    // Deklarasi saudara
                    var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                    // Saudara lelaki saja (COMPLETED)
                    if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (1 / 3);
                        var bagSaudaraLelaki = totHarta * (1 / 3);
                    }

                    // Saudara perempuan saja (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                        var bagIbu = totHarta * (2 / 6);
                        var bagKakek = totHarta * (1 / 6);
                        var bagSaudaraPerempuan = totHarta * (3 / 6);
                    }

                    // Saudara lelaki & perempuan (COMPLETED)
                    else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                        var bagIbu = totHarta * (1 / 6);
                        var bagKakek = totHarta * (2 / 6);
                        var bagSaudaraLelaki = totHarta * (2 / 6);
                        var bagSaudaraPerempuan = totHarta * (1 / 6);
                    }

                    // Ga punya saudara (COMPLETED)
                    else {
                        var bagIbu = totHarta * (1 / 3);
                        var bagKakek = totHarta * (2 / 3);
                    }
                }
            }

            // ============================= BAPAK IBU WAFAT > KAKEK NENEK DARI BAPAK & NENEK DARI IBU > SAUDARA ========================
            // Bapak & ibu wafat (COMPLETED)
            else if (ortu == ortuArray[2]) {
                // Deklarasi nenek dari sisi ibu
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                // Nenek hidup - Sisi ibu (COMPLETED)
                if (nenek == "Ya") {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (2 / 12);
                            var bagKakek = totHarta * (5 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (3 / 6);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (2 / 6);
                            var bagSaudaraLelaki = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (1 / 6);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagKakek = totHarta * (5 / 6);
                        }
                    }

                    // Nenek hidup - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (10 / 12);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 8);
                            var bagNenek = totHarta * (1 / 8);
                            var bagSaudaraPerempuan = totHarta * (6 / 8);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (3 / 36);
                            var bagNenek = totHarta * (3 / 36);
                            var bagSaudaraLelaki = totHarta * (20 / 36);
                            var bagSaudaraPerempuan = totHarta * (10 / 36);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 2);
                            var bagNenek = totHarta * (1 / 2);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 6);
                            var bagSaudaraLelaki = totHarta * (5 / 6);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 4);
                            var bagSaudaraPerempuan = totHarta * (3 / 4);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (10 / 18);
                            var bagSaudaraPerempuan = totHarta * (5 / 18);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 1);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (5 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraPerempuan = totHarta * (6 / 12);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (4 / 12);
                            var bagNenek = totHarta * (1 / 12);
                            var bagSaudaraLelaki = totHarta * (4 / 12);
                            var bagSaudaraPerempuan = totHarta * (2 / 12);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagNenekI = totHarta * (1 / 12);
                            var bagKakek = totHarta * (10 / 12);
                            var bagNenek = totHarta * (1 / 12);
                        }
                    }
                }

                // Nenek wafat - Sisi ibu (COMPLETED)
                else {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (COMPLETED)
                    if (mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagKakek = totHarta * (1 / 2);
                            var bagSaudaraLelaki = totHarta * (1 / 2);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagKakek = totHarta * (1 / 2);
                            var bagSaudaraPerempuan = totHarta * (1 / 2);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagKakek = totHarta * (2 / 5);
                            var bagSaudaraLelaki = totHarta * (2 / 5);
                            var bagSaudaraPerempuan = totHarta * (1 / 5);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagKakek = totHarta * (1 / 1);
                        }
                    }

                    // Nenek hidup - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagNenek = totHarta * (1 / 6);
                            var bagSaudaraLelaki = totHarta * (5 / 6);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagNenek = totHarta * (3 / 4);
                            var bagSaudaraPerempuan = totHarta * (1 / 4);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagNenek = totHarta * (3 / 18);
                            var bagSaudaraLelaki = totHarta * (10 / 18);
                            var bagSaudaraPerempuan = totHarta * (5 / 18);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagNenek = totHarta * (1 / 1);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                    else if (mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagSaudaraLelaki = totHarta * (1 / 1);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagSaudaraPerempuan = totHarta * (1 / 1);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagSaudaraLelaki = totHarta * (2 / 3);
                            var bagSaudaraPerempuan = totHarta * (1 / 3);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {

                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value;
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (COMPLETED)
                        if (saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagKakek = totHarta * (5 / 12);
                            var bagNenek = totHarta * (2 / 12);
                            var bagSaudaraLelaki = totHarta * (5 / 12);
                        }

                        // Saudara perempuan saja (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagKakek = totHarta * (2 / 6);
                            var bagNenek = totHarta * (1 / 6);
                            var bagSaudaraPerempuan = totHarta * (3 / 6);
                        }

                        // Saudara lelaki & perempuan (COMPLETED)
                        else if (saudaraPerempuan > 0 && saudaraLelaki > 0) {
                            var bagKakek = totHarta * (2 / 6);
                            var bagNenek = totHarta * (1 / 6);
                            var bagSaudaraLelaki = totHarta * (2 / 6);
                            var bagSaudaraPerempuan = totHarta * (1 / 6);
                        }

                        // Ga punya saudara (COMPLETED)
                        else {
                            var bagKakek = totHarta * (5 / 6);
                            var bagNenek = totHarta * (1 / 6);
                        }
                    }
                }
            }

            // ============================= BAPAK IBU =========================================================
            // Bapak dan Ibu Hidup (COMPLETED)
            else {
                var bagBapak = totHarta * (2 / 3);
                var bagIbu = totHarta * (1 / 3);
            }
        }
    }

    // =============================================================================================================

    localStorage.setItem("valPasangan", bagPasangan);
    localStorage.setItem("valAnakLelaki", bagAnakLelaki);
    localStorage.setItem("valAnakPerempuan", bagAnakPerempuan);
    localStorage.setItem("valBapak", bagBapak);
    localStorage.setItem("valIbu", bagIbu);
    localStorage.setItem("valKakek", bagKakek);
    localStorage.setItem("valNenek", bagNenek);
    localStorage.setItem("valNenekI", bagNenekI);
    localStorage.setItem("valCucuLelaki", bagCucuLelaki);
    localStorage.setItem("valCucuPerempuan", bagCucuPerempuan);
    localStorage.setItem("valSaudaraLelaki", bagSaudaraLelaki);
    localStorage.setItem("valSaudaraPerempuan", bagSaudaraPerempuan);

    // Label
    localStorage.setItem("inPasangan", kelamin);
    localStorage.setItem("inAnakLelaki", anakLelaki);
    localStorage.setItem("inAnakPerempuan", anakPerempuan);
    localStorage.setItem("inCucuLelaki", cucuLelaki);
    localStorage.setItem("inCucuPerempuan", cucuPerempuan);
    localStorage.setItem("inSaudaraLelaki", saudaraLelaki);
    localStorage.setItem("inSaudaraPerempuan", saudaraPerempuan);
}

const currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
})

if (localStorage.getItem("valPasangan") == "undefined") {
    document.getElementById("locPasangan").value = "Rp 0";
}
else {
    if(localStorage.getItem("inPasangan") == "Lelaki") {
        document.getElementById("labPasangan").innerHTML = 'Pasangan (Istri)';
    }
    else {
        document.getElementById("labPasangan").innerHTML = 'Pasangan (Suami)';
    }
    document.getElementById("locPasangan").value = currency.format(localStorage.getItem("valPasangan"));
}

if (localStorage.getItem("valAnakLelaki") == "undefined") {
    document.getElementById("locAnakLelaki").value = "Rp 0";
}
else {
    document.getElementById("labAnakLelaki").innerHTML = 'Anak Laki-laki (' + localStorage.getItem("inAnakLelaki") + ')';
    document.getElementById("locAnakLelaki").value = currency.format(localStorage.getItem("valAnakLelaki")) + ' (' + currency.format(localStorage.getItem("valAnakLelaki") / localStorage.getItem("inAnakLelaki")) + ')';
}

if (localStorage.getItem("valAnakPerempuan") == "undefined") {
    document.getElementById("locAnakPerempuan").value = "Rp 0";
}
else {
    document.getElementById("labAnakPerempuan").innerHTML = 'Anak Perempuan (' + localStorage.getItem("inAnakPerempuan") + ')';
    document.getElementById("locAnakPerempuan").value = currency.format(localStorage.getItem("valAnakPerempuan")) + ' (' + currency.format(localStorage.getItem("valAnakPerempuan") / localStorage.getItem("inAnakPerempuan")) + ')';
}

if (localStorage.getItem("valBapak") == "undefined") {
    document.getElementById("locBapak").value = "Rp 0";
}
else {
    document.getElementById("locBapak").value = currency.format(localStorage.getItem("valBapak"));
}

if (localStorage.getItem("valIbu") == "undefined") {
    document.getElementById("locIbu").value = "Rp 0";
}
else {
    document.getElementById("locIbu").value = currency.format(localStorage.getItem("valIbu"));
}

if (localStorage.getItem("valKakek") == "undefined") {
    document.getElementById("locKakek").value = "Rp 0";
}
else {
    document.getElementById("locKakek").value = currency.format(localStorage.getItem("valKakek"));
}

if (localStorage.getItem("valNenek") == "undefined") {
    document.getElementById("locNenek").value = "Rp 0";
}
else {
    document.getElementById("locNenek").value = currency.format(localStorage.getItem("valNenek"));
}

if (localStorage.getItem("valNenekI") == "undefined") {
    document.getElementById("locNenekI").value = "Rp 0";
}
else {
    document.getElementById("locNenekI").value = currency.format(localStorage.getItem("valNenekI"));
}

if (localStorage.getItem("valCucuLelaki") == "undefined") {
    document.getElementById("locCucuLelaki").value = "Rp 0";
}
else {
    document.getElementById("labCucuLelaki").innerHTML = 'Cucu Laki-laki (' + localStorage.getItem("inCucuLelaki") + ')';
    document.getElementById("locCucuLelaki").value = currency.format(localStorage.getItem("valCucuLelaki")) + ' (' + currency.format(localStorage.getItem("valCucuLelaki") / localStorage.getItem("inCucuLelaki")) + ')';
}

if (localStorage.getItem("valCucuPerempuan") == "undefined") {
    document.getElementById("locCucuPerempuan").value = "Rp 0";
}
else {
    document.getElementById("labCucuPerempuan").innerHTML = 'Cucu Perempuan (' + localStorage.getItem("inCucuPerempuan") + ')';
    document.getElementById("locCucuPerempuan").value = currency.format(localStorage.getItem("valCucuPerempuan")) + ' (' + currency.format(localStorage.getItem("valCucuPerempuan") / localStorage.getItem("inCucuPerempuan")) + ')';
}

if (localStorage.getItem("valSaudaraLelaki") == "undefined") {
    document.getElementById("locSaudaraLelaki").value = "Rp 0";
}
else {
    document.getElementById("labSaudaraLelaki").innerHTML = 'Saudara Laki-laki (' + localStorage.getItem("inSaudaraLelaki") + ')';
    document.getElementById("locSaudaraLelaki").value = currency.format(localStorage.getItem("valSaudaraLelaki")) + ' (' + currency.format(localStorage.getItem("valSaudaraLelaki") / localStorage.getItem("inSaudaraLelaki")) + ')';
}

if (localStorage.getItem("valSaudaraPerempuan") == "undefined") {
    document.getElementById("locSaudaraPerempuan").value = "Rp 0";
}
else {
    document.getElementById("labSaudaraPerempuan").innerHTML = 'Saudara Perempuan (' + localStorage.getItem("inSaudaraPerempuan") + ')';
    document.getElementById("locSaudaraPerempuan").value = currency.format(localStorage.getItem("valSaudaraPerempuan")) + ' (' + currency.format(localStorage.getItem("valSaudaraPerempuan") / localStorage.getItem("inSaudaraPerempuan")) + ')';
}