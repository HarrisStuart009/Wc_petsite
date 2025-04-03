import { Product } from '@/components/ProductCard';

// Central product data repository
export const getAllProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: "Cozy Pet Bed",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1567317286029-77177d10c378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beds & Furniture",
      rating: 5,
      description: "Ultra-soft and comfortable bed for your furry friend. Made with premium memory foam and a water-resistant cover."
    },
    {
      id: 2,
      name: "Interactive Dog Toy",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Toys",
      rating: 4,
      description: "Keep your dog engaged and entertained for hours with this interactive puzzle toy. Stimulates mental activity and prevents boredom."
    },
    {
      id: 3,
      name: "Premium Cat Food",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Nutritious and delicious food for your feline friend. Made with real meat and essential nutrients."
    },
    {
      id: 4,
      name: "Adjustable Pet Collar",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
      rating: 4,
      description: "Comfortable and stylish collar for everyday use. Adjustable size and durable materials."
    },
    {
      id: 5,
      name: "Deluxe Dog Collar",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Dogs",
      rating: 4,
      description: "Premium dog collar made from durable materials, perfect for daily walks and training."
    },
    {
      id: 6,
      name: "Cat Scratcher Tower",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cats",
      rating: 5,
      description: "Multi-level cat tower with scratching posts, hideaways, and dangling toys to keep your cat entertained."
    },
    {
      id: 7,
      name: "Bird Cage Swing Toy",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1628863353691-0061c119fcad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Birds",
      rating: 3,
      description: "Colorful swing toy for bird cages that encourages exercise and prevents boredom."
    },
    {
      id: 8,
      name: "Hamster Exercise Wheel",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Small Pets",
      rating: 4,
      description: "Quiet running wheel for small rodents, providing essential exercise for your pet's health."
    },
    {
      id: 9,
      name: "Luxury Dog Bed",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Dogs",
      rating: 5,
      description: "Orthopedic memory foam bed for maximum comfort, perfect for dogs of all ages, especially seniors."
    },
    {
      id: 10,
      name: "Pet Grooming Kit",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Grooming",
      rating: 4,
      description: "Complete kit for keeping your pet clean and healthy."
    },
    {
      id: 11,
      name: "Automatic Pet Feeder",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Feeders",
      rating: 5,
      description: "Never miss a feeding time with this smart pet feeder."
    },
    {
      id: 12,
      name: "Bird Cage Accessory Set",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1520722917381-9b16e83e76d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Birds",
      rating: 4,
      description: "Fun and practical accessories for your bird's cage."
    },
    {
      id: 13,
      name: "Fish Tank Decorations",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Fish Supplies",
      rating: 4,
      description: "Vibrant decorations to make your fish tank come alive."
    },
    {
      id: 14,
      name: "Dog Chew Toy",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Dogs",
      rating: 4,
      description: "Durable chew toy that promotes dental health and provides hours of entertainment."
    },
    {
      id: 15,
      name: "Cat Teaser Wand",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cats",
      rating: 5,
      description: "Interactive teaser wand with feathers to entertain your feline friend."
    },
    {
      id: 16,
      name: "Rabbit Hutch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1560213113-d5a09a67f3af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Small Pets",
      rating: 4,
      description: "Spacious and comfortable hutch for rabbits with indoor and outdoor sections."
    },
    {
      id: 17,
      name: "Grain-Free Dog Food",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Premium grain-free formula with real meat as the first ingredient. Supports healthy digestion and overall wellness for adult dogs."
    },
    {
      id: 18,
      name: "Puppy Growth Formula",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1601758282760-b6b3354fbf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "Specially formulated for growing puppies with DHA for brain development and balanced nutrition for strong bones and muscles."
    },
    {
      id: 19,
      name: "Senior Dog Food",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1585846077669-4fe686eea3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Easy-to-digest formula for older dogs with glucosamine and chondroitin for joint health and reduced calories for weight management."
    },
    {
      id: 20,
      name: "Raw Diet Cat Food",
      price: 36.99,
      image: "https://images.unsplash.com/photo-1614115589969-7c4a3298802b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "Freeze-dried raw diet that mirrors what cats would eat in the wild. High protein, grain-free with added taurine for heart health."
    },
    {
      id: 21,
      name: "Kitten Growth Formula",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1590075865003-e48b56637fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Nutrient-rich formula specifically designed for kittens with higher protein and calories to support rapid growth and development."
    },
    {
      id: 22,
      name: "Indoor Cat Food",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1598935898639-81192d9ed503?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "Specially formulated for indoor cats with controlled calories, hairball management, and natural fiber for digestive health."
    },
    {
      id: 23,
      name: "Organic Bird Seed Mix",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1604605531027-0c0b4cf6a8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Premium organic seed blend for pet birds with a variety of seeds and dried fruits for optimal nutrition and taste."
    },
    {
      id: 24,
      name: "Small Animal Food Pellets",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1633556025278-f2cc9d78799f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "Complete nutrition for rabbits, guinea pigs and other small pets. Fortified with vitamins and minerals for overall health."
    },
    {
      id: 25,
      name: "Tropical Fish Flakes",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1584779849830-bcf783897993?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "Color-enhancing fish flakes with high-quality protein sources. Formulated to bring out vibrant colors in tropical fish."
    },
    {
      id: 26,
      name: "Dental Health Dog Treats",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1563635853332-925cc5e8bc2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "Chewy treats designed to reduce plaque and tartar buildup. Fresh mint flavor for better breath and improved dental hygiene."
    },
    {
      id: 27,
      name: "Freeze-Dried Cat Treats",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1619082593785-5c4ccd284a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 5,
      description: "100% pure protein treats with no fillers or artificial ingredients. Perfect for training or as a special reward."
    },
    {
      id: 28,
      name: "Nutritional Supplement Paste",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1606361659904-0a47ce2d2eda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
      rating: 4,
      description: "High-calorie nutritional supplement for pets recovering from illness or needing weight gain. Packed with vitamins and minerals."
    }
  ];
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return getAllProducts().slice(0, 4);
};

// Get new arrivals
export const getNewArrivals = (): Product[] => {
  return getAllProducts().slice(9, 13);
};

// Get dog products
export const getDogProducts = (): Product[] => {
  return getAllProducts().filter(product => 
    product.category === 'Dogs' || 
    product.name.toLowerCase().includes('dog') || 
    product.description.toLowerCase().includes('dog')
  ).slice(0, 4);
};

// Get cat products
export const getCatProducts = (): Product[] => {
  return getAllProducts().filter(product => 
    product.category === 'Cats' || 
    product.name.toLowerCase().includes('cat') || 
    product.description.toLowerCase().includes('cat')
  ).slice(0, 4);
};

// Get popular food items
export const getPopularFoodItems = (): Product[] => {
  return getAllProducts().filter(product => 
    product.category === 'Food' && product.rating >= 4
  ).slice(0, 4);
};

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return getAllProducts().filter(product => {
    if (category === 'dogs') {
      return product.category === 'Dogs';
    } else if (category === 'cats') {
      return product.category === 'Cats';
    } else if (category === 'birds') {
      return product.category === 'Birds';
    } else if (category === 'small-pets') {
      return product.category === 'Small Pets';
    } else if (category === 'new-arrivals') {
      return getNewArrivals().includes(product);
    } else if (category === 'food') {
      return product.category === 'Food';
    }
    return false;
  });
};

// Get product by ID
export const getProductById = (id: number): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

// Search products by query
export const searchProducts = (query: string): Product[] => {
  const lowerCaseQuery = query.toLowerCase();
  return getAllProducts().filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) ||
    product.description.toLowerCase().includes(lowerCaseQuery) ||
    product.category.toLowerCase().includes(lowerCaseQuery)
  );
};

export default getAllProducts; 