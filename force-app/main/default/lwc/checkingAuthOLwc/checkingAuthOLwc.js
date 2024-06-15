import { LightningElement,wire,track } from 'lwc';
import AuthorizationTokenGet from '@salesforce/apex/AuthorizationOfHelper.AuthorizationJwtHelper'

export default class CheckingAuthOLwc extends LightningElement {
    @track jwtToken;
    @track username;
    @track password;

    handleUsernameLogin = (event)=>{
        this.username = event.target.value
    }

    handlePasswordLogin = (event)=>{
        this.password = event.target.value
    }

    handleAuthorizationLogin = ()=>{
       // console.log(this.username)
       // console.log(this.password)
       AuthorizationTokenGet({usernameLogin:this.username,passwordLogin:this.password}).then(result=>{
        
       })
       .catch(error=>{
        console.error('error occured'+error)
       })

       
    }

   /* @wire(AuthorizationTokenGet)
    wiredAuthorizationToken({data,error}){
        if(data){
          this.jwtToken = data
        }else if(error){
            console.log('error occured'+error)
        }
    }*/


}