import { createContext, ReactNode } from "react";
import { food_list } from "../assets/assets";

// Define the shape of your context value
interface StoreContextType {
    food_list: Array<{
        _id: string;
        name: string;
        image: string;
        price: number;
        description: string;
        category: string;
    }>;
}

// Create the context with a default value and proper type
export const StoreContext = createContext<StoreContextType | null>(null);

// Define props type for the provider
interface StoreContextProviderProps {
    children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
    const contextValue: StoreContextType = {
        food_list
    };
    
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}
 
export default StoreContextProvider;