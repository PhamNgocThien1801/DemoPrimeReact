"use client"
import React, { useState, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';


export default function Navbar({ switchTheme }) {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
            <div>
                <div className="overflow-y-auto">
                    <ul className="p-3 m-0 list-none">
                        <li>
                            <StyleClass
                                nodeRef={btnRef1}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef1}
                                    className="flex p-3 cursor-pointer p-ripple align-items-center justify-content-between text-600"
                                >
                                    <span className="font-medium">CRM</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="p-0 m-0 overflow-hidden list-none">
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-home"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-bookmark"></i>
                                        <span className="font-medium">Lead Management</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <StyleClass
                                        nodeRef={btnRef2}
                                        selector="@next"
                                        enterClassName="hidden"
                                        enterActiveClassName="slidedown"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="slideup"
                                    >
                                        <a
                                            ref={btnRef2}
                                            className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150"
                                        >
                                            <i className="mr-2 pi pi-chart-line"></i>
                                            <span className="font-medium">User</span>
                                            <i className="ml-auto mr-1 pi pi-chevron-down"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="hidden py-0 pl-3 pr-0 m-0 overflow-y-hidden list-none transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <StyleClass
                                                nodeRef={btnRef3}
                                                selector="@next"
                                                enterClassName="hidden"
                                                enterActiveClassName="slidedown"
                                                leaveToClassName="hidden"
                                                leaveActiveClassName="slideup"
                                            >
                                                <a
                                                    ref={btnRef3}
                                                    className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150"
                                                >
                                                    <i className="mr-2 pi pi-chart-line"></i>
                                                    <span className="font-medium">Comunication</span>
                                                    <i className="ml-auto mr-1 pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </a>
                                            </StyleClass>
                                            <ul className="hidden py-0 pl-3 pr-0 m-0 overflow-y-hidden list-none transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                                        <i className="mr-2 pi pi-table"></i>
                                                        <span className="font-medium">Report</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                                        <i className="mr-2 pi pi-search"></i>
                                                        <span className="font-medium">Search</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                                <i className="mr-2 pi pi-chart-line"></i>
                                                <span className="font-medium">Expenses</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-users"></i>
                                        <span className="font-medium">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors rounded-full cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-comments"></i>
                                        <span className="font-medium">Messages</span>
                                        <span
                                            className="inline-flex ml-auto bg-blue-500 rounded-full align-items-center justify-content-center text-0"
                                            style={{ minWidth: '1.5rem', height: '1.5rem' }}
                                        >
                                            3
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-calendar"></i>
                                        <span className="font-medium">Calendar</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-cog"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="p-3 m-0 list-none">
                        <li>
                            <StyleClass
                                nodeRef={btnRef4}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <div
                                    ref={btnRef4}
                                    className="flex p-3 cursor-pointer p-ripple align-items-center justify-content-between text-600"
                                >
                                    <span className="font-medium">APPLICATION</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="p-0 m-0 overflow-hidden list-none">
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-folder"></i>
                                        <span className="font-medium">Projects</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-chart-bar"></i>
                                        <span className="font-medium">Performance</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="flex w-full p-3 transition-colors cursor-pointer p-ripple align-items-center border-round text-700 hover:surface-100 transition-duration-150">
                                        <i className="mr-2 pi pi-cog"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto">
                    <hr className="mx-3 mb-3 border-none border-top-1 surface-border" />
                    <a
                        v-ripple
                        className="flex gap-2 p-3 m-3 transition-colors cursor-pointer align-items-center border-round text-700 hover:surface-100 transition-duration-150 p-ripple"
                    >
                        <Avatar
                            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                            shape="circle"
                        />
                        <span className="font-bold">Amy Elsner</span>
                    </a>
                </div>
            </div>

    )
}
