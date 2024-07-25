// Ejercicio 10

function createChristmasTree(cadena, altura) {
    // Variables
    let arbol = '';
    let anchoMaximo = altura * 2 - 1;
    let indice = 0;
    
    for (let i = 1; i <= altura; i++) {
      let linea = '';
      let numeroAdornos = i;
      
      for (let j = 0; j < numeroAdornos; j++) {
        linea += cadena[indice % cadena.length] + ' ';
        indice++;
      }
      
      // Quitaremos el último espacio añadido y centraremos la línea de adornos
      linea = linea.trim();
      let espacios = ' '.repeat((anchoMaximo - linea.length) / 2);
      arbol += espacios + linea + '\n';
    }
    
    // Añadimos el tronco del árbol
    let tronco = ' '.repeat((anchoMaximo - 1) / 2) + '|' + '\n';
    arbol += tronco;
    
    return arbol;
}
  
console.log(createChristmasTree('123', 4));
console.log(createChristmasTree('*@o', 3));
