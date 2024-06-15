import { LightningElement,track } from 'lwc';



const TODO_STORAGE_KEY = 'todos';

export default class TodosApplication extends LightningElement {
    @track showItems = [];
    @track items={};
    @track todos ="";
    
    

    connectedCallback() {
        // Load todos from local storage when component is initialized
        const storedTodos = JSON.parse(window.localStorage.getItem(TODO_STORAGE_KEY));
        if (storedTodos) {
            this.showItems = storedTodos;
        }
    }

    

    handleAddTodoItems = ()=>{
        if (this.todos!=""){
            this.items = {
                id:this.showItems.length+1,
                item:this.todos,
                isChecked:false
                
            }
            this.showItems = [...this.showItems,{...this.items}]
            this.saveTodosToStorage();
            this.todos = ""
            console.log(this.showItems.length)
        }
        
    }
     
    handleInputItem = (event)=>{
        this.todos = event.target.value
    }
    

    handleCheckboxChange = (event) => {
        const itemId = event.currentTarget.dataset.id;
        const isChecked = event.target.checked;
        console.log(isChecked)
        this.showItems = this.showItems.map(item => {
            if (item.id === itemId) {
                return { ...item, isChecked: isChecked };
            }
            return item;
        });
        this.saveTodosToStorage();
    }




    handleDeleteTodoItem = (event)=>{
        const taskId = event.currentTarget.dataset.itemId 
        console.log(JSON.parse(taskId))
         
        this.showItems = this.showItems.filter(eachItem => eachItem.id !== JSON.parse(taskId));
    
        this.saveTodosToStorage();
        
    }
    
    saveTodosToStorage() {
        window.localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(this.showItems));
    }


}