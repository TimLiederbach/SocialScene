function displayLoginForm(req, res) {
    console.log('Here is Login Form!');
    res.render('auth/login');
  };

function displayRegisterForm(req, res) {
    res.render('auth/register');
  };

function  handleUserProfile(req, res) {
        res.render('auth/profile');
    // res.redirect('/users/profile');
};

// function displayEvent(req, res) {
//     res.render('users')
// }

module.exports = {
    displayLoginForm,
    displayRegisterForm,
    handleUserProfile
};
