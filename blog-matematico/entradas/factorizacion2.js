contenidoEntrada = `
<section>
    <h2>Factorización</h2>
    <p>La factorización es el proceso de escribir una expresión matemática, como un número, un polinomio o una matriz, como el producto de factores más simples.</p>
    <h2>Tipos de factorización</h2>
    <h3>Suma y diferencia de cubos</h3>
<p>Si tienes dos términos y los dos tienen raíz cúbica exacta, se factoriza en un binomio por un trinomio[cite: 30].</p>
<p>Procedimiento:</p>
<p>Raíces cúbicas: Extrae la raíz cúbica del primer y segundo término[cite: 30, 33].</p>
<p>Binomio (Mismo signo): Une las raíces con el mismo signo que la expresión original[cite: 30].</p>
<p>Trinomio (MOS): Eleva la primera raíz al cuadrado, multiplica ambas raíces con signo opuesto, y eleva la segunda raíz al cuadrado (siempre positivo)[cite: 30].</p>
<p>Ejemplo:</p>
<p>64x<sup>3</sup> - 27</p>
<p>∛(64x<sup>3</sup>) = 4x</p>
<p>∛27 = 3</p>
<p>Binomio: (4x - 3)</p>
<p>Trinomio: (4x)<sup>2</sup> + (4x)(3) + (3)<sup>2</sup> = 16x<sup>2</sup> + 12x + 9</p>
<p>Resultado: (4x - 3)(16x<sup>2</sup> + 12x + 9)</p>

<h3>Trinomios de la forma x<sup>2</sup> + bx + c</h3>
<p>Es un trinomio donde el coeficiente del término cuadrático es 1[cite: 37, 52].</p>
<p>Procedimiento:</p>
<p>Pista de signos: Si c es positivo, los dos números tienen el mismo signo que b; si c es negativo, tienen signos contrarios y el mayor lleva el signo de b[cite: 38].</p>
<p>Buscar pareja: Encuentra dos números cuyo producto sea c y su suma o resta sea b[cite: 37, 38].</p>
<p>Escribe la factorización: Forma dos binomios con los números encontrados: (x + m)(x + n)[cite: 37].</p>
<p>Ejemplo:</p>
<p>x<sup>2</sup> - 8x + 12</p>
<p>c = +12 (mismo signo), b = -8 (ambos negativos)[cite: 38, 39]</p>
<p>Números que multiplicados dan 12 y sumados dan -8: -2 y -6[cite: 37, 39]</p>
<p>Resultado: (x - 2)(x - 6)</p>

<h3>Trinomios de la forma ax<sup>2</sup> + bx + c (Aspa simple)</h3>
<p>Es un trinomio donde el coeficiente del término cuadrático es distinto de 1[cite: 52].</p>
<p>Procedimiento:</p>
<p>Descomponer extremos: Descompón el término ax<sup>2</sup> en dos factores en la columna izquierda y la constante c en dos factores en la derecha[cite: 43].</p>
<p>Multiplicar en cruz: Multiplica en aspa y suma los productos[cite: 43].</p>
<p>Verificar término central: Comprueba que la suma de los productos cruzados dé exactamente bx[cite: 43].</p>
<p>Lectura por renglón: Toma los factores de manera horizontal[cite: 43].</p>
<p>Ejemplo:</p>
<p>3x<sup>2</sup> + 10x - 8</p>
<p>Columna izquierda: 3x y x[cite: 43]</p>
<p>Columna derecha: -2 y 4[cite: 43]</p>
<p>Multiplicación en cruz: 3x(4) = 12x, x(-2) = -2x</p>
<p>Suma: 12x - 2x = 10x[cite: 43]</p>
<p>Resultado: (3x - 2)(x + 4)</p>

<h2>Ida y regreso</h2>
<p>Cada caso de factorización deshace una multiplicación previa[cite: 3].</p>

<h3>Suma y diferencia de cubos ↔ Productos notables</h3>
<p>Ida (multiplicar): (4x - 3)(16x<sup>2</sup> + 12x + 9) = 64x<sup>3</sup> - 27</p>
<p>Regreso (factorizar): 64x<sup>3</sup> - 27 = (4x - 3)(16x<sup>2</sup> + 12x + 9)[cite: 30, 35]</p>
<p>Pista para reconocerlo: dos términos con raíces cúbicas exactas[cite: 30].</p>

<h3>Trinomio x<sup>2</sup> + bx + c ↔ Binomio con término común</h3>
<p>Ida (multiplicar): (x - 2)(x - 6) = x<sup>2</sup> - 8x + 12[cite: 3, 37]</p>
<p>Regreso (factorizar): x<sup>2</sup> - 8x + 12 = (x - 2)(x - 6)[cite: 3, 37]</p>
<p>Pista para reconocerlo: tres términos con coeficiente principal 1[cite: 37, 52].</p>

<h3>Trinomio ax<sup>2</sup> + bx + c ↔ Multiplicación algebraica</h3>
<p>Ida (multiplicar): (3x - 2)(x + 4) = 3x<sup>2</sup> + 10x - 8[cite: 3, 48]</p>
<p>Regreso (factorizar): 3x<sup>2</sup> + 10x - 8 = (3x - 2)(x + 4)[cite: 3, 48]</p>
<p>Pista para reconocerlo: tres términos con coeficiente principal diferente de 1[cite: 52].</p>
<h2>Estrategia de factorización</h2>
    <p>Para decidir qué caso aplicar al factorizar cualquier polinomio, sigue siempre estos pasos en orden[cite: 23, 50]:</p>
    
    <p>Paso 1: ¿Hay factor común? Extrae siempre el factor común primero, sin importar el número de términos[cite: 23, 50]. Esto simplifica el polinomio para los pasos siguientes[cite: 49].</p>
    
    <p>Paso 2: Cuenta el número de términos que quedaron dentro del paréntesis[cite: 23, 50]:</p>
    <p>- Si tiene 2 términos: Revisa si es una resta de dos cuadrados perfectos (Diferencia de cuadrados) o si es una suma o resta de dos cubos perfectos (Suma o diferencia de cubos)[cite: 23, 50].</p>
    <p>- Si tiene 3 términos: Verifica primero si es un Trinomio Cuadrado Perfecto (extremos con raíz exacta y término central igual al doble producto)[cite: 23, 51]. Si no lo es y empieza con x<sup>2</sup>, busca dos números que multiplicados den c y sumados den b (Trinomio x<sup>2</sup> + bx + c)[cite: 23, 51]. Si empieza con ax<sup>2</sup> con a ≠ 1, aplica el método de Aspa simple (Trinomio ax<sup>2</sup> + bx + c)[cite: 23, 51].</p>
    <p>- Si tiene 4 términos: Intenta agrupar de dos en dos para encontrar un factor común binomio (Agrupación)[cite: 10, 23, 51].</p>
    
    <p>Paso 3: ¿Se puede factorizar más? Revisa cada uno de los factores obtenidos para verificar si alguno de ellos se puede volver a factorizar utilizando cualquiera de los casos anteriores hasta llegar a su forma más simple[cite: 20, 23, 51].</p>
</section>`;
