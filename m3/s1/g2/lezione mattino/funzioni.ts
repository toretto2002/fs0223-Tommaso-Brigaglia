const prova:Function = function():void{
    console.log('ciao');
    
}

function funzioneProva():string{
    return 'strinfga'
}

funzioneProva();

function $(selettore:string):HTMLElement | null {
    return document.querySelector(selettore)
}

$('#test')?.style.color

function somma(a:number, b:number, c?:number):number{
    if(!c){
        c = 0;
    }
    return a + b + c
}