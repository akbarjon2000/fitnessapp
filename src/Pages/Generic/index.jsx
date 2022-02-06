import React from 'react'
import { useLocation } from 'react-router-dom';
const Generic = (props) => {
    const location = useLocation();
    return (
        <h1>{location.pathname} coming soon</h1>
    )
}
export default Generic;