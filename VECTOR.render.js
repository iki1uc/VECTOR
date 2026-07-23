window.VECTOR_BRIDGE = {
    send(data){
        if(window.iki1uc){
            iki1uc.receive(data);
        } else {
            console.warn("iki1uc not loaded, VECTOR fallback active.");
        }
    }
};
