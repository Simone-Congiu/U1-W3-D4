



let numberToAdd=function(number){
    let numberDiv=document.getElementById('main-content')
    for(let i=0;i<91;i++){
        let tabNumber=document.createElement('div')
        tabNumber.classList.add('tab-number')
        let numberTombola=document.createElement('p')
        numberTombola.classList.add('cellah3')
        numberTombola.innerText=[i]
         
        
      tabNumber.appendChild(numberTombola)
        numberDiv.appendChild(tabNumber)

    }
    }

   
    numberToAdd()

    
        
            let button=document.getElementById('button')
            button.addEventListener('click',function(e){
                let casualNumbers=Math.floor(Math.random()*91)
                document.querySelector('.nuovo').innerText=casualNumbers
                
                
                
                let mydivcontainer=document.querySelectorAll('.tab-number')
                mydivcontainer.forEach((element)=>{
                    if(Number(element.innerText===casualNumbers)){
                        element.classList.add('color')
                    }
                })
            })
 
            
    
        
                


                    
              

   

    
