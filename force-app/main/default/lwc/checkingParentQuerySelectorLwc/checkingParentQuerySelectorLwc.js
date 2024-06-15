import { LightningElement ,track} from 'lwc';

export default class CheckingParentQuerySelectorLwc extends LightningElement {
    myMessage 

    handleLightningInput = (event)=>{
        this.myMessage = event.target.value
    }
    
}