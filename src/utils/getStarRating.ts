const getStarRating = (starRating = 5) => {
  const stars = [...Array(5).keys()].map(cur => {
    const remainingStars = (starRating || 5) - cur;
    if (remainingStars >= 1) {
      return 'star-full';
    } else if (remainingStars >= 0.49) {
      return 'star-half';
    }

    return 'star-empty';
  });

  return stars;
};

export default getStarRating;
