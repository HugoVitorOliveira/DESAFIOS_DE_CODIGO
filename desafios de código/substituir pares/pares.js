
    function VeriPar(array){
        for(let pos in array){
            if(array[pos] % 2 == 0) array[pos] = 0; 
        }
        return array;
    }
    const ArrayTestado = [0 , 1 , 2 , 3 , 4, 5 , 6]
    console.log(VeriPar(ArrayTestado))
