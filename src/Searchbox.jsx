import React from "react";

const Searchbox =({searchfield,searchCange}) =>{ 
    return(
        <div className='pa3'>
            <input 
            className="pa3 br3 ba b--green bg-light-blue" 
            type="search" 
            placeholder="Search Robot"
            onChange={searchCange} />
            
          
        </div>
        
    );
}

export default Searchbox;