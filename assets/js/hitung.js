// NOTE YANG SAMA :

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
    
    // (SEMENTARA GENDER LELAKI DAN PEREMPUAN DISATUKAN SISTEM PEMBAGIANNYA)
    // GENDER PEWARIS LELAKI
    if(kelamin == 'Lelaki' || kelamin == 'Perempuan') {
        var nikah = $(":radio[name=nikah]:checked").val();

        // STATUS PEWARIS LELAKI MENIKAH ======================================================================
        if(nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            // ==================================== PEWARIS LELAKI PUNYA ANAK ================================

            if(anak == "Ya") {
                // Deklarasi jumlah anak
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
            
                // ============ ANAK LELAKI > ORANGTUA > KAKEK NENEK =======================================

                // Hanya ada anak lelaki (COMPLETED)
                if(anakLelaki > 0 && anakPerempuan <= 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;
                
                    // Hanya bapak yang hidup (COMPLETED)
                    if(ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagBapak = totHarta * (4/24);
                            var bagNenekI = totHarta * (4/24);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagBapak = totHarta * (4/24);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if(ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if(mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24); 
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagIbu = totHarta * (4/24);
                            var bagNenek = totHarta * (0);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagIbu = totHarta * (4/24);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagNenek = totHarta * (0);
                        }
                    }

                    // Bapak & ibu wafat (COMPLETED)
                    else if(ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if(mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagNenekI = totHarta * (2/24);
                                var bagNenek = totHarta * (2/24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagNenekI = totHarta * (4/24);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagNenekI = totHarta * (2/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (2/24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if(mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagKakek = totHarta * (4/24);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagNenek = totHarta * (4/24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (1/8);
                                var bagAnakLelaki = totHarta * (7/8);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (3/24);
                        var bagAnakLelaki = totHarta * (13/24);
                        var bagBapak = totHarta * (4/24);
                        var bagIbu = totHarta * (4/24);
                    }
                }

                // ============ ANAK PEREMPUAN > ORANGTUA > KAKEK NENEK(2) > CUCU > SAUDARA =================

                // Hanya ada anak perempuan (COMPLETED, TAPI ARRAY 2 MASIH SETENGAH COMPLETED)
                else if(anakLelaki <= 0 && anakPerempuan > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // ========= ANAK PEREMPUAN > BAPAK > NENEK DARI IBU > CUCU ==============================
                    // Hanya bapak yang hidup (COMPLETED)
                    if(ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagBapak = totHarta * (4/24);
                                    var bagNenekI = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (1/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/27);
                                    var bagAnakPerempuan = totHarta * (12/27);
                                    var bagBapak = totHarta * (4/27);
                                    var bagNenekI = totHarta * (4/27);
                                    var bagCucuPerempuan = totHarta * (4/27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagBapak = totHarta * (12/72);
                                    var bagNenekI = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (2/72);
                                    var bagCucuPerempuan = totHarta * (1/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagBapak = totHarta * (5/24);
                                    var bagNenekI = totHarta * (4/24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagBapak = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (5/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagBapak = totHarta * (5/24);
                                    var bagCucuPerempuan = totHarta * (4/24);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagBapak = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (10/72);
                                    var bagCucuPerempuan = totHarta * (5/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (1/8);
                                var bagAnakPerempuan = totHarta * (4/8);
                                var bagBapak = totHarta * (3/8);
                            }
                        }
                    }

                    // ========= ANAK PEREMPUAN > IBU > KAKEK NENEK > CUCU > SAUDARA =======================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if(ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if(mbah == mbahArray[0]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagCucuLelaki = totHarta * (1/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/27);
                                    var bagAnakPerempuan = totHarta * (12/27);
                                    var bagIbu = totHarta * (4/27);
                                    var bagKakek = totHarta * (4/27); 
                                    var bagCucuPerempuan = totHarta * (4/27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72); 
                                    var bagCucuLelaki = totHarta * (2/72);
                                    var bagCucuPerempuan = totHarta * (1/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72);
                                    var bagSaudaraLelaki = totHarta * (2/72);
                                    var bagSaudaraPerempuan = totHarta * (1/72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (5/24);
                                }
                            }
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (5/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (5/40);
                                        var bagAnakPerempuan = totHarta * (121/40);
                                        var bagIbu = totHarta * (7/40);
                                        var bagCucuPerempuan = totHarta * (7/40);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (10/72);
                                    var bagCucuPerempuan = totHarta * (5/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (5/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraPerempuan = totHarta * (5/24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagSaudaraLelaki = totHarta * (10/72);
                                    var bagSaudaraPerempuan = totHarta * (5/72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4/32);
                                    var bagAnakPerempuan = totHarta * (21/32);
                                    var bagIbu = totHarta * (7/32);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (5/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (5/40);
                                        var bagAnakPerempuan = totHarta * (121/40);
                                        var bagIbu = totHarta * (7/40);
                                        var bagCucuPerempuan = totHarta * (7/40);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (10/72);
                                    var bagCucuPerempuan = totHarta * (5/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (5/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraPerempuan = totHarta * (5/24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagSaudaraLelaki = totHarta * (10/72);
                                    var bagSaudaraPerempuan = totHarta * (5/72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (4/32);
                                    var bagAnakPerempuan = totHarta * (21/32);
                                    var bagIbu = totHarta * (7/32);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagCucuLelaki = totHarta * (1/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/27);
                                    var bagAnakPerempuan = totHarta * (12/27);
                                    var bagIbu = totHarta * (4/27);
                                    var bagKakek = totHarta * (4/27); 
                                    var bagCucuPerempuan = totHarta * (4/27);
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72); 
                                    var bagCucuLelaki = totHarta * (2/72);
                                    var bagCucuPerempuan = totHarta * (1/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagAnakPerempuan = totHarta * (36/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72);
                                    var bagSaudaraLelaki = totHarta * (2/72);
                                    var bagSaudaraPerempuan = totHarta * (1/72);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (5/24);
                                }
                            }
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU WAFAT > KAKEK NENEK(2) > CUCU ================
                    // Bapak & ibu wafat (SETENGAH COMPLETED)
                    else if(ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/27);
                                        var bagAnakPerempuan = totHarta * (12/27);
                                        var bagNenekI = totHarta * (4/27);
                                        var bagKakek = totHarta * (4/27);
                                        var bagCucuPerempuan = totHarta * (4/27);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (12/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagCucuLelaki = totHarta * (2/72);
                                        var bagCucuPerempuan = totHarta * (1/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (12/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (5/24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagCucuLelaki = totHarta * (5/24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (2/24);
                                            var bagNenek = totHarta * (2/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (2/24);
                                            var bagNenek = totHarta * (2/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (9/72);
                                            var bagAnakPerempuan = totHarta * (36/72);
                                            var bagNenekI = totHarta * (6/72);
                                            var bagNenek = totHarta * (6/72);
                                            var bagCucuPerempuan = totHarta * (12/72);
                                            var bagSaudaraLelaki = totHarta * (2/72);
                                            var bagSaudaraPerempuan = totHarta * (1/72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (10/80);
                                            var bagAnakPerempuan = totHarta * (42/80);
                                            var bagNenekI = totHarta * (7/80);
                                            var bagNenek = totHarta * (7/80);
                                            var bagCucuPerempuan = totHarta * (14/80);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (6/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagCucuLelaki = totHarta * (10/72);
                                        var bagCucuPerempuan = totHarta * (5/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraLelaki = totHarta * (5/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (6/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (8/64);
                                        var bagAnakPerempuan = totHarta * (42/64);
                                        var bagNenekI = totHarta * (7/64);
                                        var bagNenek = totHarta * (7/64);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (5/24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (COMPLETED)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (9/72);
                                            var bagAnakPerempuan = totHarta * (36/72);
                                            var bagNenekI = totHarta * (12/72);
                                            var bagCucuPerempuan = totHarta * (12/72);
                                            var bagSaudaraLelaki = totHarta * (2/72);
                                            var bagSaudaraPerempuan = totHarta * (1/72);
                                        }

                                        // Ga punya saudara (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (5/40);
                                            var bagAnakPerempuan = totHarta * (21/40);
                                            var bagNenekI = totHarta * (7/40);
                                            var bagCucuPerempuan = totHarta * (7/40);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (12/72);
                                        var bagCucuLelaki = totHarta * (10/72);
                                        var bagCucuPerempuan = totHarta * (5/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (5/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4/32);
                                        var bagAnakPerempuan = totHarta * (21/32);
                                        var bagNenekI = totHarta * (7/32);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (COMPLETED)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (COMPLETED)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (6/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagCucuLelaki = totHarta * (2/72);
                                        var bagCucuPerempuan = totHarta * (1/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (COMPLETED)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenekI = totHarta * (6/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (2/24);
                                        var bagKakek = totHarta * (5/24);
                                        var bagNenek = totHarta * (2/24);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER-PERNYA)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (5/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (5/24);
                                        var bagCucuPerempuan = totHarta * (4/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagCucuLelaki = totHarta * (10/72);
                                        var bagCucuPerempuan = totHarta * (5/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (2/16);
                                        var bagAnakPerempuan = totHarta * (8/16);
                                        var bagKakek = totHarta * (3/16);
                                        var bagSaudaraLelaki = totHarta * (3/16);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagKakek = totHarta * (3/8);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (5/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (9/72);
                                            var bagAnakPerempuan = totHarta * (36/72);
                                            var bagNenek = totHarta * (12/72);
                                            var bagCucuPerempuan = totHarta * (12/72);
                                            var bagSaudaraLelaki = totHarta * (2/72);
                                            var bagSaudaraPerempuan = totHarta * (1/72);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (5/40);
                                            var bagAnakPerempuan = totHarta * (21/40);
                                            var bagNenek = totHarta * (7/40);
                                            var bagCucuPerempuan = totHarta * (7/40);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenek = totHarta * (12/72);
                                        var bagCucuLelaki = totHarta * (10/72);
                                        var bagCucuPerempuan = totHarta * (5/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (5/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagNenek = totHarta * (12/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4/32);
                                        var bagAnakPerempuan = totHarta * (21/32);
                                        var bagNenek = totHarta * (7/32);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagCucuLelaki = totHarta * (3/8);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraLelaki = totHarta * (5/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagCucuPerempuan = totHarta * (4/24);
                                            var bagSaudaraPerempuan = totHarta * (5/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (9/72);
                                            var bagAnakPerempuan = totHarta * (36/72);
                                            var bagCucuPerempuan = totHarta * (12/72);
                                            var bagSaudaraLelaki = totHarta * (10/72);
                                            var bagSaudaraPerempuan = totHarta * (5/72);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                        else {
                                            var bagPasangan = totHarta * (4/32);
                                            var bagAnakPerempuan = totHarta * (21/32);
                                            var bagCucuPerempuan = totHarta * (7/32);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagCucuLelaki = totHarta * (2/8);
                                        var bagCucuPerempuan = totHarta * (1/8);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagSaudaraLelaki = totHarta * (3/8);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagSaudaraPerempuan = totHarta * (3/8);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (4/8);
                                        var bagSaudaraLelaki = totHarta * (2/8);
                                        var bagSaudaraPerempuan = totHarta * (1/8);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA) (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (1/8);
                                        var bagAnakPerempuan = totHarta * (7/8);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagCucuLelaki = totHarta * (2/72);
                                        var bagCucuPerempuan = totHarta * (1/72);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER-PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (2/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagAnakPerempuan = totHarta * (36/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagNenek = totHarta * (6/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (5/24);
                                        var bagNenek = totHarta * (2/24);
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
                        if(cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value; 
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (COMPLETED)
                            if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakPerempuan = totHarta * (12/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuLelaki = totHarta * (1/24);
                            }

                            // Cucu perempuan saja (COMPLETED)
                            else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakPerempuan = totHarta * (12/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuPerempuan = totHarta * (1/24);
                            }

                            // Cucu lelaki & perempuan (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakPerempuan = totHarta * (36/72);
                                var bagBapak = totHarta * (12/72);
                                var bagIbu = totHarta * (12/72);
                                var bagCucuLelaki = totHarta * (2/72);
                                var bagCucuPerempuan = totHarta * (1/72);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakPerempuan = totHarta * (12/24);
                            var bagBapak = totHarta * (5/24);
                            var bagIbu = totHarta * (4/24);
                        }
                    }
                }

                // ============= ANAK LELAKI & PEREMPUAN > ORANGTUA > KAKEK NENEK ===========================

                // Anak lelaki & Perempuan (COMPLETED, TAPI ARRAY 2 MASIH SETENGAH COMPLETED)
                else if(anakPerempuan > 0 && anakLelaki > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;
                
                    // Hanya bapak yang hidup (COMPLETED)
                    if(ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (26/72);
                            var bagAnakPerempuan = totHarta * (13/72);
                            var bagBapak = totHarta * (12/72);
                            var bagNenekI = totHarta * (12/72);
                        }
                        // Nenek wafat - Sisi ibu (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (34/72);
                            var bagAnakPerempuan = totHarta * (17/72);
                            var bagBapak = totHarta * (12/72);
                        }
                    }

                    // Hanya ibu yang hidup (COMPLETED)
                    else if(ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if(mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (26/72);
                            var bagAnakPerempuan = totHarta * (13/72);
                            var bagIbu = totHarta * (12/72);
                            var bagKakek = totHarta * (12/72); 
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (34/72);
                            var bagAnakPerempuan = totHarta * (17/72);
                            var bagIbu = totHarta * (12/72);
                        }
                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (34/72);
                            var bagAnakPerempuan = totHarta * (17/72);
                            var bagIbu = totHarta * (12/72);
                        }
                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            var bagPasangan = totHarta * (9/72);
                            var bagAnakLelaki = totHarta * (26/72);
                            var bagAnakPerempuan = totHarta * (13/72);
                            var bagIbu = totHarta * (12/72);
                            var bagKakek = totHarta * (12/72); 
                        }
                    }

                    // Bapak & ibu wafat (SETENGAH COMPLETED)
                    else if(ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (COMPLETED)
                        if(nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (COMPLETED)
                            if(mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (126/72);
                                var bagAnakPerempuan = totHarta * (13/72);
                                var bagNenekI = totHarta * (12/72);
                                var bagKakek = totHarta * (12/72);
                            }
                            // Nenek hidup - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (34/72);
                                var bagAnakPerempuan = totHarta * (17/72);
                                var bagNenekI = totHarta * (6/72);
                                var bagNenek = totHarta * (6/72);
                            }
                            // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (34/72);
                                var bagAnakPerempuan = totHarta * (17/72);
                                var bagNenekI = totHarta * (12/72);
                            }
                            // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                            else {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (26/72);
                                var bagAnakPerempuan = totHarta * (13/72);
                                var bagNenekI = totHarta * (6/72);
                                var bagKakek = totHarta * (12/72);
                                var bagNenek = totHarta * (6/72);
                            }
                        }
                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            if(mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (126/72);
                                var bagAnakPerempuan = totHarta * (13/72);
                                var bagNenekI = totHarta * (12/72);
                                var bagKakek = totHarta * (12/72);
                            }
                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (34/72);
                                var bagAnakPerempuan = totHarta * (17/72);
                                var bagNenekI = totHarta * (6/72);
                                var bagNenek = totHarta * (6/72);
                            }
                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (34/72);
                                var bagAnakPerempuan = totHarta * (17/72);
                                var bagNenekI = totHarta * (12/72);
                            }
                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (9/72);
                                var bagAnakLelaki = totHarta * (26/72);
                                var bagAnakPerempuan = totHarta * (13/72);
                                var bagNenekI = totHarta * (6/72);
                                var bagKakek = totHarta * (12/72);
                                var bagNenek = totHarta * (6/72);
                            }
                        }
                    }

                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (9/72);
                        var bagAnakLelaki = totHarta * (26/72);
                        var bagAnakPerempuan = totHarta * (13/72);
                        var bagBapak = totHarta * (12/72);
                        var bagIbu = totHarta * (12/72);
                    }
                }

                // ============= ANAK WAFAT > ORANGTUA > KAKEK NENEK(2) > CUCU > SAUDARA ==========================

                // Anak lelaki & perempuan wafat (COMPLETED ARRAY 1, SELAINNYA TINGGAL PER-PERANNYA)
                else {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // =============== ANAK WAFAT > BAPAK > NENEK > CUCU =====================================
                    // Hanya bapak yang hidup (TINGGAL PEMBAGIAN PER-PERNYA)
                    if(ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu 
                        if(nenek == "Ya") {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki 
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagBapak = totHarta * (4/24);
                                    var bagNenekI = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (13/24);
                                }

                                // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/27);
                                    var bagBapak = totHarta * (4/27);
                                    var bagNenekI = totHarta * (4/27);
                                    var bagCucuPerempuan = totHarta * (4/27);
                                }

                                // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagBapak = totHarta * (12/72);
                                    var bagNenekI = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (2/72);
                                    var bagCucuPerempuan = totHarta * (1/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagBapak = totHarta * (5/24);
                                    var bagNenekI = totHarta * (4/24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagBapak = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (5/24);
                                }

                                // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagBapak = totHarta * (5/24);
                                    var bagCucuPerempuan = totHarta * (4/24);
                                }

                                // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagBapak = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (10/72);
                                    var bagCucuPerempuan = totHarta * (5/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (1/8);
                                var bagBapak = totHarta * (3/8);
                            }
                        }
                    }

                    // ================ ANAK WAFAT > IBU > KAKEK NENEK > CUCU > SAUDARA ======================
                    // Hanya ibu yang hidup (COMPLETED)
                    else if(ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (COMPLETED)
                        if(mbah == mbahArray[0]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagCucuLelaki = totHarta * (13/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (36/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (5/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72); 
                                    var bagCucuLelaki = totHarta * (26/72);
                                    var bagCucuPerempuan = totHarta * (13/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (6/24);
                                    var bagIbu = totHarta * (8/24);
                                    var bagKakek = totHarta * (5/24); 
                                    var bagSaudaraLelaki = totHarta * (5/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/15);
                                    var bagIbu = totHarta * (4/15);
                                    var bagKakek = totHarta * (2/15); 
                                    var bagSaudaraPerempuan = totHarta * (6/15);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (15/60);
                                    var bagIbu = totHarta * (10/60);
                                    var bagKakek = totHarta * (14/60);
                                    var bagSaudaraLelaki = totHarta * (14/60);
                                    var bagSaudaraPerempuan = totHarta * (7/60);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3/12);
                                    var bagIbu = totHarta * (4/12);
                                    var bagKakek = totHarta * (5/12);
                                }
                            }
                        }
                        // Nenek hidup - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (17/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (5/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (36/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4/232);
                                        var bagIbu = totHarta * (7/32);
                                        var bagCucuPerempuan = totHarta * (21/32);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (34/72);
                                    var bagCucuPerempuan = totHarta * (17/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/12);
                                    var bagIbu = totHarta * (4/12);
                                    var bagSaudaraLelaki = totHarta * (5/12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/13);
                                    var bagIbu = totHarta * (4/13);
                                    var bagSaudaraPerempuan = totHarta * (6/13);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9/36);
                                    var bagIbu = totHarta * (6/36);
                                    var bagSaudaraLelaki = totHarta * (14/36);
                                    var bagSaudaraPerempuan = totHarta * (7/36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1/4);
                                    var bagIbu = totHarta * (3/4);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (COMPLETED)
                        else if(mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (17/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (5/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (5/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (36/72);
                                        var bagSaudaraLelaki = totHarta * (10/72);
                                        var bagSaudaraPerempuan = totHarta * (5/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (4/232);
                                        var bagIbu = totHarta * (7/32);
                                        var bagCucuPerempuan = totHarta * (21/32);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagCucuLelaki = totHarta * (34/72);
                                    var bagCucuPerempuan = totHarta * (17/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/12);
                                    var bagIbu = totHarta * (4/12);
                                    var bagSaudaraLelaki = totHarta * (5/12);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/13);
                                    var bagIbu = totHarta * (4/13);
                                    var bagSaudaraPerempuan = totHarta * (6/13);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (9/36);
                                    var bagIbu = totHarta * (6/36);
                                    var bagSaudaraLelaki = totHarta * (14/36);
                                    var bagSaudaraPerempuan = totHarta * (7/36);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (1/4);
                                    var bagIbu = totHarta * (3/4);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (COMPLETED)
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki (COMPLETED)
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (COMPLETED)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24); 
                                    var bagCucuLelaki = totHarta * (13/24);
                                }

                                // Cucu perempuan saja (COMPLETED)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (COMPLETED)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (COMPLETED)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (9/72);
                                        var bagIbu = totHarta * (12/72);
                                        var bagKakek = totHarta * (12/72);
                                        var bagCucuPerempuan = totHarta * (36/72);
                                        var bagSaudaraLelaki = totHarta * (2/72);
                                        var bagSaudaraPerempuan = totHarta * (1/72);
                                    }

                                    // Ga punya saudara (COMPLETED)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagKakek = totHarta * (5/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                    }
                                }

                                // Cucu lelaki & perempuan (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (9/72);
                                    var bagIbu = totHarta * (12/72);
                                    var bagKakek = totHarta * (12/72); 
                                    var bagCucuLelaki = totHarta * (26/72);
                                    var bagCucuPerempuan = totHarta * (13/72);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki (COMPLETED)
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (COMPLETED)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (6/24);
                                    var bagIbu = totHarta * (8/24);
                                    var bagKakek = totHarta * (5/24); 
                                    var bagSaudaraLelaki = totHarta * (5/24);
                                }

                                // Saudara perempuan saja (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/15);
                                    var bagIbu = totHarta * (4/15);
                                    var bagKakek = totHarta * (2/15); 
                                    var bagSaudaraPerempuan = totHarta * (6/15);
                                }

                                // Saudara lelaki & perempuan (COMPLETED)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (15/60);
                                    var bagIbu = totHarta * (10/60);
                                    var bagKakek = totHarta * (14/60);
                                    var bagSaudaraLelaki = totHarta * (14/60);
                                    var bagSaudaraPerempuan = totHarta * (7/60);
                                }

                                // Ga punya saudara (COMPLETED)
                                else {
                                    var bagPasangan = totHarta * (3/12);
                                    var bagIbu = totHarta * (4/12);
                                    var bagKakek = totHarta * (5/12);
                                }
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU WAFAT > KAKEK NENEK(2) > CUCU ================
                    // Bapak & ibu wafat (TINGGAL PEMBAGIAN PER PERNYA)
                    else if(ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        if(nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        // Deklarasi saudara
                                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagKakek = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }
                        }
                    }

                    // ================ ANAK WAFAT > BAPAK & IBU HIDUP > CUCU =================================
                    // Bapak & ibu hidup (TINGGAL PEMBAGIAN PER PERNYA)
                    else {
                        // Deklarasi cucu
                        var cucu = $(":radio[name=cucu]:checked").val();

                        // Punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                        if(cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value; 
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuLelaki = totHarta * (1/24);
                            }

                            // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuPerempuan = totHarta * (1/24);
                            }

                            // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuLelaki = totHarta * (1/24);
                                var bagCucuPerempuan = totHarta * (1/24);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagBapak = totHarta * (4/24);
                            var bagIbu = totHarta * (4/24);
                        }
                    }
                }
            }

            // ==================================== PEWARIS LELAKI GA PUNYA ANAK ===============================

            else {
                // Deklarasi orangtua
                var ortu = document.getElementById('ortu').value;

                // ============================= BAPAK > NENEK ============================================
                // Hanya bapak yang hidup (TINGGAL PEMBAGIAN PER-PERNYA)
                if(ortu == ortuArray[0]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                    if(nenek == "Ya") {
                        var bagPasangan = totHarta * (3/24);
                        var bagBapak = totHarta * (4/24);
                        var bagNenekI = totHarta * (4/24);
                    }

                    // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                    else {
                        var bagPasangan = totHarta * (3/24);
                        var bagBapak = totHarta * (4/24);
                    }
                }

                // ============================= IBU > KAKEK NENEK > SAUDARA ===============================
                // Hanya ibu yang hidup (TINGGAL PEMBAGIAN PER-PERNYA)
                else if(ortu == ortuArray[1]) {
                    // Deklarasi kakek dan nenek dari sisi bapak
                    var mbah = document.getElementById('mbah').value;

                    // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                    if(mbah == mbahArray[0]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagSaudaraLelaki = totHarta * (1/24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagSaudaraPerempuan = totHarta * (1/24);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (9/72);
                            var bagIbu = totHarta * (12/72);
                            var bagKakek = totHarta * (12/72);
                            var bagSaudaraLelaki = totHarta * (2/72);
                            var bagSaudaraPerempuan = totHarta * (1/72);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (5/24);
                        }
                    }

                    // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                    else if(mbah == mbahArray[1]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagSaudaraLelaki = totHarta * (1/24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagSaudaraPerempuan = totHarta * (1/24);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (9/72);
                            var bagIbu = totHarta * (12/72);
                            var bagSaudaraLelaki = totHarta * (2/72);
                            var bagSaudaraPerempuan = totHarta * (1/72);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                        }
                    }

                    // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                    else if(mbah == mbahArray[2]) {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagSaudaraLelaki = totHarta * (1/24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagSaudaraPerempuan = totHarta * (1/24);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (9/72);
                            var bagIbu = totHarta * (12/72);
                            var bagSaudaraLelaki = totHarta * (2/72);
                            var bagSaudaraPerempuan = totHarta * (1/72);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                        }
                    }

                    // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER-PERNYA)
                    else {
                        // Deklarasi saudara
                        var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                        var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                        // Saudara lelaki saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagSaudaraLelaki = totHarta * (1/24);
                        }

                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagSaudaraPerempuan = totHarta * (1/24);
                        }

                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER-PERNYA)
                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                            var bagPasangan = totHarta * (9/72);
                            var bagIbu = totHarta * (12/72);
                            var bagKakek = totHarta * (12/72);
                            var bagSaudaraLelaki = totHarta * (2/72);
                            var bagSaudaraPerempuan = totHarta * (1/72);
                        }

                        // Ga punya saudara (TINGGAL PEMBAGIAN PER-PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (5/24);
                        }
                    }
                }

                // ============================= BAPAK IBU WAFAT > KAKEK NENEK(2) > SAUDARA ====================
                // Bapak & ibu wafat (TINGGAL PEMBAGIAN PER PERNYA)
                else if(ortu == ortuArray[2]) {
                    // Deklarasi nenek dari sisi ibu
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                    if(nenek == "Ya") {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        if(mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                            }  
                        }

                        // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }
                    }

                    // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                    else {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        if(mbah == mbahArray[0]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                            }  
                        }

                        // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[1]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[2]) {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi saudara
                            var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                            var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                            // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                            }

                            // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                                var bagSaudaraLelaki = totHarta * (1/24);
                                var bagSaudaraPerempuan = totHarta * (1/24);
                            }

                            // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }
                    }
                }

                // ============================= BAPAK IBU =====================================================
                // Bapak dan Ibu Hidup (TINGGAL PEMBAGIAN PER PERNYA)
                else {
                    var bagPasangan = totHarta * (1/4);
                    var bagBapak = totHarta * (2/4); 
                    var bagIbu = totHarta * (1/4);
                }
            }
        }

        // STATUS PEWARIS LELAKI BELUM MENIKAH =================================================================
        else {
            var ortu = document.getElementById('ortu').value;

            if(ortu == ortuArray[0]) {
                // console.log(ortuArray[0]);
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                if(nenek = "Ya") {
                    var bagBapak = totHarta * (5/6);
                    var bagNenekI = (totHarta - bagBapak) * (1/6);
                }
            }
            else if(ortu == ortuArray[1]) {
                // console.log(ortuArray[1]);
                var bagIbu = totHarta * (1/3);
                
                var mbah = document.getElementById('mbah').value;

                if(mbah == mbahArray[0]){
                    var bagKakek = (totHarta - bagIbu) * (2/3); 
                }
                else if(mbah == mbahArray[3]) {
                    var bagKakek = (totHarta - bagIbu) * (2/3); 
                }
            }
            else if(ortu == ortuArray[2]) {
                // console.log(ortuArray[2]);
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                if(nenek = "Ya") {
                    var mbah = document.getElementById('mbah').value;

                    if(mbah == mbahArray[0]){
                        var bagNenekI = parseInt(totHarta * (1/6));
                        var bagKakek = parseInt(totHarta * (5/6));
                        // console.log(bagNenekI);
                        // console.log(bagKakek);
                    }
                    else if(mbah == mbahArray[1]) {
                        var bagNenekI = totHarta * (1/2);
                        var bagNenek = totHarta * (1/2);
                        // console.log(bagNenekI);
                        // console.log(bagNenek);
                    }
                    else if(mbah == mbahArray[2]) {
                        var bagNenekI = totHarta;
                        // console.log(bagNenekI);
                    }
                    else if(mbah == mbahArray[3]) {
                        var bagNenekI = parseInt(totHarta * (1/12));
                        var bagKakek = parseInt(totHarta * (10/12));
                        var bagNenek = parseInt(totHarta * (1/12));
                        console.log(bagNenekI);
                        console.log(bagKakek);
                        console.log(bagNenek);
                    }
                }
                else {

                }
            }
            else if(ortu == ortuArray[3]) {
                // console.log(ortuArray[3]);
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
            }
        }
    }

// =============================================================================================================

    // GENDER PEWARIS WANITA
    else {
        var nikah = $(":radio[name=nikah]:checked").val();

        if(nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            if(anak = "Ya") {
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
                
                var bagPasangan = totHarta * (1/4);
                // console.log(bagPasangan)
                if(anakLelaki > 0 && anakPerempuan <= 0) {
                    var bagAnakLelaki = totHarta - bagPasangan;
                    // console.log(bagAnakLelaki);
                }
                else if(anakPerempuan > 0 && anakLelaki <= 0) {
                    var bagAnakPerempuan = (totHarta - bagPasangan) * (1/2);
                    // console.log(bagAnakPerempuan);
                }
                else {
                    var bagAnakLelaki = parseInt((totHarta - bagPasangan) * (2/3));
                    // console.log(bagAnakLelaki);

                    var bagAnakPerempuan = parseInt((totHarta - bagPasangan) * (1/3));
                    // console.log(bagAnakPerempuan);
                }
            }
            else {  
                var bagPasangan = totHarta * (1/2);
                // console.log(bagPasangan)
            }
        }
        else{
            var ortu = document.getElementById('ortu').value;

            if(ortu == ortuArray[0]) {
                // console.log(ortuArray[0]);
            }
            else if(ortu == ortuArray[1]) {
                // console.log(ortuArray[1]);
            }
            else if(ortu == ortuArray[2]) {
                // console.log(ortuArray[2]);
                var mbah = document.getElementById('ortu').value;
            }
            else if(ortu == ortuArray[3]) {
                // console.log(ortuArray[3]);
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
}

const currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
})

if(localStorage.getItem("valPasangan") == "undefined") {
    document.getElementById("locPasangan").value = "Rp.0";
}
else {
    document.getElementById("locPasangan").value = currency.format(localStorage.getItem("valPasangan"));
}

if(localStorage.getItem("valAnakLelaki") == "undefined") {
    document.getElementById("locAnakLelaki").value = "Rp.0";
}
else {
    document.getElementById("locAnakLelaki").value = currency.format(localStorage.getItem("valAnakLelaki"));
}

if(localStorage.getItem("valAnakPerempuan") == "undefined") {
    document.getElementById("locAnakPerempuan").value = "Rp.0";
}
else {
    document.getElementById("locAnakPerempuan").value = currency.format(localStorage.getItem("valAnakPerempuan"));
}

if(localStorage.getItem("valBapak") == "undefined") {
    document.getElementById("locBapak").value = "Rp.0";
}
else {
    document.getElementById("locBapak").value = currency.format(localStorage.getItem("valBapak"));
}

if(localStorage.getItem("valIbu") == "undefined") {
    document.getElementById("locIbu").value = "Rp.0";
}
else {
    document.getElementById("locIbu").value = currency.format(localStorage.getItem("valIbu"));
}

if(localStorage.getItem("valKakek") == "undefined") {
    document.getElementById("locKakek").value = "Rp.0";
}
else {
    document.getElementById("locKakek").value = currency.format(localStorage.getItem("valKakek"));
}

if(localStorage.getItem("valNenek") == "undefined") {
    document.getElementById("locNenek").value = "Rp.0";
}
else {
    document.getElementById("locNenek").value = currency.format(localStorage.getItem("valNenek"));
}

if(localStorage.getItem("valNenekI") == "undefined") {
    document.getElementById("locNenekI").value = "Rp.0";
}
else {
    document.getElementById("locNenekI").value = currency.format(localStorage.getItem("valNenekI"));
}

if(localStorage.getItem("valCucuLelaki") == "undefined") {
    document.getElementById("locCucuLelaki").value = "Rp.0";
}
else {
    document.getElementById("locCucuLelaki").value = currency.format(localStorage.getItem("valCucuLelaki"));
}

if(localStorage.getItem("valCucuPerempuan") == "undefined") {
    document.getElementById("locCucuPerempuan").value = "Rp.0";
}
else {
    document.getElementById("locCucuPerempuan").value = currency.format(localStorage.getItem("valCucuPerempuan"));
}

if(localStorage.getItem("valSaudaraLelaki") == "undefined") {
    document.getElementById("locSaudaraLelaki").value = "Rp.0";
}
else {
    document.getElementById("locSaudaraLelaki").value = currency.format(localStorage.getItem("valSaudaraLelaki"));
}

if(localStorage.getItem("valSaudaraPerempuan") == "undefined") {
    document.getElementById("locSaudaraPerempuan").value = "Rp.0";
}
else {
    document.getElementById("locSaudaraPerempuan").value = currency.format(localStorage.getItem("valSaudaraPerempuan"));
}

// document.getElementById("locPasangan").value = currency.format(localStorage.getItem("valPasangan"));
// document.getElementById("locAnakLelaki").value = currency.format(localStorage.getItem("valAnakLelaki"));
// document.getElementById("locAnakPerempuan").value = currency.format(localStorage.getItem("valAnakPerempuan"));
// document.getElementById("locBapak").value = currency.format(localStorage.getItem("valBapak"));
// document.getElementById("locIbu").value = currency.format(localStorage.getItem("valIbu"));
// document.getElementById("locKakek").value =  currency.format(localStorage.getItem("valKakek"));
// document.getElementById("locNenek").value =  currency.format(localStorage.getItem("valNenek"));
// document.getElementById("locNenekI").value =  currency.format(localStorage.getItem("valNenekI"));
// document.getElementById("locCucuLelaki").value =  currency.format(localStorage.getItem("valCucuLelaki"));
// document.getElementById("locCucuPerempuan").value =  currency.format(localStorage.getItem("valCucuPerempuan"));
// document.getElementById("locSaudaraLelaki").value =  currency.format(localStorage.getItem("valSaudaraLelaki"));
// document.getElementById("locSaudaraPerempuan").value =  currency.format(localStorage.getItem("valSaudaraPerempuan"));



// var locPasangan = document.getElementById("locPasangan").value;
// var locAnakLelaki = document.getElementById("locAnakLelaki").value;
// var locAnakPerempuan = document.getElementById("locAnakPerempuan").value;
// var locBapak = document.getElementById("locBapak").value;
// var locKakek = document.getElementById("locKakek").value;
// var locNenekI = document.getElementById("locNenekI").value;                              



// locPasangan = localStorage.getItem("valPasangan");
// if(locPasangan === typeof(undefined)) {
//     locPasangan = "Rp.0";
// }
// else if(locPasangan === typeof(NaN)) {
//     locPasangan = "Rp.0";
// }

// locAnakLelaki = localStorage.getItem("valAnakLelaki");
// if(locAnakLelaki = typeof(undefined)) {
//     locAnakLelaki = "Rp.0";
// }
// else if(locAnakLelaki = typeof(NaN)) {
//     locAnakLelaki = "Rp.0";
// }

// locBapak = localStorage.getItem("valbapak");
// if(locBapak = typeof(undefined)) {
//     locBapak = "Rp.0";
// }
// else if(locBapak = typeof(NaN)) {
//     locBapak = "Rp.0";
// }

// locKakek = localStorage.getItem("valKakek");
// if(locKakek === typeof(undefined)) {
//     locKakek = "Rp.0";
// }
// else if(locKakek === typeof(NaN)) {
//     locKakek = "Rp.0";
// }

// locNenekI = localStorage.getItem("valNenekI");
// if(locNenekI === typeof(undefined)) {
//     locNenekI = "Rp.0";
// }
// else if(locNenekI === typeof(NaN)) {
//     locNenekI = "Rp.0";
// }


// document.getElementById("locAnakPerempuan").value = localStorage.getItem("valAnakPerempuan");

// if(typeof(undefined)) {
//     val("Rp.0");
// }

// if(typeof(NaN)) {
//     val("Rp.0");
// }

// function getFormat() {
//     $('.harta').priceFormat({
//         prefix: 'Rp.',
//         limit: 13,
//         centsLimit: 0,
//         thousandsSeparator: '.'
//     });
// }
