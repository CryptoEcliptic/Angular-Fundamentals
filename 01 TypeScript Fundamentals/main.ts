// import { TestPropertyiesClass } from './properties';
// import { TestFigure } from './accessModifiers';
import { LikeComponent } from "./likeComponent";

// let testClass = new TestPropertyiesClass(2, 4);
// testClass.y = 7;
// let testFigure = new TestFigure(3, 6);
// testFigure.draw();

let likeComponent = new LikeComponent(1, false);
likeComponent.onClick();
console.log(`Likes count: ${likeComponent.likesCount}, IsSelected: ${likeComponent.isSelected}`);