import { LightningElement, wire, track,api } from 'lwc';
import GetAllProductsList from '@salesforce/apex/EcommerceProductsHelper.getListOfAllProductsWebsite';




export default class HomeProducts extends LightningElement {
    @track allProductsList;
    @track selectedProductDetails = false;
    @track productId;

    @wire(GetAllProductsList)
    wiredGetProducts({data, error}) {
        if (data) {
            this.allProductsList = JSON.parse(data);
            // console.log(allProductsList)
        } else if (error) {
            console.log("Error occurred: " + error);
        }
    }

    getSelectedProduct = (event)=>{
        this.selectedProductDetails = true
        this.productId = event.target.dataset.id 
        
    }

    handleNavigation = ()=>{
        this.selectedProductDetails = false
    }

    
}
