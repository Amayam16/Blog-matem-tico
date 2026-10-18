contenidoEntrada = `
<section>
    <h2>Factorización</h2>
    <p>La factorización es el proceso de escribir una expresión matemática, como un número, un polinomio o una matriz, como el producto de factores más simples.</p>
    <h2>Tipos de factorización</h2>
    <h3>Término común</h3>
    <p>Todos los términos de la expresión comparten una variable (con o sin exponente) o cuando sus coeficientes numéricos tienen un divisor común distinto de 1.</p>
    <p>Procedimiento:</p>
    <p>Identifica el coeficiente: Encuentra el Máximo Común Divisor (MCD) de los números.</p>
    <p>Identifica la parte literal: Selecciona las letras que aparezcan en todos los términos y tómales el menor exponente con el que figuren.</p>
    <p>Paso fuera del paréntesis: Escribe el término común resultante fuera de un paréntesis.</p>
    <p>División interna: Divide cada término de la expresión original entre el término común y coloca los resultados dentro del paréntesis respetando sus signos.</p>
    <p>Ejemplo:</p>
    <p>12x<sup>4</sup> - 18x<sup>3</sup> + 6x<sup>2</sup></p>
    <p>MCD(12, 18, 6)</p>
    <p>Variable común = x<sup>2</sup></p>
    <p>Factor común = 6x<sup>2</sup></p>
    <p>12x<sup>4</sup> ÷ 6x<sup>2</sup> = 2x<sup>2</sup></p>
    <p>-18x<sup>3</sup> ÷ 6x<sup>2</sup> = -3x</p>
    <p>6x<sup>2</sup> ÷ 6x<sup>2</sup> = 1</p>
    <p>Resultado: 6x<sup>2</sup>(2x<sup>2</sup> - 3x + 1)</p>

    <h3>Trinomio cuadrado perfecto</h3>
    <p>Es un trinomio que resulta de elevar un binomio al cuadrado. Tiene la forma a<sup>2</sup> ± 2ab + b<sup>2</sup> y se factoriza como (a ± b)<sup>2</sup>.</p>
    <p>Procedimiento:</p>
    <p>Ordena el trinomio: Verifica que el primer y el tercer término sean cuadrados perfectos y positivos.</p>
    <p>Extrae las raíces: Calcula la raíz cuadrada del primer término (a) y del tercero (b).</p>
    <p>Comprueba el término central: Debe ser el doble producto de las raíces (2ab).</p>
    <p>Escribe el binomio al cuadrado: Une las raíces con el signo del término central y elévalo al cuadrado.</p>
    <p>Ejemplo:</p>
    <p>4x<sup>2</sup> + 12x + 9</p>
    <p>√(4x<sup>2</sup>) = 2x</p>
    <p>√9 = 3</p>
    <p>Doble producto: 2(2x)(3) = 12x</p>
    <p>Resultado: (2x + 3)<sup>2</sup></p>

    <h3>Diferencia de cuadrados</h3>
    <p>Es un binomio formado por la resta de dos cuadrados perfectos. Tiene la forma a<sup>2</sup> - b<sup>2</sup> y se factoriza como el producto de dos binomios conjugados: (a + b)(a - b).</p>
    <p>Procedimiento:</p>
    <p>Verifica la estructura: Debe ser una resta de dos términos que sean cuadrados perfectos.</p>
    <p>Extrae las raíces: Calcula la raíz cuadrada de cada término (a y b).</p>
    <p>Escribe los binomios conjugados: Uno con signo positivo (a + b) y otro con signo negativo (a - b).</p>
    <p>Ejemplo:</p>
    <p>25x<sup>4</sup> - 49</p>
    <p>√(25x<sup>4</sup>) = 5x<sup>2</sup></p>
    <p>√49 = 7</p>
    <p>Resultado: (5x<sup>2</sup> + 7)(5x<sup>2</sup> - 7)</p>
    <h2>Ida y regreso</h2>
    <p>Cada caso de factorización es el camino de vuelta de una multiplicación. Si sabes multiplicar, puedes reconocer qué factorización aplicar.</p>

    <h3>Término común ↔ Propiedad distributiva</h3>
    <p>Ida (multiplicar): 6x<sup>2</sup>(2x<sup>2</sup> - 3x + 1) = 12x<sup>4</sup> - 18x<sup>3</sup> + 6x<sup>2</sup></p>
    <p>Regreso (factorizar): 12x<sup>4</sup> - 18x<sup>3</sup> + 6x<sup>2</sup> = 6x<sup>2</sup>(2x<sup>2</sup> - 3x + 1)</p>
    <p>Pista para reconocerlo: todos los términos comparten un factor.</p>

    <h3>Trinomio cuadrado perfecto ↔ Binomio al cuadrado</h3>
    <p>Ida (multiplicar): (2x + 3)<sup>2</sup> = 4x<sup>2</sup> + 12x + 9</p>
    <p>Regreso (factorizar): 4x<sup>2</sup> + 12x + 9 = (2x + 3)<sup>2</sup></p>
    <p>Pista para reconocerlo: dos términos son cuadrados perfectos y el central es el doble producto de sus raíces.</p>

    <h3>Diferencia de cuadrados ↔ Binomio conjugado</h3>
    <p>Ida (multiplicar): (5x<sup>2</sup> + 7)(5x<sup>2</sup> - 7) = 25x<sup>4</sup> - 49</p>
    <p>Regreso (factorizar): 25x<sup>4</sup> - 49 = (5x<sup>2</sup> + 7)(5x<sup>2</sup> - 7)</p>
    <p>Pista para reconocerlo: es un binomio con una resta entre dos cuadrados perfectos.</p>
</section>`;
