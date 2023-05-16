const apiFetch = "https://reqres.in/api/users?page=2"
fetch (apiFetch)    
.then ( response => response.json() ) 
.then (users => mostrarUsuarios(users)  )
.catch(error => console.log(error) )

const mostrarUsuarios = ( users ) => {
    console.log(users.data)
    let body = ""
    for (let usuario of users.data){
        body += `<tr>
                     <td class="col-xl-1 d-none d-sm-table-cell"> ${usuario.id} </td> 
                     <td class="col-xl-2 col-sm-3"> ${usuario.first_name} </td> 
                     <td class="col-xl-2 col-sm-3"> ${usuario.last_name} </td> 
                     <td class="col-xl-2 d-none d-sm-table-cell"> ${usuario.email} </td> 
                     <td class="col-xl-5 col-sm-6"> <img src="${usuario.avatar}" class="rounded-circle" alt="Foto del usuario"> </td> 
                     </tr> `
    }
    document.getElementById("tabla").innerHTML = body
}
/*

Todo esto es codigo que intente implementar con ayuda de erick, pero no logré
que funcionara :(

const buscarConExpiracion = (key) => {
    const data = JSON.parse(localStorage.getItem('users'));
    const fecha = new Date();

    let fechaHoraUTC = new Date(`${data.fecha}`);
    let fechaHoraLocal = new Date(fechaHoraUTC.getTime() - (fechaHoraUTC.getTimezoneOffset()));
    
    if (fecha-fechaHoraLocal < ( 1 * 60 * 1000)) { 
      console.log("No ha pasado más de 1 min");
      console.log(fecha - fechaHoraLocal);
      mostrarDataLocalStorage();
      
      return null;
    } else {
    console.log("Se borraron los datos");
     localStorage.removeItem(key);
     return data.data
    }
 }


buscarConExpiracion('users');


//__________================____________//

window.onload = function () {
    let loader = document.getElementById("loader");
    let opacity = 1;
    const data = JSON.parse(localStorage.getItem('users'));
    let interval = setInterval(function () {
      if (data != null) {
        console.log("La pagina recupera la informacion del LocalStorage");
        clearInterval(interval);
      }
    }, 200);
  }  
  */