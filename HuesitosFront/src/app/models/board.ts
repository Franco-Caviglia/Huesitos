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
          id_shift: number;
          name:string;
         // username:string;//se obtiene del token
          mail:string;
          pet:string;
          disease:string;
          date:string;
          status:string;
          check:boolean;
  }