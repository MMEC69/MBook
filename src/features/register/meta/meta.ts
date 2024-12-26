export const passwordFullRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./])(?=.{8,17}$).*/;

export const atLeastOneCapitalLetter = /^(?=.*[A-Z]).*$/;
export const atLeastOneSimpleLetter = /^(?=.*[a-z]).*$/;;
export const atLeastOneNumber = /^(?=.*\d).*$/;
export const atLeastOneSpecialCharacter = /^(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./]).*$/;;