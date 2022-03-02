import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name: 'cube'
})

export class SqrtPipe implements PipeTransform {
  transform(n:number):number {
    return (n*n*n);
  }
}
