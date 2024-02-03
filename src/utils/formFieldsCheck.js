


export const formFieldCheckFn = (formFieldsAsObj) =>{ 

return Object.values(formFieldsAsObj).some(field => field === '' )


}