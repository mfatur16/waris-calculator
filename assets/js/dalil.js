var baseurl = "https://raw.githubusercontent.com/ianoit/Al-Quran-JSON-Indonesia-Kemenag/master/Surat/4.json";
var dalil = document.getElementById("dalil");
fetch(baseurl)
    .then((result) => result.json())
    .then(({ data }) => {
        document.getElementById("dalil").innerHTML =
            '<div class="bg-[#52BA5B] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">' + data[6].aya_text + '</p><p class="text-justify">'
            + data[6].translation_aya_text + ' (Q.S. An-Nisa[4]:7)</p></div><div class="bg-[#217E3F] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[10].aya_text + '</p><p class="text-justify">'
            + data[10].translation_aya_text + ' (Q.S. An-Nisa[4]:11)</p></div><div class="bg-[#52BA5B] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[11].aya_text + '</p><p class="text-justify">'
            + data[11].translation_aya_text + ' (Q.S. An-Nisa[4]:12)</p></div><div class="bg-[#217E3F] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[12].aya_text + '</p><p class="text-justify">'
            + data[12].translation_aya_text + ' (Q.S. An-Nisa[4]:13)</p></div><div class="bg-[#52BA5B] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[13].aya_text + '</p><p class="text-justify">'
            + data[13].translation_aya_text + ' (Q.S. An-Nisa[4]:14)</p></div><div class="bg-[#217E3F] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[31].aya_text + '</p><p class="text-justify">'
            + data[31].translation_aya_text + ' (Q.S. An-Nisa[4]:32)</p></div><div class="bg-[#52BA5B] p-20"><p class="mb-6 font-[Arab] text-[2em] text-right">'
            + data[175].aya_text + '</p><p class="text-justify">'
            + data[175].translation_aya_text + ' (Q.S. An-Nisa[4]:176)</p></div>'
    })