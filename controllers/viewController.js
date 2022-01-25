exports.baseTest = async (_, res) => {
  try {
    res.status(200).render('base');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
