import React, { useState, useEffect, useRef } from "react";
import { BsList, BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const menuItems = [
        { id: 1, title: "Opcion 1", description: "Descripcion" },
        { id: 2, title: "Opcion 2", description: "Descripcion" },
        { id: 3, title: "Opcion 3", description: "Descripcion" },
        { id: 4, title: "Opcion 4", description: "Descripcion" },
        { id: 5, title: "Opcion 5", description: "Descripcion" }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex - items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-white text-xl font-bold">Gestor de gastos</h1>
                    </div>

                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg text-gray-100 hover:bg-white/10 focus:outline-none focue:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 ease-in-out"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            aria-label="Main menu"
                        >
                            <BsList className="h-6 w-6" />
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                >
                                    <div className="py-1" role="none">
                                        {menuItems.map((item) => (
                                            <button
                                                key={item.id}
                                                className="group flex w-full items-center px-4 py-3 text-left text-sm hover:bg-gradient-to-r from-indigo-50 to-purple-50 transition-all duration-200"
                                                role="menuitem"
                                            >
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900">{item.title}</p>
                                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                                </div>
                                                <BsArrowRight className="ml-3 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Header;