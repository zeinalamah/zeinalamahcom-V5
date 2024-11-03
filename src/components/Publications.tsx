import { AnimatedCard } from './AnimatedCard';
import { PublicationCard } from './PublicationCard';

export const Publications = () => {
  const publications = [
    {
      title: "The role of international research collaboration and faculty related factors in publication citations: Evidence from Lebanon",
      journal: "Economies",
      date: "2023",
      link: "https://www.mdpi.com/2227-7099/11/3/90",
      abstract: "The importance of international collaboration in the research field is well-documented, but its impact on the number of citations received by research publications is not fully understood. This paper aims to fill this gap by examining the relationship between international collaboration and other factors and the number of citations for research publications. Using data from the Lebanese American University, the authors employ ordinary least squares estimation to analyze the impact of international collaboration on the number of citations while controlling for various publications, authorship, university, and socioeconomic factors. The results show that international collaboration has a statistically significant positive effect on the number of citations. Based on these findings, we recommend that institutions and researchers seeking to increase the number of citations for their publications should focus on building and maintaining strong international collaborations and publishing in high-quality journals. This paper provides evidence of the importance of international collaboration for researchers seeking to increase the reach and impact of their publications. It also provides insights into the relevance of other factors, such as the number of publications, age, and journal rank."
    },
    {
      title: "Does twitter economic uncertainty matter for wheat prices?",
      journal: "Economics Letters",
      date: "2024",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0165176523004895",
      abstract: "This paper investigates the relationship between wheat prices, energy prices (crude oil and natural gas), and economic uncertainty, represented by the Twitter Economic Uncertainty Index (TEU). Despite existing literature emphasizing the significant impact of energy costs on agricultural commodity prices, this research uncovers no significant short-run relationship between the price shocks in the crude oil or natural gas markets and wheat prices. Similarly, fluctuations in the TEU USA do not reliably predict changes in wheat prices. This paper enriches the field by utilizing time series econometric analysis with a Structural Vector Auto-Regressive model with an exogenous variable (SVARX), incorporating four endogenous variables: wheat, crude oil, natural gas, and economic uncertainty from mid-2011 to mid-2022, and an exogenous dummy variable to account for an existing structural break."
    },
    {
      title: "Is the Price of Ether Driven by Demand or Pure Speculation?",
      journal: "Computational Economics",
      date: "2024",
      link: "https://link.springer.com/article/10.1007/s10614-024-10658-6",
      abstract: "This research, utilizing weekly data from 2017 to 2023 (298 observations), seeks to answer the question, 'Is the Price of Ether Driven by Demand or Pure Speculation?' It investigates the determinants of Ether price by focusing on the role of Gas price in Wei, Ethereum Network Utilization, and Bitcoin price. The study demonstrates that Network Utilization, indicative of demand, significantly influences Ether's price, suggesting a demand-driven price dynamic over pure speculation. The utility of econometric methodologies, especially the SVAR model, is highlighted in exploring relationships within the Ethereum ecosystem."
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-text mb-12">Recent Publications</h2>
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <PublicationCard {...pub} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};