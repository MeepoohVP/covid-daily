
async function main() {
const Queue = Swal.mixin({
  confirmButtonText: 'Next >',
  allowOutsideClick: false,
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' }
})

await Queue.fire({
  currentProgressStep: 0,
  imageUrl: 'guide1.png',
  imageWidth: 300,
  imageHeight: 200,
  // optional class to show fade-in backdrop animation which was disabled in Queue mixin
  showClass: { backdrop: 'swal2-noanimation' },
})
await Queue.fire({
  imageUrl: 'guide2.png',
  confirmButtonText: 'OK',
  imageWidth: 300,
  imageHeight: 200,
  currentProgressStep: 1
})



}
main();