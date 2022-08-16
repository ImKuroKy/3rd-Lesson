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