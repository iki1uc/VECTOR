window.VECTOR_BRIDGE = {
    send(data){
        if(window.iki1uc){
            iki1uc.receive(data);
        } else {
            console.warn("iki1uc not loaded, VECTOR fallback active.");
        }
    }
};

// Neue ASCII‑Engines integrieren
window.VECTOR_ASCII = {
    frame: 0,

    tick(){
        this.frame++;

        const f = this.frame;

        const out = {
            geo: GEO3D_COLOR(f),
            amiga: AMIGA_SCENE(f),
            gta: GTA6_ASCII(f),
            sound: SOUND_BARS(f)
        };

        // Weiterleiten an iki1uc
        window.VECTOR_BRIDGE.send(out);

        // Optional: direkt in DOM anzeigen
        if(document.getElementById("vectorASCII")){
            document.getElementById("vectorASCII").innerHTML =
                out.geo + "\n\n" +
                out.amiga + "\n\n" +
                out.gta + "\n\n" +
                out.sound;
        }
    }
};

// ASCII‑Engine starten
setInterval(()=> window.VECTOR_ASCII.tick(), 120);
