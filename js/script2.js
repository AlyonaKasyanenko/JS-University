while (v!=5){
    var v = prompt("Оберіть фукнцію: \n 1 - розгалужений обчислювальний процес, \n 2 - цикл з for - лічильник, \n 3 - цикл з while, \n 4 - цикл з do...while, \n 5 - цикл for - зі своїми значеннями",'')
    
    if (isNaN(v)==false){
        if (v<1 || v>5){
            alert("Ви ввели неккоректне число, повторіть операцію")
        }else{
            switch(v){
                case '1':case1_1();
                break
                case '2':case2_1();
                break
                case '3':case3_1();
                break
                case '4':case4_1();
                break
                case '5':case5_1();
                break
            }
        }


    function inputNumber(msg,def){
            do {
            var str=prompt(msg,def);
            } while (!isNumber(str))
            return parseFloat(str);
        }

        function isNumber(str){
             if (isNaN(str)==false){
                 return(true)
             }else
             return false
            }

    function case1_1(){
        let x = inputNumber('Ввести х', 0.263);
        let y = inputNumber('Ввести у', 0.328);
        if (x>=y){
            let z= inputNumber('Ввести z', 0.466);
            let a;
            a=Math.pow(y,x)+3*z;
            alert('a='+a);
        }else{
            let b
            b=Math.pow(Math.E,(Math.abs(x-y)))+(x/2);
            alert('b='+b);
        }
    }

        function case2_1(){
            let step= inputNumber('Ввести крок',10);
            let a= inputNumber('Ввести а', 1.38);
            let b=inputNumber('Ввести b', -1.2);
            let x_s=inputNumber('Ввести початкове значення x', 60);
            let x_e=inputNumber('Ввести кінцеве значення x', 100);
            if (x_s<x_e){
                for (x_s;x_s<=x_e;){
                let y=(a*Math.pow(Math.log(x_s),2))/b+Math.sqrt(x_s);
                alert("При х="+x_s+" y="+y);  
                x_s=x_s+step;
                }
            }else alert('Кінцеве значення меньше за початкове, повторіть операцію');
        }

    function case3_1(){
        let step= inputNumber('Ввести крок',10);
        let a= inputNumber('Ввести а', 1.38);
        let b=inputNumber('Ввести b', -1.2);
        let x_s=inputNumber('Ввести початкове значення x', 60);
        let x_e=inputNumber('Ввести кінцеве значення x', 100);
        while (x_s<x_e){
            for (x_s;x_s<=x_e;){
                let y=(a*Math.pow(Math.log(x_s),2))/b+Math.sqrt(x_s);
             alert("При х="+x_s+" y="+y);  
             x_s=x_s+step;}
        }
    }

    function case4_1(){
        let step= inputNumber('Ввести крок',10);
        let a= inputNumber('Ввести а', 1.38);
        let b=inputNumber('Ввести b', -1.2);
        let x_s=inputNumber('Ввести початкове значення x', 60);
        let x_e=inputNumber('Ввести кінцеве значення x', 100);
        do{
            for (x_s;x_s<=x_e;){
                let y=(a*Math.pow(Math.log(x_s),2))/b+Math.sqrt(x_s);
             alert("При х="+x_s+" y="+y);  
             x_s=x_s+step;}
        }while(x_s<x_e)
    }

    function case5_1(){
        var array=[];
            for (var i=0;i<5;i++) {
                array[i]=inputNumber('Введіть '+(i+1)+' элемент масиву',12);
            }
            let a= inputNumber('Ввести а', 1.38);
            let b=inputNumber('Ввести b', -1.2);
            for (var i=0;i<5;i++){
            let y;
            y=(a*Math.pow(Math.log(array[i]),2))/b+Math.sqrt(array[i]);
            alert('Якщо x=' +array[i]+ ',y=' +y);
        }
    }
    }
}

