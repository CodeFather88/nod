document.write('<p>2</p>')



let array1=[]
let array2=[]
let divider=1



function razlog(num,array,divider){ // это функция для разложения числа на простые множители

    const temp=num/divider
    if(temp===1) return array.push(divider) 
    if(divider!==1 && num%divider===0){
        array.push(divider)
        razlog(temp,array,divider)
    }
    else{
        divider+=1
        razlog(num,array,divider)
        
    }
     
    return array
}

function noda(a,b, array1,divider){
    
     
    
     
    razlog(a, array1,divider) // разложили первое число и записали множители в массив
    console.log(array1+"ar1")
    razlog(b,array2,divider)// второе число тоже
    console.log(array2+'array2')

    let nod_mas=[] // в этот массив буду записывать общие делители для двух чисел
    for(let i=0;i<array1.length;i++) //перебираем массивы и записываем общие делители в один массив
    {
        for(let j = 0; j< array2.length; j++)
        {
            if(array1[i]===array2[j]){
                nod_mas.push(array1[i])
                
            }
        }
    }
    if(nod_mas.length===0) // костыль на случай, если нет общих делителей
    {
        nod_mas.push(1)
    }
    console.log(Math.max(...nod_mas))//в массиве с общими делителями нахожу наибольший и вывожу в консоль
    
    
    

}
noda(99,11,array1,divider) //вызов функции дял нахождения нод








 