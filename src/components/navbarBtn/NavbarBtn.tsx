import { useLayoutEffect, useRef } from 'react';
import createRipple from '../../utils/ripplesEffect';
import Ripple from '../ripple/Ripple';

type navbarBtnType = {
    label: string;
    setActive: (arg: DOMRect) => void;
    initial: boolean;
};

NavbarBtn.defaultProps = {
    initial: false,
};
function NavbarBtn({ label, setActive, initial }: navbarBtnType) {
    const ref = useRef<HTMLButtonElement | null>(null);

    useLayoutEffect(() => {
        if (initial && ref.current) {
            setActive(ref.current.getBoundingClientRect());
        }
    }, [initial, setActive]);
    return (
            <button
                ref={ref}
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    createRipple(e);
                    setActive(target.getBoundingClientRect());
                }}
                className="px-3 py-2 rounded-3xl relative animateBtn text-xl overflow-hidden transition-colors duration-[400ms] z-20"
            >
                {label}
            </button>
    );
}

export default NavbarBtn;
