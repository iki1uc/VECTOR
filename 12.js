<div class="box"><pre id="geo"></pre></div>
<div class="box"><pre id="amiga"></pre></div>
<div class="box"><pre id="gta"></pre></div>
<div class="box"><pre id="sound"></pre></div>

<script>
let f = 0;

setInterval(()=>{
    f++;

    document.getElementById("geo").innerHTML = GEO3D_COLOR(f);
    document.getElementById("amiga").textContent = AMIGA_SCENE(f);
    document.getElementById("gta").textContent = GTA6_ASCII(f);
    document.getElementById("sound").textContent = SOUND_BARS(f);

}, 120);
</script>
