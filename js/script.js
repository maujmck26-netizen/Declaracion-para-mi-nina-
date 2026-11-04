
const datosModales = {
    "1": { titulo: "Tus gustos...", texto: "Cada que conozco un poco mas de tus vos me sigo asombrando de lo bobo que me ponés y del cariño que tengo hacia vos. solo me falta hacerte probar comida argentina y darte muchos besitos para hacerte mía, todo t voy a hacer probar 😼.", img: "./img/nota-1.gif" },
    "2": { titulo: "Tu ternura...", texto: "La forma en la que le das color a mis días con cada mensajito tuyo, y cuando me tratas de amor o mi niño... es como un abracito a mi corazon, el cual te eligiría en este y en cualquier universo, porque sos la niña a la que ama con todo de sí, y que daría lo que fuese por cuidar esa sonrrisa y ese brillo tan hermoso que tenes.", img: "./img/nota-2.gif", spotifyUrl: "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6?utm_source=generator&si=4d772df5b68f47ed" },
    "3": { titulo: "tu belleza...", texto: "Cualquier foto que veo tuya es la razón de las únicas sonrisas de cada día. Sos una belleza total, ns si porque estoy enamorado de vos pero al menos para mí sos y siempre serás la mina mas hermosa que existe. No es lo mas importante, desde luego, pero te voy a recordar lo bella que sos cada día, asi como vos me lo recuerdas simplemente eligiendome cada dia.", img: "./img/nota-3.gif" },
    "4": { titulo: "Lo facil que haces todo...", texto: "Con vos todo es tan facil... sonrreir, bromear, pasarla bien, ser tierno, ser molestoso, fantasear con estar juntos... pensar a futuro, pensar en lo que queremos, pensar en lo que haremos cuando nos veamos... con vs es muy facil querer mirar hacia adelante porque me das la seguridad de que no encontraré una mina la mitad de buena que vos... porque nadie se compara a vos, sos perfecta asi como sos, y lo que mas amo de vos es todo lo que sos, cada cosa buena, cada cosa q vs ves como defectos y cada cosa que capaz pensás q es rara pero solo me hacen enamorarme mas de vos.", img: "./img/L-1.jpg" },
    "m-1": {
        titulo: "Buscarte Lejos - Duki",
        texto: "Esta inmediatamente me hace pensar en vs, ya me gustaba pero por vos me encanta aun más...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/7b9hpzFQJaKUAAKsOeDafS?si=95288ecd480b44c1"
    },
    "m-2": {
        titulo: "Tranqui,, Te Puedes Enamorar - Alleh",
        texto: "La verdad yo tampoco se dar mucho cariño ni ser muy buen novio ni nada, pero si cuidar lo que amo, y a voy te amo una banda chikita mia...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/6cwdk6H0Qxpqv5j4NxiQh4?si=02ae9d52d9af4818"
    },
    "m-3": {
        titulo: "La Ciudad - Alleh, Gus",
        texto: "Esta es d mis favoritas de Alleh y es re yo porque antes queria solo y ahora me muero darte la vida que soñaste llena de td el amor q t merecés...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/4RQD8RLuRAbBoOpTBVtO8D?si=532d2332b3994deb"
    },
    "m-4": {
        titulo: "305 - Shawn Mendes",
        texto: "Esta canción recuerdo q la escuchaba mucho y ns pq siempre me gustó mucho, es d las canciones q más repetí d Shawn Mendes la vrd, y q habla d como estoy con vs...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/5ld8E3DVBXCCWQ54yrkWVp?si=ecee9232346d46cb"
    },
    "m-5": {
        titulo: "Priti - Danny Ocean, Sech",
        texto: "Q t puedo decir, i want u to be mine and i wanna be urs, let me be ut coffee pot...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/4seJa0pAQbNlbhYzxXLvm1?si=77a17da7c7954db9"
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
        titulo: "Golpito - Quevedo, Nueva Linea",
        texto: "La verdad te queria para mí desde hace rato sjajs y soy ateo pero gracias al cielo o a quien sea que por fin te tengo...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/7Btdfb0u6xW8GNawIvNESw?si=2f9dba4178344276"
    },
    "m-9": {
        titulo: "Morena - Beéle",
        texto: "Tengo muchas ganas de hacer mil planes con vos, me volves loco morochita y amo todo lo que tenga q ver con vos, te amo musho...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/4RPeZbmVON5ZKT5HC9wALt?si=5dc3b2c4d82b4d80"
    },
    "m-10": {
        titulo: "Uno+1 - Alleh",
        texto: "Me encanta tu forma de ser y tu forma de vacilar jsajs amo tu ser, asi como sos, asi tal cual, no hay anda q cambiaria d la preciosura que sos mi diva perfecta...",
        img: "",
        spotifyUrl: "https://open.spotify.com/track/2e7mniXzvypKTn9e0jaeVs?si=bdc51f6d347c4cd0"
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
