"use client"
import { createContext, useContext } from "react";
import { MapProps } from "../hooks/UseHome";


const HomeContext = createContext<MapProps | null>(null);
export default function HomeContextProvider({children}: {children: React.ReactNode}) {
    return (
      <HomeContext.Provider value={{center: [-6.2088, 106.8456], zoom: 15}}>
        {children}
      </HomeContext.Provider>
    )
}   

export function useHomeContext() {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("useHomeContext must be used within HomeContextProvider");
    }
    return context;
}
