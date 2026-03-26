class CircularObj {
  constructor(x, y, radius, f_color, s_color, context) {
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 4 - 2;
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2; //full rotation
    this.context = context;
  }

  display() {
    this.context.fillStyle = this.fill_color;
    this.context.strokeStyle = this.stroke_color;
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      true
    );
    this.context.fill(); // set the fill
    this.context.lineWidth = 2; //change stroke
    this.context.closePath();
    this.context.stroke();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // bounce off walls
    if (this.x - this.radius <= 0 || this.x + this.radius >= this.context.canvas.width) {
      this.vx *= -1;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= this.context.canvas.height) {
      this.vy *= -1;
    }
  }
}