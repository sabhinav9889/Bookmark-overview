"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faPen, faFolder, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";
import Notes from "./notes";

class Bookmark{
    title: string;
    description: string;
    constructor(title:string, desc:string){
        this.title = title;
        this.description = desc;
    }
}

const BookmarkFunc = ()=>{
    const hdName = "Testfunction1";
    let lis:Bookmark[] = [
        new Bookmark("PJM notes1", "PJM beautiful topic which I cover today beautiful topic which  is one of the most beautiful topic which I cover today, some of the topics which I cover today are today"),
        new Bookmark("PMI notes2","Presentation is the key concept of PJM, then the 2nd one that comes is communication which we can do or we can learn on our own wishes hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100, hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100, hover:bg-slate-100 hover:bg-slate-100 hover:bg-slate-100")
    ];
    return(
        <>
          <div className="text-black max-w-6xl w-full m-auto p-4">
            <hr />
              <div className="flex p-4 text-sm hover:bg-slate-100"><div><FontAwesomeIcon icon={faFolder} size="sm" className="text-black text-sm" /></div><div className="ml-1">{hdName}</div></div>
            <hr/>
            {
                lis.map((ele, idx)=>(
                    <>
                       <Notes ele={ele} idx={idx} />
                       {(idx!==lis.length-1)&&<hr/>}
                    </>
                ))
            }
            </div>
        </>
    )
}

export default BookmarkFunc;