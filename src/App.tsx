import React,{useEffect, useState, ChangeEvent} from "react";
import CardList from "./compornents/Cardlist";
import Searchbox from "./compornents/Searchbox";

import Scroll from "./compornents/scroll";
import { getData } from "./utils/data.utills";

export type Robot = {
   id:String; 
   name: String;
   email: String;
}


const App=()=>{
    const [searchfield,setSearchField]=useState('');
    const[robots,setrobot]=useState<Robot[]>([]);

    useEffect(()=>{
        //console.log('ue')
      //  fetch('https://jsonplaceholder.typicode.com/users')
//.then(response=>response.json())
     //  .then((users)=>setrobot(users))
     const fetchUser=async()=>{
        const users=await getData<Robot[]>('https://jsonplaceholder.typicode.com/users')
        setrobot(users);
    }

    fetchUser()

    },[])
        
    const filteredrobot= robots.filter((robots )=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
     })

    const onSearchChange=(event:ChangeEvent<HTMLInputElement>):void=> {
        const searchfiledstring=event.target.value.toLowerCase();
        setSearchField(searchfiledstring);
    }


    return (
        <div className="tc">
       <h1 style={{color:'#8ed1a3',letterSpacing: 12,fontFamily:'Bruno Ace SC'}}> RoboFriend</h1>
        <Searchbox  searchChange={onSearchChange}/> 
        <Scroll>
        <CardList robots={filteredrobot} />
        </Scroll>

        </div>)

}


export default App;
