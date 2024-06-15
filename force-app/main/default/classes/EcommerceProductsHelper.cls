public with sharing class EcommerceProductsHelper {
    @AuraEnabled(cacheable=true)
    public static String getListOfAllProductsWebsite() {
        string apiUrl = 'https://fakestoreapi.com/products' ;
        HttpRequest productsRequest = new HttpRequest();

        productsRequest.setEndpoint(apiUrl);
        productsRequest.setMethod('GET');
        productsRequest.setTimeout(12000);
        
        Http http = new Http();

        HttpResponse response = http.send(productsRequest);
        
        string responseResult;
        if (response.getStatusCode() == 200){
            responseResult = response.getBody();
        }
        return responseResult;
    }
    
    @AuraEnabled(cacheable=true)
    public static String singleProductDetails(string singleId){
        string apiUrlSingle = 'https://fakestoreapi.com/products/'+singleId;
        HttpRequest singleProduct = new HttpRequest();
        singleProduct.setEndpoint(apiUrlSingle);
        singleProduct.setMethod('GET');
        singleProduct.setTimeout(12000);

        Http http = new Http();
        
        HttpResponse productResponse =  http.send(singleProduct);
        string productDetails;
        if (productResponse.getStatusCode()==200){
              productDetails = productResponse.getBody();
        }

       
        return productDetails;
    }
}
