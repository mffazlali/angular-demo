export const readProperty=(object:any, propertyString:string)=> {
    const properties = propertyString.split('.');
    let result = object;
    
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      result = result[property];
    }
    
    return result;
  }
    