import api from "../api/Axios";

// Fetch all products
export const AllProducts = async (page=1) => {
  try {
    const res = await api.get(`products/?page=${page}`);
    return res.data;
  } catch (error) {
    console.error("Could not fetch products:", error);
  }
};

export const AllCategories = async () => {
  try {
    const res = await api.get('products/categories/'); 
    return res.data;
  } catch (error) {
    console.error('Could not fetch categories', error);
  }
};

// Fetch single product details
export const ProductDetails = async (id) => {
  try {
    const res = await api.get(`products/${id}/`);
    return res.data;
  } catch (error) {
    console.error(`Could not fetch product ${id}:`, error);
  }
};

// Search products by title (or description)
export const SearchProducts = async (query) => {
  try {
    const res = await api.get(`products/?search=${query}`);
    return res.data;
  } catch (error) {
    console.error(`Could not search products with query "${query}"`, error);
  }
};

// ✅ Filter products by category
export const FilterProducts = async (category, page = 1) => {
  try {
    const res = await api.get(`products/?category=${category}&page=${page}`);
    return res.data;
  } catch (error) {
    console.error(`Could not filter products by category "${category}"`, error);
  }
};

// ✅ sort products
export const SortProducts = async (sortOption, page = 1) => {
  try {
    const res = await api.get(`products/?ordering=${sortOption}&page=${page}`);
    return res.data;
  } catch (error) {
    console.error(`Could not sort products by ${sortOption}`, error);
  }
};

//Related products for products.jsx
export const RelatedProducts = async (category) => {
  try{
    const res = await api.get(`products/?category=${category}`);
    return res.data;
  }
  catch(error){
    console.error(`Could not sort products by ${category}`, error);
  }
  
};
