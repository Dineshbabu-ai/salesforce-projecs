import { LightningElement } from 'lwc';

export default class LifeCycleHookChildLwc extends LightningElement {
    constructor(){
        super();
        console.log("constructor Method called 1")
    }

    

    renderedCallback(){
        console.log("rendered call back is executed")
    }

    disconnectedCallback(){
        console.log("disconnected call back is executed")
    }

    errorCallback(error,stack){
        console.log("error call back executed")
        console.log(stack)
    }

    connectedCallback(){
        console.log("Connected callback method executed")
    }
}