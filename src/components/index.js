import DynamicIcon from './dynamic-icon';
import Header from './header';
import HeroHomepage from './hero-homepage';
import Introduction from './introduction';

const PrismicTypes = {
    hero: HeroHomepage,
    // accordion: Accordion,
    // quotes: () => '',
    introduction: Introduction,
    // landingpageintroduction: LandingPageIntroduction,
    // headingcta: HeadingCta,
    // list: ListWithDescription,
    // listblock: ListBlock,
    // reviewcarousel: ReviewCarousel,
    // wysiwygcomponent: Wysiwyg,
    // featurelist: FeatureList,
    // relatedarticles: RelatedArticles,
    // campaignlinks: CampaignLinks,
    // video: Video,
  
    // landingpagehero: LandingPageHero,
    // pdf: ComponentPDF,
  };

export {
    DynamicIcon,
    Header,
    PrismicTypes,
}