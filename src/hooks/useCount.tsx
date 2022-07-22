import { useMemo, useState } from "react";
const addCount=(count:number)=>{
    console.log("sss");
    return useMemo(()=>{
        return count+1
    },[]);
}
export default addCount;