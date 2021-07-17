import React from 'react'
interface Location {
    longitude: string;
    latitude: string;
    height?: number  // question mark means optional.
}

export default interface PersonProps{
    name: string;               // | {firstName: string, lastName: string}this means you can pass in either a string or the object in the braces.  the "| always means or "
    birthDate: Date;
    birthLocation : Location; // this is referencing the Location interface above. 

        // question mark means optional.
    
}

export function Person({name, birthDate,birthLocation}: PersonProps){
    return(
        <div>Name: {name}</div>

    )
}