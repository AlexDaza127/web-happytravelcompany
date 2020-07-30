// Función de petición general usando async await en javascript
async function request(method, url, body, upload){
    try{
        //Instanciación de la variable de ambiente que realiza la petición al Backend 
        const urlApi = process.env.REACT_APP_API_URL;

        //Opciones de petición
        const requestOptions = {
            method: method, // método GET, POST, PUT, DELETE
            header: {
                'Content-Type': 'application/json'
            }// Se envían datos formateados en JSON
        }
        
        //Si no es el método GET se incluye a body 
        if(method.toUpperCase() !== 'GET' && !upload){
            requestOptions.body = JSON.stringify(body);
        }else{
            //Cuando está activada la carga de archivos se debe eliminar el Content-Type
            delete requestOptions.header['Content-Type'];
            requestOptions.body = body;
        }

        //Se realiza la petición al Backend
        console.log("fetch = " + `${urlApi}/${url}`+","+ requestOptions);
        const response = await fetch(`${urlApi}/${url}`, requestOptions);//Se crea la petición al Backend con la ruta, el método y la solicitud

        //Se obtiene la respuesta y se transforma en JSON
        const datos = await response.json();
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