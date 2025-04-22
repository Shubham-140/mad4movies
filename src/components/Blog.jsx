import { useSelector } from "react-redux";

const Blog = () => {
  const lightMode = useSelector((state) => state.color.isDarkMode);

  const styles = {
    container: {
      padding: window.innerWidth < 768 
        ? "clamp(24px, 6vw, 32px) clamp(16px, 4vw, 24px)" 
        : window.innerWidth < 1024 
          ? "clamp(20px, 4vw, 28px) clamp(14px, 2.5vw, 20px)" // Tablet: Scaled for small to large tablets
          : "clamp(24px, 3vw, 36px) clamp(16px, 2vw, 28px)", // Desktop: Scaled for small to large desktops
      fontFamily: "'Inter', sans-serif",
      backgroundColor: lightMode ? "#f0f4ff" : "#232A35",
      color: lightMode ? "#232A35" : "#ffffff",
      minHeight: window.innerWidth < 768 
        ? "calc(100vh - 160px)" 
        : window.innerWidth < 1024 
          ? "clamp(65vh, 75vh, 85vh)" // Tablet: Scaled minHeight
          : "clamp(70vh, 80vh, 90vh)", // Desktop: Original minHeight
      width: "100%",
      boxSizing: "border-box",
      overflowX: "hidden",
    },
    heroSection: {
      maxWidth: window.innerWidth < 768 
        ? "95vw" 
        : window.innerWidth < 1024 
          ? "min(900px, 92vw)" // Tablet: Scaled maxWidth
          : "min(1200px, 90vw)", // Desktop: Adjusted maxWidth
      margin: window.innerWidth < 768 
        ? "0 auto clamp(24px, 6vw, 32px)" 
        : window.innerWidth < 1024 
          ? "0 auto clamp(20px, 4vw, 28px)" // Tablet: Scaled margin
          : "0 auto clamp(24px, 3vw, 36px)", // Desktop: Scaled margin
      textAlign: "center",
      padding: window.innerWidth < 768 
        ? "0 clamp(8px, 3vw, 16px)" 
        : window.innerWidth < 1024 
          ? "0 clamp(8px, 2vw, 12px)" // Tablet: Scaled padding
          : "0 clamp(10px, 1.5vw, 16px)", // Desktop: Scaled padding
      width: "100%",
    },
    title: {
      fontSize: window.innerWidth < 768 
        ? "clamp(1.5rem, 5vw, 2rem)" 
        : window.innerWidth < 1024 
          ? "clamp(1.625rem, 3vw, 2rem)" // Tablet: Scaled for small to large tablets
          : "clamp(1.875rem, 2.5vw, 2.75rem)", // Desktop: Scaled for small to large desktops
      fontWeight: "800",
      marginBottom: window.innerWidth < 768 
        ? "clamp(12px, 3vw, 16px)" 
        : window.innerWidth < 1024 
          ? "clamp(10px, 2vw, 14px)" // Tablet: Scaled marginBottom
          : "clamp(12px, 1.5vw, 16px)", // Desktop: Scaled marginBottom
      position: "relative",
      display: "inline-block",
      color: "transparent",
      backgroundImage: lightMode
        ? "linear-gradient(90deg, #0076b3, #00a8ff)"
        : "linear-gradient(90deg, #00a8ff, #00d4ff)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      lineHeight: "1.2",
      padding: "0 2px",
      boxDecorationBreak: "clone",
    },
    subtitle: {
      fontSize: window.innerWidth < 768 
        ? "clamp(0.875rem, 3.5vw, 1rem)" 
        : window.innerWidth < 1024 
          ? "clamp(0.875rem, 1.8vw, 1rem)" // Tablet: Scaled for small to large tablets
          : "clamp(0.9375rem, 0.9vw, 1.125rem)", // Desktop: Scaled for small to large desktops
      color: lightMode ? "#555" : "#bbb",
      maxWidth: window.innerWidth < 768 
        ? "90vw" 
        : window.innerWidth < 1024 
          ? "min(700px, 90vw)" // Tablet: Scaled maxWidth
          : "min(800px, 85vw)", // Desktop: Adjusted maxWidth
      margin: window.innerWidth < 768 
        ? "0 auto clamp(16px, 4vw, 24px)" 
        : window.innerWidth < 1024 
          ? "0 auto clamp(14px, 2.5vw, 20px)" // Tablet: Scaled margin
          : "0 auto clamp(16px, 1.5vw, 24px)", // Desktop: Scaled margin
      lineHeight: "1.6",
      padding: window.innerWidth < 768 
        ? "0 clamp(8px, 3vw, 16px)" 
        : window.innerWidth < 1024 
          ? "0 clamp(6px, 1.5vw, 10px)" // Tablet: Scaled padding
          : "0 clamp(8px, 1vw, 12px)", // Desktop: Scaled padding
    },
    comingSoon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: window.innerWidth < 768 
        ? "clamp(200px, 35vh, 280px)" 
        : window.innerWidth < 1024 
          ? "clamp(220px, 38vh, 300px)" // Tablet: Scaled minHeight
          : "clamp(250px, 40vh, 350px)", // Desktop: Original minHeight
      background: lightMode ? "rgba(255,255,255,0.7)" : "rgba(45, 55, 72, 0.7)",
      borderRadius: window.innerWidth < 768 
        ? "clamp(8px, 3vw, 12px)" 
        : window.innerWidth < 1024 
          ? "clamp(8px, 2vw, 12px)" // Tablet: Scaled borderRadius
          : "clamp(10px, 1.5vw, 16px)", // Desktop: Scaled borderRadius
      padding: window.innerWidth < 768 
        ? "clamp(20px, 5vw, 24px) clamp(12px, 3vw, 16px)" 
        : window.innerWidth < 1024 
          ? "clamp(16px, 3vw, 20px) clamp(10px, 2vw, 14px)" // Tablet: Scaled padding
          : "clamp(20px, 2vw, 24px) clamp(12px, 1.5vw, 16px)", // Desktop: Scaled padding
      textAlign: "center",
      backdropFilter: "blur(8px)",
      border: lightMode
        ? "1px solid rgba(226, 232, 240, 0.8)"
        : "1px solid rgba(74, 85, 104, 0.5)",
      maxWidth: window.innerWidth < 768 
        ? "95vw" 
        : window.innerWidth < 1024 
          ? "min(700px, 90vw)" // Tablet: Scaled maxWidth
          : "min(800px, 85vw)", // Desktop: Adjusted maxWidth
      margin: "0 auto",
      width: window.innerWidth < 768 
        ? "90vw" 
        : window.innerWidth < 1024 
          ? "min(650px, 88vw)" // Tablet: Scaled width
          : "min(750px, 85vw)", // Desktop: Adjusted width
      boxSizing: "border-box",
    },
    comingSoonIcon: {
      fontSize: window.innerWidth < 768 
        ? "clamp(1.5rem, 5vw, 2rem)" 
        : window.innerWidth < 1024 
          ? "clamp(1.625rem, 3vw, 2rem)" // Tablet: Scaled for small to large tablets
          : "clamp(1.875rem, 2vw, 2.5rem)", // Desktop: Scaled for small to large desktops
      marginBottom: window.innerWidth < 768 
        ? "clamp(8px, 2vw, 12px)" 
        : window.innerWidth < 1024 
          ? "clamp(8px, 1.5vw, 10px)" // Tablet: Scaled marginBottom
          : "clamp(10px, 1vw, 12px)", // Desktop: Scaled marginBottom
      color: lightMode ? "#0076b3" : "#00a8ff",
    },
    comingSoonTitle: {
      fontSize: window.innerWidth < 768 
        ? "clamp(1rem, 3vw, 1.125rem)" 
        : window.innerWidth < 1024 
          ? "clamp(1.125rem, 2vw, 1.25rem)" // Tablet: Scaled for small to large tablets
          : "clamp(1.25rem, 1.5vw, 1.5rem)", // Desktop: Scaled for small to large desktops
      fontWeight: "700",
      marginBottom: window.innerWidth < 768 
        ? "clamp(8px, 2vw, 12px)" 
        : window.innerWidth < 1024 
          ? "clamp(8px, 1.5vw, 10px)" // Tablet: Scaled marginBottom
          : "clamp(10px, 1vw, 12px)", // Desktop: Scaled marginBottom
      color: lightMode ? "#2d3748" : "#f7fafc",
    },
    comingSoonText: {
      fontSize: window.innerWidth < 768 
        ? "clamp(0.875rem, 3vw, 0.9375rem)" 
        : window.innerWidth < 1024 
          ? "clamp(0.875rem, 1.5vw, 0.9375rem)" // Tablet: Scaled for small to large tablets
          : "clamp(0.9375rem, 0.8vw, 1rem)", // Desktop: Scaled for small to large desktops
      color: lightMode ? "#4a5568" : "#a0aec0",
      maxWidth: window.innerWidth < 768 
        ? "90vw" 
        : window.innerWidth < 1024 
          ? "min(500px, 85vw)" // Tablet: Scaled maxWidth
          : "min(600px, 80vw)", // Desktop: Adjusted maxWidth
      lineHeight: "1.6",
      padding: window.innerWidth < 768 
        ? "0 clamp(8px, 3vw, 16px)" 
        : window.innerWidth < 1024 
          ? "0 clamp(6px, 1.5vw, 10px)" // Tablet: Scaled padding
          : "0 clamp(8px, 1vw, 12px)", // Desktop: Scaled padding
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>Mad4Movies Blog</h1>
        <p style={styles.subtitle}>
          Insights, behind-the-scenes stories, and expert analysis about your
          favorite films and the movie industry.
        </p>
      </div>

      <div style={styles.comingSoon}>
        <div style={styles.comingSoonIcon}>📝</div>
        <h2 style={styles.comingSoonTitle}>Coming Soon</h2>
        <p style={styles.comingSoonText}>
          We&apos;re working hard to bring you premium content about cinema.
          Check back soon for articles, interviews, and exclusive movie
          insights.
        </p>
      </div>
    </div>
  );
};

export default Blog;