import { BG_URL } from "../utils/constant "
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearcBar from "./GPTSearcBar"

const GPTSearch = () => {
  return ( 
    <div>
         <div className="absolute -z-10">
       <img className="" src={BG_URL}/>     
    </div>    
      <GPTSearcBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
