import img01 from "../all-images/boats-img/OCEAN BEAST 65 - pic 1.jpg";
// /ferit-charter-brodica/static/media/RAND SUPREME 27 - 1.9485727005113a7c078a.jpg
import img02 from "../all-images/boats-img/RAND SUPREME 27 - 1.jpg";
import img03 from "../all-images/boats-img/JEANNEAU 64 - 1.jpg";
import img04 from "../all-images/boats-img/Brig Eagle 645.jpg";
import img05 from "../all-images/boats-img/CRANCHI M44 HT - 1.jpg";
import img06 from "../all-images/boats-img/NIMBUS COMMUTER 9.png";
import img07 from "../all-images/boats-img/LAGOON 39 - 1.jpg";
import img08 from "../all-images/boats-img/Fountaine Pajot Saona 47.jpeg";
import img09 from "../all-images/boats-img/HANSE 588 (3+1).jpg";
import img10 from "../all-images/boats-img/SUNSEEKER PREDATOR 50.jpeg";
import img11 from "../all-images/boats-img/MONACHUS 70.jpg";
import img12 from "../all-images/boats-img/BENETEAU OCEANIS 54.jpg";

const boatData = [
    {
        id: 1,
        ime: "Ocean Beast 65",
        tipBroda: "Katamaran",
        regija: "Split",
        godina: 2022,
        kabine: 4, 
        lezajevi: 8,
        gaz: "0,7  m",
        gorivo: "---",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "19,6 m",
        potrošnja: "---",
        tus: 4,
        imgUrl: img01,
        cijena: "30,000",
        posada: "s posadom",
        motor: "2x 170 HP",
        opis: "Ocean-Beast 65 je upečatljivi pomorski motorni katamaran. Ima impresivnu dužinu od 19,60 metara i"+ 
        "masivnu širinu od 11,10 metara i bit će ga teško ne primijetiti. "+
        "Robusan je, izdržljiv i lagan zahvaljujući promišljenoj konstrukciji. "+
        "Korišteni su samo kvalitetni materijali kao što su: čvrsta i otporna Cumaru tikovina, 10 mm zatamnjena sigurnosna stakla, izvanredna"+ 
        "vanjska i unutarnja stolarija i robusni okovi od nehrđajućeg čelika."+
        "Unutrašnjost ovog plutajučeg penthousea više je nego prostrana, a zahvaljujući visokoj visini stropa čini se još prostranijom."+ 
        "Glavna paluba ovog Ocean-Beast 65 ima golemi salon, veliku kuhinju sa šankom i dvije velike kabine s kupaonicom.",
//      datumOd
//      datumDo
    }, 
    {
        id: 2,
        ime: "Rand Supreme 27",
        tipBroda: "Motornjak",
        regija: "Split",
        godina: 2022,
        kabine: 0, 
        lezajevi: 0,
        gaz: "1,3 m",
        gorivo: "Benzin",
        brzinaKrstarenja: "13 kts",
        duljinaPrekoSvega: "8 m",
        potrošnja: "---",
        tus: 0,
        imgUrl: img02,
        cijena: "690",
        posada: "sa skiperom",
        motor: "300 HP Mercruiser 4 stroke",
        opis: "Prostran i udoban kao ništa drugo u kategoriji, Supreme 27 je spektakl zabave i igara na moru, s mnoštvom opcija za zabavu i "+
        "prostorima za sjedenje, sve umotano u upotrebljiv i funkcionalan RAND Boats dizajn. Ogroman prostor na brodu Supreme 27 kulminira u " +
        "krmenom sunčanom salonu koji nudi izvanredan queen size krevet za tri osobe sa savršenim pogledom na horizont.",
//      datumOd
//      datumDo
    }, 
    {
        id: 3,
        ime: "Jeanneau 64",
        tipBroda: "Jedrilica",
        regija: "Split",
        godina: 2016,
        kabine: 5, 
        lezajevi: 10,
        gaz: "2,2 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "20,1 m",
        potrošnja: "---",
        tus: 4,
        imgUrl: img03,
        cijena: "15,120",
        posada: "bez posade",
        motor: "",
        opis: "Rođen u bliskom partnerstvu između Philippea Brianda i Andrewa Wincha, Jeanneau 64 ima elegantne linije s klasičnim proporcijama."+ 
        "Suvremeni stil palube daje jahti bezvremensku privlačnost. "+
        "Svaka Jeanneau Yacht dizajnirana je da bude jedriličar, a Jeanneau Yachts 64 nije iznimka. Ovaj vodeći brod je siguran, brz i "+
        "ugodan za plovidbu. Philippe Briand isporučio je moderan trup koji uključuje tvrdu bradu za veću brzinu, stabilnost i unutarnji volumen.",
//      datumOd
//      datumDo
    }, 
    {
        id: 4,
        ime: "Brig Eagle 645",
        tipBroda: "Gumenjak",
        regija: "Šibenik",
        godina: 2009,
        kabine: 0, 
        lezajevi: 0,
        gaz: "1,3 m",
        gorivo: "Benzin",
        brzinaKrstarenja: "24 kts",
        duljinaPrekoSvega: "6,48 m",
        potrošnja: "---",
        tus: 0,
        imgUrl: img04,
        cijena: "2,100",
        posada: "bez posade",
        motor: "145 HP",
        opis: "The Eagle 650, successor of the bestseller E645, is the RIB for the whole family. The spacious boat with a length of 6.50 m "+ 
        "and a width of 2.50 m invites you for trips and day trips on large inland lakes or on the sea coast. There is enough room for 8 "+
        "passengers on the padded double, front and rear seats and the sun area at the bow, up to 13 passengers can be carried safely on board. "+ 
        "All seats have a spacious storage space for clothes, bathing and food. The folding table is the center of a common meal on board.",
//      datumOd
//      datumDo
    }, 
    {
        id: 5,
        ime: "Cranchi M44 HT",
        tipBroda: "Motornjak",
        regija: "Split",
        godina: 2017,
        kabine: 2, 
        lezajevi: 5,
        gaz: "0,96 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "13,82 m",
        potrošnja: "240 lit/h",
        tus: 4,
        imgUrl: img05,
        cijena: "10,000",
        posada: "sa skiperom",
        motor: "2× 330 HP",
        opis: "Koja je tajna uspješne prodaje M44 HT? Jednostavno je: ovo je pravi brod za krstarenje. Ona ima prepoznatljiv profil, elegantan "+
        "i funkcionalan unutarnji prostor i učinkovito koristi svaki raspoloživi inč prostora i, što je najvažnije, performanse jedrenja su " +
        "izvrsne, a potrošnja goriva niska. Da biste dobro jedrili - i brzo - nisu vam potrebne pretjerane konjske snage. "+
        "Mekani krov jamči maksimalnu sjenu u kokpitu, a može se i potpuno otvoriti, pretvarajući Cranchi M44 HT u autentični otvoreni krov. "+ 
        "Kada želite biti u hladu, dobro izolirani krovni otvor stvara zatvoren, topao prostor.",
//      datumOd
//      datumDo
    }, 
    {
        id: 6,
        ime: "Nimbus Commuter 9",
        tipBroda: "Motornjak",
        regija: "Šibenik",
        godina: 2022,
        kabine: 3, 
        lezajevi: 6,
        gaz: "1,2 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "11 m",
        potrošnja: "---",
        tus: 2,
        imgUrl: img06,
        cijena: "5,000",
        posada: "bez posade",
        motor: "250 HP",
        opis: "C9 je treći u novoj seriji Nimbus od devet metara nakon najnovijih modela W9 i T9. C9 je namjenski izgrađen, brzi prigradski brod, "+
        "konstruiran da podjednako zadovolji potrebe putnika tijekom cijele godine, aktivnih dnevnih izletnika ili onih koji planiraju duža, "+
        "etapna putovanja s noćenjem.",
//      datumOd
//      datumDo
    }, 
    {
        id: 7,
        ime: "Lagoon 39",
        tipBroda: "Katamaran",
        regija: "Split",
        godina: 2017,
        kabine: 4, 
        lezajevi: 8,
        gaz: "1,38 m",
        gorivo: "---",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "15,35 m",
        potrošnja: "---",
        tus: 5,
        imgUrl: img07,
        cijena: "6,400",
        posada: "bez posade",
        motor: "2 x 29 Hp Yanmar",
        opis: "Ova jedinica nove generacije iz brodogradilišta Lagoon izvrsna je izvedba za miješanje brodova i udobnost života na brodu. "+
        "Lagoon je uspješno uspio spojiti plovnost, udobnost i prekrasan volumen. Vrlo visoka jedra i upravljačka stanica na fly bridgeu "+
        "pružaju neospornu udobnost jedrenja. Sa svojim flokom koji se samo uvija, uravnoteženijim planom jedra i palubom mosta u obliku "+
        "galebovih krila, manevri su laki za izvođenje, a navigacija glatka",
//      datumOd
//      datumDo
    }, 
    {
        id: 8,
        ime: "Fountaine Pajot Saona 47",
        tipBroda: "Katamaran",
        regija: "Šibenik",
        godina: 2017,
        kabine: 5, 
        lezajevi: 10,
        gaz: "1,3 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "13,94 m",
        potrošnja: "---",
        tus: 4,
        imgUrl: img08,
        cijena: "12,760",
        posada: "bez posade",
        motor: "Volvo 2x 60HP",
        opis: "The Saona 47, newest model from Fountaine Pajot offers you the total relaxation combined with comfort and elegance. "+
        "This catamaran is perfect for enjoying the sea, sunbathing on the foredeck or spending time in spacious cockpit and with its 5 " +
        "air-conditioned cabins you can take a whole family or lot of friends. This sailing catamaran offers the highest level of comfort, " +
        "style and performance, setting a new standard in modern cruising catamarans.",
//      datumOd
//      datumDo
    }, 
    {
        id: 9,
        ime: "HANSE 588 (3+1)",
        tipBroda: "Jedrilica",
        regija: "Pula",
        godina: 2021,
        kabine: 3, 
        lezajevi: 6,
        gaz: "2,6 m",
        gorivo: "---",
        brzinaKrstarenja: "24 kts",
        duljinaPrekoSvega: "17,2 m",
        potrošnja: "---",
        tus: 3,
        imgUrl: img09,
        cijena: "12,500",
        posada: "bez posade",
        motor: "110 HP",
        opis: "Nova Hanse 588 kombinira performanse u jedrenju s udobnošću, ističe se upadljivim dizajnom i budi strast. " +
        "Nove značajke uključuju veću površinu jedara uz viši jarbol i dodatni prednji štraj za reacher. Kokpit donosi novitete poput " +
        "elegantnog nadgrađa i bara s roštiljem. Jedna od najvažnijih inovacija je tiha vlasnička kabina koja vlasniku pruža jedinstven " +
        "osjećaj mira i opuštanja." ,
//      datumOd
//      datumDo
    }, 
    {
        id: 10,
        ime: "Sunseeker Predator 50",
        tipBroda: "Motornjak",
        regija: "Sukosan",
        godina: 2019,
        kabine: 2, 
        lezajevi: 4,
        gaz: "1,3 m",
        gorivo: "Dizel",
        duljinaPrekoSvega: "16,48 m",
        brzinaKrstarenja: " ---",
        potrošnja: "---",
        tus: 2,
        imgUrl: img10,
        cijena: "15,800",
        posada: "sa skiperom",
        motor: "Volvo D8 600 HP",
        opis: "Combining flexibility and cutting-edge design, the Predator 50 sets a new benchmark for the performance cruiser format. "+
        "A yacht for all occasions, it boasts all the refinement and attention to detail you’d expect of any Sunseeker. Inside and out, "+ 
        "there’s ample room for entertaining. The open plan design is enhanced by the addition of a fully opening hardtop roof and fully "+ 
        "opening cockpit glazing, enhancing the saloon and bringing the outside in",
//      datumOd
//      datumDo
    }, 
    {
        id: 11,
        ime: "Monachus 70",
        tipBroda: "Motornjak",
        regija: "Šibenik",
        godina: 2022,
        kabine: 4, 
        lezajevi: 8,
        gaz: "1,3 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "24 kts",
        duljinaPrekoSvega: "21,1 m",
        potrošnja: "240 lit/h",
        tus: 4,
        imgUrl: img11,
        cijena: "30,000",
        posada: "s posadom",
        motor: "VOLVO PENTA IPS 1200",
        opis: "Monachus 70 – impresivna, elegantna i luksuzna motorna jahta sportskog duha i atraktivna izgleda koja svojom pojavom " +
        "promatrače ne ostavlja ravnodušnima. Vrhunskih je plovnih osobina, sigurna i uglađena u svakom pogledu, dizajnirana za nautičare "+
        "dinamična životnog stila uz najviše standarde EC kategorije ‘A’.",
//      datumOd
//      datumDo
    }, 
    {
        id: 12,
        ime: "Beneteau Oceanis 54",
        tipBroda: "Jedrilica",
        regija: "Split",
        godina: 2023,
        kabine: 4, 
        lezajevi: 10,
        gaz: "2,5 m",
        gorivo: "Dizel",
        brzinaKrstarenja: "---",
        duljinaPrekoSvega: "17,17",
        potrošnja: "---",
        tus: 4,
        imgUrl: img12,
        cijena: "11,475",
        posada: "bez posade",
        motor: "Yanmar Diesel 110 HP",
        opis: "The Beneteau Oceanis Yacht 54 is produced by the brand Beneteau Yachts since 2020. Beneteau Oceanis Yacht 54 is a 17.12 meters " + 
        "cruising yacht with a Mediterranean cockpit with 4 guest cabins and a draft of 2.50 meters. The yacht has a fiberglass hull with " + 
        "a CE certification class (A) and can navigate in the open ocean."
//      datumOd
//      datumDo
    }
]

export default boatData;