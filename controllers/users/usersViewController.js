function displayLoginForm(req, res) {
    console.log('Here is Login Form!');
    res.render('auth/login');
  };

function displayRegisterForm(req, res) {
    res.render('auth/register');
  };

function  handleUserProfile(req, res) {
    console.log(res.locals.events)
    res.redirect('/user/profile', {
      events: res.locals.events
    });
};

// function sendStudents(req, res) {
//   console.log('I send successful responses');
//   res.render('students/index', {
//     students: res.locals.students
//   })
// }

function  handleEvent(req, res) {
    res.redirect('/user/event');
};

// function displayEvent(req, res) {
//     res.render('users')
// }

module.exports = {
    displayLoginForm,
    displayRegisterForm,
    handleUserProfile,
    handleEvent
};
