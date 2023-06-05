function convert() {
    let iT = document.getElementById("input_type");
    let value1 =  iT.options[iT.selectedIndex].text;
    console.log("Value 1 =" + value1);

    var n = document.getElementById("input").value;

    let oT = document.getElementById("output_type");
    let value2 =  oT.options[oT.selectedIndex].text;
    console.log("Value 2 =" + value2);

    switch(value1){
        case "Decimal": 
                        switch(value2){
                        case "Decimal": document.getElementById("result").innerHTML = n;
                                    break;
                        case "Binary":  document.getElementById("result").innerHTML = parseInt(n,10).toString(2);
                                   break;
                        case "Octal":  document.getElementById("result").innerHTML = parseInt(n,10).toString(8);
                                   break;
                        case "Hexadecimal": document.getElementById("result").innerHTML = parseInt(n,10).toString(16);
                                   break;
                        }
                       break;
        case "Binary":  
                        switch(value2){
                        case "Decimal": document.getElementById("result").innerHTML = parseInt(n,2).toString(10);
                                    break;
                        case "Binary":  document.getElementById("result").innerHTML = n;
                                    break;
                        case "Octal":  document.getElementById("result").innerHTML = parseInt(n,2).toString(8);
                                    break;
                        case "Hexadecimal": document.getElementById("result").innerHTML = parseInt(n,2).toString(16);
                                    break;
                        }
                        break;
        case "Octal":  
                        switch(value2){
                        case "Decimal": document.getElementById("result").innerHTML = parseInt(n,8).toString(10);
                                    break;
                        case "Binary":  document.getElementById("result").innerHTML = parseInt(n,8).toString(2);
                                    break;
                        case "Octal":  document.getElementById("result").innerHTML = n;
                                    break;
                        case "Hexadecimal": document.getElementById("result").innerHTML = parseInt(n,8).toString(16);
                                    break;
                        }
                        break;
        case "Hexadecimal": 
                        switch(value2){
                        case "Decimal": document.getElementById("result").innerHTML = parseInt(n,16).toString(10);;
                                    break;
                        case "Binary":  document.getElementById("result").innerHTML = parseInt(n,16).toString(2);; 
                                    break;
                        case "Octal":  document.getElementById("result").innerHTML = parseInt(n,16).toString(8);
                                    break;
                        case "Hexadecimal": document.getElementById("result").innerHTML = n;
                                    break;
                        }
                        break;
    }
    
    
  }

