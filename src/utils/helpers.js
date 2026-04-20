export const formatPrice = (price) => {
  if (price === null || price === undefined) return 'R$ 0,00';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export const translateCategory = (category) => {
  const translations = {
    "electronics": "Eletrônicos",
    "jewelery": "Joias",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas",
  };
  return translations[category] || category;
};

export const CATEGORIES = [
  { id: "electronics", label: "Eletrônicos" },
  { id: "jewelery", label: "Joias" },
  { id: "men's clothing", label: "Masculino" },
  { id: "women's clothing", label: "Feminino" },
];
