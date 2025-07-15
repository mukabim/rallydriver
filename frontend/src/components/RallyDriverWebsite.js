import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Star, Trophy, Calendar, ExternalLink, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import './RallyDriverWebsite.css';

const RallyDriverWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Sample merchandise data
  const merchandise = [
    {
      id: 1,
      name: "Thunder Racing T-Shirt",
      price: 35,
      image: "https://images.unsplash.com/photo-1710011003023-d708dd0f9ea4",
      category: "t-shirts",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Rally Champion Hoodie",
      price: 65,
      image: "https://images.unsplash.com/photo-1614200474605-f814e8705dab",
      category: "hoodies",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      name: "Thunder 47 Racing Cap",
      price: 25,
      image: "https://images.pexels.com/photos/19263380/pexels-photo-19263380.jpeg",
      category: "caps",
      sizes: ["One Size"]
    },
    {
      id: 4,
      name: "Professional Rally Boots",
      price: 180,
      image: "https://images.pexels.com/photos/6642997/pexels-photo-6642997.png",
      category: "boots",
      sizes: ["40", "41", "42", "43", "44", "45"]
    },
    {
      id: 5,
      name: "Thunder Racing Jacket",
      price: 120,
      image: "https://images.unsplash.com/photo-1721826799930-0e11b539b5bf",
      category: "jackets",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Rally Action Poster",
      price: 15,
      image: "https://images.unsplash.com/photo-1721826801376-f405a23e9011",
      category: "posters",
      sizes: ["A3", "A2", "A1"]
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1721826799849-a1aedf14d442",
    "https://images.unsplash.com/photo-1721826801335-641c9fde6e50",
    "https://images.unsplash.com/photo-1712403869966-bdd9b56dafa6",
    "https://images.unsplash.com/photo-1721826801449-f7b7442d86ba"
  ];

  const sponsors = [
    { name: "Red Bull Racing", logo: "RB", website: "https://www.redbull.com" },
    { name: "Michelin", logo: "M", website: "https://www.michelin.com" },
    { name: "Sparco", logo: "S", website: "https://www.sparco.com" },
    { name: "Pirelli", logo: "P", website: "https://www.pirelli.com" },
    { name: "Brembo", logo: "BR", website: "https://www.brembo.com" },
    { name: "Recaro", logo: "R", website: "https://www.recaro.com" }
  ];

  const addToCart = (product) => {
    setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'shop', 'gallery', 'sponsors', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-red-500">THUNDER</span>
                <span className="text-xl text-white ml-2">47</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'shop', 'gallery', 'sponsors', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      currentSection === item
                        ? 'text-red-500 border-b-2 border-red-500'
                        : 'text-gray-300 hover:text-red-500'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 rounded-full hover:bg-red-500/20 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-red-500/20"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-red-500/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'shop', 'gallery', 'sponsors', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-80 bg-gray-800 z-40 border-l border-red-500/20 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-red-500/20 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {cartItems.length === 0 ? (
                <p className="text-gray-400">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-red-500">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}</span>
                    </div>
                    <button className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-medium transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1574759119724-ef71ad38c64e')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              ALEX <span className="text-red-500">THUNDER</span>
            </h1>
            <div className="text-4xl md:text-6xl font-bold text-red-500 mb-8">#47</div>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              World Rally Championship Driver
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                Discover My Story
              </button>
              <button 
                onClick={() => scrollToSection('shop')}
                className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                Shop Merchandise
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">About <span className="text-red-500">Alex Thunder</span></h2>
              <p className="text-gray-300 mb-6 text-lg">
                Born with racing fuel in my veins, I've been conquering rally stages worldwide for over a decade. 
                From the forests of Finland to the mountains of Monte Carlo, I've pushed limits and broken barriers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Trophy className="h-12 w-12 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-gray-400">Stage Wins</div>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-gray-400">Championships</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-gray-400">Years Racing</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                When I'm not behind the wheel, I'm working with my team to develop the next generation of rally technology 
                and inspiring young drivers to chase their dreams on the track.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg" 
                alt="Alex Thunder"
                className="rounded-lg w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section id="shop" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Official <span className="text-red-500">Merchandise</span></h2>
            <p className="text-gray-300 text-lg">Gear up with authentic Thunder Racing merchandise</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-red-500 text-2xl font-bold mb-4">${product.price}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sizes: {product.sizes.join(', ')}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Racing <span className="text-red-500">Gallery</span></h2>
            <p className="text-gray-300 text-lg">Capturing the thrill of rally racing</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={image} 
                  alt={`Rally action ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section 
        id="sponsors" 
        className="py-20 bg-gray-900 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1721826801287-b03a19d2e3c3')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our <span className="text-red-500">Sponsors</span></h2>
            <p className="text-gray-300 text-lg">Powered by the best in motorsport</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-red-500/20 transition-all duration-300 border border-gray-700 hover:border-red-500">
                  <div className="text-3xl font-bold text-red-500 mb-2">{sponsor.logo}</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{sponsor.name}</div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-500 mx-auto mt-2 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 bg-gray-800 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1721826801166-d71602569c1e')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Get In <span className="text-red-500">Touch</span></h2>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to connect? Whether you're a fan, sponsor, or media, I'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">Monaco, Monte Carlo</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">+377 123 456 789</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">contact@alexthunder47.com</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-red-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-red-500">THUNDER</span>
                <span className="text-xl text-white ml-2">47</span>
              </div>
              <p className="text-gray-400">
                Professional rally driver pushing limits on every stage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('shop')} className="hover:text-red-500 transition-colors">Shop</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-red-500 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Racing</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">WRC Championship</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Race Schedule</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Results</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Alex Thunder Racing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RallyDriverWebsite;