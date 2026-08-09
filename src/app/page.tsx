'use client';

import { NavigationProvider } from '@/lib/navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContent from '@/components/pages/HomeContent';
import DashboardContent from '@/components/pages/DashboardContent';
import ReleaseDeskContent from '@/components/pages/ReleaseDeskContent';
import SpeakOpsContent from '@/components/pages/SpeakOpsContent';
import { useNavigation } from '@/lib/navigation';
import { useState } from 'react';

function AppContent() {
  const { currentPage } = useNavigation();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <AnimatedBackground />
      <Navbar />

      {currentPage === 'home' && <HomeContent />}
      {currentPage === 'dashboard' && <DashboardContent />}
      {currentPage === 'releasedesk' && <ReleaseDeskContent />}
      {currentPage === 'speakops' && <SpeakOpsContent />}

      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
