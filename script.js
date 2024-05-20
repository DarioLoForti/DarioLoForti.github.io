
    document.addEventListener("DOMContentLoaded", function() {
        const text1 = "Jr Full Stack Web Developer"
        let i1 = 0;
        const speed1 = 80;

        function typeWriter() {
            if (i1 < text1.length) {
                document.getElementById("typewriter").innerHTML += text1.charAt(i1);
                i1++;
                setTimeout(typeWriter, speed1);
            }
        }

        typeWriter();
        // const text1 = "Sono un giovane sviluppatore che ha iniziato il suo viaggio nel mondo dello sviluppo web durante il percorso formativo presso Boolean. Questa esperienza ha acceso in me una passione ardente per la programmazione e ha alimentato la mia fame di conoscenza. Con una mente aperta e una determinazione incrollabile, sono pronto ad affrontare ogni sfida e a imparare continuamente dalle esperienze che incontrerò. Sono entusiasta di contribuire con la mia creatività e dedizione a progetti stimolanti, diventando sempre più competente nel mio percorso di sviluppo professionale.";
        // let i1 = 0;
        // const speed1 = 20; // Velocità di battitura

        // function typeWriter() {
        //     if (i1 < text1.length) {
        //         document.getElementById("typewriter").innerHTML += text1.charAt(i1);
        //         i1++;
        //         setTimeout(typeWriter, speed1);
        //     }
        // }

        // typeWriter();

        const text2 = "BDoctors si propone di semplificare l'interazione tra medici e pazienti attraverso un ambiente intuitivo e funzionale, arricchito da una selezione di colori studiata appositamente per garantire un'esperienza visiva gradevole e professionale.Per i professionisti della salute, BDoctors offre la possibilità di creare una vetrina digitale completa, dove esporre specializzazioni, servizi e recensioni dei pazienti. Grazie alle opzioni di sponsorizzazione Base, Avanzata e Premium, è possibile aumentare la visibilità del proprio profilo, con la libertà di modificarlo o eliminarlo in qualsiasi momento, mantenendo così il pieno controllo sulla propria presenza sulla piattaforma. Per i pazienti, BDoctors offre una vasta selezione di medici tra cui scegliere, con la possibilità di filtrare per specializzazione, città o nome. I risultati possono essere ordinati in base alla media delle recensioni e al numero di valutazioni ricevute. Inoltre, i pazienti possono esprimere le proprie opinioni attraverso voti, recensioni o messaggi diretti ai medici, tutto attraverso un'interfaccia colorata e user-friendly. Per lo sviluppo di BDoctors, abbiamo sfruttato appieno le tecnologie apprese durante il corso, con l'obiettivo di offrire agli utenti un'esperienza all'altezza delle loro aspettative. Per il front-end, abbiamo utilizzato HTML, SCSS, Bootstrap, JavaScript, Vue.js e Vite, per creare un'interfaccia utente intuitiva e reattiva. Mentre per il back-end, ci siamo affidati a PHP e Laravel, sfruttando le loro potenti funzionalità per gestire in modo efficiente le richieste degli utenti e manipolare i dati nel nostro sistema. Inoltre, abbiamo integrato con successo pacchetti come Chart.js per la visualizzazione dei dati tramite grafici e Braintree per la gestione dei pagamenti.";
        let i2 = 0;
        const speed2 = 20; // Velocità di battitura

        function Writer() {
            if (i2 < text2.length) {
                document.getElementById("writer").innerHTML += text2.charAt(i2);
                i2++;
                setTimeout(Writer, speed2);
            }
        }

        Writer();

        // Inizializza EmailJS
        emailjs.init("sZ-QiQC265_V8X2g1"); 

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var messaggio = document.getElementById('messaggio').value;

            
            var templateParams = {
                from_name: nome,
                from_email: email,
                message: messaggio
            };

           
            emailjs.send('service_t7xbxyp', 'template_bhvjfxh', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Messaggio inviato con successo!');
                    document.getElementById('contact-form').reset(); 
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Errore nell\'invio del messaggio.');
                });
        });
    });

