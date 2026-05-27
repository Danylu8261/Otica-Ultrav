"use client";

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 99,
      background: "rgba(250,247,242,0.97)",
      borderBottom: "0.5px solid #e0d5c5",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2rem", maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", letterSpacing: "0.06em", color: "#2c1f0e" }}>
          Ultra<span style={{ color: "#b8914a" }}>V</span>
        </div>

        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none" }}>
          {["Óculos de Sol", "Grau", "Armações", "Lentes", "Contato"].map((item) => (
            <li key={item}>
              <a href="#" style={{ color: "#8c7b68", textDecoration: "none", fontSize: 13, fontWeight: 400, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button style={{
          background: "#2c1f0e", color: "#faf7f2", border: "none",
          padding: "10px 24px", borderRadius: 2, fontSize: 12, fontWeight: 500,
          cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          Ver coleção
        </button>
      </div>
    </nav>
  );
}
