let height_ip=document.querySelector("#heightInputBox");
let weight_ip=document.querySelector("#weightInputBox");
let result=document.querySelector("#Result");
let buttons=document.querySelectorAll("button");

//choice is used to tell the current dimesion button we will use.
var choice='';

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function(event){
        if(event.target.innerHTML=='STANDARD'){
            if(choice=='METRIC'){
                document.querySelector('.metric').classList.toggle('glow');
            }
                choice="STANDARD";

                //On Click Button text Will glow and Double click remove glow.
                event.target.classList.toggle('glow');  
                if(!document.querySelector('.Standard').classList.contains("glow")){choice='';}

                //Change the placeholder text according to dimesion button choosen.
                if(choice=="STANDARD"){
                    height_ip.setAttribute("placeholder","Height(inches)");
                }
                else{
                    height_ip.setAttribute("placeholder","Height");
                }
                if(choice=="STANDARD"){
                    weight_ip.setAttribute("placeholder","Weight(pounds)");
                }
                else{
                    weight_ip.setAttribute("placeholder","Weight");
                }
            
        }
        else if(event.target.innerHTML==="METRIC"){
            if(choice=='STANDARD'){
                document.querySelector('.Standard').classList.toggle('glow');
            }
                choice="METRIC";
                //On Click Button text Will glow and Double click remove glow.
                event.target.classList.toggle('glow');
                if(!document.querySelector('.metric').classList.contains('glow')){choice='';}

                //Change the placeholder text according to dimesion button choosen.
                if(choice=="METRIC"){
                    height_ip.setAttribute("placeholder","Height(meters)");
                }
                else{
                    height_ip.setAttribute("placeholder","Height");
                }
                if(choice=="METRIC"){
                    weight_ip.setAttribute("placeholder","Weight(Kg)");
                }
                else{
                    weight_ip.setAttribute("placeholder","Weight");
                }
               
        }
        else if(event.target.innerHTML==="CALCULATE"){

                //Gives an alert if dimension is not choosen.
                if(choice==''){alert('Dimension not choosen.');}
                //Gives an alert if Height input not given.
                if(height_ip.value==''){alert('Height not mentioned.');}
                //Gives an alert if Weight input not given.
                if(weight_ip.value==''){alert('Weight not mentioned.');}
                //Calculating BMI
                if(height_ip.value!='' && weight_ip.value!=''){
                    formula(choice);
                }

        }
        //Reset button to restore a device or system to its original state.
        else if(event.target.innerHTML==='RESET'){
            
                height_ip.value='';
                weight_ip.value='';
                if(choice=='METRIC'){
                    document.querySelector('.metric').classList.toggle('glow');
                }
                if(choice=='STANDARD'){
                    document.querySelector('.Standard').classList.toggle('glow');
                }
                choice='';
                result.value='';
           
                height_ip.setAttribute("placeholder","Height");
                weight_ip.setAttribute("placeholder","Weight");
        }
    })
}


    function formula(choice){
        if(choice=='STANDARD'){
            result.value=703*bmi(height_ip.value,weight_ip.value);
        }
        else{
            result.value=bmi(height_ip.value,weight_ip.value);
        }
    }

    //formula for BMI Calculation.
    
    function bmi(Height,Weight){
        return (Weight/(Height*Height));
    }