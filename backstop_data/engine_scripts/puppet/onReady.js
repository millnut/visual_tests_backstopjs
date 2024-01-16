module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  await page.evaluate(async () => {
    document.querySelectorAll('[loading="lazy"]').forEach((element) => {
      element.loading = 'eager';
    });

    document.querySelectorAll('[decoding="async"]').forEach((element) => {
      element.decoding = 'sync';
    });

    document.querySelectorAll('video').forEach((element) => {
      element.style.visibility = 'hidden';
    });
  });

  // await page.evaluate(async () => {
  //   await new Promise((resolve, reject) => {
  //     var totalHeight = 0;
  //     var distance = 200;
  //     var timer = setInterval(() => {
  //       var scrollHeight = document.body.scrollHeight;
  //       window.scrollBy(0, distance);
  //       totalHeight += distance;

  //       if(totalHeight >= scrollHeight){
  //         clearInterval(timer);
  //         resolve();
  //       }
  //     }, 100);
  //   });
  // });

  await page.waitForTimeout(3000);

  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
