import {FormControl} from '@angular/forms';

 export function emailValidator (email : FormControl){
let reGex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
// ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$

return reGex.test(email.value) ? null: {
    emailValidator :{
        valid : false
    }
}
}