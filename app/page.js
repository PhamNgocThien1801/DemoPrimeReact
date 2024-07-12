"use client"
import Navbar from "./components/navbar/page";
import Form from "./components/form/page";
import React from 'react';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-cyan/theme.css';
export default function Home() {

  return (
    <div className="flex">
      <div className="w-2/12">
        <Navbar />
      </div>
      <div className="w-9/12">
        <Form />
      </div>
    </div>

  );
}
