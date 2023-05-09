console.log("motori di WEB storage ");

localStorage.clear(); //svuota completamente il local storage
sessionStorage.clear(); //svuota completamente il session storage
//i comandi per i due motori sono uguali

// localStorage.setItem("name", "Tommaso");

// localStorage.removeItem("name");

// localStorage.setItem("count", 10);
// localStorage.setItem("alive", true);

let niente = localStorage.getItem("gigio");

console.log(niente); //null
