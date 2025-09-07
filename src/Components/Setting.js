export default Setting = ({data, setData})=>{
    const {theme} = data;

    const handleDataChange =(e)=> {
        setData((prevState) => ({
            ...prevState,
            theme:e.target.name
        }));
    }
    console.log(theme);
    return (
    
    <div>
        
     <div>
    <label>
    <input type="radio" 
     name="dark"
    checked={theme === "dark"}
    onChange={handleDataChange}
    />
    dark
    </label>
    </div>
    <div>
    <label>
    <input type="radio" 
     name="light"
    checked={theme === "light"}
    onChange={handleDataChange}
    />
    light
    </label>
    </div>
    </div>
    )
}