exports.homeView = async (_, res) => {
  try {
    res.status(200).render('home');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
