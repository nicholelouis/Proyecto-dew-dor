// Seleciono boton del DOM
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.querySelectorAll('#filtro').forEach( (e) => {
        e.style.visibility = "visible";
    });

    document.querySelectorAll('#btn_lista_deseo').forEach((e) => {
        e.style.visibility = "visible";
    });
    
    // Como es uno solo no hace falta el queryselectorall  cambiamos directamente 
    // el valor de visibility
    let listaPokemon = document.querySelector('.listaPokemon');
    listaPokemon.style.visibility = 'visible';
    mostarPokemon();
    
});

function mostarPokemon(){
    document.querySelector('.cargandoDatos').style.visibility = 'visible';
};
