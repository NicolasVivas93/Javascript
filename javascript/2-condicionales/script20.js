/* EJERCICIO 20
De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%. */

let porcentaje = parseInt(prompt('INGRESE TOTAL DE RESPUESTAS CORRECTAS (%)'));

if (porcentaje >= 90) {
    document.write('NIVEL SUPERIOR');
} else {
    if (porcentaje >= 75 && porcentaje < 90) {
        document.write('NIVEL MEDIO');
    } else {
        if (porcentaje >= 50 && porcentaje < 75) {
            document.write('NIVEL REGULAR');
        } else {
            document.write('FUERA DE NIVEL');
        }
    }
}
