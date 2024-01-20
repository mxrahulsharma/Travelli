export interface LocationType {
  name: string;
  id: string;
  city?: string;
  state: string;
  description: string;
  AverageBudget: number;
  img?: string;
}

export const location: LocationType[] = [
  {
    name: "Taj Mahal",
    id: "tjm",
    city: "Agra",
    state: "Uttar Pradesh",
    description:
      "An iconic white marble mausoleum, a symbol of love and one of the Seven Wonders of the World.",
    AverageBudget: 45000,
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Red Fort",
    id: "rfr",
    city: "Delhi",
    state: "Delhi",
    description:
      "A massive red sandstone fort, a symbol of Mughal power and a UNESCO World Heritage Site.",
    AverageBudget: 60000,
    img: "https://images.unsplash.com/photo-1630839615215-8707e1443cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Golden Temple",
    id: "gld",
    city: "Amritsar",
    state: "Punjab",
    description:
      "The holiest shrine of the Sikh religion, known for its golden dome and serene atmosphere.",
    AverageBudget: 35000,
    img: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Amer Fort",
    id: "afr",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "A majestic hilltop fort with intricate architecture and stunning views.",
    AverageBudget: 26000,
    img: "https://images.unsplash.com/photo-1524309784716-6a4be8299c7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1lciUyMGZvcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Hawa Mahal",
    id: "hmh",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "A unique five-story palace with a honeycomb-like facade, known as the Palace of Winds.",
    AverageBudget: 30000,
    img: "https://images.unsplash.com/photo-1617516202907-ff75846e6667?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGF3YSUyMG1haGFsfGVufDB8fDB8fHww",
  },
  {
    name: "Goa",
    id: "goa",
    state: "Goa",
    description:
      "A state known for its beautiful beaches, vibrant nightlife, and laid-back atmosphere.",
    AverageBudget: 15000,
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R29hfGVufDB8fDB8fHww",
  },
  {
    name: "Kerala",
    id: "ker",
    state: "Kerala",
    description:
      "A state known as 'God's Own Country', famous for its backwaters, lush greenery, and Ayurveda.",
    AverageBudget: 40000,
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
  },
  {
    name: "Ladakh",
    id: "lad",
    state: "Ladakh",
    description:
      "A high-altitude desert region with stunning landscapes, Buddhist monasteries, and adventure activities.",
    AverageBudget: 50000,
    img: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkYWtofGVufDB8fDB8fHww",
  },
  {
    name: "Coorg",
    id: "cor",
    state: "Karnataka",
    description:
      "A hill station known as the 'Scotland of India', famous for its coffee plantations, waterfalls, and trekking trails.",
    AverageBudget: 32000,
    img: "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vcmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Manali",
    id: "man",
    state: "Himachal Pradesh",
    description:
      "A picturesque hill station in the Himalayas, popular for its snow-capped mountains, adventure sports, and honeymoons.",
    AverageBudget: 28000,
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuYWxpfGVufDB8fDB8fHww",
  },
  {
    name: "Varanasi",
    id: "var",
    state: "Uttar Pradesh",
    description:
      "The spiritual capital of India, known for its sacred Ganges River, ancient temples, and cremation ghats.",
    AverageBudget: 25000,
    img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Rajasthan",
    id: "raj",
    state: "Rajasthan",
    description:
      "A state known for its majestic forts, palaces, deserts, and colorful culture.",
    AverageBudget: 48000,
    img: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Udaipur",
    id: "udp",
    state: "Rajasthan",
    description:
      "A city known as the 'City of Lakes', famous for its romantic setting, beautiful palaces, and lakeside views.",
    AverageBudget: 36000,
    img: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Darjeeling",
    id: "drj",
    state: "West Bengal",
    description:
      "A hill station in the Himalayas, known for its tea plantations, scenic toy train, and views of Mount Kanchenjunga.",
    AverageBudget: 32000,
    img: "https://images.unsplash.com/photo-1626082895617-2c6de34f6af3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Shimla",
    id: "shm",
    state: "Himachal Pradesh",
    description:
      "The former summer capital of British India, known for its colonial architecture, scenic beauty, and pleasant climate.",
    AverageBudget: 29000,
    img: "https://images.unsplash.com/photo-1556438549-168b3e11c0a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpbWxhfGVufDB8fDB8fHww",
  },
  {
    name: "Nainital",
    id: "nin",
    state: "Uttarakhand",
    description:
      "A picturesque hill station in the Kumaon region, famous for its serene lake, surrounding hills, and adventure activities.",
    AverageBudget: 27000,
    img: "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmFpbml0YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Munnar",
    id: "mun",
    state: "Kerala",
    description:
      "A hill station in the Western Ghats, known for its rolling hills covered in tea plantations, waterfalls, and scenic beauty.",
    AverageBudget: 38000,
    img: "https://images.unsplash.com/photo-1616388969587-8196f32388b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVubmFyfGVufDB8fDB8fHww",
  },
  {
    name: "Kashmir",
    id: "kas",
    state: "Jammu and Kashmir",
    description: "A region known for its breathtaking natural beauty,",
    AverageBudget: 46000,
    img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Rishikesh",
    id: "rsk",
    state: "Uttarakhand",
    description:
      "A spiritual center and adventure hub known for yoga retreats, white-water rafting on the Ganges, and stunning Himalayan views.",
    AverageBudget: 31000,
    img: "https://images.unsplash.com/photo-1609769682973-990c3b6695dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Khajuraho",
    id: "kha",
    state: "Madhya Pradesh",
    description:
      "A UNESCO World Heritage Site famous for its ancient Hindu and Jain temples adorned with intricate carvings and sculptures.",
    AverageBudget: 24000,
    img: "https://images.unsplash.com/photo-1638645677644-f01017224e0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtoYWp1cmFob3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ajanta and Ellora Caves",
    id: "aec",
    state: "Maharashtra",
    description:
      "A UNESCO World Heritage Site featuring a complex of ancient Buddhist cave temples adorned with paintings and sculptures.",
    AverageBudget: 29000,
    img: "https://images.unsplash.com/photo-1631774933370-d596a344e851?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWphbnRhJTIwYW5kJTIwRWxsb3JhJTIwQ2F2ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Hampi",
    id: "hmp",
    state: "Karnataka",
    description:
      "A UNESCO World Heritage Site and former Vijayanagara Empire capital, known for its ruins of temples, palaces, and forts.",
    AverageBudget: 42000,
    img: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFtcGl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Sunderbans National Park",
    id: "snd",
    state: "West Bengal",
    description:
      "A UNESCO World Heritage Site and tiger reserve known for its mangrove forests, diverse wildlife, and iconic Bengal tigers.",
    AverageBudget: 34000,
    img: "https://images.unsplash.com/photo-1670421291781-4d54641ded9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bmRlcmJhbnMlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
  },
];
