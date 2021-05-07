import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Article from "./Article";
import "./App.css";
import Student from "./Student";
import Post from "./Post";
import {students,data} from "./data.js" //import named export
import abc from "./data.js" //import default export

export default function App() {

  return (
    <div className="app">
      <NavBar />
      <Header />

     {data.map(item=>{
         return(
             <Article data={item.para} heading={item.heading}/>
         )
     })}

     {students.map(studentname=>{
         return(
             <Student name={studentname}/>
         )
     })}
   
     {abc.map(post=>{
         return(
             <Post title={post.title} body={post.body}/>
         )
     })}

    </div>
  );
}
