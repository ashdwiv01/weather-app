import Past from "./Past";

const PastArray = (props) => {

    

    const dates = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const d1 = new Date(d)
          .toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })
          .split("/");
        const new_d = d1[2] + "-" + d1[0] + "-" + d1[1];
        return new_d;
      });
    
    // console.log(dates);
    //   console.log(props.day)
    return (
        
          dates.map((d) => {
              return <Past dt={d} place={props.place}/>            
          })
        
        // dates.join(',')
    );
};

export default PastArray;