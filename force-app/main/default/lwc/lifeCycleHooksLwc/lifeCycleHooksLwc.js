import { LightningElement,track } from 'lwc';

export default class LifeCycleHooksLwc extends LightningElement {

    @track isTrue = false

    constructor(){
        super();
        console.log("constructor Method called 1")

    }

    

    renderedCallback(){
        console.log("rendered call back is executed 1")
    }

    disconnectedCallback(){
        console.log("disconnected call back is executed 1")
    }

    errorCallback(error,stack){
        console.log("error call back executed 1")
        console.log(stack)
    }

    connectedCallback(){
        console.log("Connected callback method executed 1")
    }

    handleSubmitStep = ()=>{
        this.isTrue = !this.isTrue
    }

}