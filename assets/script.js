function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}

var running = true;
var counter = 0;
while (running == true)
{
    var userChoise = prompt("Введите номер желаемого задания", "сюда");
    switch (userChoise)
    {
        case "1":
            {
                /*Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми 
                значениями. Вывести наибольшее значение массива, наименьшее значение массива, общую сумму 
                элементов, среднее арифметическое всех элементов, вывести все нечетные значения.*/
                document.write("<H3>Задание 1</H3>");
                var myMas = [];
                var userValue = parseInt(prompt("Введите желаемую длину массива", "сюда"));
                for (var i = 0; i < userValue; i++)
                {
                    myMas[i] = parseInt(prompt("Введите желаемый элемент массива", "сюда"));
                };
                var changedMas = myMas.slice().sort();
                document.write("Наибольшее значение массива: " + changedMas.reverse().shift() + "<br />");
                changedMas = myMas.slice().sort();
                document.write("Наименьшее значение массива: " + changedMas.shift() + "<br />");
                var sumCounter = 0;
                for (var i = 0; i < myMas.length; i++)
                {
                    sumCounter += myMas[i]; 
                };
                document.write("Сумма всех элементов массива: " + sumCounter + "<br />");
                var arithmeticMean = (sumCounter / myMas.length);
                document.write("Среднее арифметическое всех элементов массива: " + arithmeticMean + "<br />");
                changedMas = myMas.slice().sort();
                for (var i = 0; i < changedMas.length; i++)
                {
                    if (changedMas[i] % 2 == 0)
                    {
                        changedMas.splice(i, 1);
                    };
                };
                document.write("Все нечетные значения массива: " + changedMas + "<br />");
            };
            break;
        case "2":
            {
                /*Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными 
                целочисленными значениями. По главной диагонали все числа со знаком (-) заменить на 0, а числа со 
                знаком (+) на число 1*/
                document.write("<H3>Задание 2</H3>");
                var doubleMas = new Array(5);
                for (var i = 0; i < doubleMas.length; i++) {
                    doubleMas[i] = new Array(5);
                };
                document.write("Задан двумерный массив:<br/>");
                for (var row = 0; row < doubleMas.length; row++) {  
                    for (var col = 0; col < doubleMas[row].length; col++) {
                        if ((row + col) % 2 == 1) 
                            doubleMas[row][col] = getRandomIntInclusive(-99, 99);
                        else
                            doubleMas[row][col] = getRandomIntInclusive(-99, 99);
                    };
                };
                for (var row = 0; row < doubleMas.length; row++) {
                    for (var col = 0; col < doubleMas[row].length; col++) {
                        document.write(doubleMas[row][col] + " ");
                    };
                    document.write("<br/>");
                };
                document.write("<br/>");
                for (var row = 0; row < doubleMas.length; row++) {  
                    for (var col = 0; col < doubleMas[row].length; col++) {
                        if (Math.sign(doubleMas[row][col]) == -1 || Math.sign(doubleMas[row][col]) == -0) 
                            doubleMas[row][col] = 0;
                        else if (Math.sign(doubleMas[row][col]) == 1 || Math.sign(doubleMas[row][col]) == 0)
                            doubleMas[row][col] = 1;
                    };
                };
                document.write("После обработки, получен двумерный массив:<br/>");
                for (var row = 0; row < doubleMas.length; row++) {
                    for (var col = 0; col < doubleMas[row].length; col++) {
                        document.write(doubleMas[row][col] + " ");
                    };
                    document.write("<br/>");
                };
            };
            break;
        default:
            {
                counter = 0;
                running = false;
                break;
            };
    };
};