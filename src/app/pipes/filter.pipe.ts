import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: any): any {
    //const res=[];
    //const longitud =  value.length;
     //for(var i = 0 ; longitud; i++ ){
      //if(post.indexOf(arg) > -1){
     //   var cad = post.nombre ;
      //  var pos = cad.indexOf(cad);
      //  console.log("posicion:  "  + pos+ "   cadena     "+cad) ;
    // console.log(i);
      //  res.push(value[i].pais)

      //}
  return   value.filter((item) => item.nombre ) ;
     }
  }


