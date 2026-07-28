import product1 from "../assets/Product1.png";
import product1_1 from "../assets/Product1_1.png";
import product2 from "../assets/Product2.png";
import product2_1 from "../assets/Product2_1.png";
import product3 from "../assets/Product3.png";
import product3_1 from "../assets/Product3_1.png";

const productData = [
  {
    id: 1,

    name: "Prakruti Veda Herbal Shampoo",

    image: product1,

    images: [
      product1,
      product1_1
    ],

    price: "₹399",
    originalPrice: "₹599",

    deal: "Limited Time Deal",

    shortDescription:
      "Nature's Care for Strong & Shiny Hair",

    description:
      "A natural herbal shampoo enriched with Amla, Reetha, Shikakai, Rosemary, Aloe Vera, Hibiscus and Bhringraj for healthy, shiny and stronger hair.",

    detailDescription: [
      "Prakruti Veda Herbal Shampoo is a natural blend of Amla, Reetha, Shikakai, Bhringraj, Rosemary, Aloe Vera, Hibiscus and Rose Petals.",
      "It gently cleanses the scalp while nourishing the roots and reducing hair fall.",
      "Regular use promotes natural shine, softness and healthy hair growth without harsh chemicals."
    ],

    benefits: [
      "Strengthens hair from root to tip",
      "Helps reduce hair fall",
      "Controls dandruff",
      "Promotes natural hair growth",
      "Adds shine and softness"
    ],

    ingredients: [
      "Amla",
      "Reetha",
      "Shikakai",
      "Bhringraj",
      "Rosemary",
      "Aloe Vera",
      "Hibiscus",
      "Rose Petals",
      "Natural Herbal Extracts"
    ],

    howToUse: [
      "Apply adequate shampoo to wet hair.",
      "Massage gently into the scalp until it lathers.",
      "Rinse thoroughly with water.",
      "Use 2–3 times a week for best results."
    ],

    reviews: [
      {
        name: "Rahul",
        rating: 5,
        comment: "Hair feels smoother after every wash."
      },
      {
        name: "Priya",
        rating: 5,
        comment: "Natural fragrance and excellent quality."
      }
    ]
  },
  {
    id: 2,

    name: "Prakruti Veda Kesh Prakruti Hair Oil",

    image: product2,

    images: [
      product2,
      product2_1
    ],

    price: "₹799",
    originalPrice: "₹999",

    deal: "Limited Time Deal",

    shortDescription:
      "Hairfall Control & Hair Growth Oil",

    description:
      "Handmade natural hair oil enriched with 27 Ayurvedic herbs to reduce hair fall and nourish the scalp.",

    detailDescription: [
      "Prakruti Veda Kesh Prakruti Hair Oil is a traditional Ayurvedic formulation prepared with 27 carefully selected herbs and nourishing oils using time-honoured Ayurvedic methods.",
      "It helps nourish the scalp, strengthen the hair from the roots, and supports healthy-looking, thicker and shinier hair with regular use.",
      "Its herbal composition deeply conditions the scalp while improving the overall appearance and softness of the hair."
    ],

    benefits: [
      "Made with 27 carefully selected Ayurvedic herbs",
      "Helps nourish the scalp and hair roots",
      "Supports stronger and healthier-looking hair",
      "Helps reduce hair breakage caused by dryness",
      "Promotes soft, smooth and naturally shiny hair",
      "Suitable for both men and women"
    ],

    ingredients: [
      "Amla",
      "Shikakai",
      "Tulsi",
      "Neem",
      "Brahmi",
      "Bhringraj",
      "Ashwagandha",
      "Rosemary",
      "Jatamansi",
      "Nagarmotha",
      "Black Sesame",
      "Vetiver",
      "Hibiscus",
      "Curry Leaves",
      "Manjistha",
      "and other Ayurvedic Herbs"
    ],

    howToUse: [
      "Take a sufficient quantity of oil.",
      "Massage gently into the scalp using your fingertips for 5–10 minutes.",
      "Apply through the lengths of the hair.",
      "Leave it on for 2–3 hours or overnight.",
      "Wash with a mild shampoo.",
      "Use 2–3 times a week."
    ],

    reviews: [
      {
        name: "Amit",
        rating: 5,
        comment: "Visible reduction in hair fall."
      },
      {
        name: "Rohan",
        rating: 5,
        comment: "Very nourishing oil."
      }
    ]
  },
  {
    id: 3,

    name: "Prakruti Veda Swarnkanti Kumkumadi Face Oil",

    image: product3,

    images: [
      product3,
      product3_1
    ],

    price: "₹299",
    originalPrice: "₹449",

    deal: "Limited Time Deal",

    shortDescription:
      "Made with 27 Vital Herbs & Pure Saffron",

    description:
      "Premium Kumkumadi Face Oil enriched with Pure Saffron, Goat Milk and Ayurvedic herbs for naturally glowing skin.",

    detailDescription: [
      "Prakruti Veda Swarnakanti Kumkumadi Face Oil is a premium Ayurvedic facial oil prepared using approximately 25 carefully selected Ayurvedic herbs.",
      "Enriched with Kashmiri Saffron, Manjistha, Licorice, Vetiver, Lodhra, Sandalwood and other traditional botanicals.",
      "It helps nourish the skin, improve softness and supports a naturally radiant and healthy-looking complexion with regular use."
    ],

    benefits: [
      "Made with approximately 25 Ayurvedic herbs",
      "Helps nourish and moisturize the skin",
      "Supports soft and smooth skin",
      "Promotes a naturally radiant complexion",
      "Suitable for daily skincare",
      "Suitable for all skin types"
    ],

    ingredients: [
      "Saffron",
      "Dashmoola",
      "Kamal Kesar",
      "Manjistha",
      "Mulethi",
      "Rakt Chandan",
      "Sandalwood",
      "Lotus",
      "Rose Petals",
      "Orange Peel",
      "Vetiver",
      "Vacha",
      "Lodhra",
      "Other Ayurvedic Herbs"
    ],

    howToUse: [
      "Cleanse your face thoroughly.",
      "Apply 2–3 drops to the face and neck.",
      "Massage gently in upward circular motions for 2–3 minutes.",
      "Leave it on overnight.",
      "Use daily for best results."
    ],

    reviews: [
      {
        name: "Sneha",
        rating: 5,
        comment: "Skin feels soft and glowing."
      },
      {
        name: "Anjali",
        rating: 5,
        comment: "Very lightweight and effective."
      }
    ]
  }
];

export default productData;