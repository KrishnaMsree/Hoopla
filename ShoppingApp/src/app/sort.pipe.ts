import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: any): any {
    if(args == 'price'){
      return value.sort((a:any,b:any)=>{
        if(a.price > b.price){
          return 1
        }
        else if(a.price < b.price){
          return -1;
        }
        else{
          return 0
        }
      });
    }
    else if(args == 'pRating'){
      return value.sort((a:any,b:any)=>{
        if(a.pRating > b.pRating){
          return -1
        }
        else if(a.pRating < b.pRating){
          return 1;
        }
        else{
          return 0
        }
      });
    }
    else if(args == 'productName'){
      return value.sort((a:any,b:any)=>{
        if(a.pName > b.pName){
          return 1
        }
        else if(a.pName < b.pName){
          return -1;
        }
        else{
          return 0
        }
      });
    }
    return value
  }

}
