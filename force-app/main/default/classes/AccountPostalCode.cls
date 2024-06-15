public with sharing class AccountPostalCode {
    @AuraEnabled(cacheable=true)
    public static string getAccountList(String searchInput) {
        String apiUrl = 'https://api.postalpincode.in/pincode/' + searchInput;
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(apiUrl);
        request.setMethod('GET');

        HttpResponse response = http.send(request);
       // List<PostalPincodeResponse> postalData = new List<PostalPincodeResponse>();

        String jsonResponse;
        if (response.getStatusCode() == 200) {
            jsonResponse = response.getBody();
           // postalData = (List<PostalPincodeResponse>) JSON.deserialize(jsonResponse, List<PostalPincodeResponse>.class);
        }

        return jsonResponse;
    }

    // Inner class to deserialize JSON response
   /* public class PostalPincodeResponse {
        public String postOffice;
        public String state;
        public String district;
        // Add more fields as required
       
    }*/
    
}
