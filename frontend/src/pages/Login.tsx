import React  from 'react';
import { useAuth } from "@/context/AuthContext";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from '@/components/Layout';
import { useState } from 'react';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post("http://localhost:5000/api/users/Login", { email, password } ,{
            withCredentials : true,
        })
        .then(result => {
            login(result.data)
            console.log(result)
            if(result.data.message === "Success"){
                alert("Login success")
                console.log("Login success")
                navigate("/")
            }else{
                navigate("/Signup")
                alert("You are not registered to this service")
                console.log("You are not registered to this service");
    }
       
        })
        .catch(err => console.log(err))
    }


  return (
    <Layout>
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>
                Sign in to your account to access your saved resources
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Phone</Label>
                  <Input 
                    type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    value={email}
                    />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                    <Input 
                        type="password" 
                        placeholder='Enter Password' 
                        autoComplete='off' 
                        name='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                        value={password}
                    />
                </div>
                
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full">Sign In</Button>
                <div className="mt-4 text-sm text-center text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;