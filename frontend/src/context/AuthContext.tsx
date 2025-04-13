import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from "react";
  import axios from "axios";
  import toast from "react-hot-toast";
  
  // Define types
  interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    // Add other fields as needed
  }
  
  interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (data: { user: User }) => void;
    logout: () => Promise<void>;
  }
  
  const AuthContext = createContext<AuthContextType | null>(null);
  
  // AuthProvider props
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/users/Profile", {
          withCredentials: true,
        })
        .then((result) => {
          setUser(result.data);
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setLoading(false);
        });
    }, []);
  
    const login = (data: { user: User }) => {
      setUser(data.user);
    };
  
    const logout = async () => {
      await axios.post(
        "http://localhost:5000/api/users/Logout",
        {},
        { withCredentials: true }
      );
      toast.success("You are successfully logged out");
      console.log("Successfully logged out");
      setUser(null);
    };
  
    return (
      <AuthContext.Provider value={{ user, loading, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  