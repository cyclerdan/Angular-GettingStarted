import {Pipe, PipeTransform} from '@angular/core'
@Pipe ({
    name:'convertToSpaces' //This is the name that we will use from the html to reference the pipe
})


export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: any): string {
        return value.replace(character, ' ');
    }

}