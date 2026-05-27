const products = [
  {
    emoji: "🕶️", badge: "Mais vendido", brand: "Ray-Ban",
    name: "Wayfarer Classic",
    desc: "Ícone atemporal. Armação acetato, proteção UV400, disponível em 8 cores.",
    price: "R$ 699", parcela: "ou 6x de R$ 116",
  },
  {
    emoji: "👓", badge: "Novo", brand: "Oakley",
    name: "Holbrook Titanium",
    desc: "Armação ultraleve em titânio. Ideal para uso diário com grau multifocal.",
    price: "R$ 1.299", parcela: "ou 12x de R$ 108",
  },
  {
    emoji: "✨", badge: "Premium", brand: "Versace",
    name: "Medusa Luxe",
    desc: "Design italiano exclusivo. Detalhes dourados e acetato de alta resistência.",
    price: "R$ 2.199", parcela: "ou 12x de R$ 183",
  },
];

export default function Products() {
  return (
    <section style={{ padding: "5rem 2rem 0", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8914a", marginBottom: "0.8rem" }}>
        Destaques
      </div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 600, marginBottom: "0.8rem" }}>
        Mais procurados
      </h2>
      <p style={{ color: "#8c7b68", fontSize: 14, lineHeight: 1.8, maxWidth: 460, marginBottom: "3rem", fontWeight: 300 }}>
        Seleção especial dos modelos favoritos da temporada.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
        {products.map((p, i) => (
          <div key={i} style={{
            background: "#faf7f2", border: "0.5px solid #e0d5c5",
            borderRadius: 3, overflow: "hidden", cursor: "pointer",
            transition: "border-color 0.25s, transform 0.25s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#b8914a";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#e0d5c5";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            }}
          >
            <div style={{ height: 200, background: "#f0ebe2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", position: "relative" }}>
              {p.emoji}
              <div style={{
                position: "absolute", top: "1rem", left: "1rem",
                background: "#2c1f0e", color: "#faf7f2",
                fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px",
              }}>
                {p.badge}
              </div>
            </div>
            <div style={{ padding: "1.25rem" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b8914a", marginBottom: 6 }}>{p.brand}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, marginBottom: 6 }}>{p.name}</div>
              <div style={{ color: "#8c7b68", fontSize: 12, lineHeight: 1.65, marginBottom: "1.25rem", fontWeight: 300 }}>{p.desc}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "0.5px solid #e0d5c5" }}>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#2c1f0e" }}>{p.price}</div>
                  <div style={{ fontSize: 11, color: "#8c7b68", fontWeight: 300 }}>{p.parcela}</div>
                </div>
                <button style={{
                  background: "#2c1f0e", color: "#faf7f2", border: "none",
                  padding: "8px 18px", borderRadius: 2, fontSize: 11,
                  fontWeight: 500, cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
