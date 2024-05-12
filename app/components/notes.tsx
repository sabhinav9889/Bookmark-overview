"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faPen, faFolder, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useState } from "react";


const Notes = ({ele, idx}:any)=>{
    const [desbutt, setdesbutt] = useState(true);
    const [readmore, setReadmore] = useState<Boolean>(true);
    const divRef = useRef(null);
    useEffect(() => {
        const divElement = divRef.current as HTMLElement | null;
        if(divElement) console.log("scrollHgt: "+divElement.scrollHeight);
        if (divElement&&divElement.scrollHeight < 80) {
            setdesbutt(false);
        }
    }, []);
    return(
        <>
            <div className="relative" key={idx}>
                <div className="sm:grid grid-cols-5 p-3  text-slate-500 hover:bg-slate-100">
                    <div className="col-span-1 flex">
                        <span className="flex w-6 sm:w-20 sm:justify-end pt-3 sm:pr-8"><FontAwesomeIcon icon={faChevronRight} size="sm" /></span><p className="w-36 text-blue-500 pt-2">{ele.title} </p>
                    </div>
                    <div className="col-span-3 w-full sm:mt-0 mt-2">
                        {readmore ? (
                        <div style={{ color: "#303030"}}>
                            <p
                            className="p-2 h-14 overflow-hidden"
                            ref={divRef}
                            >
                            {ele.description}
                            </p>
                            {desbutt && (
                            <button
                                className="text-blue-400 ml-2"
                                onClick={() => setReadmore(false)}
                            >
                                Read more
                            </button>
                            )}
                        </div>
                        ) : (
                        <div style={{ color: "#303030"}}>
                            <p className="p-2" ref={divRef}>
                            {ele.description}
                            </p>
                            {desbutt && (
                            <button
                                className="text-blue-400 ml-2"
                                onClick={() => setReadmore(true)}
                            >
                                Read Less
                            </button>
                            )}
                        </div>
                        )}
                    </div>
                    <div className="flex col-span-1 w-full  sm:mt-0 sm:justify-end">  
                        <div className="interactive-element w-9 h-11 pt-1 pl-2 pr-2 cursor-pointer hover:bg-blue-300 rounded-md hover:text-white" ><FontAwesomeIcon icon={faPen} className="mt-2" size="lg"/></div>
                        <div className="interactive-element pl-2 pt-1 w-9 h-11 pr-2 cursor-pointer hover:bg-blue-300 rounded-md hover:text-white"><FontAwesomeIcon icon={faTrash} size="lg" className="mt-2"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes;