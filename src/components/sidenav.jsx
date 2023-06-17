import React from "react";

const menuItem = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/setting' },
]

function SideNav(props) {
    return (
        <div className="hidden lg:block bg-white shadow-lg rounded-2xl h-[45rem] ">
            <ul role="list" className="space-y-4 pb-6 text-md font-medium text-gray-900 items-center justify-content mt-8">
            {menuItem.map((category) => (
                <li key={category.name} className='text-center py-2 mx-6 rounded-2xl border-2 border-rose-500 hover:bg-rose-300 cursor-pointer'>
                    <a href={category.href}>{category.name}</a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default SideNav;