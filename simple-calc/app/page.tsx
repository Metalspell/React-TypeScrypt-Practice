import Calculator from '@/components/Calculator';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Calculator />
    </div>
  );
}
