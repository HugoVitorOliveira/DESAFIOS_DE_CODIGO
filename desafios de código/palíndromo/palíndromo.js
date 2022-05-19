
    function VeriPalindromo(string){
        if(!string) return;
        return string.split("").reverse().join("") === string;
    }
    const Palitestado = "ovo"
    console.log(VeriPalindromo(Palitestado)) 
