import React from "react";
import NavigationTop from "./components/NavigationTop";
import NavigationBottom from "./components/NavigationBottom";

export default function page() {
  return (
    <>
      <NavigationTop />
      <main className="container mx-auto p-4 min-h-dvh">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </main>
      <NavigationBottom />
    </>
  );
}
