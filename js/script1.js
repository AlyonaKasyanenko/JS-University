while (v!=5){
    var v = prompt("Оберіть фукнцію: \n 1 - розгалужений обчислювальний процес, \n 2 - цикл з for - лічильник, \n 3 - цикл з while, \n 4 - цикл з do...while, \n 5 - цикл for - зі своїми значеннями",'')
    
    switch (v) {
        case "1":
            alert("Варіант 1:");
            let x = prompt("X=", '0.263');
            let y = prompt("Y=", '0.328');
            let z = prompt("Z=", '0.466');
            if (x>=y){
                alert("x>y");
                let a =Math.pow(y,x)+3*z;
                alert(a);
            } else {
                alert("x<y");
                let b=Math.pow(Math.E,(Math.abs(x-y)))+(x/2);
                alert(b);
            }
        break
    
        case "2":
            alert("Варіант 2:");
            var step = 10;
            for (var x2 = 60 ; x2 <=100;){
                let a2 = 1.38;
                let b2 = -1.2;
                let y;
                y=(a2*Math.pow(Math.log(x2),2))/b2+Math.sqrt(x2);
                alert("Якщо х2="+x2+" y="+y);
                x2=x2+step;
            }
        break
    
        case "3":
            alert("Варіант 3:");
            var step = 10;
            let x3=1.35;
            while (x3<=12.4){
                let a2 = 1.38;
                let b2 = -1.2;
                let y2;
                y2=(a2*Math.pow(Math.log(x3),2))/b2+Math.sqrt(x3);
                alert("Якщо х=" +x3+ "y=" +y2);
                x3=x3+step;
            }
        break
        
        case "4":
            alert("Варіант 4:");
            var step = 10;
            let x4=1.35;
            do {
                let a3 = 1.38;
                let b3 = -1.2;
                let y3;
                y3=(a3*Math.pow(Math.log(x4),2))/b3+Math.sqrt(x4);
                alert("Якщо х=" +x4+ "y=" +y3);
                x4=x4+step;
            } while (x4<=12.4);
        break 
    
        case "5":
            alert("Варіант 5:");
            var array=[];
            for (var i=0;i<5;i++) {
                array[i]=prompt('Введіть '+(i+1)+' элемент масиву',12);
            }
            let a2 = 1.38;
            let b2 = -1.2;
            for (var i=0;i<5;i++){
                let y3;
                y3=(a2*Math.pow(Math.log(array[i]),2))/b2+Math.sqrt(array[i]);
                alert('Якщо x=' +array[i]+ ',y=' +y3);
            }
        
    }
}