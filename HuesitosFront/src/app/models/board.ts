import { _Bottom } from "@angular/cdk/scrolling";

export interface ShiftApi{
    info:StringApiInfo;
    results:ShiftApiResults[];
  }
  
  export interface StringApiInfo {
    count:number;
    page:number;
    next: string;
    perv:string;
  }
  
  export interface ShiftApiResults{
          petName:string;
          username?: string;
          email: string;
          disease: string;
          status: string;
          time: string;
         // username:string;//se obtiene del token
          
          
          
          date:string;
          
          //check:boolean;
  }