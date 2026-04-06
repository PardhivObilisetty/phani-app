import { motion } from "framer-motion";
 
function Layout({ children }) {
  return (
    <div className="gradient-bg">

      {/* BLOBS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* HEARTS */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: (5 + Math.random() * 5) + "s"
          }}
        >
          💜
        </span>
      ))}

      <motion.div
  className="card"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>


    </div>
  );
}

export default Layout;
