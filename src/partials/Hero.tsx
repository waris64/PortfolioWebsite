import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Muhammad Waris Saleh</GradientText> 👋
        </>
      }
      description={
        <>
          I'm Waris — a Full Stack Developer who builds fast, scalable web apps
          and automation systems that get things done. From React and Next.js
          frontends to Node.js backends, I specialize in clean code, smart
          workflows, and AI-powered tools. Whether it's building Chrome
          extensions, automating daily YouTube pipelines, or crafting WordPress
          sites from scratch — I turn ideas into shipping products, fast.{' '}
        </>
      }
      avatar={
        <img
          className="max-h-80 w-64  rounded"
          src="/src/images/profile.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://web.facebook.com/Waris029/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-waris-saleh/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://x.com/Waris029" className="pl-1">
            <HeroSocial src="src/images/twitter.png" alt="" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
