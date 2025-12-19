import gutBrainImg from '../assets/gut_brain.jpg';
import fiberImg from '../assets/fiber_comparison.jpg';
import fermentedImg from '../assets/fermented_workshop.jpg';

import moduleBg1 from '../assets/module_bg_1.jpg';
import moduleBg2 from '../assets/module_bg_2.jpg';
import moduleBg3 from '../assets/module_bg_3.jpg';
import moduleBg4 from '../assets/module_bg_4.jpg';

export const courses = [
    {
        id: 'microbiome-101',
        title: "The Microbiome 101: Your Inner Ecosystem",
        instructor: "Emily Torres-Medaglia RDN",
        duration: "45 min",
        level: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg1,
        videoUrl: "https://www.youtube.com/watch?v=VzPD009qTN4",
        summary: "Discover the trillions of bacteria living inside you and why they dictate your health.",
        content: `
            <h3>Introduction</h3>
            <p>The human microbiome is composed of trillions of microorganisms, primarily bacteria, but also viruses, fungi, and protozoa. These microbes outnumber human cells by a ratio of roughly 1.3 to 1.</p>
            
            <h3>Key Functions</h3>
            <ul>
                <li><strong>Digestion:</strong> Breaking down complex carbohydrates (fiber) that humans cannot digest on their own.</li>
                <li><strong>Immunity:</strong> 70% of the immune system resides in the gut, trained by these microbes.</li>
                <li><strong>Vitamin Production:</strong> Synthesis of Vitamin K and B vitamins.</li>
            </ul>

            <h3>Diversity is Key</h3>
            <p>Research consistently shows that higher microbial diversity is associated with better health outcomes. A diet rich in diverse plant fibers is the primary driver of this diversity.</p>
        `,
        references: [
            "Sender, R., Fuchs, S., & Milo, R. (2016). Revised Estimates for the Number of Human and Bacteria Cells in the Body. PLoS Biology.",
            "Valdes, A. M., et al. (2018). Role of the gut microbiota in nutrition and health. BMJ."
        ]
    },
    {
        id: 'leaky-gut-science',
        title: "Leaky Gut: separating Myth from Science",
        instructor: "Dr. A. Miller",
        duration: "30 min",
        level: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg2,
        videoUrl: "https://www.youtube.com/watch?v=21MDAnY7DX8&t=10s",
        summary: "Understanding 'Intestinal Permeability'—what it actually is and how to heal it.",
        content: `
            <h3>What is "Leaky Gut"?</h3>
            <p>Medically known as <em>increased intestinal permeability</em>, this condition occurs when the tight junctions between the cells of your intestinal lining loosen. This allows bacteria and toxins to pass ("leak") into the bloodstream.</p>

            <h3>Causes</h3>
            <p>Chronic stress, alcohol consumption, NSAIDs, and dysbiosis (imbalance of gut bacteria) are primary contributors. Zonulin is a protein that regulates these tight junctions.</p>
        `,
        references: [
            "Fasano, A. (2011). Zonulin and its regulation of intestinal barrier function: the biological door to inflammation, autoimmunity, and cancer. Physiological Reviews.",
            "Camilleri, M. (2019). Leaky gut: mechanisms, measurement and clinical implications in humans. Gut."
        ]
    },
    {
        id: 'gut-brain-axis',
        title: "The Gut-Brain Axis: Mood and Food",
        instructor: "Emily Torres-Medaglia RDN",
        duration: "50 min",
        level: "Intermediate",
        thumbnail: gutBrainImg,
        videoPoster: moduleBg3,
        videoUrl: "https://www.youtube.com/watch?v=5h3Y4iNcN8g",
        summary: "Why your gut is called the 'Second Brain' and how it influences anxiety and depression.",
        content: `
            <h3>The Vagus Nerve</h3>
            <p>The gut and brain communicate physically via the Vagus Nerve. This is a two-way highway: stress affects digestion, and digestion affects mood.</p>

            <h3>Serotonin Production</h3>
            <p>Surprisingly, 90-95% of the body's serotonin (the "feel good" neurotransmitter) is produced in the gut, not the brain. This highlights the critical link between diet and mental health.</p>
        `,
        references: [
            "Cryan, J. F., & Dinan, T. G. (2012). Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour. Nature Reviews Neuroscience.",
            "Appleton, J. (2018). The Gut-Brain Axis: Influence of Microbiota on Mood and Mental Health. Integrative Medicine."
        ]
    },
    {
        id: 'fodmaps-explained',
        title: "FODMAPs Explained: Navigating IBS",
        instructor: "Emily Torres-Medaglia RDN",
        duration: "60 min",
        level: "Advanced",
        thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg4,
        videoUrl: "https://youtu.be/KzEOG2L9Md4",
        summary: "A roadmap to the Low-FODMAP diet for managing Irritable Bowel Syndrome.",
        content: `
            <h3>What are FODMAPs?</h3>
            <p>FODMAP stands for Fermentable Oligosaccharides, Disaccharides, Monosaccharides, and Polyols. These are short-chain carbohydrates that are poorly absorbed in the small intestine.</p>

            <h3>The Elimination Phase</h3>
            <p>The gold standard for IBS treatment is a 2-6 week elimination of high-FODMAP foods (like onions, garlic, wheat), followed by a structured reintroduction to identify triggers.</p>
        `,
        references: [
            "Gibson, P. R., & Shepherd, S. J. (2010). Evidence-based dietary management of functional gastrointestinal symptoms: The FODMAP approach. Journal of Gastroenterology and Hepatology.",
            "Monash University FODMAP Research."
        ]
    },
    {
        id: 'prebiotics-probiotics',
        title: "Prebiotics vs Probiotics: What You Need",
        instructor: "Sarah Jones, RD",
        duration: "35 min",
        level: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1563865436874-9aef32095fad?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg1,
        videoUrl: "https://www.youtube.com/embed/O3E8e1oP9V4",
        summary: "Don't waste money on supplements until you understand the difference.",
        content: `
            <h3>Probiotics</h3>
            <p>Live beneficial bacteria found in fermented foods (yogurt, kefir, sauerkraut) or supplements. They add temporary troops to your gut army.</p>

            <h3>Prebiotics</h3>
            <p>The <em>food</em> for the bacteria. These are non-digestible fibers found in garlic, onions, asparagus, and bananas. You cannot sustain a healthy microbiome without prebiotics.</p>
        `,
        references: [
            "Hill, C., et al. (2014). Expert consensus document: The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. Nature Reviews Gastroenterology & Hepatology.",
            "Gibson, G. R., et al. (2017). Expert consensus document: The International Scientific Association for Probiotics and Prebiotics (ISAPP) consensus statement on the definition and scope of prebiotics. Nature Reviews Gastroenterology & Hepatology."
        ]
    },
    {
        id: 'anti-inflammatory-eating',
        title: "Anti-Inflammatory Eating for Gut Health",
        instructor: "Emily Torres-Medaglia RDN",
        duration: "40 min",
        level: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg2,
        videoUrl: "https://www.youtube.com/embed/eI7wW4lDw3U",
        summary: "Reduce systemic inflammation with the power of Omega-3s and antioxidants.",
        content: `
            <h3>The Mediterranean Model</h3>
            <p>The Mediterranean diet is the most researched anti-inflammatory eating pattern. It emphasizes healthy fats (olive oil), fatty fish, and colorful vegetables.</p>

            <h3>Foods to Limit</h3>
            <p>Processed meats, refined sugars, and trans fats are potent triggers of inflammatory cytokines like CRP (C-Reactive Protein).</p>
        `,
        references: [
            "Calder, P. C. (2017). Omega-3 fatty acids and inflammatory processes: from molecules to man. Biochemical Society Transactions.",
            "Shivappa, N., et al. (2014). Designing and developing a literature-derived, population-based dietary inflammatory index. Public Health Nutrition."
        ]
    },
    {
        id: 'fiber-fueled',
        title: "The Role of Fiber: Soluble vs Insoluble",
        instructor: "Dr. Will B.",
        duration: "55 min",
        level: "Intermediate",
        thumbnail: fiberImg,
        videoPoster: moduleBg3,
        videoUrl: "https://www.youtube.com/embed/pZzXwLw5l4Q",
        summary: "Fiber is the single most important nutrient for gut health. Are you getting enough?",
        content: `
            <h3>Soluble Fiber</h3>
            <p>Dissolves in water to form a gel. Helps lower cholesterol and glucose levels. Found in oats, peas, beans, apples, citrus fruits.</p>

            <h3>Insoluble Fiber</h3>
            <p>Promotes the movement of material through your digestive system and increases stool bulk. Found in whole-wheat flour, wheat bran, nuts, beans and vegetables.</p>
        `,
        references: [
            "Anderson, J. W., et al. (2009). Health benefits of dietary fiber. Nutrition Reviews.",
            "Dahl, W. J., & Stewart, M. L. (2015). Position of the Academy of Nutrition and Dietetics: Health Implications of Dietary Fiber. Journal of the Academy of Nutrition and Dietetics."
        ]
    },
    {
        id: 'hydration-digestion',
        title: "Hydration and Digestion",
        instructor: "Sarah Jones, RD",
        duration: "20 min",
        level: "Beginner",
        thumbnail: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg4,
        videoUrl: "https://www.youtube.com/embed/sS_H6_I0gkE",
        summary: "Why water is the unsung hero of motility and absorption.",
        content: `
            <h3>Motility</h3>
            <p>Water is essential for peristalsis, the wave-like muscle contractions that move food through the digestive tract. Dehydration is a leading cause of chronic constipation.</p>

            <h3>Mucosal Lining</h3>
            <p>The stomach and intestines are lined with mucus to protect against acid and enzymes. This mucus is 98% water.</p>
        `,
        references: [
            "Popkin, B. M., D'Anci, K. E., & Rosenberg, I. H. (2010). Water, hydration, and health. Nutrition Reviews.",
            "Arnaud, M. J. (2003). Mild dehydration: a risk factor of constipation? European Journal of Clinical Nutrition."
        ]
    },
    {
        id: 'sleep-stress-microbiome',
        title: "Sleep, Stress, and the Microbiome",
        instructor: "Dr. Walker",
        duration: "45 min",
        level: "Intermediate",
        thumbnail: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=800&auto=format&fit=crop",
        videoPoster: moduleBg1,
        videoUrl: "https://www.youtube.com/embed/gedoSfZvBgE",
        summary: "Your gut bacteria have a circadian rhythm too. Learn how to sync them.",
        content: `
            <h3>Circadian Rhythms</h3>
            <p>Just like you, your gut bacteria have a sleep-wake cycle. Erratic sleep patterns or late-night eating can disrupt microbial abundance and function (dysbiosis).</p>

            <h3>Cortisol Connection</h3>
            <p>High levels of the stress hormone cortisol can increase intestinal permeability, leading to inflammation.</p>
        `,
        references: [
            "Voigt, R. M., et al. (2014). Circadian disorganization alters intestinal microbiota. PLoS One.",
            "Li, Y., et al. (2018). The role of the circadian clock system in nutrition and metabolism. Progress in Lipid Research."
        ]
    },
    {
        id: 'fermentation-workshop',
        title: "Fermented Foods Workshop",
        instructor: "Emily Torres-Medaglia RDN",
        duration: "90 min",
        level: "Advanced",
        thumbnail: fermentedImg,
        videoPoster: moduleBg2,
        videoUrl: "https://www.youtube.com/embed/EEjcCKgX5M4",
        summary: "A practical guide to making your own sauerkraut, kimchi, and kefir at home.",
        content: `
            <h3>Lacto-Fermentation</h3>
            <p>The process where Lactobacillus bacteria convert sugars into lactic acid, which preserves the food and creates beneficial enzymes, b-vitamins, and probiotics.</p>

            <h3>Safety First</h3>
            <p>Learn the golden rules of fermentation: proper salinity, anaerobic environment (submersion), and temperature control.</p>
        `,
        references: [
            "Marco, M. L., et al. (2017). Health benefits of fermented foods: microbiota and beyond. Current Opinion in Biotechnology.",
            "Dimidi, E., et al. (2019). Fermented Foods: Definitions and Characteristics, Impact on the Gut Microbiota and Effects on Gastrointestinal Health and Disease. Nutrients."
        ]
    }
];
