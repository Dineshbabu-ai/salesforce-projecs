public with sharing class AccountHelperClsa {
    @AuraEnabled(cacheable=true) 
    public static List<Contact> getContactList(){
        List<Contact> lstContact = [SELECT Id,Name,Phone,Email,Fax FROM Contact];
        return lstContact;
}
}