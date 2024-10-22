function cascade(value) {
    console.log(value);
    if (value < 10) return;
    cascade(Math.floor(value / 10));
    console.log(value);
  }
  
  cascade(12345)