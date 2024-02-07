import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const ZakoniPlovidbeUHR = () => {
    return(

        <Helmet>
            <section>
                <Container>
                    <Row>
                <h1 className="space" > Zakoni Plovidbe u HR </h1>

                <div>
                    <p>Hrvatski zakon nalaže da barem jedna osoba na plovilu mora posjedovati valjanu dozvolu za upravljanje brodicom
                         i dozvolu za upravljanje radijskom stanicom (VHF-om) na plovilu. Dakle, ako ne želite unajmiti skipera, da 
                         biste unajmili čarter brod, uz iskustvo morate imati i valjanu dozvolu plovidbenu dozvolu.
                    </p>

                    <p>
                    Plovidbene dozvole i dozvole za upravljanje VHF-om u Hrvatskoj izdaju Lučke kapetanije, a ako je Vaša dozvola izdana 
                    u stranoj zemlji, provjerite je li valjana i za plovidbu u hrvatskim vodama.
                    </p>

                    <p>
                    Da biste dobili dozvolu, morate odslušati teorijski dio nastave i proći praktičnu obuku te položiti ispit koji uključuje i 
                    teoriju i praksu.
                    </p>
                    
                    <p>
                    Želite li unajmiti brod bez skipera, morate nam ranije dostaviti kopiju Vaše plovidbene i VHF dozvole kako bismo potvrdili
                    rezervaciju. U slučaju da nešto nije u redu s Vašim dozvolama, mi ćemo Vas svakako na vrijeme upozoriti. Originalne papire 
                    morate imati sa sobom na plovilu, tako da pripazite da ih ne zaboravite ponijeti. Hrvatski zakoni su jako strogi po tom 
                    pitanju i nije moguće unajmiti brod bez kompletne potrebne dokumentacije.
                    </p>

                    <p>
                    Osim plovidbene i VHF dozvole, na brodu morate imati i ovjeren popis posade. Mi ćemo Vam pribaviti ovaj dokument kada 
                    nam dostavite sve potrebne podatke i dati Vam ga pri ukrcaju. Ovaj popis morate imati na brodu, i posada uvijek mora biti
                    usklađena s njim.
                    U slučaju promjene u sastavu posade tijekom plovidbe, morate o tome obavijestiti najbližu lučku kapetaniju i napraviti 
                    novi popis.
                    Osim dozvola za plovidbu, trebat ćete posebne dozvole želite li se baviti rekreativno-sportskim ronjenjem ili loviti ribu.
                    Da biste smjeli roniti morate imati valjanju iskaznicu Hrvatskog Ronilačkog Saveza (vrijedi godinu dana i izdaje se samo 
                    roniocima sa iskustvom), a osim nje na području Nacionalnih parkova Mljet i Kornati morate imati i posebnu dozvolu.
                    </p>

                </div>

                    </Row>
                </Container>
            </section>
        </Helmet>


    );
}

export default ZakoniPlovidbeUHR;