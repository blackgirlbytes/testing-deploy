import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "./components/header";

export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return <Layout />;
}