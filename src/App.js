import { useState } from 'react';
import Hero from './components/Hero';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero onOpen={() => setIsOpen(true)} />
      <ReferralModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;