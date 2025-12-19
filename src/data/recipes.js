import smoothieImg from '../assets/recipes/smoothie.png';
import juiceImg from '../assets/recipes/juice.png';
import bowlImg from '../assets/recipes/bowl.png';
import bitesImg from '../assets/recipes/bites.png';
import waterImg from '../assets/recipes/water.png';
// Specific Assets
import redDrinkImg from '../assets/recipes/red_drink.png';
import greenJuiceImg from '../assets/recipes/green_juice.png';
import brownDrinkImg from '../assets/recipes/brown_smoothie.png';
import yellowDrinkImg from '../assets/recipes/yellow_drink.png';
import brothImg from '../assets/recipes/broth_soup.png';
// Newest Specific Assets
import oatsImg from '../assets/recipes/overnight_oats.png';
import quinoaImg from '../assets/recipes/quinoa_salad.png';
import macaImg from '../assets/recipes/maca_smoothie.png';

export const recipes = [
    // DETOX
    {
        id: 'd1',
        title: "Glowing Green Detox",
        category: "Detox",
        image: smoothieImg, // Green Smoothie
        calories: 180,
        protein: "4g",
        prepTime: "5 min",
        description: "A powerhouse of vitamins to kickstart your metabolism and clear your skin.",
        ingredients: [
            "1 cup spinach (fresh)",
            "1/2 cucumber",
            "1 green apple (cored)",
            "1/2 lemon (juiced)",
            "1 cup coconut water",
            "1 inch ginger root"
        ],
        instructions: [
            "Wash all produce thoroughly.",
            "Chop cucumber, apple, and ginger into chunks.",
            "Blend with coconut water until smooth."
        ]
    },
    {
        id: 'd2',
        title: "Beet & Ginger Cleanse",
        category: "Detox",
        image: redDrinkImg, // Red/Purple
        calories: 140,
        protein: "3g",
        prepTime: "10 min",
        description: "Supports liver function and blood flow with nitric oxide rich beets.",
        ingredients: [
            "1 medium beetroot (peeled)",
            "2 carrots",
            "1 inch ginger",
            "1/2 lemon",
            "1 cup water"
        ],
        instructions: [
            "Chop beet and carrots into small pieces.",
            "Blend with water and ginger on high.",
            "Strain through a nut milk bag if you prefer juice, or drink as smoothie for fiber."
        ]
    },
    {
        id: 'd3',
        title: "Cirton Celery Zinger",
        category: "Detox",
        image: greenJuiceImg, // Clear Green
        calories: 80,
        protein: "1g",
        prepTime: "5 min",
        description: "Low sugar, high mineral alkalizing juice.",
        ingredients: [
            "4 stalks celery",
            "1/2 cucumber",
            "1/2 lemon",
            "Handful parsley"
        ],
        instructions: [
            "Juice all ingredients.",
            "Drink immediately on an empty stomach."
        ]
    },
    {
        id: 'd4',
        title: "Spicy Lemon Aid",
        category: "Detox",
        image: yellowDrinkImg, // Yellow/Clear
        calories: 15,
        protein: "0g",
        prepTime: "2 min",
        description: "Metabolism boosting morning starter.",
        ingredients: [
            "1 cup warm water",
            "1/2 lemon juice",
            "Pinch cayenne pepper",
            "1 tsp raw honey (optional)"
        ],
        instructions: [
            "Stir all ingredients into warm water.",
            "Sip slowly first thing in the morning."
        ]
    },
    {
        id: 'd5',
        title: "Dandelion Root Latte",
        category: "Detox",
        image: brownDrinkImg, // Coffee-like
        calories: 45,
        protein: "1g",
        prepTime: "5 min",
        description: "Coffee alternative that supports liver detoxification.",
        ingredients: [
            "1 bag dandelion root tea",
            "1 cup hot water",
            "1/4 cup almond milk",
            "Stevia to taste"
        ],
        instructions: [
            "Steep tea for 5 minutes.",
            "Froth almond milk and pour over tea."
        ]
    },
    {
        id: 'd6',
        title: "Charcoal Lemonade",
        category: "Detox",
        image: waterImg, // Fallback
        calories: 30,
        protein: "0g",
        prepTime: "5 min",
        description: "Binds to toxins in the gut (do not take with medication).",
        ingredients: [
            "1 capsule activated charcoal (opened)",
            "1 lemon (juiced)",
            "1 cup water",
            "1 tsp maple syrup"
        ],
        instructions: [
            "Mix charcoal powder with lemon juice vigorously.",
            "Add water and sweetener.",
            "Drink away from meals."
        ]
    },
    {
        id: 'd7',
        title: "Kale & Pineapple Smoothie",
        category: "Detox",
        image: smoothieImg, // Green Smoothie
        calories: 190,
        protein: "3g",
        prepTime: "5 min",
        description: "Bromelain from pineapple aids protein digestion.",
        ingredients: [
            "1 cup kale (stems removed)",
            "1/2 cup frozen pineapple",
            "1/2 banana",
            "1 cup water"
        ],
        instructions: [
            "Blend kale and water first.",
            "Add fruit and blend until creamy."
        ]
    },
    {
        id: 'd8',
        title: "Cucumber Mint Cooler",
        category: "Detox",
        image: greenJuiceImg, // Clear Green
        calories: 60,
        protein: "1g",
        prepTime: "5 min",
        description: "Cooling and hydrating for improved kidney function.",
        ingredients: [
            "1 cucumber",
            "10 mint leaves",
            "1 lime",
            "Pinch Himalayan salt"
        ],
        instructions: [
            "Blend all ingredients with ice.",
            "Garnish with a fresh mint spring."
        ]
    },
    {
        id: 'd9',
        title: "Parsley & Pear Juice",
        category: "Detox",
        image: greenJuiceImg, // Clear Green
        calories: 120,
        protein: "2g",
        prepTime: "8 min",
        description: "Parsley is a natural diuretic to reduce water retention.",
        ingredients: [
            "1 bunch parsley",
            "2 ripe pears",
            "1/2 cucumber"
        ],
        instructions: [
            "Wash ingredients well.",
            "Run through juicer.",
            "Drink immediately"
        ]
    },
    {
        id: 'd10',
        title: "Turmeric Ginger Tonic",
        category: "Detox",
        image: yellowDrinkImg, // Yellow/Orange
        calories: 25,
        protein: "0g",
        prepTime: "5 min",
        description: "Anti-inflammatory shot to reset the system.",
        ingredients: [
            "1 inch fresh turmeric",
            "1 inch ginger",
            "Pinch black pepper",
            "1 orange (juiced)"
        ],
        instructions: [
            "Grate turmeric and ginger.",
            "Squeeze in orange juice and add pepper.",
            "Strain or drink with pulp."
        ]
    },

    // ENERGY
    {
        id: 'e1',
        title: "Berry Antioxidant Blast",
        category: "Energy",
        image: redDrinkImg, // Red/Purple
        calories: 240,
        protein: "8g",
        prepTime: "3 min",
        description: "Loaded with antioxidants to fight inflammation and boost brain function.",
        ingredients: [
            "1 cup mixed frozen berries",
            "1/2 banana",
            "1 cup almond milk",
            "1 tbsp chia seeds"
        ],
        instructions: [
            "Add all ingredients to blender.",
            "Blend until smooth."
        ]
    },
    {
        id: 'e2',
        title: "Matcha Power Bowl",
        category: "Energy",
        image: bowlImg,
        calories: 320,
        protein: "12g",
        prepTime: "10 min",
        description: "Sustained caffeine release without the jitters.",
        ingredients: [
            "1 tsp matcha powder",
            "1 frozen banana",
            "1/2 avocado",
            "1 cup spinach",
            "Toppings: Granola, berries"
        ],
        instructions: [
            "Blend matcha, banana, avocado, and spinach.",
            "Pour into bowl.",
            "Top with granola and fresh fruit."
        ]
    },
    {
        id: 'e3',
        title: "Cacao Banana Smoothie",
        category: "Energy",
        image: brownDrinkImg, // Chocolate
        calories: 350,
        protein: "10g",
        prepTime: "5 min",
        description: "Natural energy booster perfect for chocolate lovers.",
        ingredients: [
            "2 tbsp raw cacao powder",
            "1 frozen banana",
            "1 tbsp almond butter",
            "1 cup oat milk"
        ],
        instructions: [
            "Blend everything until rich and creamy.",
            "Add ice for thickness."
        ]
    },
    {
        id: 'e4',
        title: "Overnight Oats with Chia",
        category: "Energy",
        image: oatsImg, // SPECIFIC
        calories: 300,
        protein: "10g",
        prepTime: "5 min",
        description: "Slow-digesting carbs for long-lasting energy.",
        ingredients: [
            "1/2 cup rolled oats",
            "1 tbsp chia seeds",
            "3/4 cup milk of choice",
            "1 tsp maple syrup"
        ],
        instructions: [
            "Mix ingredients in a jar.",
            "Refrigerate overnight (minimum 4 hours).",
            "Top with fresh fruit in the morning."
        ]
    },
    {
        id: 'e5',
        title: "Almond Butter Energy Balls",
        category: "Energy",
        image: bitesImg, // Bites
        calories: 120,
        protein: "4g",
        prepTime: "15 min",
        description: "Perfect portable snack for an afternoon pick-me-up.",
        ingredients: [
            "1 cup oats",
            "1/2 cup almond butter",
            "1/3 cup honey",
            "1/2 cup dark chocolate chips"
        ],
        instructions: [
            "Mix all ingredients in a bowl.",
            "Roll into small balls.",
            "Refrigerate for 20 minutes to set."
        ]
    },
    {
        id: 'e6',
        title: "Spinach & Avocado Fuel",
        category: "Energy",
        image: smoothieImg, // Green Smoothie (Best match)
        calories: 280,
        protein: "5g",
        prepTime: "5 min",
        description: "Healthy fats to power your brain.",
        ingredients: [
            "1 cup spinach",
            "1/2 avocado",
            "1/2 green apple",
            "1 cup coconut water"
        ],
        instructions: [
            "Blend all ingredients on high.",
            "Serve immediately."
        ]
    },
    {
        id: 'e7',
        title: "Quinoa Power Salad",
        category: "Energy",
        image: quinoaImg, // SPECIFIC
        calories: 450,
        protein: "14g",
        prepTime: "20 min",
        description: "Complete protein lunch for endurance.",
        ingredients: [
            "1 cup cooked quinoa",
            "1/2 cup chickpeas",
            "Cucumber, cherry tomatoes",
            "Lemon vinaigrette"
        ],
        instructions: [
            "Toss cooked quinoa with veggies and chickpeas.",
            "Drizzle with dressing."
        ]
    },
    {
        id: 'e8',
        title: "Sweet Potato & Black Bean Bowl",
        category: "Energy",
        image: bowlImg, // Bowl (Best Match)
        calories: 400,
        protein: "12g",
        prepTime: "25 min",
        description: "Complex carbs to keep blood sugar stable.",
        ingredients: [
            "1 roasted sweet potato",
            "1/2 cup black beans",
            "Salsa",
            "Cilantro"
        ],
        instructions: [
            "Roast sweet potato cubes at 400F for 20 mins.",
            "Combine with warm beans and salsa."
        ]
    },
    {
        id: 'e9',
        title: "Espresso Protein Shake",
        category: "Energy",
        image: brownDrinkImg, // Coffee
        calories: 220,
        protein: "20g",
        prepTime: "3 min",
        description: "Pre-workout boost.",
        ingredients: [
            "1 shot cooled espresso",
            "1 scoop vanilla protein",
            "1 cup almond milk",
            "Ice"
        ],
        instructions: [
            "Shake or blend all ingredients."
        ]
    },
    {
        id: 'e10',
        title: "Maca Root Boost Smoothie",
        category: "Energy",
        image: macaImg, // SPECIFIC
        calories: 250,
        protein: "6g",
        prepTime: "5 min",
        description: "Maca is an adaptogen known for increasing stamina.",
        ingredients: [
            "1 tsp maca powder",
            "1 banana",
            "1 tbsp vanilla",
            "1 cup cashew milk"
        ],
        instructions: [
            "Blend until smooth and frothy."
        ]
    },

    // DIGESTION
    {
        id: 'g1',
        title: "Golden Gut Healer",
        category: "Digestion",
        image: yellowDrinkImg, // Yellow
        calories: 210,
        protein: "6g",
        prepTime: "5 min",
        description: "Soothing anti-inflammatory smoothie.",
        ingredients: [
            "1/2 cup mango",
            "1/2 tsp turmeric",
            "Pinch pepper",
            "1 cup oat milk"
        ],
        instructions: [
            "Blend mango, turmeric, pepper and milk."
        ]
    },
    {
        id: 'g2',
        title: "Bone Broth Elixir",
        category: "Digestion",
        image: brothImg, // Soup/Broth
        calories: 50,
        protein: "10g",
        prepTime: "5 min",
        description: "Collagen and amino acids to repair gut lining.",
        ingredients: [
            "1 cup beef or chicken bone broth",
            "1/2 tsp ginger powder",
            "Pinch sea salt"
        ],
        instructions: [
            "Heat broth on stove.",
            "Stir in spices.",
            "Sip warm."
        ]
    },
    {
        id: 'g3',
        title: "Ginger Miso Soup",
        category: "Digestion",
        image: brothImg, // Soup
        calories: 80,
        protein: "4g",
        prepTime: "10 min",
        description: "Fermented miso provides probiotics.",
        ingredients: [
            "1 tbsp miso paste",
            "1 cup hot water (not boiling)",
            "Green onions",
            "Tofu cubes"
        ],
        instructions: [
            "Dissolve miso in warm water.",
            "Add tofu and green onions.",
            "Do not boil or probiotics will die."
        ]
    },
    {
        id: 'g4',
        title: "Fennel & Mint Tea",
        category: "Digestion",
        image: greenJuiceImg, // Clear/Greenish Drink
        calories: 5,
        protein: "0g",
        prepTime: "5 min",
        description: "Reduces bloating and gas effectively.",
        ingredients: [
            "1 tsp fennel seeds",
            "Fresh mint leaves",
            "Hot water"
        ],
        instructions: [
            "Crush fennel seeds slightly to release oils.",
            "Steep with mint in hot water for 10 mins."
        ]
    },
    {
        id: 'g5',
        title: "Steamed Sweet Potato Mash",
        category: "Digestion",
        image: bowlImg, // Bowl
        calories: 180,
        protein: "2g",
        prepTime: "15 min",
        description: "Easy to digest soluble fiber.",
        ingredients: [
            "1 sweet potato",
            "Cinnamon",
            "1 tsp coconut oil"
        ],
        instructions: [
            "Steam sweet potato until very soft.",
            "Mash with cinnamon and oil."
        ]
    },
    {
        id: 'g6',
        title: "Papaya Lime Bowl",
        category: "Digestion",
        image: bowlImg, // Bowl
        calories: 120,
        protein: "1g",
        prepTime: "5 min",
        description: "Papaya contains papain, an enzyme that helps break down protein.",
        ingredients: [
            "1/2 ripe papaya",
            "1/2 lime juice"
        ],
        instructions: [
            "Scoop seeds out of papaya.",
            "Squeeze fresh lime juice over fruit.",
            "Eat with spoon."
        ]
    },
    {
        id: 'g7',
        title: "Warm Apple Sauce",
        category: "Digestion",
        image: bowlImg, // Bowl
        calories: 90,
        protein: "0g",
        prepTime: "15 min",
        description: "Stewing apples makes pectin more accessible for the microbiome.",
        ingredients: [
            "2 apples (peeled, chopped)",
            "1/4 cup water",
            "1 tsp cinnamon"
        ],
        instructions: [
            "Simmer apples in water until soft.",
            "Mash with fork and add cinnamon."
        ]
    },
    {
        id: 'g8',
        title: "Kefir Berry Smoothie",
        category: "Digestion",
        image: redDrinkImg, // Red/Pink
        calories: 160,
        protein: "9g",
        prepTime: "2 min",
        description: "Potent probiotic drink.",
        ingredients: [
            "1 cup kefir (plain)",
            "1/2 cup strawberries"
        ],
        instructions: [
            "Blend kefir and berries.",
            "Sweeten with drop of honey if needed."
        ]
    },
    {
        id: 'g9',
        title: "Probiotic Sauerkraut Salad",
        category: "Digestion",
        image: bowlImg, // Bowl
        calories: 45,
        protein: "1g",
        prepTime: "2 min",
        description: "Live raw fermentation.",
        ingredients: [
            "1/2 cup raw sauerkraut",
            "Drizzle olive oil"
        ],
        instructions: [
            "Serve sauerkraut as a side dish to aid digestion of main meal."
        ]
    },
    {
        id: 'g10',
        title: "Aloe Vera Splash",
        category: "Digestion",
        image: waterImg, // Clear
        calories: 50,
        protein: "0g",
        prepTime: "5 min",
        description: "Soothes irritated gut lining.",
        ingredients: [
            "2 tbsp aloe vera juice",
            "1 cup water",
            "Splash of lemon"
        ],
        instructions: [
            "Mix aloe juice into water.",
            "Drink on empty stomach."
        ]
    },

    // HYDRATION
    {
        id: 'h1',
        title: "Tropical Hydration",
        category: "Hydration",
        image: redDrinkImg, // Watermelon is red
        calories: 160,
        protein: "2g",
        prepTime: "3 min",
        description: "High in potassium and electrolytes.",
        ingredients: [
            "1 cup watermelon",
            "1/2 cup pineapple",
            "Mint",
            "Water"
        ],
        instructions: [
            "Blend fruit and water.",
            "Stir in mint."
        ]
    },
    {
        id: 'h2',
        title: "Coconut Berry Pops",
        category: "Hydration",
        image: redDrinkImg, // Berry Pops - Red is closest
        calories: 60,
        protein: "0g",
        prepTime: "4 hr",
        description: "Frozen electrolytes.",
        ingredients: [
            "Coconut water",
            "Sliced strawberries"
        ],
        instructions: [
            "Place berries in popsicle mould.",
            "Fill with coconut water.",
            "Freeze 4+ hours."
        ]
    },
    {
        id: 'h3',
        title: "Cucumber Lime Agua Fresca",
        category: "Hydration",
        image: greenJuiceImg, // Clear Greenish
        calories: 90,
        protein: "1g",
        prepTime: "10 min",
        description: "Traditional Mexican cooling drink.",
        ingredients: [
            "1 cucumber",
            "2 cups water",
            "2 limes (juiced)",
            "1 tbsp agave"
        ],
        instructions: [
            "Blend cucumber and water.",
            "Strain pulp.",
            "Mix with lime and agave."
        ]
    },
    {
        id: 'h4',
        title: "Watermelon Basil Salad",
        category: "Hydration",
        image: redDrinkImg, // Using Red Drink as proxy for Watermelon visual
        calories: 140,
        protein: "2g",
        prepTime: "10 min",
        description: "Eat your water - watermelon is 92% water.",
        ingredients: [
            "2 cups watermelon cubes",
            "Fresh basil leaves",
            "Balsamic glaze (optional)"
        ],
        instructions: [
            "Toss watermelon with basil.",
            "Drizzle glaze just before serving."
        ]
    },
    {
        id: 'h5',
        title: "Chia Seed Water (Iskiate)",
        category: "Hydration",
        image: waterImg, // Water
        calories: 70,
        protein: "3g",
        prepTime: "15 min",
        description: "Ancient runner's drink for endurance hydration.",
        ingredients: [
            "1 tbsp chia seeds",
            "1 cup water",
            "Lime juice"
        ],
        instructions: [
            "Mix chia in water.",
            "Let sit 15-20 mins until gel forms.",
            "Add lime."
        ]
    },
    {
        id: 'h6',
        title: "Hibiscus Iced Tea",
        category: "Hydration",
        image: redDrinkImg, // Vivid Red
        calories: 10,
        protein: "0g",
        prepTime: "2 hr",
        description: "Rich in Vitamin C and deeply hydrating.",
        ingredients: [
            "2 hibiscus tea bags",
            "3 cups cold water",
            "Orange slices"
        ],
        instructions: [
            "Cold brew tea bags in water in fridge for 2 hours.",
            "Serve over ice with orange."
        ]
    },
    {
        id: 'h7',
        title: "Cantaloupe Slushie",
        category: "Hydration",
        image: juiceImg, // Orange (Cantaloupe)
        calories: 80,
        protein: "1g",
        prepTime: "5 min",
        description: "Melon provides essential salts for hydration.",
        ingredients: [
            "2 cups frozen cantaloupe",
            "Splash of water"
        ],
        instructions: [
            "Blend frozen melon until slushy.",
            "Eat with spoon."
        ]
    },
    {
        id: 'h8',
        title: "Strawberry Basil Water",
        category: "Hydration",
        image: waterImg, // Water
        calories: 5,
        protein: "0g",
        prepTime: "1 min",
        description: "Flavor infused water makes drinking easier.",
        ingredients: [
            "3 strawberries (sliced)",
            "3 basil leaves",
            "1 liter water"
        ],
        instructions: [
            "Add ingredients to water bottle.",
            "Let infuse for 1 hour."
        ]
    },
    {
        id: 'h9',
        title: "Zucchini Lemon Noodles",
        category: "Hydration",
        image: bowlImg, // Green Bowl
        calories: 60,
        protein: "2g",
        prepTime: "10 min",
        description: "Zucchini has extremely high water content.",
        ingredients: [
            "1 zucchini (spiralized)",
            "Lemon juice",
            "Olive oil"
        ],
        instructions: [
            "Toss raw zoodles with dressing.",
            "Eat fresh."
        ]
    },
    {
        id: 'h10',
        title: "Peach & Mint Sparkler",
        category: "Hydration",
        image: waterImg, // Refreshing
        calories: 45,
        protein: "0g",
        prepTime: "2 min",
        description: "Bubbly and refreshing.",
        ingredients: [
            "1/2 peach (sliced)",
            "Sparkling water",
            "Mint"
        ],
        instructions: [
            "Muddle peach slices.",
            "Top with ice and sparkling water."
        ]
    }
];
