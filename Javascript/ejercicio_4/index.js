let nombre = "Enrique";
let apellido = "Rodríguez";
let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let num_caracteres = estudiante.length;
let fst_letter = estudiante.slice(0,1);
let lst_letter = estudiante.slice(16,17);

let del_spaces = estudiante.replace(/ /g,'');
let check = estudiante.includes(`${nombre}`);
