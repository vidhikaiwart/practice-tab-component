export default Interest = ({data,setData,error})=>{
    const { interest } = data;
    
    const handleDataChange =(e)=> {
        setData((prevState) => ({
            ...prevState,
        interest:e.target.checked ?
         [...prevState.interest, e.target.name] : 
         prevState.interest.filter((i)=> i!== e.target.name)
        
       
        }));
    };
    console.log(interest);
    return (
    <div>
    <div>
    <label>
    <input type="checkbox" 
     name="coding"
    checked={interest.includes("coding")}
    onChange={handleDataChange}
    />
    coding
    </label>
    </div>
    <div>
    <label>
    <input type="checkbox" 
     name="cooking"
    checked={interest.includes("cooking")}
    onChange={handleDataChange}
    />
    cooking
    </label>
    </div>
    <div>
    <label>
    <input type="checkbox" 
     name="movie"
    checked={interest.includes("movie")}
    onChange={handleDataChange}
    />
    movie
    </label>
    </div>
    <div>
    <label>
    <input type="checkbox" 
     name="music"
    checked={interest.includes("music")}
    onChange={handleDataChange}
    />
    music
    </label>
    </div>
    {error.interest && <span className="error">{error.interest}</span>}
    </div>
    )
}
