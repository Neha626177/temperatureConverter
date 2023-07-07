

const calculateTemp =()=>{
    const numberTemp = document.querySelector('#temp').value;
   

    const tempSeclected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSeclected.selectedIndex].value;


    const celToFah = (value) => {
      let fahrenheit = Math.round((value * 9) / 5 + 32);
      return fahrenheit;
    };

     const fahToCel = (value) => {
       let calcius = Math.round((value-32) * 5/9 );
       return calcius;
     };
     
      

    let result;

    if(valueTemp=='cel'){
        result = celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result}°Fahrenheit`;
    }else{
          result = fahToCel(numberTemp);
          document.getElementById("resultContainer").innerHTML = `${result}°Celcius`;
    }
     
}