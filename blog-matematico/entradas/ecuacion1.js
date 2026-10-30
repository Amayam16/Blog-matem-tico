contenidoEntrada = `
<section>
    <h2>Ecuaciones de primer grado</h2>
    <p>Una ecuación es una igualdad con un valor desconocido (la incógnita). Es de primer grado, o lineal, porque la incógnita aparece con exponente 1. Resolverla es encontrar el valor que hace verdadera la igualdad.</p>
    <p>Piensa en una balanza en equilibrio: lo que haces de un lado, lo haces del otro. Si sumas, restas, multiplicas o divides en ambos lados por lo mismo, la balanza sigue equilibrada. Todo el procedimiento se apoya en esa idea.</p>
 
    <h2>Procedimiento general</h2>
    <p>Sirve para cualquier ecuación de primer grado. Si un paso no aplica (no hay paréntesis o no hay fracciones), se salta.</p>
    <p>1. Elimina los signos de agrupación: de adentro hacia afuera. Un número delante multiplica a cada término; un signo menos delante cambia todos los signos.</p>
    <p>2. Elimina los denominadores: multiplica cada término de ambos lados por el MCM de los denominadores.</p>
    <p>3. Agrupa: los términos con x de un lado y los números del otro.</p>
    <p>4. Reduce los términos semejantes.</p>
    <p>5. Despeja: divide entre el coeficiente de x.</p>
    <p>6. Comprueba: sustituye el resultado en la ecuación original.</p>
 
    <h2>Un ejemplo de cada tipo</h2>
 
    <h3>Ecuación entera</h3>
    <p>Resuelve: 7x - 4 = 3x + 20</p>
    <p>Agrupa: 7x - 3x = 20 + 4</p>
    <p>Reduce: 4x = 24</p>
    <p>Despeja: x = 24 / 4</p>
    <p>Resultado: x = 6</p>
    <p>Comprobación: izquierda 7(6) - 4 = 38, derecha 3(6) + 20 = 38 ✓</p>
 
    <h3>Ecuación fraccionaria</h3>
    <p>Resuelve: (x + 5)/3 - (x - 2)/4 = 3</p>
    <p>MCM de 3 y 4: 12</p>
    <p>Multiplica cada término por 12, con los numeradores entre paréntesis: 4(x + 5) - 3(x - 2) = 36</p>
    <p>Elimina paréntesis (el -3 multiplica a los dos términos): 4x + 20 - 3x + 6 = 36</p>
    <p>Reduce: x + 26 = 36</p>
    <p>Despeja: x = 36 - 26</p>
    <p>Resultado: x = 10</p>
    <p>Comprobación: 15/3 - 8/4 = 5 - 2 = 3 ✓</p>
 
    <h3>Ecuación con signos de agrupación</h3>
    <p>Resuelve: 4(x + 2) - 3(2x - 1) = 9 - x</p>
    <p>Elimina los paréntesis: 4x + 8 - 6x + 3 = 9 - x</p>
    <p>Reduce: -2x + 11 = 9 - x</p>
    <p>Agrupa: -2x + x = 9 - 11</p>
    <p>Reduce: -x = -2</p>
    <p>Despeja: multiplica por -1 en ambos lados, x = 2</p>
    <p>Resultado: x = 2</p>
    <p>Comprobación: izquierda 4(4) - 3(3) = 16 - 9 = 7, derecha 9 - 2 = 7 ✓</p>
    <p>Error común: al quitar -3(2x - 1) hay que cambiar el signo de los dos términos, no solo del primero.</p>
 
    <h3>Ecuación con literales</h3>
    <p>El precio final de un producto con impuesto es P = c + c·i, donde c es el costo sin impuesto e i es la tasa de impuesto. Despeja c.</p>
    <p>Factoriza c (término común): P = c(1 + i)</p>
    <p>Divide entre (1 + i): c = P / (1 + i)</p>
    <p>Resultado: c = P / (1 + i), siempre que 1 + i ≠ 0</p>
    <p>Comprobación con números: si P = 116 e i = 0.16, entonces c = 116 / 1.16 = 100, y 100 + 100(0.16) = 116 ✓</p>
 
    <h2>Problema de planteamiento propio</h2>
    <p>Enunciado: "Una empresa de hosting ofrece dos planes de almacenamiento en la nube. El plan A cobra $50 fijos al mes más $2 por cada GB. El plan B cobra $20 fijos al mes más $5 por cada GB. ¿Con cuántos GB cuestan lo mismo los dos planes?"</p>
    <p>1. Incógnita: x = número de GB que se usan al mes</p>
    <p>2. Traducción: costo del plan A → 50 + 2x; costo del plan B → 20 + 5x; "cuestan lo mismo" → =</p>
    <p>3. Ecuación: 50 + 2x = 20 + 5x</p>
    <p>4. Solución: agrupa 50 - 20 = 5x - 2x, reduce 30 = 3x, despeja x = 10</p>
    <p>5. Validación contra el enunciado:</p>
    <p>Plan A con 10 GB: 50 + 2(10) = 70</p>
    <p>Plan B con 10 GB: 20 + 5(10) = 70</p>
    <p>Los dos cuestan $70, así que cumple la ecuación. Además, 10 GB es una cantidad positiva y posible, así que tiene sentido en el contexto.</p>
    <p>Resultado: con 10 GB los dos planes cuestan lo mismo ($70). Con menos de 10 GB conviene el plan B, y con más de 10 GB conviene el plan A.</p>
 
    <h3>Validar es escribir un test</h3>
    <p>Comprobar una solución es lo mismo que hacer una prueba unitaria: verificar que el resultado cumple lo que se pidió. Si el assert falla, la solución está mal. Si pasa en silencio, cumple la ecuación, y todavía hay que revisar que tenga sentido.</p>
    <pre><code>x = 10
assert 50 + 2*x == 20 + 5*x   # cumple la ecuación
assert x > 0                  # tiene sentido: GB no puede ser negativo</code></pre>
 
    <h2>Resumen</h2>
    <p>Enteras: agrupa, reduce y despeja.</p>
    <p>Fraccionarias: multiplica todo por el MCM.</p>
    <p>Con agrupación: de adentro hacia afuera; un signo menos cambia todos los signos.</p>
    <p>Con literales: factoriza x y divide, cuidando de no dividir entre cero.</p>
    <p>Planteamiento: traduce, resuelve y valida contra el enunciado.</p>
    <p>Siempre comprueba sustituyendo en la ecuación original, y en los problemas, contra el enunciado.</p>
</section>`;
