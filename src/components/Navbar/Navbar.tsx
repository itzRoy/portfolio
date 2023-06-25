import { IconContext } from 'react-icons';
import { FaRedhat } from 'react-icons/fa';
import NavbarBtn from '../navbarBtn/NavbarBtn';
import { useState } from 'react';

function Navbar() {
    const [activePosition, setActviePosition] = useState<DOMRect | undefined>();

    return (
        <div className="flex w-full bg-secondaryLight p-4  bg-secondary-dark items-center ">
            <div className="w-1/2">
                <IconContext.Provider value={{ className: 'text-white w-[30px] h-[30px] rotate-[-5deg]' }}>
                    <FaRedhat />
                    <p className="text-white mt-[-11px] ">{'</|>'}</p>
                </IconContext.Provider>
            </div>

            <div className="flex gap-4 relative">
                <div
                    style={{
                        width: activePosition?.width,
                        height: activePosition?.height,
                        left: activePosition?.left ? activePosition?.left - document.body.offsetWidth / 2 : 0,
                    }}
                    className="bg-secondary z-10 absolute transition-all duration-[500ms]  rounded-3xl"
                />
                <NavbarBtn label="About" setActive={setActviePosition} initial />
                <NavbarBtn label="Skills" setActive={setActviePosition} />
                <NavbarBtn label="Projects" setActive={setActviePosition} />
                <NavbarBtn label="contact" setActive={setActviePosition} />
            </div>
        </div>
    );
}

export default Navbar;
