const LatestNewsBanner = () => {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "black",
          overflow: "hidden",
          color: "white",
          height: "50px",
        }}
        className="latest-news-banner"
      >
        {/* Sticky Badge */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "14px",
            zIndex: 1,
          }}
        >
          LATEST NEWS
        </div>
  
        {/* Scrolling Text */}
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              whiteSpace: "nowrap",
              animation: "scroll 18s linear infinite",
            }}
          >
            Admission Open For The Session 2025-26. Get in touch with Us...
          </div>
        </div>
  
        {/* CSS Animation */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(300%); } /* Start completely outside the right */
              100% { transform: translateX(-100%); } /* End completely outside the left */
            }
  
            /* Hiding Latest News Banner on Mobile Devices */
            @media (max-width: 768px) {
              .latest-news-banner {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  };
  
  export default LatestNewsBanner;
  