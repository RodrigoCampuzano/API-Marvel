import { listCharacter} from "./dependencies.js";
import { Character } from "../models/Character.js";
import { Comics } from "../models/Comics.js";
import { Events } from "../models/Events.js";
import { Series } from "../models/Series.js";
import { Stories } from "../models/Stories.js";


const btn = document.getElementById("generar")
btn.addEventListener("click", ()=>{
    //publickey = f4e7ba68c62883f0cffe7498158481e2
    //privatekey = 6770015944f808b0b56a1be3aca06849b7bd6234
    //hash =3ce4a63cda4031163dfb64d8441e3f5d
    let url = "https://gateway.marvel.com:443/v1/public/creators?ts=1234&apikey=f4e7ba68c62883f0cffe7498158481e2&hash=3ce4a63cda4031163dfb64d8441e3f5d"
    fetch(url).then(
        response => response.json()
    ).then(
        data => {
            //console.log(data.data.results)
            data.data.results.forEach(element => {
            let character = new Character()
                character.setId(element.id)
                character.setFirstName(element.firstName)
                character.setImagen(element.thumbnail.path+".jpg")

                element.comics.items.forEach(item =>{
                    let comic = new Comics()
                    comic.setresourceURI(item.resourceURI)
                    comic.setName(item.name)
                    character.getComics().push(comic)
                })
                
                element.events.items.forEach(item =>{
                    let event = new Events()
                    event.setresourceURI(item.resourceURI)
                    event.setName(item.name)
                    character.getEvents().push(event)
                })
                
                element.series.items.forEach(item =>{
                    let ser = new Series()
                    ser.setresourceURI(item.resourceURI)
                    ser.setName(item.name)
                    character.getSeries().push(ser)
                })
                
                element.stories.items.forEach(item =>{
                    let stor = new Stories()
                    stor.setresourceURI(item.resourceURI)
                    stor.setName(item.name)
                    character.getStor().push(stor)
                })
                

                console.log(character)
                listCharacter.addCreator(character)
                
                
            })
        }
    )
})

const verbtn = document.getElementById("cargar")
verbtn.addEventListener("click", ()=> {
    const div1 = document.getElementById("container");
    listCharacter.getCreators().forEach(element =>{

        let imagen = document.createElement("img")
        imagen.src=element.getImagen()
        imagen.setAttribute("id", "img")

        const divname = document.createElement("div")
        divname.setAttribute("id", "divname")

        const div2 = document.createElement("div");
        div2.setAttribute("id", "div2");

        const div3 = document.createElement("div")
        div3.setAttribute("id", "div3")

        const div4 = document.createElement("div")
        div4.setAttribute("id", "div4")

        const div5 = document.createElement("div")
        div5.setAttribute("id", "div5")

        const div6 = document.createElement("div")
        div6.setAttribute("id", "div6")

        let content = document.createElement("p")
        content.setAttribute("id", "pcreators")
        
        let id = document.createElement("h1")
        let firstName = document.createElement("h2")

        let pid = document.createElement("p")
        pid.setAttribute("id", "pid")
        
        let pname = document.createElement("p")
        pname.setAttribute("id", "pname")

        content.textContent ="Creador:"
        pid.textContent="Id:"
        pname.textContent="Nombre:"
        id.innerText = element.getId()
        firstName.innerText = element.getFirstName()
    
    
        element.getComics().forEach(element1 =>{
            let content = document.createElement("p")
            content.setAttribute("id", "pcomics")
            let name = document.createElement("p")
            let url = document.createElement("p")

            name.innerText = element1.getName()
            url.innerText = element1.getresourceURI()
            content.textContent ="Comic:"

            div3.appendChild(content)
            div3.appendChild(name)
            div3.appendChild(url)  
            div2.appendChild(div3)
        })

        element.getEvents().forEach(element2 =>{
            let content = document.createElement("p")
            content.setAttribute("id", "pevents")
            let name = document.createElement("p")
            let url = document.createElement("p")

            name.innerText = element2.getName()
            url.innerText = element2.getresourceURI()
            content.textContent="Evento:"

            div4.appendChild(content)
            div4.appendChild(name)
            div4.appendChild(url)
            div2.appendChild(div4)
        })
            
        element.getSeries().forEach(element3=>{
            let content = document.createElement("p")
            content.setAttribute("id", "pseries")
            let name = document.createElement("p")
            let url = document.createElement("p")

            name.innerText = element3.getName()
            url.innerText = element3.getresourceURI()
            content.textContent="Serie:"

            div5.appendChild(content)
            div5.appendChild(name)
            div5.appendChild(url)
            div2.appendChild(div5)
        })

        element.getStor().forEach(element4 =>{
            let content = document.createElement("p")
            content.setAttribute("id", "pstories")
            let name = document.createElement("p")
            let url = document.createElement("p")

            name.innerText = element4.getName();
            url.innerText = element4.getresourceURI()
            content.textContent="Historia:"

            div6.appendChild(content)
            div6.appendChild(name)
            div6.appendChild(url)
            div2.appendChild(div6)
        })
        divname.appendChild(imagen)
        pid.appendChild(id)
        pname.appendChild(firstName)
        divname.appendChild(content)
        divname.appendChild(pid)
        divname.appendChild(pname)
        div2.appendChild(divname)
        div1.appendChild(div2);      
    })
})
