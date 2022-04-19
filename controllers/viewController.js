exports.getHomeView = async (_, res) => {
  try {
    res.status(200).render('home');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getDashboardView = async (_, res) => {
  try {
    res.status(200).render('dashboard');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getProfileView = async (_, res) => {
  try {
    res.status(200).render('profile');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLoginView = async (_, res) => {
  try {
    res.status(200).render('login');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getRegisterView = async (_, res) => {
  try {
    res.status(200).render('register');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
