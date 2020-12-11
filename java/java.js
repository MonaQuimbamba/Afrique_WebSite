

/**************************************************** ***/
let aPi="";
let pays="";
let country="";

/********************* event for search ****************************** ****/
let pesquisa = document.querySelector('#search');
pesquisa.addEventListener('click',getCountry);

/****************************************************** */
function getCountry(e)
{    
    /********************************************************** */
     aPi="https://restcountries.eu/rest/v2/name/";   
    /******************* recuperer le pays entrée ************** */ 
     pays= document.querySelector('#texte').value;
    /****************************************** */
    aPi+=pays;  
    /*************************   recuperer la section pour y placer les info  ************************ */
    const sec = document.querySelector('#sect');
    let données="";

    //********************  rechercher les pays d'afrique ***************** */
     fetch(aPi)
    .then( function (response) 
    {
        if (response.ok)
            return response.json();
        throw new Error('Response is not OK');
    })

    .then( function (data) 
    {
      
        console.log(data);
        console.log(data[0].name);
    /**************** function qui va chercher les info d'un pays************* */
        Aboutcountry(data);
       
    })

    /******************************** atrapper les erreurs au cas où il echoue ************* */
    .catch( function (error) 

    {
        console.log(error.message);
    });

    /************** recherche des info d'un pays******** */
    function Aboutcountry(data) 
        {                         
                données +=`<a id="ceci" href="https://en.wikipedia.org/wiki/${data[0].name}"> 
                <article id="arti"> 
                <figure> <img src=${data[0].flag} alt="drapeau"> </figure>
                <table>                     
                    <thead>
                        <tr>                                            
                            <th colspan="3">${data[0].name} </th>                                              
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> NATIVE NAME </th>
                            <td colspan="2"> ${data[0].nativeName} </td>  
                        </tr>
                        <tr>
                            <th> ALPHACODE </th>
                            <td colspan="2"> ${data[0].alpha3Code} </td>  
                        </tr>
                        <tr>
                            <th> LOCATION </th>
                            <td colspan="2"> ${data[0].subregion} </td>
                        </tr>
                        <tr>
                            <th> AREA </th>
                            <td colspan="2"> ${data[0].area} </td>
                        </tr>
                        <tr>
                            <th> CAPITAL </th>
                            <td colspan="2"> ${data[0].capital} </td>
                         </tr>
                        <tr> 
                            <th> LANGUAGE </th>
                            <td colspan="2"> ${data[0].languages[0].nativeName} </td>
                         </tr>
                        <tr>
                            <th> POPULATION </th> 
                            <td colspan="2"> ${data[0].population} </td>
                        </tr>
                        <tr>
                            <th> TIME ZONE </th> 
                            <td colspan="2"> ${data[0].timezones} </td>
                        </tr>
                        <tr>
                            <th> DOMAIN </th> 
                            <td> ${data[0].topLevelDomain} </td>
                            <td> Example WWW.AFRICAMYCONTINET.${data[0].topLevelDomain} </td>
                        </tr>   
                        <tr>
                            <th> COIN </th> 
                            <td colspan="2"> ${data[0].currencies[0].name} </td>
                        </tr>  
                        <tr>
                            <th> SYMBOL </th> 
                            <td colspan="2"> ${data[0].currencies[0].symbol} </td>
                        </tr>  
                        <tr>
                            <th> CALLING CODES </th> 
                            <td> ${data[0].callingCodes[0]} </td>
                            <td> Example ${data[0].callingCodes[0]}XXXXXXXXX </td>
                         </tr>   
                     <tr>                                            
                         <th colspan="3"> BORDERS </th>                                              
                     </tr>   
                     <tr>
                          <th> NORTH </th> 
                            <td colspan="2"> ${data[0].borders[0]} </td>
                    </tr>  
                    <tr>
                            <th> WEST </th> 
                           <td colspan="2"> ${data[0].borders[1]} </td>
                    </tr> 
                    <tr>
                            <th> EAST </th> 
                             <td colspan="2"> ${data[0].borders[2]} </td>
                    </tr> 
                    <tr>
                            <th> SOUTH </th> 
                            <td colspan="2"> ${data[0].borders[3]} </td>
                    </tr>               
                    </tbody>                              
                </table>
                </article> </a>`;    
     
                sec.innerHTML=données;  
                
                aPi="";
        }

         
}



/**************************************************** */
                                    
                                               
                                               