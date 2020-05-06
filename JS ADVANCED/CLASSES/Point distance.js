class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p, q) {
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist;
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));