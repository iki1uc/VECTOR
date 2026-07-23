window.VECTOR_ASCII = {
    frame: 0,

    tick(){
        this.frame++;
        const f = this.frame;

        const out = {
            geo4d: GEO4D(f),
            geo5d: GEO5D(f),
            universe: GEO_UNIVERSE(f),
            gta_chase: GTA6_CHASE(f),
            gta_story: GTA6_STORY(f),
            amiga: AMIGA_MEGA(f),
            sound: SOUND_FFT(f)
        };

        const box = document.getElementById("vectorASCII");
        if(box){
            box.innerHTML =
                out.geo4d + "\n\n" +
                out.geo5d + "\n\n" +
                out.universe + "\n\n" +
                out.gta_chase + "\n\n" +
                out.gta_story + "\n\n" +
                out.amiga + "\n\n" +
                out.sound;
        }
    }
};

setInterval(()=> window.VECTOR_ASCII.tick(), 120);
