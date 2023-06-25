import React, { useRef } from 'react';
import createRipple from '../../utils/ripplesEffect';

function Ripple({ children }) {
    const ref = useRef();
    console.log(ref.current?.clientX);
    
    return (
        <div ref={ref} onClick={createRipple(ref.current)} className="z-20 relative">
            {children}
        </div>
    );
}

export default Ripple;
