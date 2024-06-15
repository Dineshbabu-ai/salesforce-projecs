import { LightningElement ,api,wire,track} from 'lwc';
import getSingleProductDetails from '@salesforce/apex/EcommerceProductsHelper.singleProductDetails'
import { publish, MessageContext } from 'lightning/messageService';
import AddToCartProducts from '@salesforce/messageChannel/AddToCartProducts__c';


let cartItemAdded=[]

export default class HomeProductDetails extends LightningElement {
    @api isInserted; 
    @track cartItemAdded=[]
    @api singleProduct;
    @track singleProductDetails;
    @track countOfProducts = 1;
    @track listOfCartProducts;
    @track cartProductItemList;
    @track filterDuplicate = [];
    @track QuantityCartProduct;


    @wire(MessageContext) messageContext

    connectedCallback(){
        this.getProductDetailsPage() 
    }

    getProductDetailsPage = async ()=>{
        const response = await getSingleProductDetails({'singleId':this.singleProduct})
        const productDetails = JSON.parse(response);
        this.singleProductDetails = productDetails
       // this.QuantityCartProduct = {quantity:this.countOfProducts}
       // this.updatingQuantity(this.QuantityCartProduct,this.singleProductDetails)
    }

    updatingQuantity = (quantity,singleProductDetails)=>{
        this.singleProductDetails = {...singleProductDetails,...quantity}
    }
    

    handleDecreaseCount = ()=>{
       this.countOfProducts = this.countOfProducts - 1
    }

    handleIncreaseCount  = ()=>{
         this.countOfProducts = this.countOfProducts+1
    }

    handleRemAllButton = ()=>{
        console.log("removeAll")
    }


    

    addProductsToCart = ()=>{
        cartItemAdded.push(this.singleProductDetails)
        this.listOfCartProducts = JSON.stringify(cartItemAdded)
        const payload = {cartProductsList:this.listOfCartProducts,functionName:'handleRemAllButton'}
        publish(this.messageContext,AddToCartProducts,payload)
    }


    
   
}