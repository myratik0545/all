interface calc{
    a:number 
    b:number 
    c:string 
    add(a:number,b:number):void
    multiply(a:number,b:number):void 
    vychitaniy(a:number,b:number):void
    delenie(a:number,b:number):void
}

class calculation implements calc{
    a:number
    b:number
    c:string 

    constructor(a:number,b:number,c:string){
        this.a = a
        this.b = b
        this.c = c
    }

    add(a:number,b:number):void{
        let all = []
        for (let i = 1;i<a+b+1;i++){
            all.push(i)
        }
        console.log(all[0])
    }
    multiply(a:number,b:number){
        console.log(`${a*b}`)
    }
    vychitaniy(a:number,b:number){}
    delenie(a:number,b:number){}

}

let a = 5
let b = 7
let c = "1"

if (c == "1"){
    let example = new calculation(a,b,c)
    example.add(a,b)

}
if (c == "2"){
    let example = new calculation(a,b,c)
    example.multiply(a,b)
}


