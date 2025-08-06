import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Citrus Disease Detection System"
        description="Website build on the MERN stack . Integrated the Ai model for the Citrus Disease Detection . It will show the 
          Disease name , damage of fruit and guide to get out of this disease.
          "
        link="https://fyp-front-end-theta.vercel.app/"
        img={{
          src: './src/images/citrus.png',
          alt: 'Citrus Disease Detection image',
          target: '_blank',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Chart.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>React</Tags>
          </>
        }
      />
      <Project
        name="Ecommerce Project"
        description="Ecommerce Project having the functionalities of filter the categories of products . 
        Dynamic filering. Shopping  cart functionality setup .
        "
        link="https://shopping-qqrf7puun-muhammad-waris-salehs-projects.vercel.app/login"
        img={{
          src: './src/images/ecommerce.jpg',
          alt: 'Project Fire',
          target: '_blank',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Store</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Lahore METRO Bus tracking system "
        description="Real time tracking system .  User can see , search out for the destination . Website will show the busses for that route . It also shows 
        their timings.  "
        link="https://bus-search-and-tracking-website.vercel.app/"
        img={{
          src: './src/images/bus.jpg',
          alt: 'Bus Image',
          target: '_blank',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React.js</Tags>
            <Tags color={ColorTags.BLUE}>TailwindCss</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
