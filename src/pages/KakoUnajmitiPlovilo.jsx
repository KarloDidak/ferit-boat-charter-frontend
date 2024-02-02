import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/kako-unajmiti-plovilo.css";


const KakoUnajmitiPlovilo = () => {
    return(

        <Helmet>
            <section>
                <Container>
                    <Row>
                <h1 className="space" > Kako Unajmiti Plovilo </h1>

                <div>
                    <p>Rezervacija broda jednostavan je proces. Sve što morate napraviti je odabrati brod i marinu i javiti se našem odjelu za 
                        rezervacije. Oni ce Vas kontaktirati sa konkretnom ponudom, a kada se definirate sve detalje (brod, bazu, datume) 
                        primit cete naše Uvjete čartera i predračun te odraditi uplate prema uvjetima navedenima u ugovoru.
                    </p>

                    <p>
                    Kako ne bi došlo do zabune procitajte ovih par redaka o tome kako rezervirati brod za čarter.
                    </p>

                    <ol>
                        <p>
                            <li>
                            Odaberite brod i startnu bazu (marinu), odnosno područje u kojem cete ploviti. Pri izboru baze imajte na umu 
                            prometnu povezanost, vrstu najma (jednosmjerni ili povratni) i raspoloživost brodova. Na našoj stranici naći 
                            ćete informacije o svim brodovima koje imamo u ponudi kao i marine u kojima su dostupni, ali za većinu brodova 
                            moguće je organizirati transfer od maticne baze do neke druge marine, što se i dodatno naplacuje. Također, 
                            transfer nije moguce uvijek obaviti zbog stiske s vremenom, ali svaki slučaj je poseban pa ćete se u slucaju 
                            potrebe dogovoriti s našim odjelom za rezervacije. Pri izboru broda pazite na broj gostiju, imajte na umu da 
                            morate ostaviti i mjesto za spavanje za skipera i/ili hostesu ukoliko ih želite unajmiti, ali glavna vodilja 
                            trebale bi bite Vaše želje i mogucnosti. Također, obavezno navedite ako želite neku dodatnu opremu ili uslugu 
                            (sportska oprema, vanbrodski motor, spinaker…). Pregledajte našu ponudu brodova za čarter i kontaktirajte nas 
                            sa Vašim upitom za neki konkretan brod, ili nam pak napišite e-mail sa svim važnim informacijama (tip broda, 
                            datum čartera, broj osoba, broj kabina, podrucje plovidbe, skiper, dodatna oprema…) i naši agenti će Vas 
                            kontaktirati s ponudama. Osim toga, možete i ispuniti rezervacijski formular koji cete pronaci na našim stranicama.
                            </li>
                        </p>

                        <p>
                            <li>
                            Kada u naš odjel za rezervacije stigne Vaš upit, kolegice ce Vam sastaviti ponudu za jedan ili više brodova koji 
                            odgovaraju Vašim željama i poslati Vam je na Vašu e-mail adresu. Primit ćete podatke o brodu, nekoliko fotografija 
                            i popis opreme. Budete li imali bilo kakvih pitanja o brodovima slobodno nam se obratite, a kada se odlucite koji 
                            brod želite, obavezno to potvrdite e-mailom – jednostavan kratki tekst kojim potvrđujete brod, datum čartera, bazu 
                            i broj osoba bit ce sasvim dovoljan. Nakon što primite naše ponude, imate nekoliko dana da izaberete – brodove 
                            možemo „čuvati“ za Vas samo nekoliko dana, pa je važno da ne odugovlačite s odlukom, posebno ako je sezona rezervacija 
                            već u tijeku. Imajte na umu da je bolje da nam se što prije javite s upitom, jer što dulje čekate veća je mogućnost 
                            da je brod koji želite u terminu koji želite već rezerviran.
                            </li>
                        </p>

                        <li>
                        Nakon što smo primili Vašu potvrdu rezervacije poslat ćemo Vam predračun i Uvjete najma (vrijedi kao ugovor) – 
                        Uvjeti najma objavljeni su i na našim Internet stranicama i svakako Vam preporucamo da ih pročitate! Kada primite 
                        predračun dio cijene dužni ste uplatiti odmah, a dio maksimalno 30 dana prije početka najma. Kada zaprimimo 
                        kompletan iznos, poslat cemo Vam vaučer za ukrcaj (nemojte ga zaboraviti ponijeti sa sobom na brod), otprilike 
                        dva tjedna prije pocetka čartera. I time završava proces rezervacije broda. Za sve dodatne informacije i usluge 
                        slobodno nam se obratite. 
                        </li>

                    </ol>

                    <h5>
                    <br/>
                    KORISNIK MOŽE IMATI VIŠE NAJMOVA, BILI TI NAJMOVI ISTIH ILI RAZLIČITIH BRODOVA.
                    <br/>
                    <br/>
                    ALI NE MOŽE IMATI VIŠE NAJMOVA U ISTIM VREMENSKIM PERIODIMA.    
                    </h5>

                </div>

                    </Row>
                </Container>
            </section>
        </Helmet>


    );
}

export default KakoUnajmitiPlovilo;