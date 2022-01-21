

var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});

  const typeOfCar = document.getElementById("car");
  const typeOfFuel = document.getElementById("Fuel");
  const typeOfGear = document.getElementById("Gear-box");
  
  typeOfCar.onchange = function(){
      var vehicle = typeOfCar.value;
      typeOfGear.disabled = true;
      typeOfGear.innerHTML = 
      `<option value="" selected disabled>please select type of fuel first</option>`
      switch(vehicle){
          case "Moto":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Electrique'>Electrique</option>"
              "<option value='Essence'>Essence</option>" `
          }break;
          case "citadine":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Electrique'>Electrique</option>"
              "<option value='Essence'>Essence</option>" 
              "<option value='hybride'>hybride</option>" 
              "<option value='Diesel'>Diesel</option>" `
          }break;
          case "Compact":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Essence'>Essence</option>" 
              "<option value='hybride'>hybride</option>" 
              "<option value='Diesel'>Diesel</option>" `
          }break;
          case "Berline":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Essence'>Essence</option>" 
              "<option value='hybride'>hybride</option>" 
              "<option value='Diesel'>Diesel</option>" `
          }break;
          case "Utilitaire":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Diesel'>Diesel</option>" `
          }break;
          case "Engin de Chantier":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Essence'>Essence</option>" 
              "<option value='Diesel'>Diesel</option>" `
          }break;
          case "Camion":{
              typeOfFuel.removeAttribute("disabled");
              typeOfFuel.innerHTML = 
              `<option value="" selected disabled>Choose the type of fuel</option>
              "<option value='Diesel'>Diesel</option>" `
          }break;
      }
      typeOfFuel.onchange = function(){
          
          if(vehicle == "Camion" || vehicle == "Berline"){
              typeOfGear.removeAttribute("disabled");
              typeOfGear.innerHTML = 
              `<option value="" selected disabled>Choose the type of Gear Box</option>
              "<option value='Automatique'>Automatique</option>" `
          }else
          if(vehicle == "Utilitaire" || vehicle == "Engin de Chantier" || vehicle == "Compact" || vehicle == "citadine"){
              typeOfGear.removeAttribute("disabled");
              typeOfGear.innerHTML = 
              `<option value="" selected disabled>Choose the type of Gear Box</option>
              "<option value='Manuelle'>Manuelle</option>" `
          }else
          if(vehicle == "Moto"){
              typeOfGear.innerHTML = 
              `<option value="" selected disabled>no option for these vehicle </option>`
          }else
          {
              typeOfGear.disabled = true;
              typeOfGear.innerHTML = 
              `<option value="" selected disabled>Choose the type of Gear Box </option>`
          }
  
      }
  }
  
  
  
      function calculator(){
          var total ;
          var TypeGear = document.getElementById("Gear-box").value;
          var TypeCar = document.getElementById("car").value;
          var TypeFuel = document.getElementById("Fuel").value;
          var DaysNumber = document.getElementById("DaysNumber").value;
          var body = " Reservation passed successfully !! total : "  ;
          var check = "Please check your entry and try again."
    
          switch(TypeCar){
              case "Moto":{
                  if(TypeFuel == "Electrique")
                   {
                    total=DaysNumber*(0.5+10);
                    Swal.fire(body + total + "$")
                    // Swal.fire(body + total + "$")
                    break;
                  }else 
                  if(TypeFuel == "Essence") 
                  {
                    total=DaysNumber*(1.4+10);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
                  
              }
              case "citadine":{
                if(TypeFuel == "Electrique" && TypeGear == "Manuelle")
                 {
                  total=DaysNumber*(0.6+12);
                  Swal.fire(body + total + "$")
                  break;
                }else 
                if(TypeFuel == "Essence" && TypeGear == "Manuelle") 
                {
                  total=DaysNumber*(1.68+12);
                  Swal.fire(body + total + "$")
                  break;
                }else
                if(TypeFuel == "hybride" && TypeGear == "Manuelle")
                 {
                  total=DaysNumber*(1.08+12);
                  Swal.fire(body + total + "$")
                  break;
                }else 
                if(TypeFuel == "Diesel" && TypeGear == "Manuelle") 
                {
                  total=DaysNumber*(2.52+12);
                  Swal.fire(body + total + "$")
                  break;
                }
                else{
                  Swal.fire(check)
                }break;
                
            }
  
              case "Compact":{
                  if(TypeFuel == "hybride" && TypeGear == "Manuelle")
                   {
                    total=DaysNumber*(1.26+14);
                    Swal.fire(body + total + "$")
                    break;
                  }else 
                  if(TypeFuel == "Essence" && TypeGear == "Manuelle") 
                  {
                    total=DaysNumber*(1.96+14);
                    Swal.fire(body + total + "$")
                    break;
                  }else
                  if(TypeFuel == "Diesel" && TypeGear == "Manuelle") 
                  {
                    total=DaysNumber*(2.94+14);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
                  
              }
              case "Berline":{
                  if(TypeFuel == "hybride" && TypeGear == "Automatique")
                   {
                    total=DaysNumber*(1.79+20+3.8);
                    Swal.fire(body + total + "$")
                    break;
                  }else 
                  if(TypeFuel == "Essence" && TypeGear == "Automatique") 
                  {
                    total=DaysNumber*(2.8+20+3.8);
                    Swal.fire(body + total + "$")
                    break;
                  }else
                  if(TypeFuel == "Diesel" && TypeGear == "Automatique") 
                  {
                    total=DaysNumber*(4.2+20+3.8);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
                  
              }
              case "Utilitaire":{
                  if(TypeFuel == "Diesel" && TypeGear == "Manuelle")
                   {
                    total=DaysNumber*(3.36+16);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
                  
              }
              case "Engin de Chantier":{
                  if(TypeFuel == "Diesel" && TypeGear == "Manuelle")
                   {
                    total=DaysNumber*(189+900);
                    Swal.fire(body + total + "$")
                    break;
                  }else 
                  if(TypeFuel == "Essence" && TypeGear == "Manuelle") 
                  {
                    total=DaysNumber*(126+900);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
              }
              case "Camion":{
                  if(TypeFuel == "Diesel" && TypeGear == "Automatique")
                   {
                    total=DaysNumber*(52.5+250+47.5);
                    Swal.fire(body + total + "$")
                    break;
                  }
                  else{
                    Swal.fire(check)
                  }break;
              }
              
              
          }
        
    
      }
  