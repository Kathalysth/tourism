function RenderRatings({ rating }: { rating: number }): JSX.Element {
  const RATING_PAD = -1;
  let fiveStarRating = [...Array(rating).keys()];
  while (fiveStarRating.length < 5) {
    fiveStarRating.push(RATING_PAD);
  }
  return (
    <ul className="flex items-center space-x-1">
      {fiveStarRating.map((starRating: number, index: number) => {
        if (starRating !== RATING_PAD) {
          return (
            <li className="w-2 h-2 rounded-full bg-gray-50" key={index + 1} />
          );
        }

        return (
          <li className="w-2 h-2 rounded-full bg-gray-600" key={index + 1} />
        );
      })}
    </ul>
  );
}

export default RenderRatings;
