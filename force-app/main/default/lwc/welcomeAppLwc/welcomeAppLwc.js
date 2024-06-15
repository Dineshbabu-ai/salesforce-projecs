import { subscribe } from 'lightning/messageService';
import { LightningElement ,track} from 'lwc';

export default class WelcomeAppLwc extends LightningElement {
        @track isSubscribe=false 
        @track subOrNot = 'subscribe'
        handleIsSubscribe = ()=>{
            this.isSubscribed = !this.isSubscribed 
            //console.log(this.isSubscribed)
            this.isSubscribed?this.subOrNot = 'subscribed':this.subOrNot = 'subscribe'
        }
}