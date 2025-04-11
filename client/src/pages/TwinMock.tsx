import { Helmet } from 'react-helmet';
import TwinMockSection from '../components/home/TwinMockSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import IntegrationSection from '../components/home/IntegrationSection';
import DemoRequestSection from '../components/home/DemoRequestSection';

export default function TwinMock() {
  return (
    <>
      <Helmet>
        <title>TwinMock™ - AI-Powered Design to Model Platform | Twinverse</title>
        <meta 
          name="description" 
          content="Create lifelike product images with TwinMock™, an AI-powered platform that transforms apparel designs into photorealistic images on diverse models." 
        />
      </Helmet>
      
      <main className="pt-16">
        <TwinMockSection />
        <TestimonialsSection />
        <IntegrationSection />
        <DemoRequestSection />
      </main>
    </>
  );
}