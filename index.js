let input = document.querySelector('.input')
let btnAdd = document.querySelector('.btn-add')
let ul = document.querySelector('.classUl')




btnAdd.addEventListener ('click' , ajouter)

 
function ajouter(){
    let value = input.value
    if(value !== ''){
        newContainer = document.createElement ('li')
        let btnEdit = document.createElement('button')
        let btnDelete = document.createElement('button')

       
      
    
    
        newContainer.textContent = value
        
    
        ul.appendChild(newContainer)
        ul.appendChild(btnEdit)
        ul.appendChild(btnDelete)
        
    
        btnEdit.textContent = "Modifier"
        btnDelete.textContent = "Supprimer"
    
        input.value =""
    
    
        btnEdit.addEventListener('click' , modifier)
        function modifier(){
          input.value = value
    
          ul.removeChild(newContainer)
          ul.removeChild(btnEdit)
          ul.removeChild(btnDelete)
          
        }
        
    
        btnDelete.addEventListener('click' , supprimer)
        function supprimer(){
    
            ul.removeChild(newContainer)
            ul.removeChild(btnEdit)
            ul.removeChild(btnDelete)



    
            
        }
        btnEdit.classList.add("edit")
        btnDelete.classList.add("delete")
       
        
    }else{
        alert("veuiller remplier le champs")
    }
   
   


}