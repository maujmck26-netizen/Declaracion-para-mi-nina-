
const datosModales = {
    "1": { titulo: "Tus gustos...", texto: "Cada que conozco un poco mas de tus gustos me sigo asombrando de lo parecidos que somos y de lo compatibles que somos. Tenes altos gustos musicales y buen paladar para la comida argentina bbta, todo t voy a hacer probar 😼.", img: "./img/nota-1.gif" },
    "2": { titulo: "Tu ternura...", texto: "La forma en la que le das color a mis días con cada mensajito tuyo, y cuando me tratas de amor o mi niño... es como un abracito a mi corazon, el cual te eligiría en este y en cualquier universo, porque sos la niña a la que ama con todo de sí, y que daría lo que fuese por cuidar esa sonrrisa y ese brillo tan hermoso que tenes.", img: "./img/nota-2.gif", spotifyUrl: "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6?utm_source=generator&si=4d772df5b68f47ed" },
    "3": { titulo: "tu belleza...", texto: "Cualquier foto que veo tuya es la razón de las únicas sonrisas de cada día. Sos una belleza total, ns si porque estoy enamorado de vos pero al menos para mí sos y siempre serás la mina mas hermosa que existe. No es lo mas importante, desde luego, pero te voy a recordar lo bella que sos cada día, asi como vos me lo recuerdas simplemente eligiendome cada dia.", img: "./img/nota-3.gif" },
    "4": { titulo: "Lo facil que haces todo...", texto: "Con vos todo es tan facil... sonrreir, bromear, pasarla bien, ser tierno, ser molestoso, fantasear con estar juntos... pensar a futuro, pensar en lo que queremos, pensar en lo que haremos cuando nos veamos... con vs es muy facil querer mirar hacia adelante porque me das la seguridad de que no encontraré una mina la mitad de buena que vos... porque nadie se compara a vos, sos perfecta asi como sos, y lo que mas amo de vos es todo lo que sos, cada cosa buena, cada cosa q vs ves como defectos y cada cosa que capaz pensás q es rara pero solo me hacen enamorarme mas de vos.", img: "./img/L-1.jpg" },
    "m-1": {
        titulo: "Sweater Wheather - The Neighbourhood",
        texto: "Esta inmediatamente me hace pensar en vs, es la primera q me recomendaste antes de ser novios y bue, ya me gustaba y por vos me encanta aun más...",
        img: "",
        spotifyUrl: "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6?utm_source=generator"
    },
    "m-2": {
        titulo: "Friends - Chase Atlantic",
        texto: "Esta fue la priemra canción q me aprendí para vs q d tanto escucharla dije ufff q temazo...",
        img: "",
        spotifyUrl: "https://open.spotify.com/embed/track/7uDUb37h7Xdhza1eWMkoJv?utm_source=generator&si=c6fb5a31b3704359"
    },
    "m-3": {
        titulo: "La Ciudad - Alleh, Gus",
        texto: "Esta es d mis favoritas de Alleh y es re yo porque antes queria solo y ahora me muero darte la vida que soñaste llena de muchisimo amor...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/4RQD8RLuRAbBoOpTBVtO8D?si=532d2332b3994deb"
    },
    "m-4": {
        titulo: "305 - Shawn Mendes",
        texto: "Esta canción recuerdo q la escuchaba mucho y ns pq siempre me gustó mucho, es d las canciones q repetí d Shawn Mendes la vrd, y q habla d como estoy con vs...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/5ld8E3DVBXCCWQ54yrkWVp?si=ecee9232346d46cb"
    },
    "m-5": {
        titulo: "I Wanna Be Yours - Artic Monkeys",
        texto: "Q t puedo decir, i want u to be mine and i wanna be urs, let me be ut coffee pot...",
        img: "",
        spotifyUrl: "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator&si=33c927f623e84eca"
    },
    "m-6": {
        titulo: "Tomorrow - Fly By Midnight",
        texto: "Se que muchas cosas podrian pasar en un día, pero siempre voy a querer estar a tu lado y espero que vos tmb te quieras quedar conmigo mañana...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/0b7qBgsDlYz5koxoIdTZTe?si=77f17ac84c9c476f"
    },
    "m-7": {
        titulo: "The Reminder - Chris James",
        texto: "Sos el recordatorio de que mi corazon funciona, porque con vs soy todo eso q pense no ser con nadie y que posta me naciera del alma...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/3VduqK7YTkiOAbW1VQN1n1?si=3dbf71c393664474"
    },
    "m-8": {
        titulo: "Do I Wanna Know? - Artic Monkeys",
        texto: "Its rlly amazing how u make songs sound very differently, some songs that i would listen to in the past now have color and another meaning to me bc they all make me thing of u...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst?si=9361c6da512a46a8"
    },
    "m-9": {
        titulo: "R.I.P. 2 My Mouth - The Neighbourhood",
        texto: "Con vos todo es tan facil... sonrreir, bromear, pasarla bien...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/07VBqWH6NG8L2ad3l84UKk?si=dc88f71cdc6f42e0"
    },
    "m-10": {
        titulo: "idfc - Blackbear",
        texto: "Esta suena muy como yo si t soy sincero, no es q me preocupe pero enserio t digo q me da miedo perderte un dia, porque cono vs no hay otra y t quiero a vos solamente, im only a fool with u and for u...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/2Bd8mJDZisp9Sr9coxMfDn?si=0ae7ecc7918442a0"
    }
};

const pantallasIntro = document.querySelectorAll('.pantalla-intro');
const botonesIniciales = document.querySelectorAll('.btn-opcion');
const pantallaInicial = document.getElementById('pantalla-inicial');
const btnEscurridizo = document.getElementById('btn-escurridizo');
const modal = document.getElementById('mi-modal');
const tarjetas = document.querySelectorAll('.tarjeta');
const claveInicioCompletado = 'propuestaYaMostrada';

function saltarIntroduccion() {
    pantallasIntro.forEach(pantalla => {
        pantalla.classList.remove('pantalla-activa');
        pantalla.classList.add('pantalla-oculta');
        pantalla.style.display = 'none';
    });

    if (pantallaInicial) {
        pantallaInicial.classList.add('desvanecido', 'pantalla-pregunta-oculta');
        pantallaInicial.style.display = 'none';
        pantallaInicial.style.visibility = 'hidden';
        pantallaInicial.style.pointerEvents = 'none';
    }

    document.body.classList.remove('inicio-bloqueado');
    document.body.classList.add('inicio-completado');

    const contenidoPrincipal = document.getElementById('contenido-principal');

    if (contenidoPrincipal) {
        contenidoPrincipal.style.opacity = '1';
        contenidoPrincipal.style.visibility = 'visible';
        contenidoPrincipal.style.pointerEvents = 'auto';
    }
}

if (sessionStorage.getItem(claveInicioCompletado) === 'si') {
    saltarIntroduccion();
}

pantallasIntro.forEach(pantalla => {
    const boton = pantalla.querySelector('.btn-flecha');

    if (boton) {
        boton.addEventListener('click', () => {
            const siguienteId = boton.dataset.siguiente;
            const siguientePantalla = document.getElementById(siguienteId);

            pantalla.classList.remove('pantalla-activa');
            pantalla.classList.add('pantalla-oculta');

            setTimeout(() => {
                if (!siguientePantalla) return;

                if (siguientePantalla.classList.contains('pantalla-intro')) {
                    siguientePantalla.classList.remove('pantalla-oculta');
                    siguientePantalla.classList.add('pantalla-activa');
                } else {
                    siguientePantalla.classList.remove('pantalla-pregunta-oculta');
                }
            }, 800);
        });
    }
});

function moverBotonAleatorio() {
    if (!btnEscurridizo) return;

    btnEscurridizo.classList.add('esquivando');

    const anchoBoton = btnEscurridizo.offsetWidth;
    const altoBoton = btnEscurridizo.offsetHeight;
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    const maxTop = Math.max(20, altoPantalla - altoBoton - 20);
    const maxLeft = Math.max(20, anchoPantalla - anchoBoton - 20);

    const randomTop = Math.floor(Math.random() * maxTop);
    const randomLeft = Math.floor(Math.random() * maxLeft);

    btnEscurridizo.style.top = `${Math.max(20, randomTop)}px`;
    btnEscurridizo.style.left = `${Math.max(20, randomLeft)}px`;
}

if (btnEscurridizo) {
    btnEscurridizo.addEventListener('mouseenter', moverBotonAleatorio);

    btnEscurridizo.addEventListener('touchstart', e => {
        e.preventDefault();
        moverBotonAleatorio();
    });
}

botonesIniciales.forEach(boton => {
    boton.addEventListener('click', () => {
        if (boton.id !== 'btn-escurridizo') {
            sessionStorage.setItem(claveInicioCompletado, 'si');

            if (pantallaInicial) {
                pantallaInicial.classList.add('desvanecido');
            }

            document.body.classList.add('inicio-completado');
        }
    });
});


tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        const id = tarjeta.getAttribute('data-info');
        const info = datosModales[id];

        if (!info || !modal) return;

        document.getElementById('modal-titulo').textContent = info.titulo;
        document.getElementById('modal-texto').textContent = info.texto;
        const imagen = document.getElementById('modal-imagen');

        if (info.img) {
            imagen.src = info.img;
            imagen.style.display = 'block';
        } else {
            imagen.removeAttribute('src');
            imagen.style.display = 'none';
        }

        const reproductor = document.getElementById('modal-spotify');

        if (reproductor) {
            reproductor.innerHTML = '';

            if (info.spotifyUrl && info.spotifyUrl.includes('open.spotify.com/')) {
                const iframe = document.createElement('iframe');
            
                iframe.src = info.spotifyUrl.replace(
                    'https://open.spotify.com/',
                    'https://open.spotify.com/embed/'
                ).replace('/embed/embed/', '/embed/');
            
                iframe.width = '100%';
                iframe.height = '152';
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
                iframe.setAttribute('loading', 'lazy');
            
                reproductor.appendChild(iframe);
            }
        }

        modal.showModal();
    });
});




const botonCerrarModal = document.getElementById('btn-cerrar');

if (botonCerrarModal && modal) {
    botonCerrarModal.addEventListener('click', () => {
        modal.close();
    });
}

if (modal) {
    modal.addEventListener('click', e => {
        const rect = modal.getBoundingClientRect();

        const clicDentro =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        if (!clicDentro) {
            modal.close();
        }
    });
}

const pista = document.querySelector('.carrusel-pista');
const imagenesCarrusel = document.querySelectorAll('.carrusel-imagen');

if (pista && imagenesCarrusel.length > 0) {
    let indiceActual = 0;
    let tiempoInicialX = 0;
    let intervaloAuto;

    function cambiarImagen(indice) {
        indiceActual = indice;
        pista.style.transform = `translateX(-${indiceActual * 50}%)`;
    }

    function iniciarAutoPlay() {
        clearInterval(intervaloAuto);

        intervaloAuto = setInterval(() => {
            indiceActual = (indiceActual + 1) % imagenesCarrusel.length;
            cambiarImagen(indiceActual);
        }, 3000);
    }

    pista.addEventListener('touchstart', e => {
        clearInterval(intervaloAuto);
        tiempoInicialX = e.touches[0].clientX;
    }, { passive: true });

    pista.addEventListener('touchend', e => {
        const tiempoFinalX = e.changedTouches[0].clientX;
        const diferenciaX = tiempoInicialX - tiempoFinalX;

        if (diferenciaX > 30 && indiceActual < imagenesCarrusel.length - 1) {
            cambiarImagen(indiceActual + 1);
        } else if (diferenciaX < -30 && indiceActual > 0) {
            cambiarImagen(indiceActual - 1);
        }

        iniciarAutoPlay();
    }, { passive: true });

    iniciarAutoPlay();
}

const botonAlgoImportante = document.getElementById('btn-algo-importante');
const botonVolver = document.getElementById('btn-volver-principal');

requestAnimationFrame(() => {
    document.body.classList.add('pagina-visible');
});

function navegarConDesvanecimiento(destino) {
    document.body.classList.remove('pagina-visible');
    document.body.classList.add('pagina-saliendo');

    setTimeout(() => {
        window.location.href = destino;
    }, 500);
}

if (botonAlgoImportante) {
    botonAlgoImportante.addEventListener('click', () => {
        navegarConDesvanecimiento(botonAlgoImportante.dataset.destino);
    });
}

if (botonVolver) {
    botonVolver.addEventListener('click', () => {
        navegarConDesvanecimiento('index.html');
    });
}
