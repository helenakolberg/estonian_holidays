import React from 'react';

function NameItem(props) {

    const countrySwitch = () => {
        switch(props.country) {
            case 'at' :
                return 'Austria';
            case 'bg' :
                return 'Bulgaria';
            case 'cz' :
                return 'Czech Republic';
            case 'de' :
                return 'Germany';
            case 'dk' :
                return 'Denmark';
            case 'ee' :
                return 'Estonia';
            case 'es' :
                return 'Spain';
            case 'fi' :
                return 'Finland';
            case 'fr' :
                return 'France';
            case 'gr' :
                return 'Greece';
            case 'hr' :
                return 'Croatia';
            case 'hu' :
                return 'Hungary';
            case 'it' :
                return 'Italy';
            case 'lt' :
                return 'Lithuania';
            case 'lv' :
                return 'Latvia';
            case 'pl' :
                return 'Poland';
            case 'ru' :
                return 'Russia';
            case 'se' :
                return 'Sweden';
            case 'sk' :
                return 'Slovakia';
            case 'us' :
                return 'United States of America'
            default :
                return props.country;
        }
    }

    return (
        
        <>
            <h2>{countrySwitch()}</h2>
            <p>{props.names}</p>
        </>
    )
}

export default NameItem;