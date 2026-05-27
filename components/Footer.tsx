export default function Footer() {
  const cols = [
    { title: "Produtos", links: ["Óculos de Sol", "Óculos de Grau", "Armações", "Lentes"] },
    { title: "Empresa", links: ["Sobre nós", "Blog", "Trabalhe conosco", "Contato"] },
    { title: "Suporte", links: ["Trocas e devoluções", "Prazo de entrega", "Garantia", "FAQ"] },
  ];

  return (
    <footer style={{ background: "#2c1f0e", padding: "3rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#faf7f2", marginBottom: "1rem" }}>
              Ultra<span style={{ color: "#b8914a" }}>V</span>
            </div>
            <p style={{ color: "rgba(250,247,242,0.45)", fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>
              Sua ótica de referência desde 2014.<br />Qualidade, estilo e precisão em cada par.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b8914a", marginBottom: "1rem" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 8 }}>
                    <a href="#" style={{ color: "rgba(250,247,242,0.5)", textDecoration: "none", fontSize: 13, fontWeight: 300 }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "0.5px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <span style={{ color: "rgba(250,247,242,0.3)", fontSize: 11 }}>© 2026 Ultra V Ótica. Todos os direitos reservados.</span>
          <span style={{ color: "rgba(250,247,242,0.3)", fontSize: 11 }}>Política de Privacidade · Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}
