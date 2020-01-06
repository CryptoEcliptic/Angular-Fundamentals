// class Post{
//     _comment: Text;
//     _likes: number;
//     _likeBtn = false;
//     constructor(input?: Text){
//         this.comment = input;
//     }

//     get comment(){
//         return this._comment
//     }

//     set comment(value){
//         if(value === null){
//             throw new Error("Field \"Comment\" cannot be empty")
//         }
//         this._comment = value;
//     }

//     likeComment(){
//         this._likes += 1
//         this._likeBtn = true;
//     }

// }

export class LikeComponent{

    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }

    onClick(){
        if(this.isSelected){
            this._likesCount--;
            this._isSelected = false;
        } else{
            this._likesCount++;
            this._isSelected = true;
        }
        //Alternatively
        // this._likesCount += (this._isSelected) ? -1 : +1;
        // this._isSelected = !this._isSelected;

    }
}