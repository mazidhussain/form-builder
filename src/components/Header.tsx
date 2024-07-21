import { UserButton } from '@stackframe/stack';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white flex justify-between items-center p-4">
            <div className="text-lg font-bold">
                Form Builder
            </div>
            <nav>
                <ul className="flex gap-6 items-center">
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        Add Form
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        About
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        Contact
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        <UserButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
