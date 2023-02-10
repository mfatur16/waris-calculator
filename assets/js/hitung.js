// document.getElementById('mbah').addEventListener('mouseup', hitung);

function hitung() {
    // Jumlah Harta
    var totHarta = document.getElementById('totHarta').value.replace('Rp', '').replace(/(\..*?)/g, '');
    var kelamin = $(":radio[name=kelamin]:checked").val();
    
    // Gender
    if(kelamin == 'Lelaki') {
        var nikah = $(":radio[name=nikah]:checked").val();

        // Status
        if(nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            // Punya anak
            if(anak == "Ya") {
                // Deklarasi jumlah anak
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
            
                // ===================== ANAK LELAKI > ORANGTUA > KAKEK NENEK ==========================

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

                // ============ ANAK PEREMPUAN > ORANGTUA > KAKEK NENEK > CUCU > SAUDARA =================

                // Hanya ada anak perempuan
                else if(anakLelaki <= 0 && anakPerempuan > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;

                    // ============= ANAK PEREMPUAN > BAPAK > NENEK > CUCU ==================================
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

                    // ================ ANAK PEREMPUAN > IBU > KAKEK NENEK > CUCU > SAUDARA ==================
                    // Hanya ibu yang hidup
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
                        // Nenek hidup - Sisi bapak
                        else if(mbah == mbahArray[1]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (17/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (0);
                                }

                                // Cucu perempuan saja
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (12/24);
                                    }
                                }

                                // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (12/24);
                                    var bagCucuPerempuan = totHarta * (12/24);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                }

                                // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                }
                            }
                        }

                        // Kakek & nenek wafat - Sisi bapak
                        else if(mbah == mbahArray[2]) {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (1/24);
                                }

                                // Cucu perempuan saja
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24); 
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24); 
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagIbu = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }

                                // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (1/24);
                                    var bagCucuPerempuan = totHarta * (1/24);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24); 
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                }

                                // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24); 
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                }
                            }
                        }

                        // Kakek & nenek hidup - Sisi bapak
                        else {
                            // Deklarasi cucu
                            var cucu = $(":radio[name=cucu]:checked").val();

                            // Punya cucu - Dari anak lelaki
                            if(cucu == "Ya") {
                                var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (13/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (1/24);
                                }

                                // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (13/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24);
                                    var bagCucuPerempuan = totHarta * (1/24);
                                }

                                // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (13/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24);
                                    var bagCucuLelaki = totHarta * (1/24);
                                    var bagCucuPerempuan = totHarta * (1/24);
                                }
                            }
                            // Ga punya cucu - Dari anak lelaki
                            else {
                                // Deklarasi saudara
                                var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24); 
                                    var bagKakek = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                }

                                // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24); 
                                    var bagKakek = totHarta * (4/24);
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                else if(saudaraPerempuan > 0 && saudaraLelaki > 0) {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24); 
                                    var bagKakek = totHarta * (4/24);
                                    var bagSaudaraLelaki = totHarta * (1/24);
                                    var bagSaudaraPerempuan = totHarta * (1/24);
                                }

                                // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                else {
                                    var bagPasangan = totHarta * (3/24);
                                    var bagAnakPerempuan = totHarta * (12/24);
                                    var bagIbu = totHarta * (4/24);
                                    var bagKakek = totHarta * (4/24);
                                }
                            }
                        }
                    }

                    // =========== ANAK PEREMPUAN > BAPAK & IBU WAFAT > KAKEK NENEK(2) > CUCU ================
                    // Bapak & ibu wafat
                    else if(ortu == ortuArray[2]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu
                        if(nenek == "Ya") {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
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
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagNenek = totHarta * (4/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
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
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);
                                            var bagNenekI = totHarta * (4/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak 
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenekI = totHarta * (4/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }
                        }

                        // Nenek wafat - Sisi ibu
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak
                            if(mbah == mbahArray[0]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Nenek hidup - Sisi bapak
                            else if(mbah == mbahArray[1]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
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
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagNenek = totHarta * (4/24);
                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagNenek = totHarta * (4/24);
                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                                }
                            }

                            // Kakek & nenek wafat - Sisi bapak
                            else if(mbah == mbahArray[2]) {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
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
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                        }

                                        // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                        else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                            var bagCucuPerempuan = totHarta * (1/24);
                                            var bagSaudaraLelaki = totHarta * (1/24);
                                            var bagSaudaraPerempuan = totHarta * (1/24);
                                        }

                                        // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                        else {
                                            var bagPasangan = totHarta * (3/24);
                                            var bagAnakPerempuan = totHarta * (12/24);

                                        }
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                    }
                                }
                            }

                            // Kakek & nenek hidup - Sisi bapak 
                            else {
                                // Deklarasi cucu
                                var cucu = $(":radio[name=cucu]:checked").val();

                                // Punya cucu - Dari anak lelaki 
                                if(cucu == "Ya") {
                                    var cucuLelaki = document.getElementById('cucuLelaki').value; 
                                    var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                                    // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                    }

                                    // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }

                                    // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagCucuLelaki = totHarta * (1/24);
                                        var bagCucuPerempuan = totHarta * (1/24);
                                    }
                                }
                                // Ga punya cucu - Dari anak lelaki 
                                else {
                                    // Deklarasi saudara
                                    var saudaraLelaki = document.getElementById('saudaraLelaki').value; 
                                    var saudaraPerempuan = document.getElementById('saudaraPerempuan').value;

                                    // Saudara lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    if(saudaraLelaki > 0 && saudaraPerempuan <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                    }

                                    // Saudara perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Saudara lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                                    else if(saudaraPerempuan > 0 && saudaraLelaki <= 0) {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                        var bagSaudaraLelaki = totHarta * (1/24);
                                        var bagSaudaraPerempuan = totHarta * (1/24);
                                    }

                                    // Ga punya saudara (TINGGAL PEMBAGIAN PER PERNYA)
                                    else {
                                        var bagPasangan = totHarta * (3/24);
                                        var bagAnakPerempuan = totHarta * (12/24);
                                        var bagKakek = totHarta * (4/24);
                                        var bagNenek = totHarta * (4/24);
                                    }
                         
                                }
                            }
                        }
                    }

                    // ===================== ANAK PEREMPUAN > BAPAK & IBU HIDUP > CUCU =====================
                    // Bapak & ibu hidup
                    else {
                        // Deklarasi cucu
                        var cucu = $(":radio[name=cucu]:checked").val();

                        // Punya cucu - Dari anak lelaki
                        if(cucu == "Ya") {
                            var cucuLelaki = document.getElementById('cucuLelaki').value; 
                            var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                            // Cucu lelaki saja (TINGGAL PEMBAGIAN PER PERNYA)
                            if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakPerempuan = totHarta * (12/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuLelaki = totHarta * (1/24);
                            }

                            // Cucu perempuan saja (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakPerempuan = totHarta * (12/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuPerempuan = totHarta * (1/24);
                            }

                            // Cucu lelaki & perempuan (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakPerempuan = totHarta * (12/24);
                                var bagBapak = totHarta * (4/24);
                                var bagIbu = totHarta * (4/24);
                                var bagCucuLelaki = totHarta * (1/24);
                                var bagCucuPerempuan = totHarta * (1/24);
                            }
                        }
                        // Ga punya cucu - Dari anak lelaki (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakPerempuan = totHarta * (12/24);
                            var bagBapak = totHarta * (4/24);
                            var bagIbu = totHarta * (4/24);
                        }
                    }
                }

                // ===================== ANAK LELAKI & PEREMPUAN > ORANGTUA > KAKEK NENEK ====================

                // Anak lelaki & Perempuan
                else if(anakPerempuan > 0 && anakLelaki > 0) {
                    // Deklarasi orangtua
                    var ortu = document.getElementById('ortu').value;
                
                    // Hanya bapak yang hidup (TINGGAL PEMBAGIAN PER PERNYA)
                    if(ortu == ortuArray[0]) {
                        // Deklarasi nenek dari sisi ibu
                        var nenek = $(":radio[name=nenekIbu]:checked").val();

                        // Nenek hidup - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        if(nenek == "Ya") {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagBapak = totHarta * (4/24);
                            var bagNenekI = totHarta * (4/24);
                        }
                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagBapak = totHarta * (4/24);
                        }
                    }

                    // Hanya ibu yang hidup (TINGGAL PEMBAGIAN PER PERNYA)
                    else if(ortu == ortuArray[1]) {
                        // Deklarasi kakek dan nenek dari sisi bapak
                        var mbah = document.getElementById('mbah').value;

                        // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        if(mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24); 
                        }
                        // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                            var bagNenek = totHarta * (0);
                        }
                        // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (17/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                        }
                        // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagAnakLelaki = totHarta * (13/24);
                            var bagAnakPerempuan = totHarta * (13/24);
                            var bagIbu = totHarta * (4/24);
                            var bagKakek = totHarta * (4/24);
                            var bagNenek = totHarta * (0);
                        }
                    }

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
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagNenekI = totHarta * (4/24);
                                var bagKakek = totHarta * (4/24);
                            }
                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagNenekI = totHarta * (2/24);
                                var bagNenek = totHarta * (2/24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagNenekI = totHarta * (4/24);
                            }
                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagNenekI = totHarta * (2/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (2/24);
                            }
                        }
                        // Nenek wafat - Sisi ibu (TINGGAL PEMBAGIAN PER PERNYA)
                        else {
                            // Deklarasi kakek dan nenek dari sisi bapak
                            var mbah = document.getElementById('mbah').value;
                            
                            // Kakek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            if(mbah == mbahArray[0]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagKakek = totHarta * (4/24);
                            }
                            // Nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[1]) {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (17/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagNenek = totHarta * (4/24);
                            }
                            // Kakek & nenek wafat - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else if(mbah == mbahArray[2]) {
                                var bagPasangan = totHarta * (1/8);
                                var bagAnakLelaki = totHarta * (7/8);
                                var bagAnakPerempuan = totHarta * (13/24);
                            }
                            // Kakek & nenek hidup - Sisi bapak (TINGGAL PEMBAGIAN PER PERNYA)
                            else {
                                var bagPasangan = totHarta * (3/24);
                                var bagAnakLelaki = totHarta * (13/24);
                                var bagAnakPerempuan = totHarta * (13/24);
                                var bagKakek = totHarta * (4/24);
                                var bagNenek = totHarta * (4/24);
                            }
                        }
                    }

                    // (SAMPE PEMBAGIAN YANG INI SISTEMNYA JALAN, TINGGAL PEMBAGIAN YANG DIATAS-ATAS BELOM)
                    // Bapak & ibu hidup (COMPLETED)
                    else {
                        var bagPasangan = totHarta * (9/72);
                        var bagAnakLelaki = totHarta * (26/72);
                        var bagAnakPerempuan = totHarta * (13/72);
                        var bagBapak = totHarta * (12/72);
                        var bagIbu = totHarta * (12/72);
                    }
                }

// =========================== #BALE TERAKHIR GUA SAMPE SINI ==========================================

                // ============ ANAK WAFAT > ORANGTUA > KAKEK NENEK > CUCU > SAUDARA ==========================

                // Anak lelaki & perempuan wafat
                else {
                    var cucu = $(":radio[name=cucu]:checked").val();
                    
                    // Punya cucu
                    if(cucu == "Ya") {
                        var cucuLelaki = document.getElementById('cucuLelaki').value; 
                        var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                        // Hanya cucu lelaki yang hidup
                        if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuLelaki = totHarta * (7/8);
                        }

                        // Hanya cucu perempuan yang hidup
                        else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuPerempuan = totHarta * (7/8);
                        }

                        // Cucu lelaki & perempuan hidup
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagCucuLelaki = totHarta * (14/24);
                            var bagCucuPerempuan = totHarta * (7/24);
                        }
                    }

                    // Tidak punya cucu
                    else {
                        var bagPasangan = totHarta * (1/1);
                    }
                }
            }

// ============================================= GA PUNYA ANAK ==============================================

            // Ga punya anak >> Orangtua
            else {
                // console.log(bagPasangan)
                var ortu = document.getElementById('ortu').value;
                
                // Bapak Hidup, Ibu Tidak
                if(ortu == ortuArray[0]) {
                    // console.log(ortuArray[0]);
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek dari Ibu Hidup (Completed)
                    if(nenek == "Ya") {
                        var bagPasangan = totHarta * (3/12);
                        var bagBapak = totHarta * (7/12);
                        var bagNenekI = totHarta * (2/12);
                    }
                    // Nenek dari Ibu Tidak (Completed)
                    else {
                        var bagPasangan = totHarta * (1/4);
                        var bagBapak = totHarta * (3/4);
                    }
                }
                // Bapak Tidak, Ibu Hidup
                else if(ortu == ortuArray[1]) {
                    // console.log(ortuArray[1]);
                    
                    var mbah = document.getElementById('mbah').value;

                    // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                    if(mbah == mbahArray[0]) {
                        var bagPasangan = totHarta * (3/12);
                        var bagIbu = totHarta * (4/12);
                        var bagKakek = totHarta * (5/12); 
                    }
                    // Kakek Tidak, Nenek Hidup - Bapak (Completed)
                    else if(mbah == mbahArray[1]) {
                        var bagPasangan = totHarta * (1/4);
                        var bagIbu = totHarta * (3/4);
                    }
                    // Kakek dan Nenek Tidak - Bapak (Completed)
                    else if(mbah == mbahArray[2]) {
                        var bagPasangan = totHarta * (1/4);
                        var bagIbu = totHarta * (3/4);
                    }
                    // Kakek dan Nenek Hidup - Bapak (Completed)
                    else {
                        var bagPasangan = totHarta * (3/12);
                        var bagIbu = totHarta * (4/12);
                        var bagKakek = totHarta * (5/12); 
                    }
                }
                // Bapak dan Ibu Tidak
                else if(ortu == ortuArray[2]) {
                    // console.log(ortuArray[2]);
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek dari Ibu Hidup (Completed)
                    if(nenek == "Ya") {
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                        if(mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3/12);
                            var bagNenekI = totHarta * (2/12);
                            var bagKakek = totHarta * (7/12);
                        }
                        // Kakek Tidak, Nenek Hidup - Bapak (Completed)
                        else if(mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (2/8);
                            var bagNenekI = totHarta * (3/8);
                            var bagNenek = totHarta * (3/8);
                        }
                        // Kakek dan Nenek Tidak - Bapak (Completed)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (1/4);
                            var bagNenekI = totHarta * (3/4);
                        }
                        // Kakek dan Nenek Hidup - Bapak (Completed)
                        else {
                            var bagPasangan = totHarta * (3/12);
                            var bagNenekI = totHarta * (1/12);
                            var bagKakek = totHarta * (7/12);
                            var bagNenek = totHarta * (1/12)
                        }
                    }
                    // Nenek dari Ibu Tidak (Completed)
                    else {
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                        if(mbah == mbahArray[0] || mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (1/4);
                            var bagKakek = totHarta * (3/4);
                        }
                        // Kakek dan Nenek Tidak - Bapak (Completed)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta;
                        }
                        // Kakek dan Nenek Hidup - Bapak (Completed)
                        else {
                            var bagPasangan = totHarta * (3/12);
                            var bagKakek = totHarta * (7/12);
                            var bagNenek = totHarta * (2/12);
                        }
                    }
                }
                // Bapak dan Ibu Hidup
                else {

                    // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                    var bagPasangan = totHarta * (1/4);
                    var bagBapak = totHarta * (2/4); 
                    var bagIbu = totHarta * (1/4);
                }
            }
        }
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

document.getElementById("locPasangan").value = currency.format(localStorage.getItem("valPasangan"));
document.getElementById("locAnakLelaki").value = currency.format(localStorage.getItem("valAnakLelaki"));
document.getElementById("locAnakPerempuan").value = currency.format(localStorage.getItem("valAnakPerempuan"));
document.getElementById("locBapak").value = currency.format(localStorage.getItem("valBapak"));
document.getElementById("locIbu").value = currency.format(localStorage.getItem("valIbu"));
document.getElementById("locKakek").value =  currency.format(localStorage.getItem("valKakek"));
document.getElementById("locNenek").value =  currency.format(localStorage.getItem("valNenek"));
document.getElementById("locNenekI").value =  currency.format(localStorage.getItem("valNenekI"));
document.getElementById("locCucuLelaki").value =  currency.format(localStorage.getItem("valCucuLelaki"));
document.getElementById("locCucuPerempuan").value =  currency.format(localStorage.getItem("valCucuPerempuan"));
document.getElementById("locSaudaraLelaki").value =  currency.format(localStorage.getItem("valSaudaraLelaki"));
document.getElementById("locSaudaraPerempuan").value =  currency.format(localStorage.getItem("valSaudaraPerempuan"));

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
