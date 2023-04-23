
import { ChangeEventHandler } from "react";

 type searchBoxProp={
    
    searchChange:ChangeEventHandler<HTMLInputElement>
 }



const Searchbox =({searchChange}:searchBoxProp) =>(
<div className='pa3'>
<input 
className="pa3 br3 ba b--green " 
type="search" 
placeholder="Search Robot"
onChange={searchChange} />


</div>)


export default Searchbox;