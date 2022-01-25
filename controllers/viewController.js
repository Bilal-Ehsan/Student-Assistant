exports.displayTest = async (_, res) => {
  try {
    res.status(200).render('home', {
      text: 'Passing in some text',
      moreText: 'Passing some more text'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
