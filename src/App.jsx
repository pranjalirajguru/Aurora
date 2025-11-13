import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing.jsx";
import AuthPage from "./pages/AuthPage.jsx";

export default function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="aurora-bg min-h-screen text-[#1B003F]">
      <AnimatePresence mode="wait">
        {!showAuth ? (
          <Landing key="landing" onGetStarted={() => setShowAuth(true)} />
        ) : (
          <AuthPage key="auth" onBack={() => setShowAuth(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
