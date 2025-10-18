import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AllProducts,
  SearchProducts,
  FilterProducts,
  SortProducts,
  AllCategories
} from "../services/ProductServices";
import { FaHeart, FaSearchPlus, FaShoppingBag, FaSearch } from "react-icons/fa";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  // 🔹 Fetch categories once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cat = await AllCategories();
        setCategories(cat || []);
        setError("");
      } catch {
        setError("Failed to load categories. Please try again later.");
      }
    };
    fetchCategories();
  }, []);

  // 🔹 Fetch products (auto-updates on category/sort/price)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        let res;

        if (selectedCategory) {
          res = await FilterProducts(selectedCategory, page);
        }
        
        else if (sortOption) {
          res = await SortProducts(sortOption, page);
        }
        
        else {
          res = await AllProducts(page);
        }

        setProducts(res.results || res);
        setNextPage(res.next);
        setPrevPage(res.previous);
      } 
      
      catch (err) {
        setError("Failed to load products. Please refresh the page or try again later.");
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, sortOption, page]);


  // 🔹 Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");
    try {
      const res = await SearchProducts(searchTerm);
      setProducts(res.results || res);
      if (!res.results?.length) {
        setError("No products match your search query.");
      }
    } catch {
      setError("Search failed. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Handle category filter
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // 🔹 Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // 🔹 Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-600 text-lg animate-pulse">Loading products...</p>
      </div>
    );
  }

  // 🔹 Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] px-4">
        <p className="text-red-600 text-lg font-medium text-center bg-red-50 border border-red-200 rounded-md p-4 w-full sm:w-[400px]">
          {error}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Reload Page
        </button>
      </div>
    );
  }

  // 🔹 Empty state
  if (!products.length) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  // 🔹 Render UI
  return (
    <main className="mt-20 bg-[#e9ecef]">
      {/* Hero Banner */}
      <section className="w-full h-[450px] relative flex items-center justify-center overflow-hidden shadow-md">
        <img
          src="/landingPage/as-sofa-2.jpeg"
          alt="living-room-sofa"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-40 text-white px-4">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide text-black">
            Comfort. Style. Aestivo.
          </h2>
          <p className="text-lg text-gray-800">
            Curated home essentials designed for modern living.
          </p>
        </div>
      </section>

      {/* Main Shop Section */}
      <section className="w-[85%] mx-auto bg-[#e9ecef] flex flex-col lg:flex-row gap-6 p-6 rounded-lg">
        {/* Sidebar */}
        <aside className="w-full lg:w-[20%] bg-white shadow-sm rounded-lg p-4 h-fit">
          <h2 className="font-bold text-lg mb-4 text-[#403d39]">Filter By</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
            <ul>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(cat)}
                  className={`cursor-pointer mb-2 px-2 py-1 rounded ${
                    selectedCategory === cat.name
                      ? "bg-gray-800 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range 
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-green-500"
            />
            <p className="text-sm text-gray-600 mt-1">Up to KSH {priceRange}</p>
          </div> */}
        </aside>

        {/* Products Section */}
        <section className="w-full lg:w-[80%]">
          {/* Search + Sort Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            {/* Search Input */}
            <form
              onSubmit={handleSearch}
              className="w-full sm:w-[60%] flex items-center border border-gray-300 rounded-md overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 flex items-center justify-center"
              >
                <FaSearch className="text-lg" />
              </button>
            </form>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="latest">Latest</option>
                <option value="price_low_high">Price: Low → High</option>
                <option value="price_high_low">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className=" h-150 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-115 flex mt-3 mx-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="text-gray-800 font-semibold">{product.title}</h2>
                      <p className="text-gray-700 mt-1">
                        KSH {parseFloat(product.price).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-around items-center pb-3 text-gray-600">
                      <FaSearchPlus
                        className="cursor-pointer hover:text-green-500"
                        title="Quick View"
                      />
                      <div className="flex flex-col items-center">
                        <FaShoppingBag
                          className="cursor-pointer hover:text-blue-500"
                          title="Add to Cart"
                        />
                        <p className="text-xs">Add to cart</p>
                      </div>
                      <FaHeart
                        className="cursor-pointer hover:text-red-500"
                        title="Add to Wishlist"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              disabled={!prevPage}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className={`px-4 py-2 rounded ${!prevPage ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            >
              Previous
            </button>

            <button
              disabled={!nextPage}
              onClick={() => setPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded ${!nextPage ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            >
              Next
            </button>
          </div>
          
        </section>
      </section>
    </main>
  );
}
