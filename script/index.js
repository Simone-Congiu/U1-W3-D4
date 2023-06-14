


// creazione tabellone
let numberToAdd=function(number){
    let numberDiv=document.getElementById('main-content')
    for(let i=1;i<91;i++){
        let tabNumber=document.createElement('div')
        tabNumber.classList.add('tab-number')
        let numberTombola=document.createElement('p')
        numberTombola.classList.add('cellap')
        numberTombola.innerText=[i]
        
      
        numberDiv.appendChild(tabNumber)
        tabNumber.appendChild(numberTombola)
    }
    }
      numberToAdd()

// generatore numeri casuale
    const myArray=[]
    
        let myButton=document.getElementById('button1')
        myButton.addEventListener('click',function(){
        let numbers=Math.floor(Math.random() *90 + 1)
        console.log(numbers)
        
        // colorazione numeri estratti
        let myD=document.querySelectorAll('.tab-number')
        myD.forEach((n)=>{
            if(parseInt(n.innerText)===numbers){
                n.classList.add('firstclass')
                
            }
        })
    })

   

           
        
    

    

    

       

 


        
    
    
    

    


    

        

    




    
 
 
        
                


                    
              

   

    
