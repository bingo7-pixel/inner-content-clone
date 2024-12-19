export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  bgColor: string;
  items: MenuItem[];
}

export interface MainCategory {
  id: string;
  name: string;
  bgColor: string;
  subCategories: SubCategory[];
}

export const menuData: MainCategory[] = [
  {
    id: 'food',
    name: 'FOOD',
    bgColor: 'bg-[#9b87f5]',
    subCategories: [
      {
        id: 'appetizers',
        name: 'Appetizers',
        bgColor: 'bg-[#7E69AB]',
        items: [
          {
            id: 'wings',
            name: 'Buffalo Wings',
            price: 12.99,
            description: 'Crispy wings tossed in buffalo sauce'
          },
          {
            id: 'nachos',
            name: 'Loaded Nachos',
            price: 14.99,
            description: 'Tortilla chips with cheese, jalapeños, and guacamole'
          },
          {
            id: 'calamari',
            name: 'Fried Calamari',
            price: 13.99,
            description: 'Served with marinara sauce'
          },
          {
            id: 'bruschetta',
            name: 'Bruschetta',
            price: 9.99,
            description: 'Toasted bread with tomatoes and basil'
          },
          {
            id: 'mozzarella',
            name: 'Mozzarella Sticks',
            price: 8.99,
            description: 'Breaded and fried mozzarella'
          }
        ]
      },
      {
        id: 'salads',
        name: 'Salads',
        bgColor: 'bg-[#6E59A5]',
        items: [
          {
            id: 'caesar',
            name: 'Caesar Salad',
            price: 11.99,
            description: 'Romaine lettuce, croutons, parmesan'
          },
          {
            id: 'greek',
            name: 'Greek Salad',
            price: 12.99,
            description: 'Mixed greens, feta, olives, red onions'
          },
          {
            id: 'cobb',
            name: 'Cobb Salad',
            price: 13.99,
            description: 'Chicken, bacon, eggs, avocado'
          },
          {
            id: 'spinach',
            name: 'Spinach Salad',
            price: 11.99,
            description: 'Baby spinach, strawberries, goat cheese'
          },
          {
            id: 'quinoa',
            name: 'Quinoa Bowl',
            price: 13.99,
            description: 'Quinoa, roasted vegetables, chickpeas'
          }
        ]
      },
      {
        id: 'sandwiches',
        name: 'Sandwiches',
        bgColor: 'bg-[#8B5CF6]',
        items: [
          {
            id: 'club',
            name: 'Club Sandwich',
            price: 13.99,
            description: 'Turkey, bacon, lettuce, tomato'
          },
          {
            id: 'reuben',
            name: 'Reuben',
            price: 14.99,
            description: 'Corned beef, sauerkraut, swiss cheese'
          },
          {
            id: 'grilled-cheese',
            name: 'Grilled Cheese',
            price: 9.99,
            description: 'Cheddar, mozzarella, provolone'
          },
          {
            id: 'philly',
            name: 'Philly Cheesesteak',
            price: 15.99,
            description: 'Sliced beef, onions, peppers, cheese'
          },
          {
            id: 'veggie',
            name: 'Veggie Sandwich',
            price: 11.99,
            description: 'Grilled vegetables, hummus, pesto'
          }
        ]
      }
    ]
  },
  {
    id: 'drinks',
    name: 'DRINKS',
    bgColor: 'bg-[#D946EF]',
    subCategories: [
      {
        id: 'cocktails',
        name: 'Cocktails',
        bgColor: 'bg-[#BE185D]',
        items: [
          {
            id: 'margarita',
            name: 'Margarita',
            price: 9.99,
            description: 'Tequila, lime juice, triple sec'
          },
          {
            id: 'mojito',
            name: 'Mojito',
            price: 8.99,
            description: 'Rum, mint, lime, soda'
          },
          {
            id: 'martini',
            name: 'Martini',
            price: 10.99,
            description: 'Gin or vodka, dry vermouth'
          },
          {
            id: 'moscow-mule',
            name: 'Moscow Mule',
            price: 9.99,
            description: 'Vodka, ginger beer, lime'
          },
          {
            id: 'old-fashioned',
            name: 'Old Fashioned',
            price: 11.99,
            description: 'Bourbon, bitters, sugar'
          }
        ]
      }
    ]
  },
  {
    id: 'fastbar',
    name: 'FAST BAR',
    bgColor: 'bg-[#F97316]',
    subCategories: [
      {
        id: 'quick-bites',
        name: 'Quick Bites',
        bgColor: 'bg-[#EA580C]',
        items: [
          {
            id: 'fries',
            name: 'French Fries',
            price: 4.99,
            description: 'Crispy golden fries'
          },
          {
            id: 'onion-rings',
            name: 'Onion Rings',
            price: 5.99,
            description: 'Beer-battered onion rings'
          },
          {
            id: 'chicken-tenders',
            name: 'Chicken Tenders',
            price: 8.99,
            description: 'Breaded chicken strips'
          },
          {
            id: 'mozzarella-sticks',
            name: 'Mozzarella Sticks',
            price: 6.99,
            description: 'Breaded mozzarella'
          },
          {
            id: 'jalapeno-poppers',
            name: 'Jalapeño Poppers',
            price: 7.99,
            description: 'Stuffed with cream cheese'
          }
        ]
      }
    ]
  }
];