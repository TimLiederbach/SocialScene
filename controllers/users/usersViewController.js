//Primary View Controller for auth and user views

//Displays LoginForm
function displayLoginForm(req, res) {
    console.log('Here is Login Form!');
    res.render('auth/login');
  };

//Displays Register Form
function displayRegisterForm(req, res) {
    res.render('auth/register');
  };

//Displays Profile Page (Still working out kinks)
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

//Directs User to CreateEvent Page
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
