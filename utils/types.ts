import { StaticImageData } from "next/image";

export type People = {
   
    id : number;
    name : string;
    roll : string;
    image : StaticImageData;
}

export type Recent = {
   
    id : number;
    heading:string
    description : string;
    image : StaticImageData;
}