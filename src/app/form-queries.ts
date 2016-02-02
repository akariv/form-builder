import {Injectable} from 'angular2/core'

@Injectable()
export class FormQueryItemOption {
    constructor(public opt : string) {

    }
}

@Injectable()
export class FormQueryItem {

    value : any;

    constructor(public name : string,
                public kind : string,
                public options? : FormQueryItemOption[]) {
    }

    addOption(opt:FormQueryItemOption):void {
        if (!this.options) {
            this.options = [];
        }
        this.options.push(opt);
    }

    optionsAllowed():boolean {
        return this.kind === 'radio' || this.kind === 'select';
    }

    setTextValue( value: string ) {
        console.log('got text value!',value);
        this.value = value;
    }

    setNumericValue( value: number ) {
        this.value = value;
    }

    setOptionValue( value: string ) {
        this.value = value;
    }

}

@Injectable()
export class FormQueries {
    items : FormQueryItem[] = [new FormQueryItem('age', 'text')];
    name : string = 'My Form';

    add (item) {
        this.items = this.items.concat( item );
        console.log(item.name, item.kind);
    }

    getData () {
        let data = {};
        this.items.forEach(function(item, i) {
            data['input'+i] = item.value;
        });
        return data;
    }

}
