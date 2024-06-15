public with sharing class AuthorizationOfHelper {
    @AuraEnabled(cacheable=true)
    public static String AuthorizationJwtHelper(String usernameLogin, String passwordLogin) {
       
        String apiUrl = 'https://apis.ccbp.in/login';

        HttpRequest httpRes = new HttpRequest();
        httpRes.setEndpoint(apiUrl);
        httpRes.setMethod('POST');
        httpRes.setHeader('Content-Type','application/json');

       // String requestBody = '{"username":'+usernameLogin+'","'+'"password":'+passwordLogin+'}';
        String requestBody = '{"username":"' + usernameLogin + '","password":"' + passwordLogin + '"}';
        httpRes.setBody(requestBody);
        
        Http http = new Http(); 
        HttpResponse httResponse = http.send(httpRes);

        if(httResponse.getStatusCode() == 200){
            return httResponse.getBody();
        }else{
            return null;
        }
        
       // httpRequest.setHeader('Content-Type', 'application/json');
      
        
       
        // String requestBody = '{"username":"' + usernameLogin + '","password":"' + passwordLogin + '"}';
        
        
       

       
    }
}
