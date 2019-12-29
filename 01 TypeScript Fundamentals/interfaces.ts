interface Point {
 x : number,
 y: number
}

let drawPoint = (pointA: Point, pointB: Point) => {
    console.log(pointA.x + " " + pointB.y)
}

let p1 = {x:1, y:2}
let p2 = {x:3, y:4}

drawPoint(p1, p2)
