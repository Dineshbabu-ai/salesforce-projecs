public class AccountDetailsLwcHelperCla {
    @AuraEnabled(cacheable=true)
    public static integer Addition() {
           integer numResult = 33+88;
           system.debug(numResult);
           return numResult;
    }
}

