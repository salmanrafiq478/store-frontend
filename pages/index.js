import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home(){
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} style={{ backgroundColor: "#000", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", color: "#e50914" }}>STEP INTO POWER</h1>
          <p>Handcrafted leather goods built for confidence, ambition, and prestige.</p>
          <button style={{ backgroundColor: "#e50914", color: "#fff", padding: "1rem 2rem", border: "none", marginTop: "1rem" }}>
            Shop Now
          </button>
        </section>

        {/* Best Sellers Section */}
        <section className={styles.bestSellers} style={{ padding: "4rem 2rem", backgroundColor: "#111", color: "#fff" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Best Sellers</h2>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ backgroundColor: "#1c1c1c", padding: "1rem", borderRadius: "8px", width: "200px" }}>
              <Image src="/shoe1.jpg" width={200} height={200} alt="Leather Sandals" />
              <h3 style={{ color: "#e50914" }}>Peshawari Classic</h3>
              <p>Timeless Eastern footwear with modern finish.</p>
              <p>$49.99</p>
            </div>
            <div style={{ backgroundColor: "#1c1c1c", padding: "1rem", borderRadius: "8px", width: "200px" }}>
              <Image src="/boot1.jpg" width={200} height={200} alt="Leather Boots" />
              <h3 style={{ color: "#e50914" }}>Urban Boots</h3>
              <p>Premium leather boots for modern lifestyle.</p>
              <p>$89.99</p>
            </div>
          </div>
        </section>

        {/* Join The Phase Section */}
        <section style={{ backgroundColor: "#000", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
          <h2>Be Part of the Leather Revolution</h2>
          <p>Join early to access new phases and exclusive drops.</p>
          <button style={{ backgroundColor: "#e50914", color: "#fff", padding: "1rem 2rem", border: "none", marginTop: "1rem" }}>
            Join the Tribe
          </button>
        </section>

        {/* Testimonials */}
        <section style={{ backgroundColor: "#111", color: "#fff", padding: "4rem 2rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>What Our Customers Say</h2>
          <blockquote style={{ fontStyle: "italic", maxWidth: "600px", margin: "0 auto" }}>
            “Exceptional craftsmanship and design. My go-to for all things leather!”
            <footer style={{ marginTop: "1rem", textAlign: "right" }}>— Satisfied Customer</footer>
          </blockquote>
        </section>
      </main>
    </>
  );
}
