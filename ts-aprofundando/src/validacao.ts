import validator from 'validator'

console.log(validator.isEmail("aronricardo@hotmail.com")) //true(é email)
console.log(validator.isEmail("arondlfadl33")) //false(ñ é email)