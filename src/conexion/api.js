// Función de petición general usando async await en javascript
async function request(method, url, body, upload){
    try{
        //Instanciación de la variable de ambiente que realiza la petición al Backend 
        const urlApi = process.env.REACT_APP_API_URL;

        //Opciones de petición
        const requestOptions = {
            method: method, // método GET, POST, PUT, DELETE
            headers: {
                'Content-Type': 'application/json'
            }// Se envían datos formateados en JSON
        }
        
        //Si el método es GET entonces no se le incluye body
        if(method.toUpperCase() !== 'GET' && !upload){
            requestOptions.body = JSON.stringify(body);
        }

        // //Se realiza la petición al Backend
        // console.log("url === " + url);
        // console.log("urlApi === " + urlApi);
        // //console.log("fetch = " + `${urlApi}/${url}`+","+ requestOptions);
        //console.log("request ==== " + requestOptions.body)
        
        const response = await fetch(`${urlApi}/${url}`,requestOptions);//Se crea la petición al Backend con la ruta, el método y la solicitud
        
        //Se obtiene la respuesta y se transforma en JSON
        const datos = await response.json();
        console.log({datos});
        return datos;
    }catch(error){
        console.log('este es el error = ' + error);
        return{
            estado: false,
            mensaje: 'Error al realizar petición'
        }
    }    
}

async function api(method, url, body={}, upload){
    return await request(method, url, body, upload);
}

export{
    api
}