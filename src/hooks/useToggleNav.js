import {useState} from "react";
export function useToggleNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return {isMenuOpen,toggleMenu}
}