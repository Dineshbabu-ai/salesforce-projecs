import { MessageContext,publish} from 'lightning/messageService';
import { LightningElement,wire,track } from 'lwc';
import AddToCartProducts from '@salesforce/messageChannel/AddToCartProducts__c';


export default class HomeCartProducts extends LightningElement {
   
   @track firstName = '';

   @wire(MessageContext) MessageContext;

   hadle




}