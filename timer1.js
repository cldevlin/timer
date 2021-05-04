const timer = function (times) {
  if (times.length === 0) {
    return;
  }
  for (const each of times) {
    if (Number(each) !== NaN && each >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(each);
      }, each * 1000);
    }
  }
}

const args = process.argv.slice(2);
timer(args);
