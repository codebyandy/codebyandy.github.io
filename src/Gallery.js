import Data from "./Data";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

class Gallery extends React.Component {
    render() {
        const [data, setData] = useState(Data);
        // const categoryData = Data.map((value)=>{
        //     return value.category
        // });
        // const tabsData= ["all", ...new Set(categoryData)];
        
        // const filterCategory=(category) =>{
        //     if(category=="all"){
        //         setData(Data);
        //         return;
        //     }
        // const filteredData =  Data.filter((value)=>{
        //     return value.category == category;
        // })
        // setData(filteredData);
        // }

        return(
            <div>
                <div>
                    <div>
                    </div>
                    <div>
                        {/* <Tabs filterCategory={filterCategory} tabsData={tabsData}/> */}
                        <ProjectCard data={data} />
                    </div>
                    <div>   
                    </div>
                </div>
            </div> 
        )
    }
}

let domContainer = document.querySelector('#gallery');
ReactDOM.render(<Gallery />, domContainer);