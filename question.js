console.log('start');

async function async1() {
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}

async1();

setTimeout(function() {
  console.log('setTimeout end');
}, 0);

new Promise((resolve) => {
  console.log('Promise 1');
  resolve();
})
  .then(function() {
    console.log('Promise 1, then 1');
  })
  .then(function() {
    console.log('Promise 1, then 2');
  });

new Promise((resolve) => {
  console.log('Promise 2');
  resolve();
})
  .then(function() {
    console.log('Promise 2, then 1');
  })
  .then(function() {
    console.log('Promise 2, then 2');
  });

console.log('end');
