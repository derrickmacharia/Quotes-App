// export class Quotes {
//     id!: number;
//     name!: string;
//     author!: string;
// }

export class Quotes {
    showCreator: boolean;
    constructor(public id: number,public name: string,public creator: string, public yourName: string, public completeDate: Date){
        this.showCreator = false;
    }
}