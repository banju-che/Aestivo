import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../contexts/CartContext";
import { ProductDetails, RelatedProducts } from "../services/ProductServices";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const prod = await ProductDetails(id);
        setProduct(prod);

        // fetch related products
        const relatedRes = await RelatedProducts(prod.category);
        setRelated(relatedRes.results || []);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    getProductData();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.title} added to cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10">Product not found.</p>;

  return (
    <section>
    <div className="p-6 mt-20 max-w-6xl mx-auto bg-[#e9ecef]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[900px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-500 mb-2 capitalize">{product.category}</p>
          <p className="text-2xl text-yellow-600 font-semibold mb-4">
            KSH{parseFloat(product.price).toFixed(2)}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="flex justify-around  my-16 items-center  py-3">
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 ">
              <button
                onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
                className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 text-lg"
              >
                −
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 text-lg"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            
              <button
                onClick={handleAddToCart}
                className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
              >
                Visit Cart
              </button>
          </div>
          

          {/* Reviews Section */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded shadow-sm">
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-600 text-sm mb-1">⭐⭐⭐⭐☆</p>
                <p className="text-gray-700">
                  Beautiful artwork, colors are vibrant. Loved it!
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow-sm">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-600 text-sm mb-1">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-700">
                  Exactly as described. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-2xl mb-6">Related Products</h3>
          <h2 className="text-3xl font-semibold">Explore Related Products</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {related.length > 0 ? (
            related.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white  rounded-lg shadow hover:shadow-lg transition p-3 h-120 flex flex-col relative"
              >
                <div className=" h-90">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded mb-2"
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                </div>
                <div className=" absolute bottom-2">
                  <p className="text-yellow-600">KSH{item.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No related products found.</p>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}
