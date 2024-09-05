import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FireBaseConfig";

type userContextType = {
    user: userType|undefined|null;
    loading: boolean;
}


type userType = {
    name: string;
    uid: string;
    email: string;
}

const userContext = createContext<userContextType | undefined>(undefined);


export function UserContextProvider({ children }: { children: React.ReactNode }) {
    
    const [user, setUser] = useState<userType | null | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true)
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email ? user.email : "",
                    name: user.displayName ? user.displayName : "new user",
                    uid: user.uid
                })
            } else {
                setUser(null)
            }
            setLoading(false);
        })
        return () => unsubscribe()
    }, []);


    return (
        <userContext.Provider value={{ user, loading }}>
            {children}
        </userContext.Provider>
    )
    
}


export default function userAuth() {
    const context = useContext(userContext);

    if (context === undefined) {
        throw new Error("userAth is undefined")
    }

    return context
}