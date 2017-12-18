const controller = function (platform) {
  const _ = undefined;
  this.aDate;

  const gui = {
    getNode: element => platform.getElementById(element),
    initEvent: function () {

      gui.getNode('sendDates').addEventListener('click', function () {
          new Promise(function (resolve, reject) {
            resolve(new Person({
              id: parseInt(event.target.form[0].value),
              name: event.target.form[1].value,
              lastName: event.target.form[2].value,
              gender: event.target.form[3].value,
              birthday: event.target.form[4].value,
              phone: [parseInt(event.target.form[5].value)]
            }));
          }).then(function (person) {
          this.diary.addPerson(person);
          console.log(this.diary);
        });
      })
    }
  }

  const init = diary => {
    this.diary = diary;

    gui.initEvent();
  }

  return {
    init
  }
}(window.document);