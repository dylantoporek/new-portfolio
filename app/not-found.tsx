import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: 96, fontWeight: 600, margin: 0, color: "#AAB2C6" }}>404</h1>
      <p style={{ fontSize: 20, margin: 0 }}>
        This page seems to have floated away.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "16px",
          padding: "10px 24px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.1)",
          color: "#FF6F61",
          fontSize: 18,
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
