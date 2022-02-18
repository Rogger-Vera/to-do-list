
let input = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

function mensaje(mensaje, clase) {

    let divMensaje = document.createElement("div")
    divMensaje.classList.add(clase)
    divMensaje.appendChild(document.createTextNode(mensaje))

    let titulo = document.querySelector("h1")

    titulo.insertBefore(divMensaje, null)

    setTimeout(() => {
        document.querySelector(`.${clase}`).remove();
    }, 2000);

}  

function chequearInput () {
    
    if (input.value) {
        let item = new Item(input.value)
        mensaje("Tarea agregada con exito", "exito")
    } else{
        mensaje("Intoduce una tarea", "error")
    }

    input.value = ""
}

botonAgregar.addEventListener("click", chequearInput)

class Item {

    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){

        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        let divItem = document.createElement("div")
        let botonEditar = document.createElement("button")
        let botonRemover = document.createElement("button")

        inputItem.setAttribute("disabled", "true")
        inputItem.classList.add("item-input")
        inputItem.value = nuevaTarea
        
        divItem.classList.add("item")

        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")

        divItem.appendChild(inputItem)
        divItem.appendChild(botonEditar)
        divItem.appendChild(botonRemover)
        container.appendChild(divItem)

        botonEditar.addEventListener("click", function () {

            if (inputItem.value) {
                
                inputItem.disabled = !inputItem.disabled
                if (inputItem.disabled == false) {
                    this.innerHTML = "<i class='fas fa-lock-open'></i>"
                } else {
                    this.innerHTML = "<i class='fas fa-lock'></i>"
                }

            } else {
                mensaje("Intoduce una tarea", "error")
            }
             
        })        

        botonRemover.addEventListener("click", function () {
            
            container.removeChild(divItem)

        })

    }

}

  




