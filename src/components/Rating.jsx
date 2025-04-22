import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRatings } from "../features/CustomerDetailsSlice";
import { setLoginWindow } from "../features/AuthSlice";

function Rating() {
  const lightMode = useSelector((state) => state.color.isDarkMode);
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const movieId = useSelector((state) => state.movieDetails.movieId);
  const ratings = useSelector((state) => state.customerDetails.ratings);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  useEffect(() => {
    if (ratings[movieId] !== undefined) {
      setRating(ratings[movieId]);
    } else {
      setRating(null);
    }
  }, [movieId, ratings]);

  function handleSubmit() {
    if (isLoggedIn === false) {
      dispatch(setLoginWindow(true));
      return;
    }

    if (rating === null) return;

    dispatch(setRatings({ movieId: movieId, rating: rating }));
    setRating(null);

    if (submitRef.current) {
      submitRef.current.textContent = "✓ Submitted";
      submitRef.current.style.backgroundColor = "#4CAF50";
      setTimeout(() => {
        if (submitRef.current) {
          submitRef.current.textContent = "Submit Rating";
          submitRef.current.style.backgroundColor = "#E50914";
        }
      }, 2000);
    }
  }

  const calculateStarSizeAndGap = () => {
    const containerWidth =
      windowWidth * (isMobile ? 0.9 : isTablet ? 0.8 : 0.7);
    const maxStarSize = isTablet ? 32 : 36;
    const minStarSize = isTablet ? 20 : 24;
    const minGap = 1;

    const availableWidth = containerWidth - 9 * minGap;
    let starSize = Math.min(maxStarSize, availableWidth / 10);
    starSize = Math.max(minStarSize, starSize);

    let gap = minGap;
    if (starSize === minStarSize) {
      const remainingSpace = containerWidth - 10 * starSize;
      gap = Math.max(minGap, remainingSpace / 9);
    }

    return { starSize, gap };
  };

  const { starSize, gap } = calculateStarSizeAndGap();

  return (
    <div
      style={{
        margin: isMobile?"-30px auto":"-30px auto",
        padding: isTablet ? "18px 0" : "20px 0",
        backgroundColor: lightMode ? "#f0f4ff" : "#232A35",
        borderRadius: "12px",
        width: isMobile ? "90%" : isTablet ? "85%" : "80%",
        maxWidth: isTablet ? "450px" : "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: lightMode ? "#555" : "#aaa",
          fontSize: isMobile
            ? windowWidth < 375
              ? "14px"
              : "16px"
            : isTablet
            ? "15px"
            : "16px",
          width: "100%",
          margin: "0 0 0px 0",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {ratings?.[movieId] !== undefined
          ? `You rated this: ${ratings[movieId]}/10`
          : rating === null
          ? "Select your rating"
          : `You rated this: ${rating}/10`}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: `${gap}px`,
          margin: isTablet ? "12px 0" : "15px 0",
          width: "100%",
          padding: "0 15px",
          boxSizing: "border-box",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            style={{
              fontSize: `${starSize}px`,
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
              width: `${starSize}px`,
              textAlign: "center",
              lineHeight: `${starSize}px`,
              color:
                index < rating ? "#FFD700" : lightMode ? "#E0E0E0" : "#444",
              transform: index < rating ? "scale(1.1)" : "scale(1)",
            }}
            onClick={() => {
              if (isLoggedIn === false) {
                dispatch(setLoginWindow(true));
                return;
              }
              setRating(index + 1);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFD700";
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                index < rating ? "#FFD700" : lightMode ? "#E0E0E0" : "#444";
              e.currentTarget.style.transform =
                index < rating ? "scale(1.1)" : "scale(1)";
            }}
          >
            ★
          </span>
        ))}
      </div>

      <button
        style={{
          fontSize: isMobile
            ? windowWidth < 375
              ? "14px"
              : "16px"
            : isTablet
            ? "15px"
            : "16px",
          fontWeight: "500",
          background: "#E50914",
          color: "white",
          borderRadius: "8px",
          padding: isTablet ? "8px 20px" : "10px 25px",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          marginTop: isTablet ? "8px" : "10px",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.25)",
          },
        }}
        onClick={handleSubmit}
        ref={submitRef}
      >
        Submit Rating
      </button>
    </div>
  );
}

export default Rating;
