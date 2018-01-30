export declare namespace Is {
    function mobile(): boolean;
    function nullOrUndefined(value: any): boolean;
    function empty(value: any): boolean;
    function number(value: string): boolean;
    function letter(value: string): boolean;
    function email(value: string): boolean;
    function brazilianPhone(phone: string): boolean;
    function ddmmyyyy(date: string): boolean;
    function mmddyyyy(date: string): boolean;
    function cpf(value: string): boolean;
}
export default Is;
