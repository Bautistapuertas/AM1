export const temas = [
  {
    id: 'limites',
    title: 'Límites e Indeterminaciones',
    icon: 'FunctionSquare',
    teoria: `
### 1. Concepto de Límite
El límite de $f(x)$ cuando $x$ tiende a $c$ es el valor al que se acercan las imágenes (los valores de $y$) cuando las $x$ se acercan a $c$.
$$ \\lim_{x \\to c} f(x) = L $$
Para que el límite exista en un punto, **los límites laterales deben ser iguales**:
$$ \\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = L $$

### 2. Límites Notables (Especiales)
Son herramientas fundamentales para resolver indeterminaciones trigonométricas y exponenciales rápidamente sin usar L'Hôpital:
- **Trigonométrico:** $$ \\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1 $$
- **Exponencial (Número e):** $$ \\lim_{x \\to \\pm\\infty} \\left(1 + \\frac{1}{x}\\right)^x = e $$
- **Exponencial alternativo:** $$ \\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e $$

### 3. Indeterminaciones Clásicas y Métodos para Salvarlas
Al evaluar un límite, si el resultado no es un número directo (ej: $5/0 = \\infty$, $0/5 = 0$), podemos caer en una indeterminación.

1. **$0/0$ (Cociente de infinitésimos):**
   - **Polinomios:** Factorear (Ruffini, diferencia de cuadrados) y simplificar.
   - **Raíces:** Multiplicar numerador y denominador por el conjugado.
   - **Regla de L'Hôpital:** Derivar arriba y abajo.

2. **$\\infty/\\infty$ (Cociente de infinitos):**
   - Dividir todos los términos por la $x$ de mayor grado.
   - Si grado Numerador > grado Denominador $\\implies \\infty$
   - Si grado Numerador < grado Denominador $\\implies 0$
   - Si los grados son iguales $\\implies$ Cociente de los coeficientes principales.

3. **$\\infty - \\infty$:**
   - Si son fracciones, sacar denominador común para llevar a $0/0$ o $\\infty/\\infty$.
   - Si son raíces, multiplicar por el conjugado.

4. **$1^\\infty$, $0^0$, $\\infty^0$:**
   - Se usa el logaritmo natural para bajar el exponente:
   $$ \\lim f(x)^{g(x)} = y \\implies \\ln(y) = \\lim [ g(x) \\cdot \\ln(f(x)) ] $$
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Calcular el límite: $$ \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} $$",
        solucion: "Al reemplazar $x=2$ da $0/0$. \nFactoreamos el numerador (diferencia de cuadrados): $x^2 - 4 = (x-2)(x+2)$. \nQueda: $$ \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2} $$ \nSimplificamos el término $(x-2)$ y evaluamos nuevamente: $$ \\lim_{x \\to 2} (x+2) = 2+2 = 4 $$"
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "Calcular: $$ \\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1} $$",
        solucion: "Es una indeterminación $\\infty/\\infty$.\nComo el grado del polinomio de arriba es igual al grado del de abajo (ambos de grado 2), el límite es simplemente el cociente de los coeficientes principales.\nPor lo tanto, el resultado es **$3/2$**."
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Calcular usando conjugado: $$ \\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x} $$",
        solucion: "Reemplazando queda $0/0$.\nMultiplicamos arriba y abajo por el conjugado del numerador: $(\\sqrt{x+4} + 2)$.\nArriba nos queda diferencia de cuadrados: $(\\sqrt{x+4})^2 - 2^2 = (x+4) - 4 = x$.\nLa expresión queda: $$ \\frac{x}{x(\\sqrt{x+4} + 2)} $$\nSimplificamos la $x$ que multiplica arriba y abajo.\nNos queda: $$ \\lim_{x \\to 0} \\frac{1}{\\sqrt{x+4} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4} $$"
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Calcular usando límite notable: $$ \\lim_{x \\to 0} \\frac{\\sin(5x)}{2x} $$",
        solucion: "La indeterminación es $0/0$. Buscamos usar el límite notable $\\lim_{x \\to 0} \\frac{\\sin(u)}{u} = 1$.\nPara que funcione, el argumento del seno ($5x$) debe estar igualito en el denominador.\nMultiplicamos y dividimos todo por 5:\n$$ \\lim_{x \\to 0} \\frac{5}{5} \\cdot \\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\cdot \\left[ \\lim_{x \\to 0} \\frac{\\sin(5x)}{5x} \\right] $$\nEl corchete entero tiende a 1 por ser límite notable.\nEl resultado final es **$5/2$**."
      },
      {
        isExample: false,
        dificultad: 'Final',
        enunciado: "Calcular la indeterminación exponencial: $$ \\lim_{x \\to \\infty} \\left(\\frac{x+3}{x-1}\\right)^{2x} $$",
        solucion: "Al evaluar da $1^\\infty$, una indeterminación clásica.\nLlamamos $y$ al límite, y aplicamos $\\ln$ a ambos lados para bajar el exponente:\n$$ \\ln(y) = \\lim_{x \\to \\infty} 2x \\cdot \\ln\\left(\\frac{x+3}{x-1}\\right) $$\nEsto da $\\infty \\cdot 0$. \nReescribimos para aplicar L'Hôpital (pasando el $2x$ abajo como $1/2x$):\n$$ \\lim_{x \\to \\infty} \\frac{\\ln(\\frac{x+3}{x-1})}{\\frac{1}{2x}} $$\nDerivamos numerador y denominador por separado (L'Hôpital) o usamos equivalencias asintóticas.\nOtra forma más rápida es usar la definición del número $e$:\n$$ \\frac{x+3}{x-1} = 1 + \\frac{4}{x-1} $$\nEntonces: $\\left[ \\left(1 + \\frac{4}{x-1}\\right)^{\\frac{x-1}{4}} \\right]^{\\frac{4}{x-1} \\cdot 2x} \\to e^8$\nPor lo tanto, **el límite da $e^8$**."
      }
    ],
    preguntas: [
      { q: "Si al evaluar un límite obtengo un número dividido cero (ej: $5/0$), ¿qué significa?", options: ["Da cero", "Da infinito (hay que estudiar laterales)", "Es una indeterminación", "No existe la función"], correct: 1 },
      { q: "¿Cuál de las siguientes ES una indeterminación matemática?", options: ["$0 / \\infty$", "$\\infty / 0$", "$1^\\infty$", "$0^\\infty$"], correct: 2 },
      { q: "Para salvar la indeterminación $1^\\infty$, el primer paso fundamental es:", options: ["Multiplicar por el conjugado", "Aplicar Regla de Ruffini", "Aplicar logaritmo natural (ln) a ambos lados", "Derivar directamente"], correct: 2 },
      { q: "En $\\infty/\\infty$, si el grado del numerador es mayor que el del denominador, el límite vale:", options: ["Cero", "Uno", "Infinito", "El cociente de coeficientes principales"], correct: 2 },
      { q: "En $\\infty/\\infty$, si los grados de los polinomios son iguales, el límite vale:", options: ["Infinito", "El cociente de los coeficientes principales", "Cero", "No existe"], correct: 1 },
      { q: "Si un límite lateral por izquierda da 4 y por derecha da -4, ¿el límite en el punto existe?", options: ["Sí, da 0 (el promedio)", "No, los límites laterales deben ser iguales", "Sí, da 4", "Solo si es continuo"], correct: 1 },
      { q: "¿A cuánto equivale el límite notable $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$?", options: ["0", "1", "$\\infty$", "No existe"], correct: 1 },
      { q: "Para resolver una indeterminación $\\infty - \\infty$ con fracciones, el primer paso suele ser:", options: ["Derivar cruzado", "L'Hôpital directo", "Sacar denominador común", "Multiplicar por el conjugado"], correct: 2 },
      { q: "Al evaluar un límite me da $0/0$. ¿Qué técnica algebraica me permite resolverlo si son raíces?", options: ["Factorizar con Ruffini", "Dividir por la x de mayor grado", "Multiplicar por el conjugado", "Aplicar logaritmo natural"], correct: 2 },
      { q: "Si un límite da $0^0$, es una indeterminación. ¿Cómo se empieza a resolver?", options: ["Igualando a 1 por convención", "Llamando 'y' al límite y aplicando logaritmo natural", "Por conjugado", "Derivando directo"], correct: 1 },
      { q: "¿Qué dice la regla mnemotécnica sobre los límites al infinito en polinomios?", options: ["El término de menor grado domina", "El término de mayor grado es el que manda, los demás se desprecian", "Todos los términos importan por igual", "Se debe usar siempre Ruffini"], correct: 1 },
      { q: "Para que un límite exista, no es necesario que:", options: ["Los límites laterales sean iguales", "El límite lateral izquierdo sea real", "La función esté definida en el punto evaluado (pueda haber un agujero)", "El límite lateral derecho sea real"], correct: 2 }
    ]
  },
  {
    id: 'derivadas',
    title: 'Derivadas y Reglas',
    icon: 'LineChart',
    teoria: `
### 1. Definición y Significado Geométrico
La derivada de una función en un punto representa la **pendiente de la recta tangente** a la curva en ese punto. Se define mediante el límite del cociente incremental:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$

**Ecuación de la Recta Tangente en $x=a$:**
$$ y - f(a) = f'(a) \\cdot (x - a) $$
*Donde $f'(a)$ es la pendiente ($m$).*
*Si $f'(a) = 0$, significa que la pendiente es nula y la recta tangente es perfectamente horizontal (suele haber un pico, valle o punto de inflexión).*

### 2. Tabla de Derivadas Comunes
- Constante: $(k)' = 0$
- Potencia: $(x^n)' = n \\cdot x^{n-1}$
- Exponencial: $(e^x)' = e^x$
- Logaritmo: $(\\ln x)' = \\frac{1}{x}$
- Trigonométricas: $(\\sin x)' = \\cos x$ | $(\\cos x)' = -\\sin x$

### 3. Reglas de Derivación Fundamentales
- **Suma/Resta:** $(f \\pm g)' = f' \\pm g'$
- **Producto:** $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$ *(El primero derivado por el segundo sin derivar, más...)*
- **Cociente:** $$ \\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2} $$

### 4. La Regla de la Cadena
Es el método más importante, usado para **funciones compuestas**. Se deriva "de afuera hacia adentro", multiplicando por la derivada del argumento interno en cada paso.
$$ [f(g(x))]' = f'(g(x)) \\cdot g'(x) $$
*Ejemplo clásico:* Si $y = \\sin(3x^2)$, la función exterior es el seno, la interior es el polinomio.
$$ y' = \\cos(3x^2) \\cdot (6x) $$
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Hallar la recta tangente a $f(x) = \\ln(x^2 + 1)$ en $x=1$.",
        solucion: "**Paso 1:** Evaluar la función en el punto para obtener $y_0$. $f(1) = \\ln(1^2 + 1) = \\ln(2)$. \n**Paso 2:** Derivar usando Regla de la Cadena. $$ f'(x) = \\frac{1}{x^2 + 1} \\cdot 2x $$ \n**Paso 3:** Evaluar la derivada en $x=1$ para obtener la pendiente $m$. $$ m = f'(1) = \\frac{1}{1+1} \\cdot 2 = 1 $$ \n**Paso 4:** Armar la recta tangente. $$ y - \\ln(2) = 1 \\cdot (x - 1) \\implies y = x - 1 + \\ln(2) $$"
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "Derivar $f(x) = 4x^3 - 2x^2 + 5x - 7$",
        solucion: "Usamos la regla de la potencia y la derivada de la constante.\nBajamos cada exponente multiplicando y le restamos 1:\n$$ f'(x) = 4(3x^2) - 2(2x) + 5(1) - 0 $$\n$$ f'(x) = 12x^2 - 4x + 5 $$"
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Derivar por regla del producto: $f(x) = x^2 \\cdot e^x$",
        solucion: "Fórmula del producto: $u'v + uv'$.\nAplicamos:\n$u = x^2 \\implies u' = 2x$\n$v = e^x \\implies v' = e^x$\n$$ f'(x) = (2x)(e^x) + (x^2)(e^x) $$\nSacando factor común $e^x$:\n$$ f'(x) = e^x(2x + x^2) $$"
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Derivar por regla del cociente: $f(x) = \\frac{\\sin(x)}{x}$",
        solucion: "Fórmula del cociente: $\\frac{u'v - uv'}{v^2}$.\n$u = \\sin(x) \\implies u' = \\cos(x)$\n$v = x \\implies v' = 1$\n$$ f'(x) = \\frac{\\cos(x) \\cdot x - \\sin(x) \\cdot 1}{x^2} $$\n$$ f'(x) = \\frac{x\\cos(x) - \\sin(x)}{x^2} $$"
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Derivación con regla de la cadena (Múltiple): $f(x) = \\cos(\\ln(5x^2))$",
        solucion: "Se deriva de afuera hacia adentro (Cebolla).\n1. La función más externa es el Coseno. Su derivada es el -Seno (dejando el interior igual).\n2. Adentro hay un Logaritmo. Su derivada es 1 / interior.\n3. Más adentro hay un polinomio $5x^2$. Su derivada es $10x$.\nMultiplicamos todo junto:\n$$ f'(x) = [-\\sin(\\ln(5x^2))] \\cdot \\left[\\frac{1}{5x^2}\\right] \\cdot [10x] $$\nSimplificando el $\\frac{10x}{5x^2} = \\frac{2}{x}$:\n$$ f'(x) = -\\frac{2\\sin(\\ln(5x^2))}{x} $$"
      }
    ],
    preguntas: [
      { q: "Al derivar $f(x) = e^{5x}$, ¿qué regla debo usar y cuál es el resultado?", options: ["Regla de la Cadena: $5e^{5x}$", "Regla de la Potencia: $5x e^{5x-1}$", "Solo la derivada de e: $e^{5x}$", "Regla del Producto: $5 \\cdot e^{5x}$"], correct: 0 },
      { q: "Si la derivada en un punto vale cero ($f'(a)=0$), geométricamente significa que:", options: ["La función no existe en ese punto", "La recta tangente es vertical", "La recta tangente es horizontal", "Hay una asíntota vertical"], correct: 2 },
      { q: "¿Cuál es la estructura correcta de la regla del cociente para $(f/g)'$?", options: ["$(f'g + fg') / g^2$", "$(f'g - fg') / g$", "$(f'g - fg') / g^2$", "$f' / g'$"], correct: 2 },
      { q: "La derivada de una constante aislada (ej: $f(x) = 8$) es:", options: ["1", "8", "0", "x"], correct: 2 },
      { q: "¿Qué formula representa la definición por límite de la derivada?", options: ["Límite de f(x)/x", "El límite del cociente incremental", "Límite al infinito de f(x)", "La regla de Barrow"], correct: 1 },
      { q: "Si derivo $f(x) = \\sin(x)$, obtengo:", options: ["$-\\cos(x)$", "$\\cos(x)$", "$\\tan(x)$", "$\\csc(x)$"], correct: 1 },
      { q: "En la regla del producto $(f \\cdot g)'$, ¿cuál es el signo que vincula ambos términos?", options: ["Menos", "Por", "Dividido", "Más"], correct: 3 },
      { q: "La derivada de $\\ln(x)$ es:", options: ["$e^x$", "$1/x$", "$x$", "$\\ln(x)$"], correct: 1 },
      { q: "Si quiero derivar $f(x) = (3x+1)^5$, debo usar:", options: ["Regla de L'Hôpital", "Regla del Cociente", "Regla de la Cadena", "Diferenciación logarítmica"], correct: 2 },
      { q: "La ecuación general de la recta tangente en $x=a$ es $y - f(a) = m \\cdot (x - a)$. ¿Quién ocupa el lugar de la pendiente $m$?", options: ["$f(x)$", "$f''(a)$", "$f'(a)$", "$x$"], correct: 2 },
      { q: "¿Cuál es la derivada de $f(x) = \\sqrt{x}$ si la expresamos como potencia fraccionaria $x^{1/2}$?", options: ["$1/(2\\sqrt{x})$", "$x^{-1/2}$", "$1/2 x$", "No tiene derivada"], correct: 0 }
    ]
  },
  {
    id: 'continuidad',
    title: 'Continuidad y Tipos de Discontinuidad',
    icon: 'FunctionSquare',
    teoria: `
### 1. Las Tres Condiciones de Continuidad
Para que una función $f(x)$ sea **continua en un punto $x=c$**, DEBE cumplir tres condiciones:
1. **Que exista la imagen:** $c \\in \\text{Dominio}(f) \\implies \\exists f(c)$.
2. **Que exista el límite:** Los límites por izquierda y derecha deben existir y ser iguales. $\\lim_{x \\to c} f(x) = L$.
3. **Que imagen y límite coincidan:** $\\lim_{x \\to c} f(x) = f(c)$.

*Si falla al menos una, la función es discontinua en ese punto.*

### 2. Clasificación de Discontinuidades

**A) Evitable (Agujero):**
Existe el límite (da un número finito $L$), pero la imagen $f(c)$ no existe o tiene un valor distinto. Se llama "evitable" porque bastaría redefinir un solo punto asignándole a $f(c)$ el valor de $L$ para rellenar el agujero y forzar la continuidad.

**B) Inevitable (Salto):**
El límite general no existe porque pasa alguna de estas dos cosas:
- **De Salto Finito:** Los dos límites laterales existen y son números, pero dan **distinto**. (Ej: funciones partidas donde la línea "salta" de altura).
- **De Salto Infinito (Asíntota):** Al menos uno de los límites laterales da $\\pm\\infty$.

### 3. Continuidad vs. Derivabilidad
El Teorema indica que **"Derivabilidad implica Continuidad"**. Si una función es suave y se puede derivar en un punto, seguro es de un solo trazo en ese punto. 
Sin embargo, **"Continuidad NO implica Derivabilidad"**. Una función puede ser continua pero tener un "pico" o "punta" (como $f(x) = |x|$ en $x=0$). En los picos, las derivadas laterales no coinciden, por lo que la derivada no existe.
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Clasifique la discontinuidad de $f(x) = \\frac{x^2 - 9}{x - 3}$ en $x=3$.",
        solucion: "En $x=3$ el denominador se hace cero, por lo que $f(3)$ no existe (falla la condición 1). \nCalculamos el límite: $$ \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6 $$ \nComo **existe el límite y es finito (6)** pero la imagen no, se clasifica como **Discontinuidad Evitable**."
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "En $x=5$, una función tiene límite 8, pero no está definida (no tiene imagen). ¿Qué tipo de discontinuidad tiene y cómo se evita?",
        solucion: "Falla la condición de que exista $f(5)$. \nAl existir el límite ($L=8$), es una **Discontinuidad Evitable**.\nPara 'evitarla' o redefinir la función y hacerla continua, basta con crear una función partida que asigne a $f(5)$ el valor del límite: $8$."
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Analice la continuidad de $f(x) = \\frac{1}{x-2}$ en $x=2$.",
        solucion: "1. Imagen en x=2: No existe porque hay división por cero.\n2. Límites en x=2:\n$$ \\lim_{x \\to 2^+} \\frac{1}{x-2} = +\\infty $$\n$$ \\lim_{x \\to 2^-} \\frac{1}{x-2} = -\\infty $$\nComo los límites laterales dan infinito, hay una Asíntota Vertical.\nClasificación: **Discontinuidad Inevitable de Salto Infinito**."
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Determine $a$ para que $f(x)$ sea continua en $x=1$:\n$f(x) = \\begin{cases} x^2 + a & \\text{si } x \\le 1 \\\\ 3x - 1 & \\text{si } x > 1 \\end{cases}$",
        solucion: "Para que sea continua, el límite por izquierda debe igualar al límite por derecha.\nLímite Izquierdo ($x \\le 1$): evaluamos $1^2 + a = 1 + a$.\nLímite Derecho ($x > 1$): evaluamos $3(1) - 1 = 2$.\nIgualamos los límites laterales:\n$$ 1 + a = 2 \\implies a = 1 $$\nCon $a=1$, la función \"se pega\" y se vuelve continua."
      }
    ],
    preguntas: [
      { q: "Si en una función a trozos el límite izquierdo es 4 y el límite derecho es -2, ¿qué tipo de discontinuidad hay?", options: ["Continua", "Evitable", "Inevitable de Salto Finito", "Inevitable de Salto Infinito"], correct: 2 },
      { q: "Una función tiene un pico puntiagudo en x=5. Sabiendo esto podemos afirmar que en x=5:", options: ["Es derivable pero no continua", "Es discontinua", "No está definida", "Es continua pero no derivable"], correct: 3 },
      { q: "¿Para forzar la continuidad (hacerla evitable), qué valor se le debe asignar a $f(c)$?", options: ["El valor cero", "El resultado del límite en ese punto", "El valor de la derivada", "Cualquier número real"], correct: 1 },
      { q: "Si uno de los límites laterales da infinito, la discontinuidad es:", options: ["Evitable", "De salto finito", "Inevitable de salto infinito", "No es discontinua"], correct: 2 },
      { q: "Si una función es derivable en un punto, ¿podemos asegurar que es continua en ese punto?", options: ["Sí, siempre", "No, nunca", "A veces, depende del límite", "Solo si es un polinomio"], correct: 0 },
      { q: "Para que el límite exista en un punto, la condición indispensable es:", options: ["Que $f(c)$ sea cero", "Que los límites laterales sean iguales a infinito", "Que los límites laterales sean iguales", "Que sea derivable en el punto"], correct: 2 },
      { q: "La discontinuidad Evitable se caracteriza principalmente porque:", options: ["El límite general da infinito", "El límite general SÍ existe y es finito", "La imagen y el límite coinciden", "Los límites laterales son distintos"], correct: 1 },
      { q: "La primera condición de continuidad verifica:", options: ["Que la función no tenga asíntotas", "Que la función sea derivable", "Que exista la imagen de la función evaluada en el punto $f(c)$", "Que el límite sea 0"], correct: 2 },
      { q: "Un ejemplo clásico de función continua pero no derivable en $x=0$ es:", options: ["$f(x) = x^2$", "$f(x) = 1/x$", "$f(x) = |x|$", "$f(x) = e^x$"], correct: 2 },
      { q: "Si los dos límites laterales dan como resultado $+\\infty$, la función es continua:", options: ["Falso, es inevitable de salto infinito", "Verdadero, porque los límites son iguales", "Verdadero si f(x)=infinito", "Falso, es evitable"], correct: 0 }
    ]
  },
  {
    id: 'estudio',
    title: 'Estudio Completo de Funciones',
    icon: 'LineChart',
    teoria: `
### Guía Paso a Paso para el Análisis de una Función

El estudio de funciones agrupa todos los conocimientos de Análisis 1. Consiste en analizar el comportamiento de $f(x)$ para poder graficarla con precisión.

#### Paso 1: Dominio
Se deben excluir los valores de $x$ que "rompan" la matemática:
- **Denominadores:** Deben ser $\\neq 0$.
- **Raíces de índice par:** El radicando debe ser $\\ge 0$.
- **Logaritmos:** El argumento debe ser $> 0$ estrictamente.

#### Paso 2: Intersecciones con los Ejes
- **Eje Y (Ordenada al origen):** Hacer $x = 0$ y calcular $f(0)$.
- **Eje X (Raíces):** Hacer $f(x) = 0$ y despejar $x$.

#### Paso 3: Asíntotas
- **Verticales (A.V.):** Se buscan en los valores $a$ excluidos del Dominio. Habrá A.V. de ecuación $x=a$ si: $$ \\lim_{x \\to a} f(x) = \\pm\\infty $$
- **Horizontales (A.H.):** Se buscan calculando el límite a infinito. Habrá A.H. de ecuación $y=L$ si: $$ \\lim_{x \\to \\pm\\infty} f(x) = L $$ (donde $L$ es un número finito).

#### Paso 4: Crecimiento y Extremos (Primera Derivada)
1. Calcular $f'(x)$.
2. Encontrar **Puntos Críticos**: Valores donde $f'(x) = 0$ o donde $f'(x)$ no exista.
3. Armar intervalos y evaluar el **signo de $f'(x)$**:
   - Si $f'(x) > 0 \\implies$ La función **crece**.
   - Si $f'(x) < 0 \\implies$ La función **decrece**.
4. Clasificar extremos: Si $f'$ cambia de signo de + a - hay un **Máximo**. Si cambia de - a + hay un **Mínimo**.

#### Paso 5: Concavidad y Puntos de Inflexión (Segunda Derivada)
1. Calcular $f''(x)$ y buscar sus raíces.
2. Evaluar el **signo de $f''(x)$**:
   - Si $f''(x) > 0 \\implies$ Cóncava hacia arriba (Forma de U).
   - Si $f''(x) < 0 \\implies$ Cóncava hacia abajo (Forma de montaña).
3. Si la concavidad cambia de signo alrededor de un punto, ese es un **Punto de Inflexión**.
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Determine el Dominio y Asíntotas de $f(x) = \\frac{2x^2}{x^2 - 1}$",
        solucion: "**1. Dominio:** El denominador no puede ser 0. \n$$ x^2 - 1 = 0 \\implies x = \\pm 1 $$ \n**Dom = $\\mathbb{R} - \\\\{-1, 1\\\\}$**\n\n**2. Asíntotas Verticales:** Evaluamos en los puntos excluidos.\n$$ \\lim_{x \\to 1} \\frac{2x^2}{x^2 - 1} = \\frac{2}{0} = \\infty $$ Hay A.V. en $x=1$ y en $x=-1$.\n\n**3. Asíntota Horizontal:** Límite al infinito.\n$$ \\lim_{x \\to \\infty} \\frac{2x^2}{x^2 - 1} $$ \nComo los grados del numerador y denominador son iguales (grado 2), dividimos los coeficientes principales: $2 / 1 = 2$. \nHay A.H. en $y=2$."
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "Determine el Dominio de $f(x) = \\ln(x+5) + \\sqrt{x}$",
        solucion: "Hay dos restricciones que se deben cumplir en simultáneo:\n1. Por el logaritmo: $x + 5 > 0 \\implies x > -5$.\n2. Por la raíz de índice par: $x \\ge 0$.\nIntersectando ambas condiciones: los números mayores a -5 y mayores o iguales a 0 son los números $x \\ge 0$.\n**Dominio:** $[0, +\\infty)$."
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Hallar los intervalos de crecimiento de $f(x) = x^3 - 3x + 2$",
        solucion: "1. Calculamos la derivada: $f'(x) = 3x^2 - 3$.\n2. Buscamos puntos críticos ($f'(x) = 0$): \n$3x^2 - 3 = 0 \\implies 3x^2 = 3 \\implies x^2 = 1 \\implies x = \\pm 1$.\n3. Armamos los intervalos con la recta numérica dividida en -1 y 1:\n- En $(-\\infty, -1)$: elegimos $x=-2$. $f'(-2) = 3(4)-3 = 9 > 0$ (CRECE).\n- En $(-1, 1)$: elegimos $x=0$. $f'(0) = -3 < 0$ (DECRECE).\n- En $(1, \\infty)$: elegimos $x=2$. $f'(2) = 9 > 0$ (CRECE).\n**Intervalos de crecimiento:** $(-\\infty, -1) \\cup (1, \\infty)$."
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Determine Puntos de Inflexión de $f(x) = x^4 - 6x^2$",
        solucion: "Para inflexión necesitamos la segunda derivada.\n1. Primera derivada: $f'(x) = 4x^3 - 12x$.\n2. Segunda derivada: $f''(x) = 12x^2 - 12$.\n3. Raíces de $f''$: $12x^2 - 12 = 0 \\implies x^2 = 1 \\implies x = \\pm 1$.\n4. Verificamos cambio de concavidad evaluando signos de $f''$:\n- $x=-2 \\implies f''(-2) = 12(4)-12 > 0$ (Cóncava Arriba).\n- $x=0 \\implies f''(0) = -12 < 0$ (Cóncava Abajo).\n- $x=2 \\implies f''(2) = > 0$ (Cóncava Arriba).\nComo hay cambios de signo en ambos puntos, hay **Puntos de Inflexión en $x=1$ y en $x=-1$**."
      }
    ],
    preguntas: [
      { q: "Si en un punto crítico x=2, el signo de la primera derivada $f'(x)$ pasa de negativo a positivo, ¿qué hay en la gráfica original?", options: ["Un máximo relativo", "Un mínimo relativo", "Un punto de inflexión", "Una asíntota"], correct: 1 },
      { q: "Si al calcular $\\lim_{x \\to \\infty} f(x)$ el resultado da infinito, significa que la función:", options: ["No tiene Asíntota Vertical", "Tiene Asíntota Horizontal en cero", "No tiene Asíntota Horizontal", "Cruza el eje x"], correct: 2 },
      { q: "El dominio de $f(x) = \\ln(x - 4)$ es:", options: ["Todos los reales", "$x \\ge 4$", "$x > 4$", "$x \\neq 4$"], correct: 2 },
      { q: "Para encontrar los puntos de inflexión de una función, debemos estudiar:", options: ["La función original", "La primera derivada $f'(x)$", "La segunda derivada $f''(x)$", "Los límites laterales"], correct: 2 },
      { q: "Si $f'(x) > 0$ en el intervalo (1, 5), podemos asegurar que la función original en ese intervalo:", options: ["Es positiva", "Es cóncava", "Decrece", "Crece"], correct: 3 },
      { q: "Las raíces o intersecciones con el eje X se encuentran haciendo:", options: ["x = 0", "f'(x) = 0", "f(x) = 0", "Límite a infinito"], correct: 2 },
      { q: "Si la segunda derivada $f''(x) < 0$ (negativa), la gráfica tiene concavidad:", options: ["Hacia arriba (U)", "Hacia abajo (montaña)", "Constante", "Es una recta"], correct: 1 },
      { q: "¿En qué valores se debe buscar si hay una Asíntota Vertical?", options: ["En x=0", "En los puntos de inflexión", "En el límite a infinito", "En los valores excluidos del Dominio"], correct: 3 },
      { q: "Para buscar los puntos críticos de una función, debemos resolver la ecuación:", options: ["$f''(x) = 0$", "$f(x) = 0$", "$f'(x) = 0$", "$f'(x) = 1$"], correct: 2 },
      { q: "Si $f'(c) = 0$ y $f''(c) > 0$, el punto en $x=c$ es un:", options: ["Punto de Inflexión", "Máximo relativo", "Mínimo relativo", "Asíntota"], correct: 2 },
      { q: "La condición de existencia en el dominio para una raíz cuadrada $\\sqrt{f(x)}$ es:", options: ["$f(x) > 0$", "$f(x) \\ge 0$", "$f(x) \\neq 0$", "$f(x) = 0$"], correct: 1 }
    ]
  },
  {
    id: 'teoremas',
    title: 'Teoremas: Rolle, Lagrange y L\'Hôpital',
    icon: 'BookOpen',
    teoria: `
### 1. Teorema de Rolle
**Hipótesis (Las 3 condiciones que se deben cumplir):**
1. $f(x)$ es **continua** en el intervalo cerrado $[a, b]$.
2. $f(x)$ es **derivable** en el intervalo abierto $(a, b)$.
3. **Igualdad de los extremos:** $f(a) = f(b)$.

**Tesis (Lo que garantiza el teorema):**
Existe al menos un punto $c$ perteneciente al intervalo $(a, b)$ tal que su derivada es cero:
$$ f'(c) = 0 $$
*Interpretación geométrica:* Si la función arranca y termina en la misma altura, y es suave, en algún momento tiene que dar la vuelta. En ese pico/valle, la tangente es horizontal.

### 2. Teorema de Lagrange (Teorema del Valor Medio)
Es una generalización de Rolle (no exige que $f(a)=f(b)$). Rolle es de hecho un caso particular de Lagrange donde la pendiente de la secante es cero.

**Hipótesis:**
1. $f(x)$ es continua en $[a, b]$.
2. $f(x)$ es derivable en $(a, b)$.

**Tesis:**
Existe al menos un punto $c \\in (a, b)$ tal que la derivada en ese punto iguala la pendiente de la recta secante que une los extremos del intervalo:
$$ f'(c) = \\frac{f(b) - f(a)}{b - a} $$
*Interpretación geométrica:* Hay un punto en la curva donde la recta tangente es exactamente paralela a la recta que corta los extremos A y B.

### 3. Regla de L'Hôpital
Es un teorema espectacular para resolver límites.
Si al evaluar $$ \\lim_{x \\to c} \\frac{f(x)}{g(x)} $$ obtenemos una indeterminación del tipo **$0/0$** o **$\\infty/\\infty$**, podemos derivar numerador y denominador por separado (no regla del cociente, se deriva independiente) y el límite original será igual al límite del cociente de sus derivadas:
$$ \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} $$
*Se puede aplicar iterativamente (varias veces seguidas) si la indeterminación persiste luego del primer intento.*
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Verificar si se cumple el Teorema de Rolle para $f(x) = x^2 - 4x + 3$ en el intervalo $[1, 3]$ y hallar el valor $c$.",
        solucion: "**Paso 1:** Es un polinomio, por lo tanto es continua y derivable en todo $\\mathbb{R}$ (cumple Hipótesis 1 y 2).\n**Paso 2:** Evaluamos los extremos.\n$f(1) = 1^2 - 4(1) + 3 = 0$\n$f(3) = 3^2 - 4(3) + 3 = 0$\nComo $f(1) = f(3)$, se cumple la Hipótesis 3. El teorema garantiza que existe un $c$.\n**Paso 3:** Hallar $c$. \nDerivamos: $f'(x) = 2x - 4$. \nIgualamos a cero: $2c - 4 = 0 \\implies 2c = 4 \\implies c = 2$. \nEl punto $c=2$ pertenece al intervalo $(1, 3)$. Correcto."
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "¿Aplica el teorema de Rolle a la función $f(x) = |x|$ en el intervalo $[-2, 2]$?",
        solucion: "Verificamos las hipótesis:\n1. Continua en $[-2, 2]$: Sí, el valor absoluto es continuo.\n2. Derivable en $(-2, 2)$: **NO**. En $x=0$, que pertenece al intervalo, la función presenta un pico puntiagudo y la derivada no existe.\n**Conclusión:** No se puede aplicar el Teorema de Rolle porque no cumple la condición de derivabilidad."
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Aplique Lagrange para hallar $c$ en $f(x) = x^2$ en el intervalo $[0, 2]$.",
        solucion: "Es continua y derivable (polinomio).\nAplicamos fórmula de la Tesis: $f'(c) = \\frac{f(2) - f(0)}{2 - 0}$\nCalculamos valores: $f(2) = 4$, $f(0) = 0$.\nPendiente de la secante: $\\frac{4 - 0}{2 - 0} = 2$.\nDerivamos $f(x)$: $f'(x) = 2x$.\nIgualamos: $2c = 2 \\implies c = 1$.\nEl valor $c=1$ pertenece al intervalo $(0, 2)$."
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Resolver aplicando la regla de L'Hôpital: $$ \\lim_{x \\to 0} \\frac{e^x - x - 1}{x^2} $$",
        solucion: "Al evaluar da $0/0$. Aplicamos L'Hôpital derivando numerador y denominador.\nDerivada numerador: $e^x - 1$.\nDerivada denominador: $2x$.\nQueda: $$ \\lim_{x \\to 0} \\frac{e^x - 1}{2x} $$\nVolvemos a evaluar en 0: sigue dando $0/0$. \nPodemos **aplicar L'Hôpital por segunda vez**:\nDerivada numerador: $e^x$.\nDerivada denominador: $2$.\nQueda: $$ \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2} $$\nEl límite es $1/2$."
      }
    ],
    preguntas: [
      { q: "Si en el intervalo [-2, 2] tengo la función $f(x) = |x|$, ¿puedo aplicar el Teorema de Rolle?", options: ["Sí, porque f(-2)=f(2)", "No, porque no es continua en cero", "No, porque no es derivable en x=0 (falla hipótesis 2)", "Sí, c=0"], correct: 2 },
      { q: "¿A qué tipos exactos de indeterminaciones se les puede aplicar L'Hôpital de manera directa?", options: ["A cualquiera", "$1^\\infty$ y $0^0$", "Solo a $\\infty - \\infty$", "$0/0$ y $\\infty/\\infty$"], correct: 3 },
      { q: "Geométricamente, la fórmula del Teorema de Lagrange $\\frac{f(b)-f(a)}{b-a}$ representa:", options: ["La derivada evaluada en c", "La pendiente de la recta secante que une a y b", "El área bajo la curva", "El volumen de revolución"], correct: 1 },
      { q: "Para que el Teorema de Rolle aplique, además de ser continua y derivable, ¿qué otra condición es excluyente?", options: ["Que la función sea positiva", "Que $f(a) = f(b)$", "Que el límite en infinito sea 0", "Que $f(c) = 0$"], correct: 1 },
      { q: "En la Regla de L'Hôpital, ¿cómo se deriva la fracción original?", options: ["Usando la regla del cociente de derivadas", "Derivando numerador y denominador de forma separada", "Se deriva el numerador y el denominador queda igual", "Se integra en lugar de derivar"], correct: 1 },
      { q: "El Teorema de Rolle es en realidad un caso particular del Teorema de Lagrange cuando:", options: ["La pendiente de la secante es 1", "El intervalo es abierto en ambos lados", "La recta secante es horizontal ($m=0$)", "La función es un polinomio"], correct: 2 },
      { q: "Si aplico L'Hôpital a un límite y la respuesta vuelve a dar 0/0, ¿qué hago?", options: ["El límite no existe", "La función es discontinua", "Se puede volver a aplicar L'Hôpital (derivar por segunda vez)", "Debo usar el Teorema de Rolle"], correct: 2 },
      { q: "El valor 'c' que garantizan Rolle y Lagrange siempre debe encontrarse en:", options: ["Cualquier lugar del dominio", "Fuera del intervalo de estudio", "El intervalo abierto (a, b)", "Solamente en cero"], correct: 2 },
      { q: "Si una función NO cumple la hipótesis de continuidad del Teorema de Rolle, ¿se garantiza la existencia del valor c?", options: ["Sí, si es derivable", "No, no se garantiza la existencia de c", "Sí, Rolle no necesita continuidad", "Solo si c=0"], correct: 1 }
    ]
  },
  {
    id: 'integrales',
    title: 'Integrales y Métodos',
    icon: 'Calculator',
    teoria: `
### 1. Integral Indefinida y la Constante
La integración es la operación inversa de la derivación. Encontrar la "Primitiva" de una función es encontrar qué función hubo que derivar para obtener la actual.
$$ \\int f(x) dx = F(x) + C $$
Donde $C$ es la constante de integración (ya que la derivada de cualquier constante es cero).

### 2. Métodos de Integración

**A) Sustitución:**
Se usa cuando una parte del integrando es la derivada (o un múltiplo) de otra parte interna.
1. Elegir $u = g(x)$ (suele ser el exponente, el denominador, o el interior de la raíz).
2. Diferenciar para obtener $du = g'(x)dx$.
3. Despejar $dx$, reemplazar en la integral y simplificar hasta que solo quede la variable $u$.

**B) Integración por Partes:**
Se usa para integrales que contienen **multiplicaciones de funciones diferentes** (ej: polinomio por logaritmo, exponencial por trigonometría).
Fórmula:
$$ \\int u \\cdot dv = u \\cdot v - \\int v \\cdot du $$
*Regla Mnemotécnica para elegir $u$:* **ALPES**
**A**rcos (Arcoseno, etc) $\\to$ **L**ogarítmicas $\\to$ **P**olinómicas $\\to$ **E**xponenciales $\\to$ **S**enos/Cosenos. La primera que aparezca en ALPES será la $u$, y el resto será $dv$.

### 3. El Teorema Fundamental y Regla de Barrow
La integral definida representa el área neta bajo la curva entre dos puntos. La **Regla de Barrow** es la que permite calcular el número exacto evaluando los límites de integración:
$$ \\int_a^b f(x) dx = F(b) - F(a) $$
Donde $F$ es la primitiva de $f$.

### 4. Integrales Impropias
Son integrales definidas que tienen un "problema de infinitos":
- **Primera Especie:** Los límites de integración son infinitos (ej: $\\int_1^\\infty$). Se resuelve aplicando límite: $\\lim_{b \\to \\infty} \\int_1^b$.
- **Segunda Especie:** La función tiene una asíntota vertical dentro del intervalo de integración $[a, b]$.
*Si el resultado del límite es un número finito, la integral **Converge**. Si da infinito, **Diverge**.*
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Calcular la integral: $$ \\int x \\cdot e^x dx $$",
        solucion: "Como es un producto entre un Polinomio ($x$) y una Exponencial ($e^x$), usamos el método **Por Partes**.\nPor la regla ALPES, el Polinomio tiene prioridad sobre la Exponencial para ser $u$.\n**Definimos:** \n$u = x \\implies du = dx$ \n$dv = e^x dx \\implies v = \\int e^x dx = e^x$\n\n**Aplicamos la fórmula:** $\\int u \\cdot dv = u \\cdot v - \\int v \\cdot du$\n$$ = x \\cdot e^x - \\int e^x dx $$\nLa nueva integral es directa.\n$$ = x \\cdot e^x - e^x + C $$"
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "Integral directa polinómica: $$ \\int (3x^2 - 4x + 5) dx $$",
        solucion: "La integral distribuye en sumas y restas. Se usa la regla de la potencia inversa (sumar 1 al exponente y dividir por el nuevo número).\n$$ \\int 3x^2 dx = 3 \\cdot \\frac{x^3}{3} = x^3 $$\n$$ \\int -4x dx = -4 \\cdot \\frac{x^2}{2} = -2x^2 $$\n$$ \\int 5 dx = 5x $$\nSumamos la constante:\n$$ x^3 - 2x^2 + 5x + C $$"
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Resolver por Sustitución: $$ \\int 2x \\cdot \\cos(x^2) dx $$",
        solucion: "Notamos que $2x$ es la derivada de $x^2$.\nLlamamos $u = x^2$.\nDiferenciamos: $du = 2x \\cdot dx \\implies dx = \\frac{du}{2x}$.\nReemplazamos en la integral:\n$$ \\int 2x \\cdot \\cos(u) \\frac{du}{2x} $$\nSe simplifican los $2x$.\nQueda $\\int \\cos(u) du = \\sin(u) + C$.\nVolvemos a la variable original:\n$$ \\sin(x^2) + C $$"
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Evaluar la integral impropia de primera especie: $$ \\int_1^\\infty \\frac{1}{x^2} dx $$",
        solucion: "Como el límite superior es infinito, la planteamos con un límite:\n$$ \\lim_{b \\to \\infty} \\int_1^b x^{-2} dx $$\nIntegramos $x^{-2}$ sumando 1: $\\frac{x^{-1}}{-1} = -\\frac{1}{x}$.\nAplicamos Barrow entre 1 y $b$:\n$$ \\left( -\\frac{1}{b} \\right) - \\left( -\\frac{1}{1} \\right) = -\\frac{1}{b} + 1 $$\nAhora calculamos el límite cuando $b \\to \\infty$:\n$$ \\lim_{b \\to \\infty} \\left( 1 - \\frac{1}{b} \\right) = 1 - 0 = 1 $$\nComo el límite da un número finito (1), la integral **Converge a 1**."
      }
    ],
    preguntas: [
      { q: "Al usar integración por partes, si tengo $\\int x^2 \\cdot \\ln(x) dx$, ¿quién debe ser 'u' según ALPES?", options: ["$x^2$ porque es más fácil de derivar", "$\\ln(x)$ porque es Logarítmica y está antes que la Polinómica en ALPES", "$dx$", "Cualquiera de los dos"], correct: 1 },
      { q: "Si resolvemos la integral impropia $\\int_1^\\infty \\frac{1}{x} dx$ y el límite nos da $\\infty$, concluimos que la integral:", options: ["Es evitable", "Vale cero", "Converge", "Diverge"], correct: 3 },
      { q: "¿Qué representa físicamente una integral definida $\\int_a^b f(x)dx$ si la función es siempre positiva?", options: ["El volumen del sólido", "La pendiente de la curva", "El área exacta delimitada bajo la curva y el eje x entre a y b", "El punto medio"], correct: 2 },
      { q: "La constante 'C' se agrega al resolver una integral indefinida porque:", options: ["La derivada de cualquier constante es cero", "Para hacer la fórmula más larga", "Representa el área", "Es obligatoria por el teorema de Rolle"], correct: 0 },
      { q: "En el método de Sustitución, luego de elegir 'u', el paso siguiente es:", options: ["Aplicar la fórmula de partes", "Diferenciar 'u' para encontrar 'du' y despejar 'dx'", "Sacar las constantes fuera de la integral", "Aplicar Barrow directamente"], correct: 1 },
      { q: "¿A qué se le llama integral impropia de primera especie?", options: ["A las que tienen raíces negativas", "A las que la función tiene asíntotas verticales en el intervalo", "A las integrales cuyo límite de integración es infinito (ej: $\\infty$)", "A las que no se pueden resolver"], correct: 2 },
      { q: "La fórmula $\\int u \\cdot dv = u \\cdot v - \\int v \\cdot du$ corresponde a:", options: ["Método de sustitución", "Método de integración por partes", "Regla de Barrow", "Teorema de Rolle"], correct: 1 },
      { q: "Si el cálculo de una integral impropia te da como resultado un número fijo (ej: 4), se dice que:", options: ["Diverge a 4", "Converge a 4", "No es impropia", "Tiene asíntota horizontal en 4"], correct: 1 },
      { q: "¿Cuál es la integral indefinida de $e^x$?", options: ["$x \\cdot e^{x-1} + C$", "$\\ln(x) + C$", "$e^x + C$", "$1/x + C$"], correct: 2 },
      { q: "En la regla de Barrow $\\int_a^b f(x) dx = F(b) - F(a)$, la función F en mayúscula representa:", options: ["La función original", "La derivada de la función", "La primitiva o integral evaluada", "El logaritmo natural"], correct: 2 }
    ]
  },
  {
    id: 'area-volumen',
    title: 'Área y Volumen de Revolución',
    icon: 'Move3d',
    teoria: `
### 1. Área entre Curvas Planas
Para calcular el área física que encierran dos funciones que se intersecan, usamos la integral definida. Es crucial identificar cuál función va por "arriba" (techo) y cuál por "abajo" (piso) en el dibujo.

**Fórmula General:**
$$ \\text{Área} = \\int_a^b (\\text{Función Techo} - \\text{Función Piso}) dx $$

**Pasos de resolución:**
1. Igualar las dos funciones $f(x) = g(x)$ para encontrar los puntos de corte. Estos serán los límites de integración $a$ y $b$.
2. Graficar o evaluar un punto intermedio para determinar cuál función es mayor (techo).
3. Plantear la integral y resolver usando la Regla de Barrow.

*Nota: Si las funciones se cruzan múltiples veces, el Techo y el Piso se intercambian. Hay que armar una integral sumada separada para cada tramo donde haya un cambio de techo.*

### 2. Volumen de un Sólido de Revolución
Si agarramos un área plana y la rotamos alrededor de un eje, se genera un sólido 3D. El cálculo se hace integrando los "discos" o "arandelas" que se van formando al seccionar el sólido. 

**Eje de Rotación: EJE X (o paralelo al eje X)**
Método de **Discos** (El área toca completamente el eje, no hay hueco interior):
$$ V = \\pi \\int_a^b [f(x)]^2 dx $$

Método de **Arandelas** (El área "flota" respecto al eje, generando un agujero cilíndrico adentro del sólido):
$$ V = \\pi \\int_a^b \\left( [\\text{Techo}]^2 - [\\text{Piso}]^2 \\right) dx $$
*(Notar que el Techo sería el radio más lejano al eje, y el Piso el radio del agujero interno).*

**Eje de Rotación: EJE Y (o paralelo al eje Y)**
Todo el problema debe estar expresado obligatoriamente en función de la variable $y$.
1. Hay que despejar la $x$ en la ecuación original: ej. $y = x^2 \\implies x = \\sqrt{y}$. Ahora se llama $f(y)$.
2. Los límites $a$ y $b$ ahora se buscan analizando los cortes en el eje $y$ vertical.
3. La integral se hace respecto a $dy$.
$$ V = \\pi \\int_c^d [f(y)]^2 dy $$
    `,
    practica: [
      {
        isExample: true,
        enunciado: "Calcule el área delimitada entre la parábola $y = x^2$ y la recta $y = x$.",
        solucion: "**Paso 1: Puntos de intersección.**\nIgualamos las funciones: $x^2 = x \\implies x^2 - x = 0 \\implies x(x - 1) = 0$.\nLos puntos de corte son $x=0$ y $x=1$.\n\n**Paso 2: ¿Quién es el techo?**\nTomamos un número entre 0 y 1, ej: $x=0.5$.\nEn la parábola: $0.5^2 = 0.25$\nEn la recta: $0.5$\nComo la recta da un valor mayor, la recta es el **Techo**.\n\n**Paso 3: Integral.**\n$$ \\text{Área} = \\int_0^1 (x - x^2) dx $$ \nIntegramos: $$ \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 $$ \nAplicando Barrow: $(\\frac{1}{2} - \\frac{1}{3}) - (0) = \\frac{1}{6}$."
      },
      {
        isExample: false,
        dificultad: 'Fácil',
        enunciado: "Plantee la integral para el volumen de rotar $f(x) = \\sqrt{x}$ entre $x=0$ y $x=4$ alrededor del eje X.",
        solucion: "La función está pegada al eje X, no hay agujeros, usamos Discos.\n$$ V = \\pi \\int_0^4 (\\sqrt{x})^2 dx $$\nLa raíz con el cuadrado se anulan.\n$$ V = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 $$\nEvaluando por Barrow: $V = \\pi \\cdot \\frac{16}{2} = 8\\pi$."
      },
      {
        isExample: false,
        dificultad: 'Medio',
        enunciado: "Plantear la integral de volumen si rotamos la misma región (entre $y=x^2$ y $y=x$) alrededor del eje X.",
        solucion: "Hay dos curvas. El área a rotar \"flota\" formando un agujero, por lo tanto es método de Arandelas.\n1. Los límites son los cortes hallados en el ejemplo: $0$ a $1$.\n2. El Techo (Radio Mayor) es la recta $x$. El Piso (Radio Menor) es la parábola $x^2$.\nFórmula: $V = \\pi \\int ([R_{mayor}]^2 - [R_{menor}]^2) dx$\n$$ V = \\pi \\int_0^1 ((x)^2 - (x^2)^2) dx $$\n$$ V = \\pi \\int_0^1 (x^2 - x^4) dx $$"
      },
      {
        isExample: false,
        dificultad: 'Difícil',
        enunciado: "Queremos rotar el área entre el eje Y, $y=2$ y $y=x^3$ girando alrededor del **Eje Y**.",
        solucion: "Como gira alrededor del eje Y, todo debe estar en función de Y.\n1. Despejamos la función: $y = x^3 \\implies x = \\sqrt[3]{y}$. Esto es $f(y)$.\n2. Límites en Y: El problema pide hasta $y=2$. Empieza en el vértice $y=0$. Límites: 0 a 2.\n3. Planteamos Discos con respecto a 'dy':\n$$ V = \\pi \\int_0^2 (\\sqrt[3]{y})^2 dy $$\n$$ V = \\pi \\int_0^2 y^{2/3} dy $$"
      }
    ],
    preguntas: [
      { q: "En el método de Discos para calcular volumen, la fórmula es $\\pi \\cdot \\int [f(x)]^2 dx$. ¿De dónde sale esta estructura matemática?", options: ["De la fórmula de la esfera", "De la fórmula del área del círculo ($\\pi \\cdot r^2$) donde el radio es f(x)", "De un teorema aleatorio", "Del perímetro de la curva"], correct: 1 },
      { q: "Si quiero rotar una figura alrededor del eje Y usando el método de discos, ¿cuál de estos pasos es OBLIGATORIO?", options: ["Derivar la función primero", "Despejar Y para que quede y = f(x)", "Multiplicar por 2 pi", "Despejar X en función de Y, e integrar respecto a dy"], correct: 3 },
      { q: "Si no igualo f(x)=g(x) al buscar el área entre dos curvas cerradas, ¿qué problema tendré?", options: ["No tendré los límites de integración a y b", "El área dará negativa", "La integral será imposible de resolver", "Estaré calculando el volumen por error"], correct: 0 },
      { q: "En el cálculo de Áreas, si la función f(x) y g(x) se cruzan tres veces, ¿qué se debe hacer?", options: ["Calcular la integral desde el primer corte hasta el último directamente", "Partir la integral en los tramos de corte, porque el techo y el piso se invierten", "Multiplicar la integral por 3", "Usar el método de Arandelas"], correct: 1 },
      { q: "El método de Arandelas se utiliza para volúmenes cuando:", options: ["El sólido es una esfera perfecta", "El eje de rotación es el eje Z", "El área a rotar está despegada del eje, generando un hueco interior", "La función es un logaritmo"], correct: 2 },
      { q: "¿Cuál es el orden correcto dentro de la integral para calcular el área entre dos curvas?", options: ["(Piso + Techo)", "(Piso - Techo)", "(Techo - Piso)", "(Techo * Piso)"], correct: 2 },
      { q: "En el método de Arandelas, la estructura interna de la integral es:", options: ["$(\\text{Radio Lejano} - \\text{Radio Cercano})^2$", "$(\\text{Radio Lejano})^2 - (\\text{Radio Cercano})^2$", "$(\\text{Radio Cercano})^2 - (\\text{Radio Lejano})^2$", "$(\\text{Techo} - \\text{Piso})$"], correct: 1 },
      { q: "Si la función Techo es siempre constante $y=5$ y el Piso es $y=0$, entre 0 y 2, el área es un rectángulo. ¿Cuánto vale la integral?", options: ["10", "5", "2", "No se puede integrar constantes"], correct: 0 },
      { q: "Si calculamos un volumen de revolución y da negativo, ¿qué ocurrió?", options: ["Es posible en cuadrantes negativos", "Restamos mal en Arandelas (hicimos Cercano menos Lejano)", "La función era decreciente", "El volumen es imaginario"], correct: 1 }
    ]
  }
];
