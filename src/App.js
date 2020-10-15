import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from  './componets/Home'
import Contact from './componets/Contact'
import Product from './componets/Product'
import Profile from './componets/Profile';
import About from './componets/About';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Ac from './componets/Ac';
import En from './componets/En';
import Lw from './componets/Lw';
import register from './componets/register';
import login from './componets/login';
import Qa from './componets/Qa';
import './bootstrap.css';
import { Route } from 'react-router-dom';
const firebaseConfig = {
  apiKey: "AIzaSyBIaFX2n9v8hs0G7-jtBZ_NEVYfjLBKQvU",
  authDomain: "fir-168-ff354.firebaseapp.com",
  databaseURL: "https://fir-168-ff354.firebaseio.com",
  projectId: "fir-168-ff354",
  storageBucket: "fir-168-ff354.appspot.com",
  messagingSenderId: "965126639976",
  appId: "1:965126639976:web:4c3986d46a0051197146dd",
  measurementId: "G-015DJQNDGE"
};
function App() {
  return (
    <div >
    
      <Header/>
       <Route path="/" exact={true} component={Home}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Product" component={Product}/>
       <Route path="/About" component={About}/>
       <Route path="/Profile" component={Profile}/>
       <Route path="/Ac" component={Ac}/>
       <Route path="/En" component={En}/>
       <Route path="/Lw" component={Lw}/>
       <Route path="/register" component={register}/>
       <Route path="/login" component={login}/>
       <Route path="/Qa" component={Qa}/>
      <Footer/>
    </div>
  );
}

export default App;
