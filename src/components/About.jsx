import profile from '../data/profile';

function About() {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      {profile.about.map((paragraph) => (
        <p key={ paragraph }>{paragraph}</p>
      ))}

      <ul className="highlight-list">
        {profile.highlights.map((highlight) => (
          <li key={ highlight }>{highlight}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
